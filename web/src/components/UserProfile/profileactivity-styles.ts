import styled from 'styled-components';

export const ActivityContainer = styled.div`
  margin: 40px 0 0 0;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }
  @media (min-width: 500px) {
    height: 790px;
    overflow-y: scroll;
  }
`;

export const ActivityCard = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(78, 51, 0, 0.14);
  border-radius: 8px;
  cursor: pointer;
  margin: 10px auto 20px auto;

  padding: 10px;

  &:hover {
    box-shadow: 0px 2px 15px rgba(78, 51, 0, 0.14);
  }

  @media (max-width: 980px) {
    width: 97%;
  }
`;
export const InnerCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CardImg = styled.img`
  margin: 0 20px 0 0;
`;

export const Time = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(64, 43, 43, 0.7);
`;

export const Description = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(33, 33, 33, 0.9);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const NameContainer = styled.div`
  h6 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 8px 0;
    letter-spacing: 0.25px;
    color: #0f264c;
  }

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    margin: 0;
    color: #828282;
  }
`;
