import styled from 'styled-components';

export const ImgContainer = styled.div`
  cursor: pointer;
  margin: 0 24px 0 0;
  border-radius: 8px;
  position: relative;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 240px;
  height: 270px;
  cursor: pointer;
  border-radius: 8px;
`;

export const CaptionContainer = styled.div`
  width: 240px;
  height: 60px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(100px);
  position: absolute;
  bottom: 3px;
  left: 0;
  border-radius: 0 0 8px 8px;
`;

export const Caption = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #ff9916;
  margin: 10px 0 4px 10px;
`;

export const CaptionTwo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin: 0 0 10px 10px;
`;
