import styled from 'styled-components';

export const MainFrame = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RightFrame = styled.div`
  background-color: #fbfbfb;
  height: 100%;
  width: 100%;
`;

export const RightContentTitle = styled.div`
  position: relative;
  width: 100%;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: DM Serif Display;
  font-style: bold;
  font-weight: 600;
  line-height: 32.9px;
  font-size: 24px;
  margin-left: 32px;
  margin-top: 38px;
`;
export const SettingItem = styled.div`
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 48px;
  margin-bottom: 40px;
`;

export const TitleBox = styled.div`
  position: relative;
  display: flex;
  background: #bbc3c9;
  width: 100%;
  height: 25px;
  align-items: center;
`;

export const Title = styled.span`
  padding: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 66, 105, 0.28);
  align-items: center;
`;

export const ContentDescription = styled.div`
  grid-column: 1;
  grid-column: 1;
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ContentTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

export const EditIcon = styled.img`
  grid-row: 1;
  grid-column: 2;
  width: 19px;
  height: 19px;
  position: relative;
`;
export const AddIcon = styled.img`
  grid-row: 1;
  grid-column: 2;
  width: 19px;
  height: 19px;
`;

export const PaymentBanner = styled.div`
  margin: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 44px;
`;

export const GreyText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #bbc3c9;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MasterCardLogo = styled.img`
  width: 55px;
  height: 33px;
`;

export const VisaLogo = styled.img`
  width: 99px;
  height: 33px;
`;

export const PaypalLogo = styled.img`
  width: 121px;
  height: 33px;
`;
