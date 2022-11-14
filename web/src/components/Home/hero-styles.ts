import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const HeroSection = styled.section`
  background-color: #fff;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 1300px) {
    padding: 0 20px;
  }
`;

export const LeftHero = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 55%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const RightHero = styled.div`
  flex: 1 45%;
  display: flex;
  align-items: flex-end;
  border-radius: 8px;
  box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px, rgba(255, 153, 22, 0.2) 15px 15px,
    rgba(255, 153, 22, 0.1) 20px 20px, rgba(255, 153, 22, 0.05) 25px 25px;
  animation: rocket 1s alternate infinite;
  @media (max-width: 900px) {
    display: none;
  }

  @keyframes rocket {
    0% {
      transform: scale(0.99);
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px;
    }
    20% {
      transform: scale(0.99);
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px;
    }
    40% {
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px;
    }
    60% {
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px, rgba(246, 183, 22, 0.2) 15px 15px;
    }
    80% {
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px, rgba(246, 183, 22, 0.2) 15px 15px,
        rgba(246, 183, 22, 0.1) 20px 20px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(255, 153, 22, 0.4) 5px 5px, rgba(255, 153, 22, 0.3) 10px 10px, rgba(255, 153, 22, 0.2) 15px 15px,
        rgba(255, 153, 22, 0.1) 20px 20px, rgba(255, 153, 22, 0.05) 25px 25px;
    }
  }
`;

export const HeroPrimaryTitle = styled.h1`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 500;
  font-size: 5rem;
  line-height: 120%;
  margin-bottom: 20px;
  color: #1a1a1a;
  margin: 0px;
  width: 100%;

  z-index: 4;

  @media (max-width: 1300px) {
    font-size: 73px;
  }

  @media (max-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 60px;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 36px;
  }
`;

export const HeroSecondaryTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #000000;
  margin: 0 0 20px;
  width: 100%;
  z-index: 4;
  margin-bottom: 20px;

  @media (max-width: 1300px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    padding-right: 10%;
  }

  @media (max-width: 900px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const HeroPlacesButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 4;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const HeroLocationContainer = styled.div`
  display: none;
  z-index: 4;

  @media (max-width: 900px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #bbc3c9;
    box-sizing: border-box;
    padding: 16px;
    width: 343px;
    height: 128px;
  }
`;
export const InpuContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const SearchDropdown = styled.div`
  max-height: 300px;
  width: 602px;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;

  position: absolute;
  z-index: 100;
  top: 57px;
  left: 0;
  padding: 10px;
  border: 1px solid #ff991645;
  border-radius: 8px;
  background: rgba(236, 201, 147, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 640px) {
    width: 90vw;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
    height: 100px;
    width: 100%;
    padding: 10px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease-in-out;
    background-color: white;

    &:hover {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
    @media (max-width: 500px) {
      height: auto;
    }
  }
  div {
    height: 100%;
  }
`;

export const LeftTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0 0 10px 0;
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

export const SearchImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50px;
  margin-right: 30px;
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
  width: 100%;
  margin: 0;
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

export const NoResultContainer = styled.li`
  justify-content: center;
`;

export const NoResult = styled.p`
  font-weight: normal;
  font-size: 20px;
  text-align: center;
`;

export const FilterContainer = styled.button<{ bg: string }>`
  background: ${(props) => props.bg};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 16px;
  gap: 4px;
  height: 40px;
  cursor: pointer;
  z-index: -1;
  &:hover {
    background-color: rgba(0, 66, 105, 0.3);
  }
  &:active {
    background-color: rgba(0, 66, 105, 0.7);
  }
`;
