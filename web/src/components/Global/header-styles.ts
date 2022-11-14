import { FaUserCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import Button from '../Button';

interface INav {
  scroll: boolean;
}

interface INavButton {
  selected?: boolean;
}

export const MainWrapperStyles = css<INav>`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  ${(props) =>
    props.scroll &&
    `margin-top: ${-10}px;
  `}
`;

export const Nav = styled.header<INav>`
  background-color: #fff;
  color: black;
  width: 100%;
  min-height: 15vh;
  z-index: 10;
  padding: 0px 0;
  margin: 0px 0px;
  position: sticky;
  padding: 10px;
  top: 0;
`;

export const NavButton = styled.a<INavButton>`
  // background-color: #fff;
  // border: 1px solid #fff;
  font-weight: 600;
  color: ${(props) => (props.selected ? '#ff9916' : '#0f264c')};
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  white-space: nowrap;
  transition: 0.4s;
  z-index: 100;

  &:hover {
    color: #0f264c;
    transform: scale(1.1);
  }
`;

export const JoinUsButton = styled(NavButton)`
  padding: 0;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavProfileContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const CartWrapper = styled.button`
  border-radius: 50%;
  background: #ffffff;
  color: #333333;
  border: none;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: orange;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  display: block;

  // @media (max-width: 900px) {
  //   display: none;
  // }
`;

export const Avatar = styled(FaUserCircle)`
  width: 40px;
  height: 40px;
  margin-left: 16px;
  border-radius: 50%;
  cursor: pointer;
  color: gray;
`;

export const Logo = styled.img`
  z-index: 10;
`;

export const DesktopButton = styled(Button)`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const MobileButton = styled(Button)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const HeaderEmailInitial = styled.div`
  position: relative;
  background-color: #0f264c;
  color: #fff;
  font-family: montserrat;
  font-weight: 700;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-right: 1rem;
  text-transform: uppercase;
`;

export const searchBox = css`
  @media (max-width: 600px) {
    display: none;
  }
`;
