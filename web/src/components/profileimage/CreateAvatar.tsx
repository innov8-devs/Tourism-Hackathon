import React, { useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import Avatar from 'react-avatar-edit';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
//import { profile } from '../../redux/userSlice';
import Spinner from '../Spinner';

type AvatarProps = {
  image: string;
  editable: boolean;
};

type PreviewContainerProps = {
  flexDirection: string;
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props: PreviewContainerProps) => (props.flexDirection === 'column' ? '100%' : 'unset')};
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  margin: 0 10px;
  text-align: center;
  &:hover {
    background: #0f264c;
    color: #f8f8f8;
  }
`;

const CancelIcon = styled.button`
  position: absolute;
  background: #ff9916;
  top: -1px;
  right: -10px;
  border: none;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 24px;
  text-decoration: italic;
  font-weight: 800;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  text-align: center;
  &:hover {
    background: #f8f8f8;
    color: #0f264c;
  }
`;

const AvatarCon = styled.div<AvatarProps>`
  height: '150px';
  overflow: 'scroll';
  display: ${(props) => (!props.editable ? 'block' : 'none')};
`;

const PreviewContainer = styled.div<PreviewContainerProps>`
  border: 1px solid #ff9916;
  width: ${(props) => (props.flexDirection === 'column' ? '150px' : '100px')};
  height: ${(props) => (props.flexDirection === 'column' ? '150px' : '100px')};
  border-radius: 50%;
  position: relative;
  align-self: ${(props) => (props.flexDirection === 'column' ? 'unset' : 'flex-start')};
`;

const UPDATE_CUSTOMER_PROFILE_PICTURE = gql`
  mutation updateCustomerProfilePicture($ImageURL: String!) {
    updateCustomer(data: { profileImage: $ImageURL }) {
      _id
      profileImage
    }
  }
`;

const CreateAvatar = ({ getData, flexDirection }) => {
  const [preview, setPreview] = useState('');
  const [Edit, setEdit] = useState(false);

  const toast = useToast();

  const [UploadProfilePicture, { loading }] = useMutation(UPDATE_CUSTOMER_PROFILE_PICTURE, {
    variables: {
      ImageURL: preview,
    },
    onCompleted: (data) => {
      toast({ status: 'success', title: 'Profile Picture Updated Successfully' });
      getData(false, data?.updateCustomer.profileImage);
    },
    onError: (error) => {
      toast({ status: 'error', title: error.message });
    },
  });

  const onCrop = (defaultPreview) => {
    setPreview(defaultPreview);
  };

  const onClose = () => {
    setPreview('');
  };

  const onBeforeFileLoad = () => {
    setEdit(true);
  };

  const onSelectPic = () => {
    UploadProfilePicture({
      variables: {
        ImageURL: preview,
      },
    });
  };

  const onCancelSelect = () => {
    getData(false, '');
  };

  return (
    <>
      <AvatarCon editable={Edit} image={preview}>
        <Avatar
          imageWidth={150}
          width={350}
          height={flexDirection === 'row-reverse' ? 132 : 150}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          label="Click this space to choose a picture"
        />
      </AvatarCon>
      <PreviewContainer flexDirection={flexDirection}>
        {preview && (
          <Image
            alt="preview"
            src={preview}
            width="100"
            height="100"
            className="rounded-circle"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </PreviewContainer>
      {preview && (
        <Flex flexDirection={flexDirection}>
          <div>
            <Button
              type="button"
              style={{
                background: '#0f264c',
              }}
              onClick={() => setEdit((prev) => !prev)}
            >
              Edit Image
            </Button>
          </div>
          <div className="col-6">
            <Button
              type="button"
              onClick={onSelectPic}
              disabled={!preview}
              style={{
                background: '#FF9916',
              }}
            >
              {loading ? <Spinner /> : 'Finish'}
            </Button>
          </div>
        </Flex>
      )}
      <CancelIcon onClick={onCancelSelect}>X</CancelIcon>
    </>
  );
};

export default CreateAvatar;
