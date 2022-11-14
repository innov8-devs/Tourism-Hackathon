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

export const ModalTitle = styled.h2`
  font-size: 24px;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;

export const ModalBody = styled.div`
  background: #f5f5f5;
`;

export const ModalDescription = styled.span`
  padding: 4px;
`;

export const ModalFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly:
`;

export const ModalButton = styled.button`
  margin: 1px;
  height: 50px;
  width: 48%;
  border: 1px solid #010d1a;
  border-radius: 8px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 415px) {
    margin: 12px 0px;
    height: 40px;
    width: 130px;
    font-size: 12px;
`;

export const ButtonWrapper = styled.div`
  width: 48%;
`;
