import styled from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 0 60px 0;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 60px 0 75px 0;
  }
`;

export const Left = styled.div`
  background: rgba(255, 153, 22, 0.2);
  border-radius: 0px 24px 24px 0px;
  padding: 55px 53px;
  width: 340px;
  height: 244px;
  margin: 0px 50px 0 0;

  @media (max-width: 900px) {
    margin: 0px 0px 24px 0;
    height: 97px;
    padding: 28px 13px 28px 40px;
  }

  @media (max-width: 400px) {
    width: 310px;
    margin: 0px 0px 24px 0;
    height: 97px;
    padding: 20px 10px 20px 10px;
  }
`;

export const LeftText = styled.h1`
  font-family: DM Serif Display;
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
  margin: 0;
  color: #402b2b;
  @media (max-width: 900px) {
    font-size: 30px;
    line-height: 140%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  @media (max-width: 900px) {
    width: 100vw;
    overflow-x: scroll;
  }
`;

export const NextIcon = styled.img`
  position: absolute;
  top: 40%;
  right: 20px;
  cursor: pointer;
  @media (max-width: 900px) {
    top: 60%;
  }
`;
