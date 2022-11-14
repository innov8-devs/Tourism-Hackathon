import React from 'react';

import { Box } from '@chakra-ui/react';

import FavoriteEvent from '../components/favorites/FavoriteEvent';
import FavoriteRestaurant from '../components/favorites/FavoriteRestaurant';
import Header from '../components/Global/Header';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';

import { FavoriteSectionTitle, FavoritesHeader, MainContainer, RestaurantRow, RightContent } from './favorites-styles';

const Favorites = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <SideMenu />
        <RightContent style={{ marginTop: '50px' }}>
          <FavoritesHeader>My Favorites</FavoritesHeader>
          <FavoriteSectionTitle>Restaurants</FavoriteSectionTitle>
          <Box
            width={'100%'}
            overflowX={'scroll'}
            sx={{
              '&::-webkit-scrollbar': {
                height: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C4C4C4',
                borderRadius: '5px',
              },
            }}
            marginBottom={10}
          >
            <RestaurantRow>
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
            </RestaurantRow>
          </Box>
          <FavoriteSectionTitle>Events</FavoriteSectionTitle>
          <Box
            width={'100%'}
            overflowX={'scroll'}
            sx={{
              '&::-webkit-scrollbar': {
                height: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C4C4C4',
                borderRadius: '5px',
              },
            }}
            marginBottom={10}
          >
            <RestaurantRow>
              <FavoriteEvent />
              <FavoriteEvent />
              <FavoriteEvent />
              <FavoriteEvent />
              <FavoriteEvent />
            </RestaurantRow>
          </Box>
          <FavoriteSectionTitle>Hotels</FavoriteSectionTitle>
          <Box
            width={'100%'}
            overflowX={'scroll'}
            sx={{
              '&::-webkit-scrollbar': {
                height: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C4C4C4',
                borderRadius: '5px',
              },
            }}
            marginBottom={10}
          >
            <RestaurantRow>
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
            </RestaurantRow>
          </Box>
          <FavoriteSectionTitle>Attractions</FavoriteSectionTitle>
          <Box
            width={'100%'}
            overflowX={'scroll'}
            sx={{
              '&::-webkit-scrollbar': {
                height: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C4C4C4',
                borderRadius: '5px',
              },
            }}
            marginBottom={10}
          >
            <RestaurantRow>
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
              <FavoriteRestaurant />
            </RestaurantRow>
          </Box>
        </RightContent>
      </MainContainer>
    </>
  );
};

export default Favorites;
