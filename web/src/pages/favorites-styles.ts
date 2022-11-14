import styled from 'styled-components';

export const FavoritesHeader = styled.h1`
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
  margin-bottom: 50px;
`;

export const MainContainer = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FavoriteSectionTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;

  color: #343434;
  margin-bottom: 16px;
`;

export const RightContent = styled.div`
  background-color: #fbfbfb;
  width: calc(100% - 360px);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  flex: 7;
  // height: 1092px;
`;

export const RestaurantRow = styled.div`
  display: flex;
  overflow-x: scroll;
  width: fit-content;
  gap: 40px;
`;
