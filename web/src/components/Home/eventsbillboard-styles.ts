import { BiCalendar } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled, { css } from 'styled-components';

type IBoard = {
  index: number;
};

export const EventsBillBoardCon = styled.section`
  width: 100%;
  min-height: 536px;
  position: relative;
  // background: url(/images/BillBoard.png) no-repeat;
  // background-size: 100% 100%;

  height: 536px;

  @media (max-width: 1200px) {
    min-height: 536px;
  }
  @media (max-width: 1050px) {
    min-height: 536px;
  }
  @media (max-width: 900px) {
      height: 450px
    min-height: 450px;
  }
  @media (max-width: 650px) {
      height: 450px
    min-height: 450px;
  }
  @media (max-width: 550px) {
      height: 300px
    min-height: 300px;
  }
  @media (max-width: 400px) {
      height: 139.58px
    min-height: 139.58px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(0.2px);
`;

export const BillBoardText = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  padding: 3rem;
  gap: 1rem;
  z-index: 1;
`;

export const BillBoardTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  font-weight: bold;
  line-height: 100%;
  color: white;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 65px;
  }
  @media (max-width: 1050px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
  }

  @media (max-width: 689px) {
    font-size: 45px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
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
  gap: 0.5rem;
  padding-left: 3rem;
  font-size: 1.5rem;
`;

export const Location = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20.4714px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 0.365562px;
  color: white;
  text-transform: capitalize;
  width: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const Pin = styled(FaMapMarkerAlt)`
  fill: #ff9916 !important;
  align-self: center;

  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 2px


  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }
`;

export const Mail = styled(BiCalendar)`
  fill: #ff9916 !important;
  align-self: center;
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

export const ButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 3rem;
  gap: 1rem;
`;

export const TicketButton = styled.button`
  background: #ff9916;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1rem;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const BoardStyle = css<IBoard>`
  height: 536px;
  background: url(${(props) => `/images/events${props.index + 1}.jpg`}) no-repeat center center;
  background-size: cover;
  background-color: gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5)));
`;
