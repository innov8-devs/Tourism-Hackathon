import styled from 'styled-components';

export const LatestEventContainer = styled.section`
  margin: 0 0 41px 0;
  width: 100%;
  background-image: url('/images/kutu.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 370px;
  padding: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CalendarContainer = styled.div`
  background: rgba(255, 153, 22, 0.6);
  border: 1px solid #672200;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(103, 34, 0, 0.17);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px;

  @media (max-width: 900px) {
    padding: 0 12px;
    width: 80px;
    height: 80px;
    justify-content: center;
    margin: 0 0 14px 0;
  }
`;

export const CalendarText = styled.h1`
  font-weight: 900;
  font-size: 35px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const CalendarRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const CalendarRightText = styled.h2`
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 45px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const AmountPrice = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const AmountPlace = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
