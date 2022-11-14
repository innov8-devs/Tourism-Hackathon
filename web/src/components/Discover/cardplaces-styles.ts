import styled from 'styled-components';

interface FollowTextProps {
  follow?: boolean;
}

export const CardPlacesContainer = styled.div`
  margin: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px 8px 0 0;
  width: 350px;
  height: 240px;
  @media (max-width: 500px) {
    width: 320px;
  }
`;

export const CardImg = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`;

export const Right = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4b4b4b;
  width: 50%;
  height: 34px;
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

export const CardPlacesContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px;
`;

export const Left = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardPlacesTitle = styled.h1`
  margin: 0 0 4px 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #0f264c;
  cursor: pointer;
`;

export const Details = styled.p`
  margin: 0 0 8px 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #402b2b;
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ad6600;
  margin: 0;
`;

export const FollowBtn = styled.button<FollowTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: '100px';
  background: ${({ follow }) => (follow ? '#0f264c' : '#ffffff')};
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  animation: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const FollowText = styled.p<FollowTextProps>`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: ${({ follow }) => (follow ? '#ffffff' : '#0f264c')};
  margin-right: 4px;
`;

export const AddIcon = styled.img`
  width: 18px;
  height: 18px;
`;
