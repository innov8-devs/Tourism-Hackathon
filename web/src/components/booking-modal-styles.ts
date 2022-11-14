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
  @media screen and (max-width: 450px) {
    font-size: 5vw;
  }
`;

export const Label = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* identical to box height, or 88% */

  color: rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 450px) {
    font-size: 4vw;
  }
`;

export const Value = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  /* identical to box height, or 70% */
  @media screen and (max-width: 450px) {
    font-size: 4vw;
    margin-bottom: 20px;
  }
  color: #212121;
`;

export const Amount = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  /* identical to box height, or 47% */

  color: #212121;
`;

export const ConfirmBooking = styled.button`
  background: #ff9916;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 62px;
  padding: 13px;
  @media screen and (max-width: 450px) {
    font-size: 4vw;
    padding: 7px;
    margin: 42px;
  }
`;
