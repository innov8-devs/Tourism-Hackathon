import React from 'react';

import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';

interface FollowTextProps {
  follow?: boolean;
}
interface ActiveProps {
  active?: boolean;
}

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 25px auto 0 auto;
  display: flex;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 394px;
  padding: 0 10px;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const RightBox = styled.div`
  width: calc(100% - 394px);
  padding: 0 20px;
  margin: 0 0 0 30px;
  background: #fbfbfb;
  @media (max-width: 980px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }
`;
export const BoxA = styled.div`
  width: 394px;
  padding: 36px 20px;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;
  margin: 0 0 20px 0;
  @media (max-width: 980px) {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 1rem;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;
export const ProfileContainer = styled.div`
  position: relative;
  margin-right: 20px;
  min-width: 95px;
  max-width: 100px;
  height: 95px;
`;
export const Verified = styled.img`
  position: absolute;
  top: 6px;
  right: 0px;
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h3`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;
export const Handle = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 14px 0;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;
export const Address = styled.p`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;
export const LocationIcon = () => {
  return (
    <svg
      style={{ marginRight: '5px' }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71087 15.4423L8.1335 15.062C11.6875 11.8646 13.494 9.07275 13.494 6.61866C13.494 3.14331 10.8614 0.660156 7.71087 0.660156C4.56038 0.660156 1.92773 3.14331 1.92773 6.61866C1.92773 9.07275 3.7342 11.8646 7.28823 15.062L7.71087 15.4423ZM7.71087 13.6784C4.69504 10.878 3.21288 8.50502 3.21288 6.61866C3.21288 3.90198 5.24604 1.98427 7.71087 1.98427C10.1757 1.98427 12.2089 3.90198 12.2089 6.61866C12.2089 8.50502 10.7267 10.878 7.71087 13.6784ZM7.71087 3.30838C9.48528 3.30838 10.9237 4.79045 10.9237 6.61867C10.9237 8.44688 9.48528 9.92895 7.71087 9.92895C5.93646 9.92895 4.49802 8.44688 4.49802 6.61867C4.49802 4.79045 5.93646 3.30838 7.71087 3.30838ZM5.78316 6.61867C5.78316 5.52173 6.64622 4.6325 7.71087 4.6325C8.77551 4.6325 9.63858 5.52173 9.63858 6.61867C9.63858 7.7156 8.77551 8.60484 7.71087 8.60484C6.64622 8.60484 5.78316 7.7156 5.78316 6.61867Z"
        fill="black"
        fillOpacity="0.6"
      />
    </svg>
  );
};
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 36px 0;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;
export const Open = styled.img`
  cursor: pointer;
  // @media (max-width: 840px) {
  //   display: none;
  // }
`;

export const FollowButton = styled.button<FollowTextProps>`
  font-family: 'Arial Rounded MT';
  width: 140px;
  height: 40px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 980px) {
    margin: 0 20px 0 0;
  }
  color: ${({ follow }) => (follow ? '#0f264c' : '#fff')};
  background: ${({ follow }) => (follow ? '#fff' : '#0f264c')};
`;
export const ReservationButton = styled(FollowButton)`
  background: rgba(0, 0, 0, 0.01);
  color: #0f264c;
`;
export const TourButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 36%;
  background: rgba(0, 0, 0, 0.01);
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
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

export const TourButtonRight = styled.button`
  position: absolute;
  bottom: 50%;
  right: 30%;
  background: rgba(0, 0, 0, 0.01);
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
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

export const RatingsContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 0 0 0 0;
  @media (max-width: 980px) {
    margin: 36px auto;
  }
  margin-top: 1.5rem;
`;
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Rating = styled.h6`
  margin-left: 2rem;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 25px;
  color: #0f264c;
  margin: 0;
`;
export const RatingCount = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #0f264c;
  margin: 0;
`;
export const Certificate = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #0f264c;
  margin: 0 0 28px 0;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
export const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 216px;
  @media (max-width: 840px) {
    width: 100%;
    justify-content: center;
  }
`;
export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 840px) {
    margin: 0 20px 0 0;
  }
  @media (max-width: 500px) {
    margin: 0 20px 0 0;
  }
`;
export const FollowersCount = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #000000;
  margin: 0;
`;
export const FollowersText = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin: 0;
`;

export const BoxB = styled.div`
  width: 390px;
  height: 392px;
  border-radius: 10px 10px 0px 0px;
`;

export const InnerBoxB = styled.div`
  width: 160px;
  padding: 8px 12px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const PlaceImg = styled.img`
  margin-right: 10px;
`;

export const Place = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  color: #007aff;
  margin: 0;
`;

export const BottomBox = styled.div`
  width: 390px;
  position: relative;
  @media (max-width: 980px) {
    display: none;
  }
`;

export const BoxB1 = styled.div`
  padding: 12px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(103, 34, 0, 0.17);
  border-radius: 10px;
`;

export const BoxB1Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #0f264c;
  margin: 0;
`;

export const NavigationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const NavigationButton = styled.button<ActiveProps>`
  border: none;
  padding: 20px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  background: transparent;
  cursor: pointer;
  color: ${({ active }) => (active ? '#ff9916' : 'rgba(0, 0, 0, 0.6)')};
  border-bottom: ${({ active }) => (active ? '2px solid #ff9916' : 'none')};
  transition: 0.3s;
  &:hover {
    color: #ff9916;
    border-bottom: 2px solid #ff9916;
  }
  &:selected {
    color: #ff9916;
    border-bottom: 2px solid #ff9916;
  }
  @media (max-width: 1170px) {
    font-size: 16px;
    padding: 20px 10px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 10px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    padding: 8px;
  }
  @media (max-width: 300px) {
    font-size: 11px;
  }
`;
export const RestaurantImg = styled.img`
  width: 390px;
  height: 610px;
  object-fit: cover;
  position: relative;
  @media (max-width: 980px) {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 146px;
    margin-bottom: 32px;
  }
`;

export const RestaurantImgContainer = styled.div`
  position: relative;
  @media (max-width: 980px) {
    display: none;
  }
`;

export const RestaurantImgContainerRight = styled.div`
  position: relative;
  display: none;
  @media (max-width: 840px) {
    display: block;
    margin: 0 auto;
    width: 90%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 33px;
  margin: 30px 0;
  background: rgba(250, 241, 237, 0.7);
`;

export const Back = styled(BiArrowBack)`
  font-size: 30px;
  margin-left: 10px;
  width: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scaleX(1.3);
  }
  &:active {
    transform: scaleX(1);
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button<{ secondary?: boolean }>`
  background-color: ${(props) => (props.secondary ? '#FFF' : '#0F264C')};
  border-color: ${(props) => (props.secondary ? '#0F264C' : 'none')};
  border-width: ${(props) => (props.secondary ? '1px' : 'none')};
  padding: 0.45em;
  border-radius: 8px;
  color: ${(props) => (props.secondary ? '#0F264C' : '#FFF')};
  width: 40%;
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const FollowHeading = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 28px;
  margin: 0;
  padding: 0;
`;

export const FollowDescription = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const RestaurantSearchContainer = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
`;
