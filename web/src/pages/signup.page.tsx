import React, { useState, useContext, useEffect } from 'react';

import { gql, useMutation } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiCancel } from 'react-icons/gi';
import { gqlResponder } from 'storejars-react-toolkit';
import styled from 'styled-components';
import * as Yup from 'yup';

import sSignUp from '../../public/sSignUp.jpeg';
import Button from '../components/Button';
import { AUTH_TOKEN } from '../components/constants';
import { AuthContext } from '../context/auth';
import styles from '../styles/signup.module.css';

import {
  BottomContainer,
  ErrorContainer,
  EyeInvisible,
  EyeVisible,
  InnerContainer,
  Left,
  LeftFooterText,
  LinkSignupFooter,
  LoginLogo,
  MainContainer,
  MainText,
  NameContainer,
  Required,
  RequiredContainer,
  Right,
  RightFooterContainer,
  RightFooterTextTwo,
  SignupEmailStyles,
  SignupFooter,
  SignupInnerContainer,
  SignupNameStyles,
  SignupPasswordStyles,
  SigupLink,
  SigupText,
  TopText,
} from './signup-styles';

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const SignupName = styled(FilteredPropsInputField)`
  ${SignupNameStyles}
`;

const SignupEmail = styled(FilteredPropsInputField)`
  ${SignupEmailStyles}
`;

const SignupPassword = styled(FilteredPropsInputField)`
  ${SignupPasswordStyles}
`;

const usernameRegex = /^(?=.{2,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+$/;

const signInSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  email: Yup.string().email().required('email is required'),
  username: Yup.string().required('username is required').matches(usernameRegex, 'username is invalid'),
  password: Yup.string().required('password is required').min(6, 'Password should be 6 characters min'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
};

const SIGNUP_MUTATION = gql`
  mutation CreateCustomer(
    $email: String!
    $username: String!
    $lastName: String!
    $firstName: String!
    $password: String!
  ) {
    createCustomer(
      data: { email: $email, lastName: $lastName, firstName: $firstName, password: $password, username: $username }
    ) {
      customer {
        _id
        email
        firstName
        lastName
      }
      otp {
        userId
        expiresAt
        meta {
          active
          createdAt
        }
      }
      token {
        jwt
        expires
      }
    }
  }
`;

const Signup = () => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.getItem('key');
  }, []);

  useContext(AuthContext);

  const router = useRouter();
  //const dispatch = useDispatch();

  const [createCustomer, { loading, data, error, reset }] = useMutation(SIGNUP_MUTATION, {
    variables: initialValues,
    onCompleted: ({ createCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, createCustomer.token.jwt);
      localStorage.setItem(data, JSON.stringify(createCustomer));

      router.push('/sign-up-steps');
    },
    onError: () => {},
  });

  return (
    <MainContainer>
      <Left>
        <Image src={sSignUp} layout="fill" objectFit="cover" alt="SignUpImage" />
      </Left>
      <Right>
        <InnerContainer>
          <Link href="/">
            <LoginLogo src="/images/logo.png" alt="Logo" />
          </Link>
          <MainText> Hello there! </MainText>
          <TopText>Sign Up</TopText>
          <RequiredContainer>
            <Required>All fields are required to sign up</Required>
          </RequiredContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => {
              setDisable(false);
              createCustomer({ variables: values });
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form style={{ width: '100%' }}>
                  <NameContainer>
                    <SignupInnerContainer>
                      <SignupName
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        id="firstName"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.firstName && !errors.firstName}
                        error={touched.firstName && errors.firstName}
                      />
                      <ErrorMessage name="firstName" component="span" className={styles.error} />
                    </SignupInnerContainer>
                    <SignupInnerContainer>
                      <SignupName
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        id="lastName"
                        autoCapitalize="off"
                        autoCorrect="off"
                        valid={touched.lastName && !errors.lastName}
                        error={touched.lastName && errors.lastName}
                      />
                      <ErrorMessage name="lastName" component="span" className={styles.error} />
                    </SignupInnerContainer>
                  </NameContainer>

                  <div style={{ margin: '0 0 24px 0' }}>
                    <SignupEmail
                      placeholder=" Enter email address"
                      type="email"
                      name="email"
                      id="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                    <ErrorMessage name="email" component="span" className={styles.error} />
                  </div>
                  <div style={{ margin: '0 0 24px 0' }}>
                    <SignupEmail
                      placeholder=" Enter your username"
                      type="username"
                      name="username"
                      id="username"
                      autoCapitalize="off"
                      autoCorrect="off"
                      valid={touched.username && !errors.username}
                      error={touched.username && errors.username}
                    />
                    <ErrorMessage name="username" component="span" className={styles.error} />
                  </div>
                  <div style={{ margin: '0', position: 'relative' }}>
                    <SignupPassword
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
                    <ErrorMessage name="password" component="span" className={styles.error} />
                  </div>
                  {error && (
                    <ErrorContainer active={disable ? false : true}>
                      <GiCancel
                        color="#d8000c"
                        onClick={() => {
                          reset();
                          setDisable(true);
                        }}
                      />
                      <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                    </ErrorContainer>
                  )}
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Sign Up'}
                  </Button>
                </Form>
              );
            }}
          </Formik>
          {/* <HrContainer>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
              <Or>OR</Or>
              <hr style={{ width: '100%', color: '#c2c2c2', margin: '0' }} />
            </HrContainer> */}
          {/* <AltLogin>
              <AltImg src="/images/googleIcon.png" alt="google" />
              <AltText primary={false}>Continue with Google</AltText>
            </AltLogin> */}
          {/* <AltLogin>
              <AltImg src="/images/fbLoginIcon.png" alt="facebook" />
              <AltText primary>Continue with Facebook</AltText>
            </AltLogin> */}
          <BottomContainer>
            <SigupText primary={false}>
              <SigupLink href="/login">Sign in here</SigupLink>,{' '}
              <span style={{ color: '#666670' }}>If you already have an account</span>
            </SigupText>
            <SigupText center primary>
              Signing up, confirms that you’ve read and agreed to HighTable’s{' '}
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
        <SignupFooter>
          <LeftFooterText>© 2021 HighTable, LLC All Rights Reserved</LeftFooterText>
          <RightFooterContainer>
            <LinkSignupFooter href="/terms-of-use">Terms of Service</LinkSignupFooter>
            <LinkSignupFooter href="/promo">Promo T&Cs</LinkSignupFooter>
            <LinkSignupFooter href="/privacy-and-cookies-statement">Privacy Policy</LinkSignupFooter>
            <LinkSignupFooter href="/info">Do Not Sell My Information</LinkSignupFooter>
          </RightFooterContainer>
          <RightFooterTextTwo>© 2021 HighTable, LLC All Rights Reserved</RightFooterTextTwo>
        </SignupFooter>
      </Right>
    </MainContainer>
  );
};

export default Signup;
