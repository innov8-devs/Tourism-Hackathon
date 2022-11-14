import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BusinessProfile from '../../components/Business/BusinessProfile';
import HotelAbout from '../../components/Business/Hotel/HotelAbout';
import HotelFaq from '../../components/Business/Hotel/HotelFAQ';
import HotelPhotos from '../../components/Business/Hotel/HotelPhotos';
import HotelsReview from '../../components/Business/Hotel/HotelReviews';
import Room from '../../components/Business/Hotel/Rooms';
import Footer from '../../components/Global/Footer';
import Header from '../../components/Global/Header';
import { FIND_ROOMS, HOTEL_DETAIL_QUERY } from '../../graphQL/queries';
import styles from '../../styles/Home.module.css';
import { getRestaurantId } from '../../utils/helpers';
import { LeftBox, NavigationButton, NavigationButtonContainer, RightBox } from '../restaurant/[_id]/index-styles';

import { CardContainer, MainWrapper } from './_id-styles';

const hotelImgs = [
  '/images/hotel1.png',
  '/images/hotel2.png',
  '/images/hotel3.png',
  '/images/hotel4.png',
  '/images/hotel5.png',
  '/images/hotel6.jpg',
  '/images/hotel7.jpg',
  '/images/hotel8.jpg',
  '/images/hotel9.jpg',
  '/images/hotel10.jpg',
  '/images/hotel11.jpg',
  '/images/hotel12.jpg',
];

const Hotel = () => {
  const [toggleState, toggleTab] = useState(1);
  const router = useRouter();
  const { term } = Object.fromEntries(
    router?.asPath
      ?.split('?')[1]
      ?.split('&')
      ?.map((el) => el.split('=')) || [],
  );

  const { data: hotel } = useQuery(HOTEL_DETAIL_QUERY, {
    variables: {
      _id: getRestaurantId((getUser() || term) as string),
    },
  });

  const { data: rooms } = useQuery(FIND_ROOMS, {
    variables: {
      hotelId: hotel?.findHotelById?._id,
    },
  });

  function getUser() {
    if (router?.isReady) {
      const userID = router?.query.id;
      if (userID) {
        return userID;
      }
      return null;
    }
  }
  return (
    <>
      <Header />
      <MainWrapper>
        <LeftBox>
          <BusinessProfile businessData={hotel?.findHotelById} labelText="Rooms" />
        </LeftBox>
        <RightBox>
          <NavigationButtonContainer>
            <NavigationButton active={toggleState === 1 ? true : false} onClick={() => toggleTab(1)}>
              About
            </NavigationButton>
            <NavigationButton active={toggleState === 2 ? true : false} onClick={() => toggleTab(2)}>
              Rooms
            </NavigationButton>
            <NavigationButton active={toggleState === 3 ? true : false} onClick={() => toggleTab(3)}>
              Reviews
            </NavigationButton>
            <NavigationButton active={toggleState === 4 ? true : false} onClick={() => toggleTab(4)}>
              Photos
            </NavigationButton>
            <NavigationButton active={toggleState === 5 ? true : false} onClick={() => toggleTab(5)}>
              FAQ
            </NavigationButton>
          </NavigationButtonContainer>
          <div>
            <div className={toggleState === 1 ? styles.activeContent : styles.content}>
              <HotelAbout data={hotel?.findHotelById} />
            </div>
            <div className={toggleState === 2 ? styles.activeContent : styles.content}>
              <CardContainer>
                {rooms?.findRooms.map(
                  (room, i) => room?.name && <Room img={hotelImgs[i % 12]} key={i} roomDetails={room} />,
                )}
              </CardContainer>
            </div>
            <div className={toggleState === 3 ? styles.activeContent : styles.content}>
              <HotelsReview hotel={hotel?.findHotelById} />
            </div>
            <div className={toggleState === 4 ? styles.activeContent : styles.content}>
              <HotelPhotos photosData={hotel?.findHotelById} />
            </div>
            <div className={toggleState === 5 ? styles.activeContent : styles.content}>
              <HotelFaq data={hotel?.findHotelById} />
            </div>
          </div>
        </RightBox>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Hotel;
