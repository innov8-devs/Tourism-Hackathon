import React, { useState, useEffect, useCallback } from 'react';

import { gql, useMutation } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import { gqlResponder } from 'storejars-react-toolkit';
import styled from 'styled-components';
import * as Yup from 'yup';

import styles from '../../styles/signup.module.css';
import Button from '../Button';
import { AUTH_TOKEN, USER_DATA } from '../constants';

import {
  BottomContainer,
  ErrorContainerStyles,
  EyeInvisible,
  EyeVisible,
  ForgotPassword,
  InnerContainer,
  LoginEmailStyles,
  LoginLogo,
  LoginPasswordStyles,
  ModalOverlay,
  SigupLink,
  SigupTextStyles,
  TopText,
} from './loginmodal-styles';

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const LoginEmail = styled(FilteredPropsInputField)`
  ${LoginEmailStyles}
`;

const LoginPassword = styled(FilteredPropsInputField)`
  ${LoginPasswordStyles}
`;

const SigupText = styled.span`
  ${SigupTextStyles}
`;

const ErrorContainer = styled.div`
  ${ErrorContainerStyles}
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

const LoginModal = (props) => {
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);

  //Allows us to close the modal upon pressing the 'Esc' button.
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
      }
    },
    [props],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  const [logInCustomer, { loading, error, reset }] = useMutation(LOGIN_MUTATION, {
    variables: initialValues,
    onCompleted: ({ loginCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, loginCustomer.jwt);
      localStorage.setItem(USER_DATA, JSON.stringify(loginCustomer));
      props.onClose();
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

  if (!props.modal) {
    return null;
  }

  return (
    <ModalOverlay
      onClick={() => {
        props.onClose();
      }}
    >
      <InnerContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.innerContainer}
      >
        <AiOutlineClose className={styles.modalClose} onClick={props.onClose} />
        <Link href="/" passHref>
          <LoginLogo src="/images/logo.png" alt="Logo" />
        </Link>{' '}
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
            }, 3000);
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
                  {loading ? `Logging in...` : `Log in`}
                </Button>
              </Form>
            );
          }}
        </Formik>
        <BottomContainer>
          <SigupText primary={false}>
            <SigupLink href="/signup">Sign up here</SigupLink>,{' '}
            <span style={{ color: '#666670' }}>If you don&apos;t have an account</span>
          </SigupText>
          <SigupText center primary>
            Signing up, confirms that you&apos;ve read and agreed to HighTable&apos;s{' '}
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
    </ModalOverlay>
  );
};

export default LoginModal;
