/* eslint-disable */
import { useContext, useEffect, useState } from 'react';

//import { gql, useLazyQuery } from '@apollo/client';
//import { Text } from '@chakra-ui/react';
import Image from 'next/image';
//import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { gql } from 'storejars-react-toolkit';

import CheersHero from '../../../public/images/Index.png';
//import defaultImage from '../../../public/images/logo.png';
import HeaderSearchContext from '../../state/HeaderSearchContext';
import styles from '../../styles/Home.module.css';
//import { concatAddress, optimizeImageIcon, restaurantLink } from '../../utils/helpers';
import CustomButton from '../Button';

import { HeroPrimaryTitle, HeroSecondaryTitle, HeroSection, InpuContainer, LeftHero, RightHero } from './hero-styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { AUTH_TOKEN } from '../constants';
import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  toast,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { FaBackward, FaStar } from 'react-icons/fa';
import { MdEdit, MdEvent, MdOutlineRateReview, MdPhoto, MdRestaurant } from 'react-icons/md';
import { BiHotel } from 'react-icons/bi';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW_MUTATION } from '../../graphQL/queries';
import { Rating, RatingsContainer, RatingsWrapper } from '../RestaurantDetails/restaurantsreview-styles';
import { Field } from 'formik';
import PhotosModal from './PhotosModal';
import MobileReviewModal from './MobileReviewModal';
import LoginModal from '../RestaurantDetails/LoginModal';
import CreateEventModal from './CreateEventModal';
const DivInput = dynamic(() => import('./DivInput'), { ssr: false });

export const RESTAURANTS_SEARCH_QUERY = gql`
  query searchRestaurants($term: String!, $limit: Int, $offset: Int) {
    searchRestaurants(term: $term, pagination: { skip: $offset, limit: $limit }) {
      _id
      name
      email
      telephone
      address
      logo
      description
      url
      rating
      reviewCount
    }
  }
`;
export const CUSTOMER_SEARCH_QUERY = gql`
  query searchCustomers($term: String!, $limit: Int, $offset: Int) {
    searchCustomers(text: $term, pagination: { skip: $offset, limit: $limit }) {
      _id
      username
      firstName
      lastName
      profileImage
      email
      telephone
      about
      address
    }
  }
`;

export const EVENTS_SEARCH_QUERY = gql`
  query searchEvents($term: String!, $limit: Int, $offset: Int) {
    searchEvents(text: $term, pagination: { skip: $offset, limit: $limit }) {
      _id
      title
      host
      ownerType
      likes
      address {
        street
        city
        state
        country
      }
      description
      images
    }
  }
`;

const Hero = ({ onToggle }) => {
  //const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const toast = useToast();
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);

  const { width } = useWindowDimensions();
  const [reviewText, setReviewText] = useState('');
  const [mentions, setMentions] = useState([]);

  const [createReview, { loading }] = useMutation(CREATE_REVIEW_MUTATION, {
    variables: {
      body: '',
      rating: null,
      businessId: '',
      businessType: 'restaurant',
      images: [],
    },
    onCompleted: () => {
      toast({
        title: 'Review Created',
        description: 'The review has been created and the restaurants have received it',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
  });
  const [rate, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const Router = useRouter();
  const token = localStorage.getItem(AUTH_TOKEN);

  const { isOpen, onClose, onToggle: onTogglePhotos } = useDisclosure();
  const { isOpen: isOpenReviewModal, onClose: onCloseReviewModal, onToggle: onToggleReviewModal } = useDisclosure();
  const { isOpen: modal, onClose: onCloseLogin, onToggle: onToggleLogin } = useDisclosure();
  const { isOpen: isOpenEvents, onClose: onCloseEvents, onToggle: onToggleEvents } = useDisclosure();

  const HSearchCTX = useContext(HeaderSearchContext);

  const handleSearch = (e) => {
    //setVisible(false);
    e.preventDefault();

    if (width >= 600) {
      if (!token) {
        onToggleLogin();
        return;
      }
      if (mentions.length <= 0) return;
      setSubmitted(true);
      mentions.map((mention) => {
        switch (mention?.type) {
          case 'restaurant':
            createReview({
              variables: {
                body: reviewText,
                businessId: mention?.id,
                businessType: 'restaurant',
                images,
                rating: rate,
              },
            });
        }
      });
      setImages([]);
      setRating(5);
      setReviewText('');
    } else {
      router.push('/discover');
    }
  };

  useEffect(() => {
    HSearchCTX.handleShowHeader(inView);
  }, [HSearchCTX, inView]);

  return (
    <HeroSection
      onClick={() => {
        /*setVisible(false)*/
      }}
    >
      <LeftHero>
        <div style={{ zIndex: '4' }}>
          <HeroPrimaryTitle>
            Welcome To The <span style={{ color: '#FF9916' }}>HighTable </span> Side of Life.
          </HeroPrimaryTitle>
          <HeroSecondaryTitle style={{ marginTop: width < 600 && '20px', marginBottom: '10px' }}>
            Experiencing the best of Africa starts here. Discover where to go and{' '}
            <span onClick={onToggle} style={{ color: '#0055ff', cursor: 'pointer', fontSize: '18px', fontWeight: 500 }}>
              what to do
            </span>
            , and connect with local communities in just a few clicks.
          </HeroSecondaryTitle>
          <HeroSecondaryTitle style={{ fontStyle: 'italic' }}>Ready, set, discover!</HeroSecondaryTitle>
        </div>
        <form
          ref={ref}
          onSubmit={handleSearch}
          style={{ marginBottom: width < 600 && 0 }}
          className={styles.heroForm}
          action=""
        >
          <InpuContainer>
            {width >= 600 && (
              <>
                <DivInput
                  submitted={submitted}
                  setReviewText={setReviewText}
                  mentions={mentions}
                  setMentions={setMentions}
                  setSubmitted={setSubmitted}
                />
                <RatingsWrapper style={{ marginBottom: 0 }}>
                  {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;

                    return (
                      <RatingsContainer key={index}>
                        <label>
                          <Input
                            type="radio"
                            name="rating"
                            value={givenRating}
                            onClick={() => {
                              setRating(givenRating);
                            }}
                            style={{ display: 'none' }}
                          />
                          <Rating>
                            <FaStar
                              color={givenRating < rate || givenRating === rate ? 'orange' : 'rgb(192,192,192)'}
                              size={24}
                            />
                          </Rating>
                        </label>
                      </RatingsContainer>
                    );
                  })}
                </RatingsWrapper>
                <Flex mt={5} gap={2} flexWrap={'wrap'}>
                  <Button
                    onClick={() => {
                      if (!token) {
                        onToggleLogin();
                        return;
                      }
                      onTogglePhotos();
                    }}
                    backgroundColor={filter == 'Restaurants' ? 'rgba(0, 66, 105, 0.7)' : 'rgba(0, 66, 105, 0.07)'}
                    color={filter == 'Restaurants' ? '#fff' : '#000'}
                    padding={'0px 20px 0px 16px'}
                    borderRadius={'8px'}
                  >
                    <MdPhoto /> Photos <span color={'#FF9916'}>{images.length > 0 && `(${images.length})`}</span>
                  </Button>
                  <Button
                    onClick={() => {
                      if (!token) {
                        onToggleLogin();
                        return;
                      }
                      onToggleEvents();
                    }}
                    backgroundColor={filter == 'Events' ? 'rgba(0, 66, 105, 0.7)' : 'rgba(0, 66, 105, 0.07)'}
                    color={filter == 'Events' ? '#fff' : '#000'}
                    padding={'0px 20px 0px 16px'}
                    borderRadius={'8px'}
                  >
                    <BsFillCalendarEventFill /> Events
                  </Button>
                </Flex>
              </>
            )}
          </InpuContainer>
          {width > 600 ? (
            <CustomButton type="submit" small style={{ marginTop: 0, cursor: 'pointer', zIndex: -1 }}>
              Post
            </CustomButton>
          ) : (
            <CustomButton
              onClick={() => {
                router.push('/discover');
              }}
              type="submit"
              small
              style={{ marginTop: 0, cursor: 'pointer', zIndex: -1 }}
              id="discover"
            >
              Explore
            </CustomButton>
          )}
        </form>
      </LeftHero>
      <RightHero>
        <div className={styles.rightImagesContainer}>
          <Image placeholder="blur" layout="fill" className={styles.heroImage2} src={CheersHero} alt="heroImage" />
        </div>
      </RightHero>

      {width <= 600 ? (
        <Menu>
          <MenuButton
            as={Button}
            borderRadius={'50%'}
            bg={'#FF9916'}
            w={'50px'}
            h={'50px'}
            color={'#fff'}
            pos={'fixed'}
            bottom={'30px'}
            right={'30px'}
            zIndex={10000000000}
            disabled={isOpenReviewModal || isOpen || isOpenEvents}
          >
            <MdEdit />
          </MenuButton>
          <MenuList minWidth={'130px'}>
            <MenuItem
              icon={<MdOutlineRateReview />}
              onClick={() => {
                if (!token) {
                  onToggleLogin();
                  return;
                }
                onToggleReviewModal();
                onToggleEvents;
              }}
              width={'130px'}
            >
              <Text>Review</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                if (!token) {
                  onToggleLogin();
                  return;
                }
                onToggleEvents();
              }}
              icon={<MdEvent />}
              width={'130px'}
            >
              <Text>Event</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : null}
      <PhotosModal isOpen={isOpen} onClose={onClose} setRemoteImages={setImages} images={images} />
      <MobileReviewModal isOpen={isOpenReviewModal} onClose={onCloseReviewModal} />
      <LoginModal modal={modal} onClose={onCloseLogin} />
      <CreateEventModal isOpen={isOpenEvents} onClose={onCloseEvents} />
    </HeroSection>
  );
};

export default Hero;
