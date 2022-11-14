import styled from 'styled-components';

export const LeftNav = styled.div`
  width: auto;
  height: auto;
  background: #ffffff;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MyAccountFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 250px;
  height: auto;
`;

export const MyAccountFrameTitle = styled.h2`
  width: 170px;
  height: 44px;
  left: 0px;
  top: 0px;
  margin-bottom: 44px;
  color: #000000;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 376px) {
    font-size: 24px;
    line-height: 32.9px;
    font-weight: 400px;
  }
`;

export const MyAccountItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  padding: 0px;
  position: static;
  width: auto;
  height: auto;
  left: 0px;
  top: 76px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
  width: 320px;
  height: 44px;
  a {
    color: #000000;
    text-decoration: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    width: 100%;
    height: 100%;

    // &[aria-current] {
    //   background-color: #fff7e7;
    //   color: #000000;
    //   height: 100%;
    // }
  }

  &:hover {
    background-color: #fff7e7;
  }
  @media (max-width: 900px) {
    a {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 40px;
  position: relative;
  width: 320px;
  height: 136px;
  left: 0px;
  top: 700px;

  @media (max-width: 900px) {
    left: 0px;
    top: 550px;
    width: 150px;
  }
`;

export const SignOutTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const SignOutText = styled.span`
  padding: 4px 0px 4px 0px;
`;
