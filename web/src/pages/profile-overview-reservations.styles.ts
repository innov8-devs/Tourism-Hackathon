import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export const RightContent = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  height: 1092px;
  margin-left: 32px;
  @media screen and (max-width: 380px) {
    margin-left: 16px;
  }
`;

export const RightContentTitle = styled.h3`
  position: relative;
  height: 33px;
  left: 0px;
  top: 0px;
  font-family: DM Serif Display;
  font-style: bold;
  font-weight: 600;
  line-height: 32.9px;
  font-size: 24px;
  margin-left: 32px;
  margin-bottom: 57px;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: -30px;
    margin-left: 62px;
  }
`;

export const GridTitle = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 10px;
  background: #bbc3c9;
  height: 32px;
  padding: 8px 12px;
`;

export const GridTitleItem = styled.p<{ idx?: number }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  /* text */

  color: #402b2b;
  width: ${(props) =>
    props.idx == 1 ? 160 : props.idx == 2 ? 140 : props.idx == 3 ? 106 : props.idx == 4 ? 72 : 90}px;
  @media screen and (max-width: 1250px) {
    width: 100px;
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    flex: 1;
  }
`;

export const GridItem = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;
  height: 32px;
  margin: 2px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
