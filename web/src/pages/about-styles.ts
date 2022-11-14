import { css } from '@emotion/react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  background: #fbfbfb;
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 20px 0 40px 0;
  background: #fbfbfb;
`;

export const BodyWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
`;

export const BodyHeader = styled.h1`
  font-family: DM Serif Display;
  height: 52px;
  width: 280px;
  left: 568.5px;
  top: 236px;
  font-size: 52px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  color: #333333;

  @media (max-width: 900px) {
    text-align: center !important;
  }

  margin: 0 0 24px 0;
`;

export const Typography = styled.p<{ center?: boolean; abnormal?: boolean }>`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 170%;
  color: #333333;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  margin: 0 0 42px 0;
  width: ${(props) => !props.abnormal && '500px'};
  height: 100%;
`;
export const TeamWrapper = styled.div`
  margin: 0 0 72px 0;
  padding: 0 20px;
`;

export const MemberProfile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 52px 0;
`;

export const Name = styled.h1`
  font-family: DM Serif Display;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #000000;
  margin: 0 0 4px 0;
`;

export const ProfileImg = styled.img`
  margin: 0 12px 0 0;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #666670;
  margin: 0 0 12px 0;
`;

export const AboutMember = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #000000;
  margin: 0;
`;

export const ProductWrapper = styled.div`
  text-align: center;
  margin: 0;
`;

export const ProductTeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomContainer = styled.div`
  text-align: center;
  margin: 72px auto 0 auto;
`;

export const BottomText = styled.h1`
  text-align: center;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 100%;
  margin: 0 0 24px 0;
  color: #0f264c;
`;

export const header1 = css`
  font-size: 32px;
  color: red;
  font-weight: bold;
  font-family: 'DM Serif Display';
  margin: 0 0 24px 0;
  @media (max-width: 900px) {
    text-align: center !important;
  }
`;
