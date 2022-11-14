import React, { useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { GiCancel } from 'react-icons/gi';
import { gqlResponder } from 'storejars-react-toolkit';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../components/Button';
import {
  BottomContainer,
  ErrorContainer,
  EyeInvisible,
  EyeVisible,
  ForgotPassword,
  InnerContainer,
  SigupLink,
  SigupText,
  TopText,
  LoginPasswordStyles,
  LoginEmailStyles,
} from '../pages/login-styles';
import styles from '../styles/signup.module.css';

import { AUTH_TOKEN, USER_DATA } from './constants';

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const LoginEmail = styled(FilteredPropsInputField)`
  ${LoginEmailStyles}
`;

const LoginPassword = styled(FilteredPropsInputField)`
  ${LoginPasswordStyles}
`;

const logInSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  email: '',
  password: '',
};

const LOGIN_MUTATION = gql`
  mutation LogInCustomer($email: String!, $password: String!) {
    loginCustomer(data: { email: $email, password: $password }) {
      jwt
      expires
    }
  }
`;

const LoginComponent = () => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);

  const [logInCustomer, { error, reset }] = useMutation(LOGIN_MUTATION, {
    variables: initialValues,
    onCompleted: ({ loginCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, loginCustomer.jwt);
      localStorage.setItem(USER_DATA, JSON.stringify(loginCustomer));
    },
    onError: () => {},
  });

  return (
    <InnerContainer>
      <TopText style={{ fontSize: '14px' }}>Log in to your Account or Signup To complete Payment</TopText>
      <Formik
        initialValues={initialValues}
        validationSchema={logInSchema}
        onSubmit={(values, actions) => {
          setDisable(false);
          logInCustomer({ variables: values });
          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);
            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form style={{ width: '100%' }}>
              <div style={{ margin: '0 0 25px 0' }}>
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
                <ErrorMessage name="email" component="span" className={styles.error} />
              </div>
              <div style={{ position: 'relative' }}>
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
                {show ? <EyeInvisible onClick={() => setShow(false)} /> : <EyeVisible onClick={() => setShow(true)} />}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2px 4px',
                }}
              >
                <ErrorMessage name="password" component="span" className={styles.error} />
                <ForgotPassword href="/forgot-password">Forgot password?</ForgotPassword>
              </div>
              {error && (
                <ErrorContainer active={disable ? false : true}>
                  <GiCancel
                    color="#d8000c"
                    className={styles.cancel}
                    onClick={() => {
                      reset();
                      setDisable(true);
                    }}
                  />
                  <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                </ErrorContainer>
              )}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? `Logging in...` : `Log in`}
              </Button>
            </Form>
          );
        }}
      </Formik>

      <BottomContainer>
        <SigupText primary={false}>
          <SigupLink href="/signup">Sign up here</SigupLink>,{' '}
          <span style={{ color: '#666670' }}>If you do not have an account</span>
        </SigupText>
        <SigupText center primary>
          Signing up, confirms that you have read and agreed to HighTable’s{' '}
          <span style={{ color: '#FF9916' }}>
            <a href="/terms-of-use">Terms of Use</a>
          </span>{' '}
          and{' '}
          <span style={{ color: '#FF9916' }}>
            <a href="/privacy-and-cookies-statement">Privacy and Policy Statement.</a>
          </span>
        </SigupText>
      </BottomContainer>
    </InnerContainer>
  );
};

export default LoginComponent;
