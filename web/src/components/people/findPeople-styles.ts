import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 100px auto;
`;

export const Header = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 100%;
  padding: 0 8px;
  color: #343434;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 42px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const Row = styled.div`
  background-color: #ffffff;
  width: 100%;
  @media (max-width: 1220px) {
    padding: 0 20px;
  }
  &:after {
    background-color: #ffffff;
    content: '';
    display: table;
    clear: both;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 42px auto;
  width: 166px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 28px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #ff9916;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  width: 100%;
  text-align: center;
`;
