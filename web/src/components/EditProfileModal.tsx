import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useToast } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import dynamic from 'next/dynamic';
import { GiCancel } from 'react-icons/gi';
import { gqlResponder } from 'storejars-react-toolkit';
import styled from 'styled-components';
import * as Yup from 'yup';

import Button from '../components/Button';
import { FIND_ONE_CUSTOMER, UPDATEPROFILE_MUTATION } from '../graphQL/queries';
import {
  ButtonContainer,
  DpSkeleton,
  EditProfileDataForm,
  EditProfileDataLabel,
  ErrorContainer,
  InputFieldStyles,
  InputFieldTextAreaStyles,
  Portal,
  ProfileContainer,
  ProfilePhotoDetailsContainer,
  ProfilePhotoTitle,
  RightContentTitle,
  SocialsContainer,
  SocialStyles,
} from '../pages/profileoverview-styles';
import styles from '../styles/signup.module.css';

import Modal2 from './Modal';

function FilteredPropsInputField({ className, ...props }) {
  return <Field className={className} {...props} />;
}

const InputField = styled(FilteredPropsInputField)`
  ${InputFieldStyles}
`;

const Social = styled(InputField)`
  ${SocialStyles}
`;
const InputFieldTextArea = styled(InputField)`
  ${InputFieldTextAreaStyles}
`;

// const UPLOAD_DISPLAY_PHOTO = gql`
//   mutation uploadImage($name: String!, $image: Upload!, $location: String!) {
//     uploadImage(data: { name: $name, image: $image, location: $location }) {
//       url
//     }
//   }
// `;

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required').nullable(),
  firstName: Yup.string().required('FirstName is required').nullable(),
  lastName: Yup.string().required('LastName is required').nullable(),
  address: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').nullable(),
  instagram: Yup.string().url('Enter correct url!').nullable(),
  twitter: Yup.string().url('Enter correct url!').nullable(),
  about: Yup.string().max(160, 'maximum of 160 characters').nullable(),
});

const Avatar = dynamic(() => import('../components/profileimage/Avatar'), {
  ssr: false,
});

const EditProfileModal = ({ isOpen, onClose }) => {
  const [disable, setDisable] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const toast = useToast();

  // const [uploadImage] = useMutation(UPLOAD_DISPLAY_PHOTO, {
  //   onCompleted: () => {},
  //   onError: () => {},
  // });

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   uploadImage({ variables: { name: file.name, location: '/images', image: file } });
  // };

  const handleShowAvatar = (value: boolean) => {
    if (value !== undefined) {
      setShowUpdateModal(value);
      return null;
    }
    setShowUpdateModal((prevState) => !prevState);
  };

  const {
    loading,
    data: findCustomerData,
    error,
    refetch,
  } = useQuery(FIND_ONE_CUSTOMER, {
    fetchPolicy: 'network-only',
  });

  const initialValues = {
    firstName: findCustomerData && findCustomerData?.findOneCustomer?.firstName,
    lastName: findCustomerData && findCustomerData?.findOneCustomer?.lastName,
    username: findCustomerData && findCustomerData?.findOneCustomer?.username,
    instagram: findCustomerData ? findCustomerData?.findOneCustomer?.instagram : 'https://www.instagram.com/',
    twitter: findCustomerData ? findCustomerData?.findOneCustomer?.twitter : 'https://www.twitter.com/',
    address: findCustomerData && findCustomerData?.findOneCustomer?.address,
    about: findCustomerData && findCustomerData?.findOneCustomer?.about,
    telephone: findCustomerData && findCustomerData?.findOneCustomer?.telephone,
  };

  const [updateCustomer, updateCustomerMeta] = useMutation(UPDATEPROFILE_MUTATION, {
    variables: initialValues,
    onCompleted: () => {
      toast({ title: 'Profile updated successfully!', status: 'success', duration: 3000 });
    },
    onError: (error) => {
      toast({ title: `${error.message}, Please try again later`, status: 'error', duration: 3000 });
    },
  });

  useEffect(() => {
    if (!showUpdateModal) {
      refetch();
    }
  }, [refetch, showUpdateModal]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <RightContentTitle> Profile Overview </RightContentTitle>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={schema}
            validate={(values) => {
              if (values.instagram?.length > 0 && !values.instagram.includes('https://www.instagram.com/')) {
                values.instagram = `https://www.instagram.com/${values.instagram}`;
              }
              if (values.twitter?.length > 0 && !values.twitter.includes('https://www.twitter.com/')) {
                values.twitter = `https://www.twitter.com/${values.twitter}`;
              }
              if (values.username?.length > 0 && !values.username.includes('@')) {
                values.username = `${values.username}`;
              }
              if (values.instagram?.length === 0) {
                values.instagram = 'https://www.instagram.com/';
              }
              if (values.twitter?.length === 0) {
                values.twitter = 'https://www.twitter.com/';
              }
            }}
            onSubmit={(values) => {
              const updatedProfile = {
                ...values,
                address: values.address === null ? undefined : values.address,
                about: values.about === null ? undefined : values.about,
                instagram: values.instagram === null ? undefined : values.instagram,
                twitter: values.twitter === null ? undefined : values.twitter,
              };
              updateCustomer({ variables: updatedProfile });
              onClose();
            }}
          >
            {(touched, errors) => (
              <>
                <ProfilePhotoDetailsContainer>
                  <ProfilePhotoTitle> Profile Photo </ProfilePhotoTitle>
                  <ProfileContainer>
                    {loading || error ? (
                      <DpSkeleton></DpSkeleton>
                    ) : (
                      // <Image src={guy} width={120} height={120} className={styles.profileImage} alt="profile picture" />
                      <Avatar
                        customerImage={findCustomerData?.findOneCustomer.profileImage}
                        show={showUpdateModal}
                        setShow={handleShowAvatar}
                        flexDirection="row-reverse"
                      />
                    )}
                    <Modal2 absolute={true} showModal={showUpdateModal} closeModal={handleShowAvatar}>
                      <Portal id="createAvatarDiv" />
                    </Modal2>
                  </ProfileContainer>
                </ProfilePhotoDetailsContainer>
                <EditProfileDataForm>
                  <Form>
                    <EditProfileDataLabel>First Name</EditProfileDataLabel>
                    <InputField
                      name="firstName"
                      id="firstName"
                      type="firstName"
                      autoComplete="firstName"
                      valid={touched.firstName && !errors.firstName}
                      error={touched.firstName && errors.firstName}
                    />
                    <ErrorMessage name="firstName" component="span" className={styles.error} />
                    <EditProfileDataLabel>Last Name</EditProfileDataLabel>
                    <InputField
                      name="lastName"
                      id="lastName"
                      type="lastName"
                      autoComplete="lastName"
                      valid={touched.lastName && !errors.lastName}
                      error={touched.lastName && errors.lastName}
                    />
                    <ErrorMessage name="lastName" component="span" className={styles.error} />

                    <EditProfileDataLabel>Username</EditProfileDataLabel>
                    <InputField
                      name="username"
                      id="username"
                      type="username"
                      placeholder="@freeGuy2022"
                      autoComplete="username"
                      valid={touched.username && !errors.username}
                      error={touched.username && errors.username}
                    />
                    <ErrorMessage name="username" component="span" className={styles.error} />

                    <EditProfileDataLabel>Telephone</EditProfileDataLabel>
                    <InputField
                      name="telephone"
                      id="telephone"
                      type="telephone"
                      placeholder="+1963289323"
                      autoComplete="telephone"
                      valid={touched.telephone && !errors.telephone}
                      error={touched.telephone && errors.telephone}
                    />
                    <ErrorMessage name="telephone" component="span" className={styles.error} />

                    <SocialsContainer>
                      <div style={{ width: '49%' }}>
                        <EditProfileDataLabel>Instagram</EditProfileDataLabel>
                        <Social
                          name="instagram"
                          id="instagram"
                          type="text"
                          placeholder="https://www.instagram.com/john_doe"
                          autoComplete="instagram"
                          valid={touched.instagram && !errors.instagram}
                          error={touched.instagram && errors.instagram}
                        />
                        <ErrorMessage name="instagram" component="span" className={styles.error} />
                      </div>
                      <div style={{ width: '49%' }}>
                        <EditProfileDataLabel>Twitter</EditProfileDataLabel>
                        <Social
                          name="twitter"
                          id="twitter"
                          type="text"
                          placeholder="https://www.twitter.com/john_doe"
                          autoComplete="twitter"
                          valid={touched.twitter && !errors.twitter}
                          error={touched.twitter && errors.twitter}
                        />
                        <ErrorMessage name="twitter" component="span" className={styles.error} />
                      </div>
                    </SocialsContainer>
                    <EditProfileDataLabel>Address</EditProfileDataLabel>
                    <InputField name="address" id="address" type="address" placeholder="" autoComplete="address" />

                    <EditProfileDataLabel>About</EditProfileDataLabel>
                    <InputFieldTextArea
                      name="about"
                      id="about"
                      type="text"
                      placeholder="maximum of 160 characters"
                      valid={touched.about && !errors.about}
                      error={touched.about && errors.about}
                    />
                    <ErrorMessage name="about" component="span" className={styles.error} />

                    {error ? (
                      <ErrorContainer active={disable ? false : true}>
                        <GiCancel
                          style={{ marginRight: '10px', cursor: 'pointer', fontSize: '25px', color: '#d8000c' }}
                          onClick={() => {
                            // reset();
                            setDisable(true);
                          }}
                        />
                        <p>Sorry, {gqlResponder(error, Bugsnag)}</p>
                      </ErrorContainer>
                    ) : updateCustomerMeta.error ? (
                      <ErrorContainer active={disable ? false : true}>
                        <GiCancel
                          style={{ marginRight: '10px', cursor: 'pointer', fontSize: '25px', color: '#d8000c' }}
                          onClick={() => {
                            // reset();
                            setDisable(true);
                          }}
                        />
                        <p>Sorry, {gqlResponder(updateCustomerMeta.error, Bugsnag)}</p>
                      </ErrorContainer>
                    ) : null}
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
                    <ButtonContainer diff>
                      <Button type="submit" small disabled={updateCustomerMeta.loading}>
                        {updateCustomerMeta.loading ? `Updating...` : `Update Profile`}
                      </Button>
                    </ButtonContainer>
                    {/* </div> */}
                  </Form>
                </EditProfileDataForm>
              </>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
