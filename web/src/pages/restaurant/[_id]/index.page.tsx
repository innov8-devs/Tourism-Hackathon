import React, { useEffect, useMemo, useState } from 'react';

import { gql, useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Marker } from '@react-google-maps/api';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BsFilePdf, BsThreeDotsVertical } from 'react-icons/bs';
import Loadable from 'react-loadable';
import { useDispatch } from 'react-redux';
import { RWebShare } from 'react-web-share';

import { AUTH_TOKEN } from '../../../components/constants';
import Footer from '../../../components/Global/Footer';
import Header from '../../../components/Global/Header';
import GoogleMapcomponent from '../../../components/map/GoogleMapcomponent';
import ReportModal from '../../../components/ReportModal';
import Faq from '../../../components/RestaurantDetails/Faq';
import LoginModal from '../../../components/RestaurantDetails/LoginModal';
import Menu from '../../../components/RestaurantDetails/Menu';
import Photos from '../../../components/RestaurantDetails/Photos';
import RestaurantAbout from '../../../components/RestaurantDetails/RestaurantAbout';
import RestaurantsReview from '../../../components/RestaurantDetails/RestaurantsReview';
import SimilarPlacesSlider from '../../../components/SimilarPlacesSlider';
import StarRating from '../../../components/StarRating';
import {
  REPORT_BUSINESS,
  RESTAURANT_DETAIL_QUERY,
  REVIEWS_QUERY,
  SIMILAR_PLACES_QUERY,
} from '../../../graphQL/queries';
import { emptyCart } from '../../../redux/cartRedux';
import styles from '../../../styles/Home.module.css';
import { getRestaurantId } from '../../../utils/helpers';

import {
  Address,
  AddressContainer,
  BottomBox,
  BoxA,
  BoxB,
  Button,
  ButtonsContainer,
  DetailsContainer,
  Divider,
  FollowContainer,
  FollowDescription,
  FollowHeading,
  Handle,
  ImageContainer,
  LeftBox,
  LocationIcon,
  MainWrapper,
  Name,
  NavigationButton,
  NavigationButtonContainer,
  ProfileContainer,
  ProfileImg,
  Rating,
  RatingsContainer,
  RestaurantImg,
  RestaurantImgContainer,
  RightBox,
  StarContainer,
  Verified,
} from './index-styles';

const Tour = Loadable({
  loader: () => import('reactour'),
  loading: () => null,
});

export const FOLLOW_RESTAURANT_MUTATION = gql`
  mutation FollowRestaurant($id: ID!) {
    followRestaurant(id: $id) {
      status
    }
  }
`;

export const UNFOLLOW_RESTAURANT_MUTATION = gql`
  mutation UnFollowRestaurant($id: ID!) {
    unfollow(id: $id) {
      status
    }
  }
`;

const RestaurantDetails = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [followId, setFollowId] = useState('');
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { isOpen: isOpenReport, onToggle: onToggleReport, onClose: onCloseReport } = useDisclosure();

  const { onToggle: onToggleTutorial, isOpen: isTourOpen, onClose: closeTour } = useDisclosure();
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const toast = useToast();

  // eslint-disable-next-line no-unused-vars
  const [followRestaurant, { loading: followingProcess }] = useMutation(FOLLOW_RESTAURANT_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: RESTAURANT_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ status: 'success', title: 'Successfully followed Restaurant' });
    },
  });
  const [reportBusiness] = useMutation(REPORT_BUSINESS);
  const [unFollowRestaurant] = useMutation(UNFOLLOW_RESTAURANT_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: RESTAURANT_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ status: 'success', title: 'Successfully unfollowed Restaurant' });
    },
  });

  useEffect(() => {
    setToggleState(parseInt(router?.query?.tab as string) || 1);
    if (router?.query?.startTour == 'true') {
      onToggleTutorial();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query]);

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  function getUser() {
    if (router.isReady) {
      const userID = router.query._id;
      if (userID) {
        return userID;
      }
      return null;
    }
  }

  const reportRestaurant = (reportType: string) => {
    reportBusiness({
      variables: {
        data: {
          reportType,
          businessId: restaurantData?.findRestaurantById?._id,
        },
      },
    });
  };

  const token = localStorage.getItem(AUTH_TOKEN);

  const handleFollow = async (id, mode = 1) => {
    if (!token) {
      setModal(true);
      return null;
    } else {
      setFollowId(id);
      if (mode == 1) {
        await followRestaurant({
          variables: {
            id,
          },
        });
      } else {
        await unFollowRestaurant({
          variables: {
            id,
          },
        });
      }
      router.reload();
    }
  };

  const { data: restaurantData } = useQuery(RESTAURANT_DETAIL_QUERY, {
    variables: {
      _id: getRestaurantId(getUser() as string),
    },
  });

  const { data: reviews } = useQuery(REVIEWS_QUERY, {
    variables: { restaurantId: restaurantData?.findRestaurantById._id },
  });

  const { data: similarData } = useQuery(SIMILAR_PLACES_QUERY, {
    variables: { id: restaurantData?.findRestaurantById._id },
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const handleBack = () => {
  //   router.back();
  // };

  const location = restaurantData?.findRestaurantById?.location;

  const restaurantRating = useMemo(() => {
    const rating = (
      reviews?.findReviews.length > 0
        ? reviews?.findReviews?.reduce((a, b) => ({ ...a, rating: a.rating + b.rating })).rating /
          reviews?.findReviews?.length
        : 5
    ).toFixed(1);
    return rating;
  }, [reviews?.findReviews]);

  return (
    <>
      <Head>
        <meta property="og:title" content={restaurantData?.findRestaurantById?.name} />
        <meta property="og:description" content={restaurantData?.findRestaurantById?.description} />
        <meta property="title" content={restaurantData?.findRestaurantById?.name} />
        <meta property="description" content={restaurantData?.findRestaurantById?.description} />
      </Head>
      <Header />
      <MainWrapper>
        <LeftBox>
          <BoxA>
            <Stack>
              <ImageContainer>
                <ProfileContainer>
                  {restaurantData?.findRestaurantById.verified ? <Verified src="/images/verified.png" /> : null}
                  <ProfileImg src={restaurantData?.findRestaurantById.logo} />
                </ProfileContainer>
                <DetailsContainer>
                  <Name>{restaurantData?.findRestaurantById.name}</Name>
                  <Handle>@{restaurantData?.findRestaurantById.name.toLowerCase().split(' ').join('_')}</Handle>
                  <AddressContainer>
                    <LocationIcon />
                    <Address>{restaurantData?.findRestaurantById.address}</Address>
                  </AddressContainer>
                </DetailsContainer>
              </ImageContainer>

              <ButtonsContainer>
                <Button
                  style={{ backgroundColor: restaurantData?.findRestaurantById?.youFollow && '#ff9916' }}
                  onClick={() =>
                    handleFollow(
                      restaurantData?.findRestaurantById?._id,
                      restaurantData?.findRestaurantById?.youFollow ? 2 : 1,
                    )
                  }
                >
                  {restaurantData?.findRestaurantById?.youFollow ? 'Following' : 'Follow'}
                </Button>
                <Button
                  secondary
                  onClick={() => {
                    router.push(`/restaurant/${router.query._id}/reservation`);
                  }}
                >
                  Reservations
                </Button>
                <Popover
                  returnFocusOnClose={false}
                  isOpen={isOpen}
                  onClose={onClose}
                  placement="right"
                  closeOnBlur={false}
                  matchWidth
                >
                  <PopoverTrigger>
                    <Box>
                      <TagLeftIcon onClick={onToggle} fill="#0F264C" boxSize="30px" as={BsThreeDotsVertical} />
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent width={'100px'} padding={0}>
                    <PopoverBody>
                      <Flex flexDir={'column'}>
                        <RWebShare
                          data={{
                            text: `Checkout ${restaurantData?.findRestaurantById?.name} on Hightable`,
                            url: `https://hightable.africa${router.asPath}`,
                            title: 'Share Restaurant',
                          }}
                          onClick={() => {
                            onToggle();
                          }}
                        >
                          <Text
                            onClick={() => onClose()}
                            padding={2}
                            width={'100%'}
                            _hover={{ backgroundColor: '#eee' }}
                          >
                            Share
                          </Text>
                        </RWebShare>
                        <Text
                          onClick={() => {
                            onToggleReport();
                            onClose();
                          }}
                          padding={2}
                          width={'100%'}
                          _hover={{ backgroundColor: '#eee' }}
                        >
                          Report
                        </Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </ButtonsContainer>

              <RatingsContainer>
                <Rating>{restaurantRating.toString() !== 'NaN' ? restaurantRating : '5.0'}</Rating>
                <StarContainer>
                  <StarRating
                    count={5}
                    size={20}
                    value={Math.round(+restaurantRating) || 5}
                    activeColor={'#0F264C'}
                    inactiveColor={'#ddd'}
                  />
                </StarContainer>
              </RatingsContainer>

              <FollowDescription>
                {restaurantData?.findRestaurantById?.tags
                  ?.slice(0, 5)
                  .map((el) => el.name)
                  .join(', ')}
              </FollowDescription>

              <FollowContainer>
                <Stack alignItems={'center'}>
                  <FollowHeading>{restaurantData?.findRestaurantById?.followerCount || 0}</FollowHeading>
                  <FollowDescription>Followers</FollowDescription>
                </Stack>
                <Stack alignItems={'center'}>
                  <FollowHeading>{restaurantData?.findRestaurantById?.followingCount || 0}</FollowHeading>
                  <FollowDescription>Following</FollowDescription>
                </Stack>
                <a href={restaurantData?.findRestaurantById?.pdfMenu} target="_blank" rel="noreferrer">
                  <Tag
                    display={'flex'}
                    flexDirection={'column'}
                    padding={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    backgroundColor={'#fff'}
                    boxShadow={'md'}
                  >
                    <TagLeftIcon fill="#000" boxSize="40px" as={BsFilePdf} />
                    <TagLabel fontSize={'14px'}>Menu</TagLabel>
                  </Tag>
                </a>
              </FollowContainer>
            </Stack>
          </BoxA>
          {toggleState === 1 ? (
            <RestaurantImgContainer>
              <RestaurantImg src={restaurantData?.findRestaurantById.logo} />
              {/* <TourButton>Take a tour</TourButton> */}
            </RestaurantImgContainer>
          ) : (
            <BottomBox>
              <BoxB>
                {location && (
                  <GoogleMapcomponent
                    center2={{
                      lat: location?.latitude,
                      lng: location?.longitude,
                    }}
                  >
                    <Marker position={{ lat: location?.latitude, lng: location?.longitude }} />
                  </GoogleMapcomponent>
                )}
              </BoxB>
              {/* <BoxB1>
                <BoxB1Text>You are 1 hour, 15 minutes away from {restaurantData?.findRestaurantById.name}</BoxB1Text>
              </BoxB1> */}
            </BottomBox>
          )}
        </LeftBox>
        <RightBox>
          <NavigationButtonContainer>
            <NavigationButton id="about" active={toggleState === 1 ? true : false} onClick={() => toggleTab(1)}>
              About
            </NavigationButton>
            <NavigationButton id="menu" active={toggleState === 2 ? true : false} onClick={() => toggleTab(2)}>
              Menu
            </NavigationButton>
            <NavigationButton id="reviews" active={toggleState === 3 ? true : false} onClick={() => toggleTab(3)}>
              Reviews
            </NavigationButton>
            <NavigationButton id="photos" active={toggleState === 4 ? true : false} onClick={() => toggleTab(4)}>
              Photos
            </NavigationButton>
            <NavigationButton id="faq" active={toggleState === 5 ? true : false} onClick={() => toggleTab(5)}>
              FAQ
            </NavigationButton>
          </NavigationButtonContainer>
          <div>
            <div className={toggleState === 1 ? styles.activeContent : styles.content}>
              <RestaurantAbout data={restaurantData} />
            </div>
            <div className={toggleState === 2 ? styles.activeContent : styles.content}>
              <Menu menuData={restaurantData} />
            </div>
            <div className={toggleState === 3 ? styles.activeContent : styles.content}>
              <RestaurantsReview data={restaurantData} />
            </div>
            <div className={toggleState === 4 ? styles.activeContent : styles.content}>
              <Photos photosData={restaurantData} />
            </div>
            <div className={toggleState === 5 ? styles.activeContent : styles.content}>
              <Faq data={restaurantData} />
            </div>
          </div>
        </RightBox>
      </MainWrapper>
      <Divider />
      <SimilarPlacesSlider similarData={similarData} />
      <LoginModal onClose={() => setModal(false)} modal={modal} />
      <ReportModal onEnd={reportRestaurant} onClose={onCloseReport} isOpen={isOpenReport} />
      {typeof window !== 'undefined' && (
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => {
            closeTour();
            router.push('/');
          }}
          onAfterOpen={disableBody}
          onBeforeClose={enableBody}
        />
      )}
      <Footer />
    </>
  );
};

const steps = [
  {
    selector: '#about',
    content: 'View Details About A Restaurant',
  },
  {
    selector: '#menu',
    content: 'See the updated menu of a restaurant and order',
  },
  {
    selector: '#reviews',
    content: 'Decide whether a restaurant is worth coming to from the reviews',
  },
  {
    selector: '#photos',
    content: 'Take an in-web tour of the restaurant',
  },
  {
    selector: '#faq',
    content: 'View Frequently asked questions about the restaurant',
  },
];

export default RestaurantDetails;
