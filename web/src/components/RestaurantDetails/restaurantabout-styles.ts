import styled from 'styled-components';
export const InnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 1170px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fbfbfb;
    padding: 30px 16px;
  }
`;

export const BoxC = styled.div`
  width: 310px;
  height: auto;
  min-height: 350px;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 1170px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 980px) {
    margin: 30px 40px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
    margin: 0 0 24px 0;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const BoxD = styled.div`
  width: 370px;
  background: #fff;
  min-height: 350px;
  padding: 20px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 1170px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 980px) {
    margin: 10px 10px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 95%;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #212121;
  }
`;
export const BoxDMapContainer = styled.div`
  width: 100%;
  height: 140px;
  @media (max-width: 350px) {
    height: auto;
  }
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-family: 'Arial Rounded MT';
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: 18px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  background: #0f264c;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  outline: none;
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
  }
`;

export const OtherButtons = styled(Button)`
  background: rgba(0, 0, 0, 0.01);
  color: #091c2e;
  font-size: 16px;
  line-height: 120%;
`;

export const WebImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const InfoContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 26px;
  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WebContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 350px) {
    margin-bottom: 10px;
  }
`;

export const WebText = styled.a`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
  &:hover {
    text-decoration: underline;
    color: #2323db;
  }
`;

export const WebTextLink = styled.a`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
  &:hover {
    text-decoration: underline;
    color: #2323db;
  }
`;

export const OpenDays = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666670;
  margin: 0;
`;

export const BottomHeader = styled.p`
  font-size: 25px;
  line-height: 14px;
  color: #212121;
  text-align: center;
  margin: 0 0 40px 0;
`;

export const AboutContainer = styled.div`
  @media (max-width: 500px) {
    background: #fbfbfb;
    // padding: 0 0 80px 0;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 0 18px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    background: #fbfbfb;
  }
`;

export const FoodImageContainer = styled.div`
  width: 340px;
  height: 340px;
  @media (max-width: 500px) {
    width: 100%;
    height: min(340px, 70vw);
  }
  position: relative;
`;

export const FoodImage = styled.img`
  width: 90%;
  height: 90%;
`;

export const BottomRightContainer = styled.div`
  width: 310px;
  height: 310px;
  @media (max-width: 1170px) {
    width: 100%;
  }
`;

export const TextHeader = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 14px;
  color: #212121;
  margin: 0 0 20px 0;
`;

export const TextDetails = styled.p<{ noMargin?: boolean }>`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  margin: ${(props) => (props.noMargin ? 'none' : '0 0 20px 0')};
`;

export const BtnContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-right: 20px;
`;
