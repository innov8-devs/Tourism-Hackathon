import React from 'react';

import { gql, useQuery } from '@apollo/client';
import { faUserAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { FaUserEdit } from 'react-icons/fa';
import styled from 'styled-components';

const FIND_CUSTOMER = gql`
  query findOneCustomer($firstName: String, $lastName: String) {
    findOneCustomer(data: { firstName: $firstName, lastName: $lastName }) {
      email
      firstName
      lastName
      username
    }
  }
`;

const Button = styled.button`
  position: relative;
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  color: #b3b3b3;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  width: 120px;
  height: 120px;
  &:hover {
    background: #e6e6e6;
    color: #0f264c;
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

const EditableIcon = styled(FaUserEdit)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: currentColor;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f8f8f8;
  }
`;

const ProfilePhoto = ({ getData, imageSrc, show, setShow }) => {
  //const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setShow(true);
    getData(true, imageSrc);
  };

  const deletePic = () => {
    setShow(false);
    getData(false, '');
  };

  useQuery(FIND_CUSTOMER, {
    fetchPolicy: 'network-only',
  });

  return (
    <div
      style={{
        opacity: 100,
        zIndex: 100,
        width: '100%',
      }}
    >
      <Button type="button" onClick={handleToggleClick} disabled={show && imageSrc}>
        {!imageSrc && <FontAwesomeIcon icon={faUserAlt} color="white" size="3x" />}
        {!show && imageSrc && (
          <Image alt="profile" src={imageSrc} className="rounded-circle" layout="fill" width="100%" />
        )}
        <EditableIcon />
      </Button>
      {show && imageSrc && (
        <button
          type="button"
          style={{
            position: 'absolute',
            left: '-10%',
            top: '6%',
            padding: '0 7px',
            background: 'none',
            border: 'none',
          }}
          onClick={deletePic}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            color="red"
            size="xs"
            style={{
              fontSize: '20px',
              marginBottom: '0.1rem',
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ProfilePhoto;
