import { useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import { Formik, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import { gqlResponder } from 'storejars-react-toolkit';
import styled from 'styled-components';
import * as Yup from 'yup';

import sOnboarding from '../../../public/images/updated.png';
import homes from '../../styles/Home.module.css';
import styles from '../../styles/signup.module.css';
import Button from '../Button';

import {
  Cancel,
  ErrorContainerStyles,
  HeroSection,
  InnerContainer,
  InputContainer,
  LeftHero,
  LoginEmailStyles,
  RightHero,
  SubscribeForm,
  SubTitleText,
  SuccessAlert,
  TitleText,
} from './sub-styles';

function FilteredPropsInputField({ className, value, ...props }) {
  return <Field value={value} className={className} {...props} />;
}

const LoginEmail = styled(FilteredPropsInputField)`
  ${LoginEmailStyles}
`;

const ErrorContainer = styled.div`
  ${ErrorContainerStyles}
`;

const SUBSCRIPTION_MUTATION = gql`
  mutation addToMailingList($email: String!) {
    addToMailingList(email: $email) {
      id
      email
      status
    }
  }
`;

const subscriptionSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required'),
});

const initialValues = {
  email: null,
};

const Sub = () => {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);

  const [addToMailingList, { loading, error, reset }] = useMutation(SUBSCRIPTION_MUTATION, {
    variables: initialValues,
    onCompleted: () => {
      setSuccess(true);
    },
    onError: () => {},
  });

  return (
    <HeroSection>
      <LeftHero>
        <InnerContainer>
          <TitleText>Stay Updated</TitleText>
          <SubTitleText>Stay updated with our regular developments and special offers.</SubTitleText>
          <Formik
            initialValues={initialValues}
            validationSchema={subscriptionSchema}
            onSubmit={(values) => {
              addToMailingList({ variables: values });
              setDisable(false);
            }}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
                <>
                  <SubscribeForm onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <InputContainer>
                      <LoginEmail
                        type="email"
                        name="email"
                        id="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="email"
                        valid={touched.email && !errors.email}
                        error={touched.email && errors.email}
                      />
                      <>
                        <ErrorMessage name="email">{(msg) => <span className={styles.error}>{msg}</span>}</ErrorMessage>
                      </>
                    </InputContainer>
                    {success && (
                      <SuccessAlert>
                        <Cancel
                          onClick={() => {
                            reset();
                            setSuccess(false);
                          }}
                        />
                        <p>Subscribed</p>
                      </SuccessAlert>
                    )}
                    {error && (
                      <ErrorContainer active={disable ? false : true}>
                        <Cancel
                          color="#d8000c"
                          className={styles.cancel}
                          onClick={() => {
                            reset();
                            setDisable(true);
                          }}
                        />
                        <p>
                          Sorry,{' '}
                          {gqlResponder(
                            // error, Bugsnag
                            'this email has been subscribed',
                          )}
                        </p>
                      </ErrorContainer>
                    )}
                    <Button style={{ margin: '0px' }} small type="submit" disabled={loading}>
                      {loading ? `subscribing...` : `Subscribe`}
                    </Button>
                  </SubscribeForm>
                </>
              );
            }}
          </Formik>
        </InnerContainer>
      </LeftHero>
      <RightHero style={{ minHeight: '384px' }}>
        <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className={homes.rightImagesContainer}>
          <Image placeholder="blur" layout="fill" className={homes.heroImage2} src={sOnboarding} alt="heroImage" />
        </div>
      </RightHero>
    </HeroSection>
  );
};

export default Sub;
