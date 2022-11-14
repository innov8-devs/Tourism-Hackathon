import styled from 'styled-components';
export const FaqGrid = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
`;

export const FaqColumn = styled.div`
  float: left;
  width: 32%;
  height: 150px;
  padding: 5px;
  margin: 0 0 45px 0;
  @media (max-width: 1000px) {
    width: 45%;
    height: 122px;
  }
  @media (max-width: 500px) {
    width: 98%;
    height: auto;
  }
`;

export const FaqQuestion = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #424242;
  margin: 0 0 6px 0;
`;

export const FaqAnswer = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  margin: 0;
`;
