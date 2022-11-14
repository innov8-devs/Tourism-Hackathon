import React, { useEffect, useCallback } from 'react';

import Button from '../Button';

import {
  ButtonWrapper,
  ModalBody,
  ModalButton,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './deleteaccountdatamodal-styles';

const DeleteAccountDataModal = (props) => {
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

  if (!props.showDeleteAccModal) {
    return null;
  }

  return (
    <div className="ProfileModal">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <ModalTitle> Are you sure you want to delete your Hightable data?</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalDescription> This action is irreversible </ModalDescription>
          </ModalBody>
          <ModalFooter>
            <ButtonWrapper>
              <Button small criticalAction>
                {' '}
                Delete My Account{' '}
              </Button>
            </ButtonWrapper>
            <ModalButton onClick={props.onClose}> Cancel </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
};

export default DeleteAccountDataModal;
