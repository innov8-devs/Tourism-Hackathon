import styled from 'styled-components';

export const PhotoContainer = styled.div`
  margin: 40px 0 0 0;
  padding: 20px;
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
  @media (min-width: 500px) {
    height: 790px;
    overflow-y: scroll;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 20px;
`;

export const ErrorBox = styled.div<{ type: string }>`
  width: 50%;
  height: 300px;
  background: ${(props) => (props.type === 'error' ? 'rgba(254, 132, 132, 0.2)' : 'rgba(240,248,255,1)')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ButtonTryAgain = styled.button`
  background: #ff9916;
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

export const ErrorHeader = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-size: 18px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;
