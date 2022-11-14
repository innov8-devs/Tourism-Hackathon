import styled from 'styled-components';
export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 100px auto;
`;

export const RecHeaderContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const RecHeader = styled.h1`
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

export const RecHyphen = styled.hr`
  margin: 0 5px;
  width: 50%;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 1050px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RecSecondaryTitle = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  padding: 0 10px;
  color: #343434;
  margin: 8px 0 32px 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const RecRow = styled.div`
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

export const RecIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const RecButtonText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  width: 100%;
  text-align: center;
`;

export const RecButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 42px auto;
  width: 166px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:disabled {
    background-color: #e6e6e6;
    color: #b3b3b3;
  }
`;
