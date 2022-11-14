import styled from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  background: #f8f8f8;
  align-items: flex-start;
  min-height: 100vh;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  position: relative;
  width: 480px;
  min-height: 100vh;
  height: 886px;
  @media (max-width: 1008px) {
    display: none;
  }
`;

export const LeftImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  height: 100vh;
  background: #f8f8f8;
  @media (max-width: 1008px) {
    width: 100%;
    padding: 0 16px;
    height: 100vh;
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
  padding: 10px 40px;
  margin: 40px auto 0 auto;
  @media (max-width: 500px) {
    padding: 10px 20px;
    margin: 20px auto 0 auto;
  }
`;

export const BtnContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SkipBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #0f264c;
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  // margin-right: 90px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    margin: 10px 0px 24px 0px;
  }
`;
