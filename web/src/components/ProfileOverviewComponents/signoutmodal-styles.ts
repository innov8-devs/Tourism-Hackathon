import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(237, 240, 250, 0.5);
  backdrop-filter: blur(4px);
  z-index: 5;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: #ffffff;
  border: 1px solid #fefefe;
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ModalTitle = styled.h2``;

export const ModalBody = styled.div`
  border-top: #eee;
  border-bottom: #eee;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;

export const ModalButton = styled.button`
  margin: 1px;
  width: 48%;
  height: 50px;
  border: 1px solid #010d1a;
  border-radius: 8px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const SignOutButton = styled(ModalButton)`
  background-color: #ff0000;
  color: #fff;
  &:hover {
    box-shadow: 0px 0px 12px #ff0000;
  }
`;
