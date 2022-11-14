import { GiCancel } from 'react-icons/gi';
import styled, { css } from 'styled-components';

interface ErrorProps {
  active?: boolean;
}

export const MainContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  width: 70%;
  background: #0f264c;
  padding: 112px 200px 77px 30px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 74px 0px 74px 10px;
  }
`;

export const LeftText = styled.h1`
  margin: 0;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 140%;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 60px;
  }
  @media (max-width: 600px) {
    font-size: 50px;
  }
`;

export const Right = styled.div`
  background: #edf0fa;
  width: 713px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  padding: 90px 0px;
  border: 1px solid #bbc3c9;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  top: -30px;
  right: 100px;
  @media (max-width: 1370px) {
    width: 613px;
    right: 30px;
  }
  @media (max-width: 1250px) {
    width: 445px;
    right: 30px;
    padding: 60px 0px;
  }
  @media (max-width: 900px) {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    border: none;
    border-radius: 0px;
  }
`;

export const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 900px) {
  }
`;

export const TitleText = styled.p`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  color: #333333;
  margin: 0px;
`;

export const SubTitleText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */
  display: flex;
  align-items: center;
  color: #333333;
`;

// export const SubForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   width: 100%;
// `;

export const LoginEmailStyles = css`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  display: block;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 32, 51, 0.35);
  padding: 16px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 16px 0 16px 13px;
  }
`;

export const ErrorContainerStyles = css<ErrorProps>`
  width: 560px;
  background-color: #ffbaba;
  padding: 10px;
  border-radius: 4px;
  margin: 0 0 15px 0;
  align-items: center;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  @media (max-width: 1250px) {
    width: 350px;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    line-height: 24px;
    color: #d8000c;
    margin: 0 0 0 10px;
  }
`;

export const SuccessAlert = styled.div<ErrorProps>`
  width: 560px;
  padding: 5px;
  background-color: #6dccb4b3;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 1250px) {
    width: 350px;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    width: fit-content;
    margin-left: 10px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export const Cancel = styled(GiCancel)`
  color: white;
  font-weight: bold;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

export const HeroSection = styled.section`
  background-color: #fff;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 4rem;
`;

export const LeftHero = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const RightHero = styled.div`
  flex: 1 45%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  @media (max-width: 900px) {
    width: 100%;
    gap: 2rem;
  }
`;

export const InputContainer = styled.div`
  margin: '0 0 25px 0';
  width: 65%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
