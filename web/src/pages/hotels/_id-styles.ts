import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 25px auto 0 auto;
  display: flex;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  margin-bottom: 5vh;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
