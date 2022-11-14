import { BiImageAdd } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-family: 'Arial Rounded MT';
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: 18px;
  border: none;
  box-sizing: border-box;
  background: #0f264c;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    cursor: pointer;
    background-color: #ccc;
    box-shadow: none;
    color: rgb(255, 255, 255) !important;
  }

  @media (max-width: 300px) {
    font-size: 12px;
    width: 120px;
    height: 38px;
  }
`;

export const ReviewBtn = styled(Button)`
  background: #ff9916;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  @media (max-width: 1040px) {
    margin-left: 0px;
  }
`;

export const PhotoBtn = styled(Button)`
  background: #ff9916;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  border-radius: 8px;
  color: #000;
`;

export const RatingHeader = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 0 15px 0;
  @media (max-width: 840px) {
    text-align: center;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const CardContainer = styled.div`
  padding: 0 20px 0 0;
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
    height: 650px;
    overflow-y: scroll;
  }
`;

export const ReviewBtnContainer = styled.div`
  @media (max-width: 1040px) {
    margin-top: 20px;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormContainer = styled.div`
  margin: 12px;
`;

export const ReviewInputStyles = css`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  position: relative;
  width: 100%;
  height: 150px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 0 4px 0;
  padding: 13px;
  color: #282828a3;
  ::placeholder {
    color: rgba(0, 32, 51, 0.35);
  }
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
  color: black;
`;

export const Rating = styled.div`
  cursor: pointer;
`;

export const RatingsContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 14px;
`;

export const RatingsWrapper = styled.div`
  display: flex;
  margin: 6px;
`;

export const WriteReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WriteReviewInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  margin-top: 8px;
`;

export const ErrorsContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
  color: red;
  font-size: 12px;
  font-weight: 600;
  margin-top: -0.5rem;
  @media (max-width: 500px) {
    margin-left: 0px;
  }
`;

export const ImageAttachCon = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 35px;
  height: 35px;
  opacity: 0;

  @media (min-width: 1000px) {
    bottom: 40%;
  }
`;

export const ImageAttachIcon = styled.label`
  position: absolute;
  right: 10px;
  bottom: 56%;
  width: 35px;
  height: 35px;
  background: #ff9916;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 1000px) {
    bottom: 50%;
  }
`;

export const ImageAttachIconImg = styled(BiImageAdd)`
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  gap: 20px;
  @media (max-width: 500px) {
    margin-top: 0px;
    margin-bottom: 0px;
    flex-direction: column;
  }
`;

export const ImagePreviewCon = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

export const ImagePreview = styled.p`
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const CancelIcon = styled(MdCancel)`
  color: red;
  align-self: center;
  vertical-align: middle;
  text-align: center;
`;

export const ReviewCon = styled.div`
  padding: 20px;
`;
