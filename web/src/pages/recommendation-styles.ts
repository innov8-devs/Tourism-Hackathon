import styled from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  background: #f8f8f8;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  position: relative;
  height: 980px;
  width: 480px;

  @media (max-width: 500px) {
    display: block;
    width: 100%;
    height: 280px;
  }
`;

export const LeftImg = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const MobileImg = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const Right = styled.div`
  width: calc(100vw - 480px);
  background: #f8f8f8;
  @media (max-width: 1008px) {
    width: 100%;
    padding: 0 16px;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 456px;
  left: 16px;
  @media (max-width: 500px) {
    top: 252px;
    left: 15px;
    display: none;
  }
`;

export const LeftText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 24px;
  color: #ff9916;
  margin: 0;
`;

export const LeftTextTwo = styled.p`
  font-family: montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #f8f8f8;
  margin: 0;
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  padding: 0 0 0 40px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Header = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #0f264c;
  text-align: center;
  margin: 24px 0;
`;
