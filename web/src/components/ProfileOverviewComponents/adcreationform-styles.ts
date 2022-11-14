import styled from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  margin: 16px 32px 0px 32px;
  width: 70%;
  @media (max-width: 623px) {
    width: 90%;
  }
`;

export const EditProfileDataForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const EditProfileDataInput = styled.input`
  display: inline;
  align-items: center;
  padding: 0px 13px;
  position: relative;
  height: 48px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
`;

export const EditProfileDataInputAbout = styled.textarea`
  display: inline;
  align-items: center;
  padding: 8px 13px 6px 8px;
  position: relative;
  height: 120px;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid rgba(0, 66, 105, 0.28);
  box-sizing: border-box;
  border-radius: 8px;
  overflow-wrap: break-word;
`;

export const ButtonContainer = styled.div`
  margin: 32px auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Error = styled.p`
  padding: 2px;
  color: red;
`;
