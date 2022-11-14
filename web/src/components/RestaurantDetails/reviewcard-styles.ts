import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const RevCard = styled.div`
  border-radius: 8px;
  width: 100%;
  position: relative;
  padding: 12px;
  background: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 980px) {
    padding: 12px 20px;
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
  width: 130px;
  height: 130px;
  cursor: pointer;
  margin-right: 10px;
  @media (max-width: 950px) {
    width: 100%;
    height: 138px;
  }
  @media (max-width: 840px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 138px;
  }
`;

export const RevUserPic = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Avatar = styled(FaUserCircle)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  color: gray;
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
  width: max-content;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140px;
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
  margin: 0 8px 0 0;
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
  justify-content: flex-start;
  width: 200px;
`;

export const RevBottomRightText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #0f264c;
  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeNumber = styled.p`
  margin: 0;
`;

export const HorizontalRule = styled.hr`
  width: 15px;
  transform: rotate(90deg);
  color: #edf0fa;
`;

export const ShareIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ReviewIcon = styled.img`
  margin-right: 24px;
  cursor: pointer;
`;
