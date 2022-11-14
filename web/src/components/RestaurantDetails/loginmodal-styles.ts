import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styled, { css } from 'styled-components';

interface AltTextProps {
  primary?: boolean;
}
interface ErrorProps {
  active?: boolean;
}
interface SignupTextProps {
  primary?: boolean;
  center?: boolean;
}

export const InnerContainer = styled.div`
  margin: auto;
  width: 454px;
  border-radius: 4px;
  background: #f8f8f8;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const LoginLogo = styled.img`
  margin: 0 0 32px 0;
  cursor: pointer;
`;

export const TopText = styled.p`
  margin: 0 0 48px 0;
  width: 100%;
  text-align: center !important;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #402b2b;
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
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

export const ForgotPassword = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  margin: 0 0 0 auto;
  color: #402b2b;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const HrContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

export const Or = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #c2c2c2;
  margin: 0;
`;

export const AltLogin = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  padding: 0 24px;
  cursor: pointer;
  border: 1px solid #091c2e;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 24px 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const AltTextStyles = css<AltTextProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 48px;
  margin: 0;
  color: ${({ primary }) => (primary ? '#3B5998' : '#402b2b')};
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const AltImg = styled.img`
  margin: 0 20px 0 80px;
  @media (max-width: 500px) {
    margin: 0 20px 0 40px;
  }
  @media (max-width: 325px) {
    margin: 0 8px 0 0;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const SigupTextStyles = css<SignupTextProps>`
  font-style: normal;
  margin: 7.5px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ primary }) => (primary ? '#666670' : '#000000')};
  text-align: ${({ center }) => center && 'center'};
  @media (max-width: 325px) {
    text-align: center !important;
  }import { useState } from 'react';
`;

export const LinkLoginFooter = styled.a`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #0f264c;
  @media (max-width: 1000px) {
    margin: 0 10px 0 0;
  }
  @media (max-width: 500px) {
    margin: 0 0 4px 0;
  }
`;

export const SigupLink = styled.a`
  display: inline-block;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
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

export const ErrorContainerStyles = css<ErrorProps>`
  width: 100%;
  background-color: #ffbaba;
  padding: 10px;
  margin: 0 0 10px 0;
  border-radius: 4px;
  margin: 30px 0 -20px 0;
  align-items: center;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  p {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #d8000c;
    margin: 0 0 0 10px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #96969880;
  backdrop-filter: blur(4px);
  z-index: 200;
  transition: 3s;
`;
