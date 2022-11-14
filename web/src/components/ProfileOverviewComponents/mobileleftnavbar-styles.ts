import styled from 'styled-components';

export const MobileNavWrapper = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  // border-right: 1px solid #e6e6e6;
  // @media (min-width: 900px) {
  //   display: none;
  // }
`;

export const MyAccountFrameTitle = styled.h2`
  width: 100%;
  left: 0px;
  top: 0px;
  color: #000000;
  font-family: montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
  padding-bottom: 24px;
  border-bottom: 1px solid #e6e6e6;
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavMenuItems = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
`;

export const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px;
  margin-left: 8px;
  position: relative;
  width: 320px;
  height: 136px;
  left: 0px;
  top: 700px;

  @media (max-width: 900px) {
    left: 0px;
    top: 40px;
    width: 95%;
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

export const CancelConainer = styled.div`
  padding: 8px;
  position: absolute;
  right: -54px;
  top: -20px;
  background-color: #fefefe;
`;

export const NavMenuContainer = styled.div`
  // height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
