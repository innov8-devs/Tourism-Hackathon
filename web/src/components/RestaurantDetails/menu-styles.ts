import styled from 'styled-components';

export const Container = styled.section`
  background: #fbfbfb;
  @media (max-width: 500px) {
    padding: 0 16px;
  }
`;

export const SelectMode = styled.select`
  box-sizing: border-box;
  width: 268px;
  height: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  color: #000000;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  padding-right: 40px;

  &:focus {
    outline: none;
  }
  @media (max-width: 1050px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1050px) {
    margin-bottom: 40px;
  }
`;

export const MenuContainer = styled.div`
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

  @media (min-width: 980px) {
    height: 790px;
    overflow-y: scroll;
  }
`;

export const MenuCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 0 10px;
  @media (max-width: 980px) {
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    justify-content: space-between;
    padding: 0px;
  }
  @media (max-width: 350px) {
    height: auto;
    padding-top: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuCardImg = styled.img`
  width: 140px;
  height: 85%;
  border-radius: 50%;
  object-fit: cover;
  background-color: #fff;
  @media (max-width: 950px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 380px) {
    margin-right: 0px;
  }
  @media (max-width: 320px) {
    width: 70px;
    height: 70px;
  }
`;

export const MenuNameContainer = styled.div`
  width: 250px;
  margin-right: 20px;
  text-align: left;
  @media (max-width: 600px) {
    width: 180px;
  }
  @media (max-width: 460px) {
    width: 150px;
  }
  @media (max-width: 410px) {
    width: auto;
  }
  @media (max-width: 380px) {
    margin-right: 0px;
  }
  h3 {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.25px;
    color: #12121f;
    margin: 0 0 10px 0;
    text-transform: capitalize;
    @media (max-width: 950px) {
      font-size: 13px;
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    text-transform: capitalize;
    @media (max-width: 950px) {
      font-size: 8px;
    }
  }
  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Amount = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
  color: #0f264c;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const SubtractBtn = styled.button`
  width: 28px;
  background: #ffffff;
  color: #ff9916;
  border: 1px solid #ff9916;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    cursor: not-allowed;
    color: #c4c4c4;
    border: 1px solid #c4c4c4;
  }
`;

export const AddBtn = styled.button`
  width: 28px;
  background: #ffffff;
  border: 1px solid #ff9916;
  color: #ff9916;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(0.9);
  }
`;

export const Counter = styled.p`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  margin: 0 10px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  color: #eb2a24;
  margin-bottom: -3px;
  @media (max-width: 500px) {
    width: 14px;
    height: 14px;
  }
`;

export const AddedBtnContainer = styled.div`
  position: relative;
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 40px;
  left: 0px;
  font-family: Montserrat;
  font-style: normal;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  margin: 0 0 10px 0;
  color: #eb2a24;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }
  @media (max-width: 500px) {
    top: 50px;
    font-size: 8px;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 850px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CreateOrderButton = styled.button`
  background: #ff9916;
  border: 1px solid #ff9916;
  color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(0.9);
  }
`;
