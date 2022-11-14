import React, { useState } from 'react';

import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MultiStepForm, Step } from 'react-multi-form';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../components/Button';
import styles from '../styles/signup.module.css';

import {
  BottomText,
  BtnContainer,
  Container,
  EmailContainer,
  EmailImg,
  EyeInvisible,
  EyeVisible,
  Header,
  ImgContainer,
  LoginEmailStyles,
  LoginPasswordStyles,
  Logo,
  NewInputStyles,
  Step1Container,
  Text,
  TopText,
  ResendLink,
} from './forgetpassword-styles';

const ReactPinField = dynamic(() => import('react-pin-field'), { ssr: false });

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const LoginEmail = styled(FilteredPropsInputField)`
  ${LoginEmailStyles}
`;

const NewInput = styled(ReactPinField)`
  ${NewInputStyles}
`;

const LoginPassword = styled(FilteredPropsInputField)`
  ${LoginPasswordStyles}
`;

const FORGOT_PASSWORD_QUERY = gql`
  query customerPasswordReset($email: String!) {
    customerPasswordReset(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation updateCustomerPassword($code: Int!, $password: String!) {
    updateCustomerPassword(data: { code: $code, password: $password }) {
      _id
      email
      firstName
      lastName
    }
  }
`;

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
});

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  email: '',
};

const ForgotPassword = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState<number>(0);
  const [completed, setCompleted] = useState(false);

  const initialValues2 = {
    password: '',
    code: code,
  };

  const router = useRouter();

  const [customerPasswordReset, { loading, data }] = useLazyQuery(FORGOT_PASSWORD_QUERY, {
    variables: initialValues,
    onCompleted: () => {
      setActive(2);
    },
  });

  const [updateCustomerPassword, { loading: loading2 }] = useMutation(RESET_PASSWORD_MUTATION, {
    variables: initialValues2,
    onCompleted: () => {
      setActive(4);
    },
    onError: () => {},
  });

  const handleNext = () => {
    if (active < 3) {
      setActive(active + 1);
    }
  };

  const handleBack = () => {
    if (active > 1) {
      setActive(active - 1);
    } else if (active === 1) {
      router.push('/login');
    }
  };

  return (
    <Container>
      {active === 4 || (
        <ImgContainer>
          <Link href="/">
            <Logo src="/images/logo.png" alt="Logo" />
          </Link>
        </ImgContainer>
      )}
      {active === 4 || <Header>Forgot Password?</Header>}
      <MultiStepForm accentColor="#0F264C" activeStep={active}>
        <Step label="Enter Email">
          <Step1Container>
            <EmailImg src="/images/enterEmail.png" alt="Enter Email" />
            <Text>Please enter your registered email address for a quick password reset </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotPasswordSchema}
              onSubmit={(values) => {
                customerPasswordReset({ variables: values });
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{ width: '100%' }}>
                    <div>
                      <LoginEmail
                        placeholder=" Enter email address"
                        type="email"
                        name="email"
                        id="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="email"
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                      />
                    </div>
                    <ErrorMessage name="email" component="span" className={styles.error} />
                    <Button type="submit" disabled={loading}>
                      {loading ? `Sending...` : `Continue`}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Step1Container>
        </Step>
        <Step label="Confirm Email">
          <EmailContainer>
            <EmailImg src="/images/confirmEmail.png" alt="Confirm Email" />
            <Text>Please enter the code we just sent to {data?.customerPasswordReset.email} </Text>
            <NewInput
              length={6}
              validate={/^[0-9]$/}
              onComplete={(value: string) => {
                setCode(parseInt(value));
                setCompleted(true);
              }}
              onChange={(value: string) => {
                setCode(parseInt(value));
              }}
              format={(k) => k.toUpperCase()}
            />
          </EmailContainer>
        </Step>
        <Step label="Reset Password">
          <EmailContainer>
            <EmailImg src="/images/resetPassword.png" alt="Reset Password" />
            <Text>Please enter a new secure password</Text>
            <Formik
              initialValues={initialValues2}
              validationSchema={resetPasswordSchema}
              onSubmit={(values) => {
                updateCustomerPassword({ variables: { ...values, code } });
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{ width: '100%' }}>
                    <div>
                      <LoginPassword
                        type={show ? 'text' : 'password'}
                        name="password"
                        id="password"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                        placeholder="Enter your Password"
                      />
                      {show ? (
                        <EyeInvisible onClick={() => setShow(false)} />
                      ) : (
                        <EyeVisible onClick={() => setShow(true)} />
                      )}
                    </div>{' '}
                    <ErrorMessage name="email" component="span" className={styles.error} />
                    <Button type="submit" disabled={loading2}>
                      {loading2 ? `Confirming...` : `Confirm new password`}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </EmailContainer>
        </Step>
        <Step label="Success">
          <EmailContainer>
            <TopText>Successful Password Reset </TopText>
            <EmailImg src="/success.png" alt="success" />
            <Text>Congratulations, you&apos;ve successfuly reset your password</Text>
            <Button onClick={() => router.push('/login')}>Proceed to sign in</Button>
          </EmailContainer>
        </Step>
      </MultiStepForm>
      <BtnContainer>
        {active === 1 || active === 4 || active === 3 || (
          <span onClick={handleNext}>
            <Button disabled={!completed}>
              {active === 1 ? 'Continue' : active === 2 ? 'Confirm email' : 'Confirm new password'}
            </Button>
          </span>
        )}
        {active === 4 || (
          <span onClick={handleBack}>
            <Button back>Back</Button>
          </span>
        )}
      </BtnContainer>
      {active === 2 ? (
        <BottomText>
          Didn&apos;t receive confirmation email?
          <ResendLink
            disabled={loading}
            onClick={() => customerPasswordReset({ variables: data?.customerPasswordReset.email })}
          >
            Resend code
          </ResendLink>
        </BottomText>
      ) : null}
    </Container>
  );
};

export default ForgotPassword;
