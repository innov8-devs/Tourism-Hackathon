import { RiMapPinLine } from 'react-icons/ri';
import styled from 'styled-components';

export const RecColumnCon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  gap: 1rem;
  @media (max-width: 799px) {
    grid-template-columns: unset;
  }
`;

export const RecColumn = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  @media (max-width: 799px) {
    padding: unset;
  }
`;

export const RecCard = styled.div`
  box-shadow: 0px 1.8px 4px rgba(102, 102, 102, 0.25);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RecCardInnerContainer = styled.div`
  margin: 15px 0 30px 0;
  width: 100%;
`;

export const RecCardOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 20px 20px;

  @media (max-width: 800px) {
    height: 170x;
  }

  @media (max-width: 675px) {
    height: 170px;
  }
  @media (max-width: 500px) {
    height: auto;
  }
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

  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #666670;
  text-transform: capitalize;
  width: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const RightStar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 2px;
`;

export const RightReview = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
`;

export const ReviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 29px;
  background-color: #4b4b4b;
`;

export const CardImgCon = styled.div`
  border-radius: 8px 8px 8px 8px;
  width: 100%;
  height: 200px;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
  @media (max-width: 1100px) {
    margin-bottom: 8px;
  }
  position: relative;
`;

export const CardImg = styled.img`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
  @media (max-width: 1100px) {
    margin-bottom: 8px;
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

export const Pin = styled(RiMapPinLine)`
  fill: #666670 !important;
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

export const TourButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 36%;
  background: rgba(0, 0, 0, 0.4);
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
    background: rgba(0, 0, 0, 0.7);
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
