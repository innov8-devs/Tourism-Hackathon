import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RightFrame = styled.div`
  background-color: #fbfbfb;
  height: 100%;
  width: 100%;
`;

export const RightContentTitle = styled.h3`
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
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 66, 105, 0.28);
  align-items: center;
`;

export const ContentDescription = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const ContentTitle = styled.span`
  margin: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

export const Description = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

export const ToggleSliderWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
`;

export const RadioButtonsWrapper = styled.div`
  padding: 8px;
`;
