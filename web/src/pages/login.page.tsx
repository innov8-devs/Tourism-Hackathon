import React, { useEffect, useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GiCancel } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { gqlResponder } from 'storejars-react-toolkit';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import * as Yup from 'yup';

import sLogin from '../../public/sLogin.jpg';
import Button from '../components/Button';
import { AUTH_TOKEN, USER_DATA } from '../components/constants';
import config from '../config';
import styles from '../styles/signup.module.css';

import {
  BottomContainer,
  ErrorContainer,
  EyeInvisible,
  EyeVisible,
  ForgotPassword,
  InnerContainer,
  Left,
  LeftFooterText,
  LeftFooterTextTwo,
  LinkLoginFooter,
  LoginEmailStyles,
  LoginFooter,
  LoginLogo,
  LoginPasswordStyles,
  MainContainer,
  MainText,
  Right,
  RightFooterContainer,
  SigupLink,
  SigupText,
  TopText,
} from './login-styles';

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const LoginEmail = styled(FilteredPropsInputField)`
  ${LoginEmailStyles}
`;

const LoginPassword = styled(FilteredPropsInputField)`
  ${LoginPasswordStyles}
`;
toast.configure();

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
const LOGIN_WITH_GOOGLE_MUTATION = gql`
  mutation loginCustomerGoogle($token: String!) {
    loginCustomerGoogle(data: { token: $token }) {
      jwt
      expires
    }
  }
`;

const Login = (props) => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const redirectPath = props.router.query.redirect || '/';

  const [logInCustomer, { error, reset }] = useMutation(LOGIN_MUTATION, {
    variables: initialValues,
    onCompleted: ({ loginCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, loginCustomer.jwt);
      localStorage.setItem(USER_DATA, JSON.stringify(loginCustomer));

      setTimeout(() => {
        router.push(redirectPath);
      }, 1000);
    },
    onError: () => {},
  });

  let errorMessage: string | undefined;
  if (error) {
    if (error.networkError && !window.navigator.onLine) {
      errorMessage = 'Sorry your browser is offline';
    } else if (error.graphQLErrors) {
      // eslint-disable-next-line no-unused-vars
      errorMessage = "Sorry, we couldn't find an account with that email and password";
    }
  }

  const responseFacebook = () => {
    // console.log('response:', response);
  };
  const [loginCustomerGoogle] = useMutation(LOGIN_WITH_GOOGLE_MUTATION);

  useEffect((): void => {
    // 1) Initialize our google client
    window.google.accounts.id.initialize({
      client_id: config.socialLogin.GOOGLE_CLIENT_ID,
      callback: (response): void => {
        loginCustomerGoogle({
          variables: {
            token: response.credential,
          },
          onCompleted: ({ loginCustomerGoogle }): void => {
            localStorage.setItem(AUTH_TOKEN, loginCustomerGoogle.jwt);
            // localStorage.setItem(USER_DATA, JSON.stringify(loginCustomerGoogle));
            router.push('/');
            // setTimeout(() => {
            //   return toast.success('Congratulation!, You logged in successfully');
            // }, 4000);
          },
          onError: (): void => {
            toast.error('Something went wrong with the "Google sign In" process');
          },
        });
      },
    });

    // 2) The div with our created google client
    window.google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'medium',
      text: 'continue_with',
      shape: 'circle',
      width: '260',
    });

    // 3) Prompt for recently logged in account by the same client
    // [NOTE]: Only show it if there is no signed in user!!
    if (localStorage.getItem(USER_DATA) !== undefined) {
      window.google.accounts.id.prompt();
    }
  }, []);

  return (
    <MainContainer>
      <Left>
        <Image src={sLogin} layout="fill" objectFit="cover" alt="Login Image" />
      </Left>
      <Right>
        <InnerContainer>
          <Link href="/" passHref>
            <LoginLogo src="/images/logo.png" alt="Logo" />
          </Link>
          <MainText> Welcome Back </MainText>
          <TopText>Log on to your HighTable</TopText>
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
                    {show ? (
                      <EyeInvisible onClick={() => setShow(false)} />
                    ) : (
                      <EyeVisible onClick={() => setShow(true)} />
                    )}
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
            <div id="signInDiv"></div>

            <FacebookLogin
              appId="1768216883558972"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <div
                  style={{
                    margin: '5px',
                  }}
                >
                  <button
                    style={{
                      fontWeight: '500',
                      fontSize: '10px',
                      height: '40px',
                      width: '260px',
                      border: '2px solid #e7e7e7',
                      borderRadius: '30px',
                      background: 'white',
                    }}
                    onClick={renderProps.onClick}
                  >
                    <Image src="/images/facebook.png" width={'15px'} height={'15px'} alt="Login with facebook" />
                    <span
                      style={{
                        padding: '5px',
                        marginBottom: '10px',
                      }}
                    >
                      Continue with Facebook
                    </span>
                  </button>
                </div>
              )}
              cssClasss="facebookLogin"
            />

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
        <LoginFooter>
          <LeftFooterText>© 2021 HighTable, LLC All Rights Reserved</LeftFooterText>
          <RightFooterContainer>
            <LinkLoginFooter href="/terms-of-use">Terms of Service</LinkLoginFooter>
            <LinkLoginFooter href="/promo">Promo T&Cs</LinkLoginFooter>
            <LinkLoginFooter href="/privacy-and-cookies-statement">Privacy Policy</LinkLoginFooter>
            <LinkLoginFooter href="/info">Do Not Sell My Information</LinkLoginFooter>
          </RightFooterContainer>
          <LeftFooterTextTwo>© 2021 HighTable, LLC All Rights Reserved</LeftFooterTextTwo>
        </LoginFooter>
      </Right>
    </MainContainer>
  );
};

export default withRouter(Login);
