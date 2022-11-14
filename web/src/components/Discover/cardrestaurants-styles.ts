import styled from 'styled-components';

export const RecColumn = styled.div`
  float: left;
  width: 33.3%;
  height: auto;
  margin: 0 auto;
  padding: 10px 10px;

  @media (max-width: 1200px) {
    width: 380px;
    display: block;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    width: 50%;
    display: block;
    margin-bottom: 20px;
  }
`;

export const RecCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RecCardInnerContainer = styled.div`
  padding: 0 0px 0px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 40%;
  height: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LeftTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 0;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.25px;
  }
`;

export const LeftSubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0px
  color: #000000;

  @media (max-width: 900px) {
    color: #8a8a8a;
  }
`;

export const LeftLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Location = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #666670;
`;

export const RightStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-left: 10px;
  }
`;

export const RightReview = styled.p`
  font-weight: normal;
  font-size: 12px;
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

  @media (min-width: 900px) {
    display: none;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.12));
`;

export const FavTag = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 5;
`;
