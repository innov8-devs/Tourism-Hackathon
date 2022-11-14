import styled from 'styled-components';

export const Card = styled.div`
  background: #f0f1f5;
  border-radius: 8px;
  height: 70px;
  padding: 14px;
  width: 157px;
`;

export const Label = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 117% */
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Value = styled.p<{ flex?: boolean }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  /* identical to box height, or 88% */

  color: #212121;
  flex: ${(props) => !props.flex && 1};
`;

export const GuestsButton = styled.button<{ disabled?: boolean }>`
  background: #ffffff;
  border: 1px solid ${(props) => (props.disabled ? '#c4c4c4' : '#FF9916')};
  border-radius: 8px;
  width: 28px;
  height: 28px;
  color: ${(props) => (props.disabled ? '#c4c4c4' : '#FF9916')};
  margin: 0.5em;
`;

export const SearchButton = styled.button`
  /* Primary Color- Orange */

  background: #ff9916;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 14px;
  width: 160px;
`;

export const SpaceTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.25px;

  @media screen and (max-width: 450px) {
    font-size: 5vw;
  }

  color: #12121f;
`;

export const SpaceDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* or 140% */

  color: rgba(0, 0, 0, 0.6);
`;

export const MinimumSpend = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 117% */

  color: rgba(0, 0, 0, 0.6);
`;

export const BookingButton = styled.button<{ made?: boolean }>`
  background: ${(props) => (props.made ? '#3b5998' : '#fff')};
  border-radius: 8px;
  padding: 10px;
  border: ${(props) => (props.made ? '0px' : '1px')} solid #0f264c;
  border-radius: 8px;
  color: ${(props) => (props.made ? '#fff' : '#000')};
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  @media screen and (max-width: 450px) {
    font-size: 3vw;
    padding: 5px;
  }
`;

export const ReservationButton = styled.button<{ made?: boolean }>`
  /* Primary Color- Orange */
  color: #fff;
  background: ${(props) => (props.made ? '#3b5998' : props.disabled ? '#BBC3C9' : '#ff9916')};
  border-radius: 8px;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  @media screen and (max-width: 450px) {
    font-size: 3vw;
    padding: 5px;
  }
`;

export const CancelButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* identical to box height */

  color: #ff5400;
`;

export const SummaryButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  border: 1px solid #0f264c;
  border-radius: 8px;
  padding: 10px;
  margin: 30px;
`;

export const SuccessCircle = styled.div`
  background: #fd9645;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 40px 90px 15px #ffab41;
  margin-bottom: 70px;
`;

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 416px;
  height: 416px;
  flex-direction: column;
`;

export const SuccessText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 140%;
  /* or 35px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #343434;
  margin-bottom: 30px;
`;
