import styled from 'styled-components';

export const MainNav = styled.nav`
  height: 68px;
  background: #fbfbfb;
  padding: 10px 0;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 0;
`;

export const NavButton = styled.a`
  background: #fbfbfb;
  font-weight: 600;
  color: rgba(40, 40, 40, 0.63);
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  transition: 0.4s;

  &:hover {
    color: #0f264c;
    transform: scale(1.1);
  }
`;

export const NavSearch = styled.input`
  width: 90%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #666670;
  background-image: url('/heroSearchIcon.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 97%;
  transition: 0.3s;

  &:focus {
    background-image: none;
  }
`;
