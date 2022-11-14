import React, { useEffect, useCallback } from 'react';

import { useQuery } from '@apollo/client';
import { AiOutlineClose } from 'react-icons/ai';

import { FIND_FOLLOWERS } from '../../graphQL/queries';
import None from '../Global/None';

import FollowersCard from './FollowersCard';
import { FollowersContainer, HeadingContainer, ModalOverlay } from './followersmodal-styles';

const FollowersModal = ({ refetch, id, onClose, modal, alt = false }) => {
  const { data: followersData, refetch: refetch2 } = useQuery(FIND_FOLLOWERS, {
    variables: {
      id,
    },
  });

  //Allows us to close the modal upon pressing the 'Esc' button.

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!modal) {
    return null;
  }

  return (
    <ModalOverlay onClick={() => onClose()}>
      <HeadingContainer>
        <h1
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {alt ? 'Following' : 'Followers'}
        </h1>
        <AiOutlineClose style={{ cursor: 'pointer' }} color="#fff" size="20px" onClick={onClose} />
      </HeadingContainer>
      <FollowersContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {followersData?.findCustomerById[alt ? 'followings' : 'followers']?.data?.map((person, index) => (
          <FollowersCard
            refetch={() => {
              refetch();
              refetch2();
            }}
            key={index}
            person={person}
          />
        ))}
        {followersData?.findCustomerById[alt ? 'followings' : 'followers']?.data?.length == 0 && (
          <None noTop name={`${!alt ? 'Nobody is following you' : "You are'nt following anybody"}.`} />
        )}
      </FollowersContainer>
    </ModalOverlay>
  );
};

export default FollowersModal;
