import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1600px;
  height: 540px;
  position: relative;
`;

export const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 8px;
  padding: 8px;
  height: 350px;

  @media (max-width: 900px) {
  }
`;

export const BoxA = styled.div`
  width: 360px;
  height: 470px;
  filter: drop-shadow(0px 4px 17px rgba(78, 51, 0, 0.1));
  border-radius: 8px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const BoxB = styled.div`
  margin-bottom: 12px;
  width: 360px;
  height: 300px;
  background: #ffffff;
  border-radius: 8px;
  p {
    text-align: left;
    margin-left: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #212121;
  }
  h3 {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #ff9916;
  }
`;

export const RightReviews = styled.span`
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
  margin: 0 0 0 4px;
`;

export const RightStars = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-left: 6px;
  @media (max-width: 900px) {
    margin-left: 10px;
  }
`;

export const Button = styled.div`
  width: 164px;
  height: 44px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
`;

export const ButtonDiv = styled.div`
  max-width: 1600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RestaurantName = styled.h3`
  text-align: left;
  margin-left: 6px;
  width: 50%;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.25px;
  }
`;

export const RecColumn = styled.div`
  float: left;
  width: 360px;
  margin: 0 10px;
  padding: 10px 10px;
  transition: all 0.3s ease-in-out;
`;

export const RecCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 360px;
  height: 400px;

  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RecCardInnerContainer = styled.div`
  text-align: left;
  margin: 0 0 10px 0;
`;

export const RecCardOuterContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 40%;
  height: 32px;
  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LeftTitle = styled.a`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
  text-transform: capitalize;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.25px;
  }
`;

export const LeftSubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin: 12px 0 0 0;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media (max-width: 900px) {
    color: #8a8a8a;
  }
`;

export const LeftLocation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Location = styled.p`
  text-align: left;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #666670;
  width: 100%;
  margin: 0;
`;

export const RightStar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin-left: 10px;
`;

export const RightReview = styled.p`
  font-weight: normal;
  font-size: 8px;
  color: #ffffff;
  margin: 0 0 0 4px;
`;

export const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #4b4b4b;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  position: absolute;
  top: 214px;
`;

export const CardImg = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 245px;
  object-fit: cover;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
  @media (max-width: 1100px) {
    margin-bottom: 8px;
  }
`;

export const Pin = styled(FaMapMarkerAlt)`
  fill: #ff9916 !important;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }
`;

export const FavTag = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: rgba(248, 248, 248, 0.25);
  backdrop-filter: blur(100px);
  border-radius: 50%;
`;

export const Cont = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  @media (max-width: 900px) {
    width: 100vw;
    overflow-x: scroll;
  }
`;

export const NextIcon = styled.img`
  position: absolute;
  top: 40%;
  right: 20px;
  cursor: pointer;
`;

export const EmptyText = styled.h6`
  font-size: 24px;
  color: #ff9916;
  text-align: center;
  padding: 0;
`;

export const SimilarPlacesHeader = styled.p`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  /* identical to box height, or 50px */

  display: flex;
  align-items: center;

  color: #343434;
`;
