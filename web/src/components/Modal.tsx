import React from 'react';

import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  showModal: boolean;
  closeModal: Function;
  absolute?: boolean;
};

type ModalProps = {
  absolute?: boolean;
};

const ModalContainer = styled.div<ModalProps>`
  position: ${(props) => (props.absolute ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  transition: 3s;
  z-index: 20;
`;

const Modal: React.FC<Props> = ({ children, showModal, closeModal, absolute }) => {
  if (!showModal) {
    return null;
  }
  return (
    <ModalContainer absolute={absolute} onClick={() => closeModal()}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
