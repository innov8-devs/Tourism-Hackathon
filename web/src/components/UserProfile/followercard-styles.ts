import styled from 'styled-components';

interface FollowTextProps {
  follow?: boolean;
}

export const SecondaryContainer = styled.div`
  width: 47%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 12px;
  margin: 4px;
  background: #ffffff;
  box-shadow: 0px 0px 4px #fff4e7;
  border-radius: 8px;
  transition: 0.1s;
  float: left;
  height: 100px;

  &:hover {
    box-shadow: 0px 0px 16px #d2c0ac;
  }

  @media (max-width: 780px) {
    width: 100%;
    margin: 0 auto 20px auto;
  }
`;

export const ProfilePicture = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;

export const NameContainer = styled.div`
  width: 55%;
  margin: 6px 10px 0 0;
`;

export const Name = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #0f264c;
  margin: 0 0 4px 0;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 10px;
  line-height: 17px;
  color: #0f264c;
  margin: 0 0 4px 0;
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
  cursor: pointer;
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ad6600;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  width: '100px';
  height: '100%';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Date = styled.div`
  margin: 0 0 5px 0;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #979797;
`;

export const FollowBtn = styled.button<FollowTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: '100px';
  background: ${({ follow }) => (follow ? '#0f264c' : '#ffffff')};
  height: 32px;
  border: 1px solid #0f264c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 6px 0 0 0;
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
