import { Flex, useBoolean } from '@chakra-ui/react';
import Link from 'next/link';
import { GrMore } from 'react-icons/gr';
import { IoBookmarksOutline } from 'react-icons/io5';

import styles from '../../styles/Home.module.css';
import { RestuarantData } from '../../types/types';
import { hotelLink, optimizeImage, restaurantLink } from '../../utils/helpers';
import { RecButton, RecButtonText } from '../Discover/restaurant-styles';
import SkeletonCard from '../Skeleton/Skeleton';
import StarRating from '../StarRating';

import {
  CardImg,
  CardImgCon,
  FavTag,
  Left,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Location,
  Pin,
  RecCard,
  RecCardInnerContainer,
  RecCardOuterContainer,
  RecColumn,
  RecColumnCon,
  ReviewTop,
  RightReview,
  RightStar,
  TourButton,
} from './cardrec-styles';

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

const CardRec = ({
  visible,
  data,
  loading,
  error,
  seeMore,
  seeLess,
}: {
  visible: number;
  data: RestuarantData[];
  loading: boolean;
  error: any;
  seeMore?: () => void;
  seeLess?: () => void;
}) => {
  const [more, setMore] = useBoolean(true);

  if (loading) return <SkeletonCard />;
  if (error) return <SkeletonCard />;

  return (
    <>
      <RecColumnCon>
        {data?.slice(0, visible).map((restaurant, index) => (
          <RecColumn key={index}>
            <RecCard>
              <FavTag>
                <IoBookmarksOutline className={styles.tag} />
              </FavTag>
              <CardImgCon>
                <Link
                  href={`${
                    restaurant.__typename == 'Hotel'
                      ? hotelLink(restaurant.name, restaurant.shortId)
                      : restaurantLink(restaurant.name, restaurant.shortId)
                  }?tab=4`}
                  passHref
                >
                  <CardImg
                    src={restaurant.logo ? optimizeImage(restaurant.logo) : hotelImgs[index % 12]}
                    alt={restaurant.name}
                  />
                </Link>
                <Link
                  href={`${
                    restaurant.__typename == 'Hotel'
                      ? hotelLink(restaurant.name, restaurant.shortId)
                      : restaurantLink(restaurant.name, restaurant.shortId)
                  }?tab=4`}
                  passHref
                >
                  <TourButton>Take a tour</TourButton>
                </Link>
              </CardImgCon>
              <RecCardOuterContainer>
                <RecCardInnerContainer>
                  <Left>
                    <Flex w={'100%'} justifyContent={'space-between'}>
                      <Link
                        href={
                          restaurant.__typename == 'Hotel'
                            ? hotelLink(restaurant.name, restaurant.shortId)
                            : restaurantLink(restaurant.name, restaurant.shortId)
                        }
                        passHref
                      >
                        <LeftTitle key={restaurant.shortId}>{restaurant.name.toLowerCase()}</LeftTitle>
                      </Link>
                      <Link
                        href={`${
                          restaurant.__typename == 'Hotel'
                            ? hotelLink(restaurant.name, restaurant.shortId)
                            : restaurantLink(restaurant.name, restaurant.shortId)
                        }?tab=3`}
                        passHref
                      >
                        <ReviewTop>
                          <RightStar>
                            <StarRating
                              count={5}
                              size={12}
                              value={restaurant.rating || 5}
                              activeColor={'#ff9916'}
                              inactiveColor={'#ddd'}
                            />
                            <RightReview>{`${restaurant.reviewCount} Reviews`}</RightReview>
                          </RightStar>
                        </ReviewTop>
                      </Link>
                    </Flex>
                    <Link
                      href={`${
                        restaurant.__typename == 'Hotel'
                          ? hotelLink(restaurant.name, restaurant.shortId)
                          : restaurantLink(restaurant.name, restaurant.shortId)
                      }`}
                      passHref
                    >
                      <LeftSubTitle>{restaurant?.description}</LeftSubTitle>
                    </Link>
                  </Left>
                </RecCardInnerContainer>

                <Link
                  href={`${
                    restaurant.__typename == 'Hotel'
                      ? hotelLink(restaurant.name, restaurant.shortId)
                      : restaurantLink(restaurant.name, restaurant.shortId)
                  }`}
                  passHref
                >
                  <LeftLocation>
                    <Link href={restaurantLink(restaurant.name, restaurant.shortId)} passHref>
                      <Pin style={{ fill: '#DADADA !important' }} />
                    </Link>
                    <Location>{restaurant.address.toLowerCase()}</Location>
                  </LeftLocation>
                </Link>
              </RecCardOuterContainer>
            </RecCard>
          </RecColumn>
        ))}
      </RecColumnCon>
      {seeMore && (
        <RecButton
          onClick={() => {
            more ? seeMore() : seeLess();
            setMore.toggle();
          }}
        >
          <GrMore />
          <RecButtonText>{more ? 'See more' : 'See less'}</RecButtonText>
        </RecButton>
      )}
    </>
  );
};

export default CardRec;
