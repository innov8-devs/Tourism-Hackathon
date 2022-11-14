import { Box, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
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
    gap: 2rem;
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
  justify-content: space-between;
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
  margin: 0 0 24px 0;
  position: relative;
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
  justify-content: space-around;
  margin: 0 0 28px 0;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  margin-right: 25px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  text-transform: capitalize;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  margin: 0 0 14px 0;
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

export const BtnContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 36px auto;
  position: relative;
  @media (max-width: 980px) {
    justify-content: center;
  }
`;

export const BlockDropdown = styled.div`
  width: 143px;
  z-index: 10;
  padding: 5px 0;
  background: #ffffff;
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.15);
  position: absolute;
  right: 0;
  top: 50px;
  button {
    text-transform: capitalize;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 152%;
    background: transparent;
    margin: 0;
    border: none;
    padding: 15px 10px 10px 10px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    color: #000000;
    &:hover {
      background: #fff4e7cc;
    }
    &:active {
      background: #fff4e7cc;
    }
  }
`;

export const FollowButton = styled.button<FollowTextProps>`
  width: 80%;
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

export const Certificate = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  color: #0f264c;
  width: 350px;
  margin: 0 auto 28px auto;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
export const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 980px) {
    width: 320px;
    margin: 0 auto;
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
  cursor: pointer;
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

export const SignOutFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px;
  @media (max-width: 980px) {
    display: none;
  }
`;

export const SignOutMobile = styled(SignOutFooterContainer)`
  display: none;
  @media (max-width: 980px) {
    text-align: center;
    display: block;
    margin-bottom: 20px;
  }
`;

export const DpSkeleton = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-right: 20px;
  background: #dadada87;
`;

export const NameSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    width: 46%;
    height: 30px;
    border-radius: 8px;
    background: #dadada87;
    margin-bottom: 15px;
  }
`;

export const HandleSkeleton = styled.div`
  height: 20px;
  width: 50%;
  border-radius: 8px;
  background: #dadada87;
  margin-bottom: 15px;
`;

export const AddressSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const AddressText = styled.div`
  height: 20px;
  width: 70%;
  border-radius: 8px;
  background: #dadada87;
`;

export const AddressPin = styled.div`
  height: 20px;
  width: 10%;
  margin-right: 10px;
  border-radius: 8px;
  background: #dadada87;
`;

export const AboutSkeleton = styled.div`
  width: 350px;
  margin: 0 auto 30px auto;
  div {
    height: 10px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: 22px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #bc2a8d;
    transform: scale(1.2);
  }
`;

export const Twitter = styled(FiTwitter)`
  cursor: pointer;
  font-size: 22px;
  transition: all 0.5s;
  &:hover {
    color: #1da1f2;
    transform: scale(1.2);
  }
`;

export const Share = styled(BsThreeDots)`
  cursor: pointer;
  transition: all 0.5s;
  font-size: 24px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  margin: 18px 0 0 0;
`;

export const FollowersSkeleton = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 15px auto;
  div {
    height: 40px;
    width: 28%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
  p {
    height: 10px;
    width: 10%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #dadada87;
  }
`;

export const Portal = styled.div`
  width: 100%;
  height: 100%;
`;

export const SpecificInterest = styled.div`
  background: rgba(255, 153, 22, 0.08);
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #ff9916;
  height: 100%;
  flex: 1;
  text-align: center;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const SetUpText = styled(Text)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */

  color: #151515;
`;

export const SetupCard = styled(Box)<{ done?: boolean; opposite?: boolean }>`
  width: 160px;
  height: 100px;
  cursor: pointer;

  background: ${(props) =>
    !props.opposite
      ? `conic-gradient(from 180deg at 50% 50%, #0055ff -125.86deg,#ff9916 38.52deg,#0055ff 234.14deg,#ff9916 398.52deg)`
      : `conic-gradient(from 180deg at 50% 50%, #FF9916 -63.75deg, #0055FF 13.12deg, #FF9916 296.25deg, #0055FF 373.13deg)`};
  border-radius: 7px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: ${(props) => props.done && '"DONE"'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    /* or 14px */

    color: #151515;
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #fff;
    background-color: #4bf97a;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const SetupCardDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  /* or 14px */

  color: #151515;
  position: absolute;
  bottom: -20px;
  left: 0px;
`;
