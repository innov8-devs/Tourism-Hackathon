import { Text } from '@chakra-ui/react';
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

export const RestaurantName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #0f264c;
`;

export const About = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  /* identical to box height, or 12px */

  /* Secondary Color */

  color: #4b4b4b;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height, or 108% */

  color: #0055ff;
`;

export const ReviewTypeText = styled(Text)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  /* identical to box height, or 140% */

  color: #1d1d1d;
`;

export const ReviewTypography = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 10px 0;
  overflow: hidden;
  height: 4em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
