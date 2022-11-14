import styled from 'styled-components';
export const Btn = styled.button<{
  small?: boolean;
  join?: boolean;
  smallTwo?: boolean;
  smallest?: boolean;
  back?: boolean;
  backTwo?: boolean;
  upload?: boolean;
  criticalAction?: boolean;
  ActionButton?: boolean;
  DeleteButton?: boolean;
}>`
  font-family: montserrat;
  height: 48px;
  width: 100%;
  margin: 32px 0 0 0;
  z-index: 4;

  background: #ff9916;
  border-radius: 8px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }

  ${(props) =>
    props.small &&
    `
         height:56px;
         width: 180px;
         margin: 0px 12px;
         @media (max-width: 900px) {
           margin: 12px 0px;
         }
    `}
  ${(props) =>
    props.join &&
    `
         height:56px;
         width: 180px;
         margin: 0px 12px;
         @media (max-width: 900px) {
           height:50px;
           width: 150px;
          font-size: 13px;
           margin: 12px 0px;
         }
         @media (max-width: 500px) {
            height: 33px;
            width: 84px;
            font-size: 10px;
            padding: 0px 4px;
         }
    `}
  ${(props) =>
    props.back &&
    `
         height:48px;
         background: #0f246c;
         margin: 20px 0px 12px 0px;
        
    `}
  ${(props) =>
    props.backTwo &&
    `
         height:56px;
         width: 180px;
         background: #0f246c;
         margin: 0px 12px;
         @media (max-width: 900px) {
           margin: 12px 0px;
         }
    `}
  ${(props) =>
    props.smallTwo &&
    `
         height:32px;
         width: 160px;
         font-size: 14px;
         margin: 0px 12px;
         @media (max-width: 900px) {
           margin: 12px 0px;
         }
         @media (max-width: 500px) {
          display: none;
         }
    `}
  ${(props) =>
    props.smallest &&
    `
         height:40px;
         width: 88px;
         font-size: 16px;
         padding: 10px 13px;
         margin: 0px 12px;
         @media (max-width: 900px) {
           margin: 12px 0px;
          }
          @media (max-width: 500px) {
             height:35px;
         width: 78px;
           font-size: 14px;
         }
          @media (max-width: 3200px) {
             height:30px;
         width: 64px;
           font-size: 12px;
         }
    `}
  ${(props) =>
    props.upload &&
    `
         height:40px;
         width: 140px;
         font-size: 14px;
         padding: 13px 8px;
         margin: 0px;
         @media (max-width: 900px) {
           margin: 12px 10px 0 10px;
         
    `}


  ${(props) =>
    props.criticalAction &&
    `
      height:50px;
      width: 180px;
      background: none;
      color: red;
      border: 1px solid #0c111a;
      margin-top: 12px;
      margin-left: 0px;
      margin: 0px 12px;
      @media (max-width: 900px) {
        margin: 12px 0px;
      }
      @media (max-width: 415px) {
        margin: 12px 0px;
        height: 40px;
        width: 130px;
        font-size: 12px;
      }
    `}
  ${(props) =>
    props.ActionButton &&
    `
      height:56px;
      width: 180px;
      background: none;
      color: #0c111a;
      border: 1px solid #0c111a;
      margin-top: 12px;
      margin-left: 0px;
      margin: 0px 12px;
      @media (max-width: 900px) {
        margin: 12px 0px;
      }
    `}
  ${(props) =>
    props.DeleteButton &&
    `
      height:56px;
      width: 180px;
      background: none;
      color: #0c111a;
      border: 1px solid #0c111a;
      margin-top: 12px;
      margin-left: 0px;
      margin: 0px 12px;
      @media (max-width: 900px) {
        margin: 12px 0px;
      }
    `}
`;
