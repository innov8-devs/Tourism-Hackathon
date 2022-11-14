import React from 'react';

import Link from 'next/link';
import { IoBookmarksOutline } from 'react-icons/io5';

import styles from '../styles/Home.module.css';
import { restaurantLink } from '../utils/helpers';

import {
  CardImg,
  Cont,
  EmptyText,
  FavTag,
  Left,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Location,
  NextIcon,
  Pin,
  RecCard,
  RecCardInnerContainer,
  RecCardOuterContainer,
  RecColumn,
  ReviewTop,
  RightStar,
  Section,
  SimilarPlacesHeader,
} from './similarplacesslider-styles';
import StarRating from './StarRating';

//<link rel="stylesheet" href="carousel.css" />;

const SimilarPlacesSlider = ({ similarData }) => {
  const scrollRight = () => {
    const right = document.querySelector(Cont);
    right.scrollBy({
      top: 0,
      left: 600,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {similarData?.findSimilarRestaurants ? (
        <Section>
          <SimilarPlacesHeader style={{ marginLeft: 20 }}>Similar Places</SimilarPlacesHeader>
          <Cont>
            {similarData?.findSimilarRestaurants?.map((restaurant) => (
              <RecColumn key={restaurant.name}>
                <RecCard>
                  <FavTag>
                    <IoBookmarksOutline className={styles.tag} />
                  </FavTag>
                  <CardImg src={restaurant.logo} alt={restaurant.name} />
                  <ReviewTop>
                    <RightStar>
                      <StarRating
                        count={5}
                        size={20}
                        value={restaurant.rating}
                        activeColor={'#ff9916'}
                        inactiveColor={'#ddd'}
                      />
                    </RightStar>
                  </ReviewTop>
                  <RecCardOuterContainer>
                    <RecCardInnerContainer>
                      <Left>
                        <Link href={restaurantLink(restaurant.name, restaurant.shortId)} passHref>
                          <LeftTitle key={restaurant.shortId}>{restaurant.name.toLowerCase()}</LeftTitle>
                        </Link>
                        <LeftSubTitle>{restaurant?.description}</LeftSubTitle>
                      </Left>
                    </RecCardInnerContainer>
                    <LeftLocation>
                      <Pin style={{ fill: '#ff9916 !important' }} />
                      <Location>{restaurant.address}</Location>
                    </LeftLocation>
                  </RecCardOuterContainer>
                </RecCard>
              </RecColumn>
            ))}
          </Cont>
          <NextIcon onClick={scrollRight} src="/images/nextIcon.png" alt="nextIcon" />
        </Section>
      ) : (
        <EmptyText>No Similar Restaurants</EmptyText>
      )}
    </>
  );
};

export default SimilarPlacesSlider;
