import React, { useEffect, useCallback } from 'react';

import { useRouter } from 'next/router';

import { AUTH_TOKEN, USER_DATA } from '../constants';

import {
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  SignOutButton,
} from './signoutmodal-styles';

const SignOutModal = (props) => {
  const router = useRouter();

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

  if (!props.show) {
    return null;
  }

  return (
    <div className="signOutModal">
      <ModalOverlay
        onClick={() => {
          props.onClose();
        }}
      >
        <ModalContent
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ModalHeader>
            <ModalTitle> Are you sure you want to sign out</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <ModalButton onClick={props.onClose}> Cancel </ModalButton>
            <SignOutButton
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                localStorage.removeItem(USER_DATA);
                router.push('/login');
              }}
            >
              {' '}
              Sign Out
            </SignOutButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
};

export default SignOutModal;
