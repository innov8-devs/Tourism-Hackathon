import styled, { css } from 'styled-components';

interface ErrorProps {
  active?: boolean;
}

export const MainContainer = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 376px) {
  }
`;

export const sideMenuContainer = styled.div`
  @media (max-width: 376px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  // height: 1092px;
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
  margin-top: 0px;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: -30px;
    margin-left: 62px;
  }
`;

export const ProfilePhotoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 32px;
`;

export const ProfilePhotoTitle = styled.h3`
  font-size: 16px;
  margin-left: 0px;
  margin-top: 12px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;

export const EditProfileDataForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
`;

export const EditProfileDataLabel = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
`;

export const EditProfileDataInputDisabled = styled.input`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: rgba(187, 195, 201, 0.25);
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:active {
    border: 1px solid #fff7e7;
  }
`;

export const InputFieldStyles = css`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #282828a3;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
  ::placeholder {
    font-family: montserrat;
    color: #aba4a4bd;
  }
`;

export const SocialStyles = css`
  width: 100%;
`;

export const ButtonContainer = styled.div<{ diff?: boolean }>`
  margin: 16px 12px;
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.diff ? 'center' : 'flex-end')};
  @media (max-width: 900px) {
    margin: 16px 0;
  }
`;

export const InputFieldTextAreaStyles = css`
  // display: inline;
  // align-items: center;
  // padding: 8px 13px 6px 8px;
  // position: relative;
  vertical-align: top;
  // height: 120px;
  width: 100%;
  font-family: montserrat;
  font-size: 16px;
  line-height: 150%;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  overflow-wrap: break-word;
  color: #282828a3;
  ::placeholder {
    color: #aba4a4bd;
    font-family: montserrat;
  }

  &:focus,
  &:active {
    border: 1px solid #ff9916;
    outline: none;
  }
`;

export const Error = styled.p`
  padding: 2px;
  color: red;
`;

export const SocialsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorContainer = styled.div<ErrorProps>`
  width: 100%;
  background-color: #ffbaba;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  // margin: 30px 0 -20px 0;
  align-items: flex-start;
  display: ${({ active }) => (active ? 'flex' : 'none')};

  p {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #d8000c;
    margin: 0 0 0 20px;
  }
`;

export const UpdateContainer = styled(ErrorContainer)`
  background-color: #0055ff33;
  display: ${({ active }) => (active ? 'flex' : 'none')};

  p {
    color: #0055ff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    width: -webkit-fill-available;
    text-transform: capitalize;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DpSkeleton = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-right: 20px;
  background: #dadada87;
`;

export const Portal = styled.div`
  width: 100%;
  height: 100%;
`;
