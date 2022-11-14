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
  background: rgba(33, 33, 33, 0.76);
  backdrop-filter: blur(15px);
  z-index: 200;
  transition: 3s;
`;

export const HeadingContainer = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin-bottom: 10px;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 100%;
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 820px) {
    width: 95%;
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 780px) {
    width: 400px;
    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 410px) {
    width: 95%;
  }
`;

export const FollowersContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 800px;
  height: 600px;
  overflow-y: scroll;
  padding: 1vw;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 780px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 95%;
  }
`;
