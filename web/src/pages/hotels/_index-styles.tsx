import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 25px auto 0 auto;
`;

export const Heading = styled.h1`
  font-family: 'DM Serif Display';
  font-size: 50px;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  padding: 0px 5px;
`;

export const BackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`;

export const CardContainer = styled.div`
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
  margin-bottom: 8vh;
`;

export const Subsection = styled.h1`
  font-family: 'Montserrat';
  font-size: 30px;
  font-weight: 700;
`;

export const Tag = styled.div`
  width: 40px;
  height: 7px;
  background-color: #000;
  border-radius: 20px;
`;
