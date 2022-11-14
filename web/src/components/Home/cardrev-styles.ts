import styled from 'styled-components';

export const RevColumn = styled.div`
  float: left;
  width: 50%;
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const RevCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  position: relative;
  padding: 12px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RevTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const RevTopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RevTopRightImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const RevAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;

export const RevUserContainer = styled.div`
  margin-left: 4px;
`;

export const RevUser = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25px;
  color: #0f264c;
  margin: 0 0 2px 0;
  cursor: pointer;
`;

export const RevComment = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  color: #4b4b4b;
  margin: 0;
`;

export const RevSecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  width: 100%;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  height: 32px;
  margin: 0 0 10px 0;
`;

export const RightStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ReviewWord = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #1d1d1d;
  margin: 0;
`;

export const ReviewLeftWord = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: #0055ff;
  margin: 0;
  cursor: pointer;
`;

export const ReviewTypography = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 0 0 4px 0;
`;

export const ReviewTypographyButton = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #8a8a8a;
  cursor: pointer;
  margin: 0 0 10px 0;
  cursor: pointer;
`;

export const RevBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #ffffff;
`;

export const RevBottomLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const RevBottomRightText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeNumber = styled.p`
  margin: 0;
`;
