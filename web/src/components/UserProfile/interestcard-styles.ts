import styled from 'styled-components';

interface FollowTextProps {
  added?: boolean;
}

export const InterestCardontainer = styled.div`
  display: flex;
  padding: 10px 15px;
  width: 590px;
  height: 90px;
  margin: 0 10px 10px 10px;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  @media (max-width: 1050px) {
    width: 97%;
    margin: 0 auto 10px auto;
  }
  @media (max-width: 980px) {
    width: 510px;
    margin: 0 auto 10px auto;
  }
  @media (max-width: 560px) {
    width: 97%;
    margin: 0 auto 10px auto;
  }
`;

export const CardImg = styled.img`
  margin: 0 20px 0 0;
`;

export const TitleContainer = styled.div`
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.h6`
  margin: 0 0 8px 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.25px;
  color: #12121f;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #8a8a8a;
`;

export const AddButton = styled.button<FollowTextProps>`
  width: 120px;
  height: 40px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 980px) {
    margin: 0 20px 0 0;
  }
  color: ${({ added }) => (added ? '#fff' : '#0f264c')};
  background: ${({ added }) => (added ? '#0f264c' : '#fff')};
`;
