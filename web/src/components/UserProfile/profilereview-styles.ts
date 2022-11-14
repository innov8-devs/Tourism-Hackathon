import styled from 'styled-components';
export const CardContainer = styled.div`
  padding: 0;
  height: 450px;
  overflow: auto;
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
  @media (min-width: 500px) {
    height: 450px;
    overflow-y: hiddeb;
  }
`;

export const FaqCard = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(78, 51, 0, 0.14);
  border-radius: 8px;
  margin: 10px 0 30px 0;
  cursor: pointer;

  @media (max-width: 980px) {
    width: 97%;
    margin: 10px auto 30px auto;
  }
`;

export const FaqCardInner = styled.div`
  padding: 16px 30px 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 24px 0;
`;

export const Picture = styled.img`
  margin: 0 16px 0 0;
  width: 55px;
  height: 55px;
  background: url(IMG_20200209_020520.jpg);
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.35));
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 50%;
`;

export const DisplayName = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ff9916;
  margin: 0 0 4px 0;
`;

export const QuestionTime = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 14px 0;
`;

export const QuestionText = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(33, 33, 33, 0.9);
  margin: 0;
`;

export const FaqBottomDiv = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 50px;
  background: rgba(255, 244, 231, 0.8);
  border-radius: 0px 0px 5px 5px;
  @media (max-width: 960px) {
    padding: 10px 20px 10px 20px;
  }
`;

export const TextInput = styled.input`
  width: 460px;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 32, 51, 0.35);
  padding: 16px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
  background: transparent;
  padding: 7.5px 12px;
  border: none;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(-1px);
  }
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 840px) {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
