import styled from 'styled-components';

export const Main = styled.div`
  font-family: 'Montserrat';
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    width: 450px;
    height: 50px;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #343434;
  }
`;

export const Section = styled.div`
  overflow-x: hidden;
  margin: 0;
  height: auto;
  max-width: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Section1 = styled.div`
  flex: 6;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 28px;
  }

  @media (min-width: 840px) {
    overflow-y: scroll;
  }
`;

export const Section2 = styled.div`
  flex: 4;
  height: 800px;
  border-radius: 8px 8px 0px 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
    margin-right: 0px;
    flex-direction: column-reverse;
  }
`;

export const InnerSection = styled.div`
  max-width: 1600px;
  height: 28px;
  background: rgba(250, 241, 237, 0.7);
`;

export const Box1 = styled.div`
  display: flex;
  font-family: 'Montserrat';
  justify-content: space-around;
  align-items: center;
  width: 792px;
  height: 130.11px;
  margin: 8px;
  background: #ffffff;
  /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 8px;
  span {
    color: #eb2a24;
    font-weight: 500;
    font-size: 16px;
  }
  p {
    margin: 0;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.6);
  }

  div {
    h4 {
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 0.25px;
      color: #12121f;
    }
  }
`;

export const Box2 = styled.div`
  align-items: center;
  text-align: center;
  max-width: 364px;
  height: 392px;
  background: #fbfbfb;
  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;
  padding: 20px;
  padding: 20px;

  img {
    margin: 0 auto;
    margin-bottom: 3s0px;
    object-fit: cover;
  }
  h4 {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.25px;
    color: #12121f;
  }

  h5 {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #ff9916;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Box2a = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 364px;
  height: 392px;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 10px;

  h4 {
    font-size: 18px;
    line-height: 24px;
    color: #5b5b5b;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    margin-left: 28px;
  }
`;

export const Line = styled.div`
  margin: auto;
  width: 314px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  width: 200px;
  height: 48px;
  background: #ff9916;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
