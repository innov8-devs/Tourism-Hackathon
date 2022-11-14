import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0px 2px 0 0;
    color: rgba(255, 244, 231, 0.8);
    line-height: 100%;
    font-size: 14px;
    letter-spacing: -0.03em;
    color: skyblue;

    @media (max-width: 900px) {
      font-size: 8px;
    }
  }
  span {
    margin: 0px 8px 0 0;
    color: rgba(255, 244, 231, 0.8);
    line-height: 100%;
    font-size: 14px;
    letter-spacing: -0.03em;
    color: skyblue;

    @media (max-width: 900px) {
      font-size: 8px;
    }
  }
`;
