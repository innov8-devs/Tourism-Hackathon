import { BiCalendar } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
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
  display: flex;
  flex-direction: column;
  height: 510px;
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RecCardInnerContainer = styled.div`
  margin: 15px 0 10px 0;
`;

export const RecCardOuterContainer = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px 20px 20px;
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

export const LeftTitle = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;

  /* Text color */

  color: #333333;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
  text-transform: capitalize;

  width: 295px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;

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

export const CardImgCon = styled.div`
  border-radius: 8px 8px 8px 8px;
  width: 100%;
  height: 55%;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
  position: relative;
  @media (max-width: 1100px) {
    margin-bottom: 8px;
  }
`;

export const CardImg = styled.img`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 100%;
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
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Location = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.271719px;
  width: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const Pin = styled(FaMapMarkerAlt)<{ forget?: boolean }>`
  fill: ${(props) => !props.forget && '#ff9916 !important'};
  align-self: flex-end;

  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 2px;

  &:hover {
    transform: scaleY(1.1);
  }

  &:active {
    transform: scaleY(1);
  }
`;

export const Mail = styled(BiCalendar)`
  fill: #ff9916 !important;
  align-self: flex-end;
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
  gap: 1rem;
`;

export const TicketButton = styled.button<{ done?: boolean }>`
  border: 1px solid #333333;
  border-radius: 8px;
  background: ${(props) => (!props.done ? '#ffffff' : '#333333')};
  padding: 0.8rem 1rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => (props.done ? '#ffffff' : '#333333')};
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
    font-size: 0.9rem;
  }
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;
