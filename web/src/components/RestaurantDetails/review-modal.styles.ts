import styled from 'styled-components';

export const Header = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 140%;
  /* or 35px */

  text-align: center;

  color: #343434;
`;

export const Error = styled.p`
  padding: 2px;
  color: red;
`;

export const AddImageText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  /* identical to box height, or 175% */

  color: #0f264c;
`;

export const SubmitRatingButton = styled.button`
  width: 310px;
  height: 60px;
  background: #ff9916;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #fff;
  margin: auto;
`;
