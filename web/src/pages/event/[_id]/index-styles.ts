import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 25px auto 0 auto;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`;

export const BottomHeader = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const Back = styled(BiArrowBack)`
  font-size: 30px;
  margin-left: 10px;
  width: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scaleX(1.3);
  }
  &:active {
    transform: scaleX(1);
  }
`;
