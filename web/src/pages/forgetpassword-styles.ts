import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  height: 100%;
  padding: 10px 40px;
  margin: 20px auto 0 auto;
  @media (max-width: 500px) {
    padding: 10px 50px;
  }
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  color: #0f264c;
  margin: 20px 0 42px 0;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 20px;
    margin: 20px 0 24px 0;
  }
`;

export const EmailContainer = styled.div`
  width: 80%;
  margin: 65px auto 32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Step1Container = styled(EmailContainer)`
  margin: 65px auto 0 auto;
`;

export const EmailImg = styled.img``;

export const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0f264c;
  margin: 24px 0;
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TopText = styled(Text)`
  font-size: 24px;
  margin: 24px 0 60px 0;
`;

export const LoginEmailStyles = css<{ valid: boolean; error: boolean }>`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 4px 0;
  padding: 0 13px;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid #ff9916;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgba(0, 66, 105, 0.28);
      &:focus,
      &:active {
        border: 1px solid rgba(0, 66, 105, 0.28);
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgba(0, 66, 105, 0.28);
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ee4d47;
      outline: none;
      &:focus,
      &:active {
        border: 1px solid #ee4d47;
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #ee4d47;
      }
    `}
`;

export const NewInputStyles = css`
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 0px;
  text-align: center;
  width: 50px;
  margin: 0px 5px;
  height: 48px;
  &:focus {
    outline: none;
    border: 1px solid #ff9916;
  }
  @media (max-width: 500px) {
    margin: 0px 5px;
    width: 35px;
    height: 35px;
  }
  @media (max-width: 450px) {
    border-radius: 5px;
    margin: 0px 5px;
    width: 30px;
    height: 35px;
  }
  @media (max-width: 410px) {
    border-radius: 5px;
    margin: 0px 5px;
    width: 20px;
    height: 30px;
  }
`;

export const LoginPasswordStyles = css<{ valid: boolean; error: boolean }>`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 13px;
  margin: 0 0 10px 0;
  background-image: url('/eyeOff.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 97%;
  transition: 0.3s;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    background-image: none;
    border: 1px solid #ff9916;
    outline: none;
  }
  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid rgba(0, 66, 105, 0.28);
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgba(0, 66, 105, 0.28);
      &:focus,
      &:active {
        border: 1px solid rgba(0, 66, 105, 0.28);
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgba(0, 66, 105, 0.28);
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ee4d47;
      outline: none;
      &:focus,
      &:active {
        border: 1px solid #ee4d47;
        outline: none;
      }
      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #ee4d47;
      }
    `}
`;

export const EyeInvisible = styled(AiOutlineEyeInvisible)`
  margin-left: -40px;
  margin-bottom: -7px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const EyeVisible = styled(AiOutlineEye)`
  margin-left: -40px;
  margin-bottom: -7px;
  position: relative;
  font-size: 24px;
  z-index: 2;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const BtnContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const BottomText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #666670;
`;

export const ResendLink = styled.button`
  cursor: pointer;
  display: inline-block;
  background: transparent;
  border: none;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  margin: 0 0 32px 0;
  cursor: pointer;
`;
