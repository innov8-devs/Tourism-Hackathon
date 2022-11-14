import React, { useEffect, useMemo, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Marker } from '@react-google-maps/api';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { monthsShort, weekdaysShort } from 'moment';
import { useRouter } from 'next/router';
import 'react-calendar/dist/Calendar.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import BookingModal from '../../../components/BookingModal';
import Calendar from '../../../components/Calendar';
import { AUTH_TOKEN } from '../../../components/constants';
import Footer from '../../../components/Global/Footer';
import Header from '../../../components/Global/Header';
import None from '../../../components/Global/None';
import Payment from '../../../components/Global/Payment';
import LoginComponent from '../../../components/Login';
import GoogleMapcomponent from '../../../components/map/GoogleMapcomponent';
// import Payment from '../../../components/Payment';
import ReservationModal from '../../../components/ReservationModal';
import LoginModal from '../../../components/RestaurantDetails/LoginModal';
import SimilarPlacesSlider from '../../../components/SimilarPlacesSlider';
import Spinner from '../../../components/Spinner';
import config from '../../../config';
import {
  CREATE_PAYMENT_INTENT,
  DELETE_RESERVATION,
  FIND_ALL_SPACES,
  RESTAURANT_DETAIL_QUERY,
  SIMILAR_PLACES_QUERY,
} from '../../../graphQL/queries';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { getRestaurantId, range } from '../../../utils/helpers';

import {
  Address,
  AddressContainer,
  BottomBox,
  BoxA,
  BoxB,
  DetailsContainer,
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
  RestaurantImg,
  RestaurantImgContainer,
  RightBox,
  Verified,
} from './index-styles';
import {
  BookingButton,
  CancelButton,
  Card,
  GuestsButton,
  Label,
  MinimumSpend,
  ReservationButton,
  SearchButton,
  SpaceDescription,
  SpaceTitle,
  SuccessCircle,
  SuccessContainer,
  SuccessText,
  SummaryButton,
  Value,
} from './reservation-styles';

const allTimes2 = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const Reservation = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { isOpen: isOpenTime, onToggle: onToggleTime, onClose: onCloseTime } = useDisclosure();
  const { isOpen: isOpenDate, onToggle: onToggleDate, onClose: onCloseDate } = useDisclosure();
  const [toggleState, toggleTab] = useState(1);
  const [selected, setSelected] = useState(new Date());
  const [guests, setGuests] = useState(0);
  const [modal, setModal] = useState(false);
  const [bmodal, setBModal] = useState(false);
  const [rmodal, setRModal] = useState(false);
  const [bookingSpaceId, setBookingSpaceId] = useState('');
  const [bookingSpaceAmount, setBookingSpaceAmount] = useState(0);
  const { isOpen: checkout, onToggle: toggleCheckout } = useDisclosure();
  const [checkoutStage, setCheckoutStage] = useState('Login');
  const toast = useToast();
  const stripePromise = useMemo(
    () => loadStripe(`${process.env.NODE_ENV === 'production' ? config.stripe.LIVE : config.stripe.TEST}`),
    [],
  );

  function getUser() {
    if (router.isReady) {
      const userID = router.query._id;
      if (userID) {
        return userID;
      }
      return null;
    }
  }

  const router = useRouter();
  const { data: restaurantData } = useQuery(RESTAURANT_DETAIL_QUERY, {
    variables: {
      _id: getRestaurantId(getUser() as string),
    },
  });
  const { data: similarData } = useQuery(SIMILAR_PLACES_QUERY, {
    variables: { id: restaurantData?.findRestaurantById._id },
  });
  const [availableDates, setAvailableDates] = useState([]);
  const [deleteReservation] = useMutation(DELETE_RESERVATION, {
    variables: {
      id: bookingSpaceId,
    },
    onCompleted: () => {
      toast({ status: 'success', title: 'Reservation deleted successfully' });
      router.reload();
    },
    onError: (error) => {
      toast({ status: 'error', title: error.message });
    },
  });
  const { data: spacesData } = useQuery(FIND_ALL_SPACES, {
    variables: { id: restaurantData?.findRestaurantById._id },
  });
  const { data: indoorData } = useQuery(FIND_ALL_SPACES, {
    variables: { id: restaurantData?.findRestaurantById._id, space: 'Indoor' },
  });
  const { data: outdoorData } = useQuery(FIND_ALL_SPACES, {
    variables: { id: restaurantData?.findRestaurantById._id, space: 'Outdoor' },
  });
  const { data: diningData } = useQuery(FIND_ALL_SPACES, {
    variables: { id: restaurantData?.findRestaurantById._id, space: 'Dining' },
  });
  const { data: loungeData } = useQuery(FIND_ALL_SPACES, {
    variables: { id: restaurantData?.findRestaurantById._id, space: 'Lounge' },
  });

  const [createIntent] = useMutation(CREATE_PAYMENT_INTENT, {
    onError: (err) => {
      toast({ status: 'error', title: err.message });
    },
    onCompleted: (data) => {
      setPaymentIntent(data?.createPaymentIntent?.client_secret);
    },
  });

  const allTimes = useMemo(() => {
    const day = selected.getDay() - 1;
    const available = availableDates.filter((el) => el.day == day)[0];
    const dates = [];
    for (const hr of range(
      parseInt(available?.startTime.split(':')[0]) || 8,
      parseInt(available?.endTime.split(':')[0]) || 21,
    )) {
      dates.push(`${hr}:00`);
    }
    return dates;
  }, [availableDates, selected]);
  const { width } = useWindowDimensions();

  const [availableTimeIdx, setAvailableTimeIdx] = useState(0);
  const [paymentIntent, setPaymentIntent] = useState('');
  const [availableTimeIdx2, setAvailableTimeIdx2] = useState(1);

  const [bookingData, setBookingData] = useState({ _id: '' });

  const [data, setData] = useState(spacesData);

  const location = restaurantData?.findRestaurantById?.location;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    toggleState == 1 && setData(spacesData);
  }, [spacesData, toggleState]);

  useEffect(() => {
    setAvailableTimeIdx(
      selected.getHours() > parseInt(allTimes[allTimes.length - 1]?.split(':')[0])
        ? allTimes.length - 1
        : selected.getHours(),
    );
  }, [allTimes, selected]);

  return (
    <>
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
                  <Handle>@{restaurantData?.findRestaurantById.name.toLowerCase()}</Handle>
                  <AddressContainer>
                    <LocationIcon />
                    <Address>{restaurantData?.findRestaurantById.address}</Address>
                  </AddressContainer>
                </DetailsContainer>
              </ImageContainer>
              <Flex direction={'column'}>
                <Name style={{ fontSize: 20 }}>Make a Reservation</Name>
                <Popover
                  returnFocusOnClose={false}
                  isOpen={isOpen}
                  onClose={onClose}
                  placement="bottom"
                  closeOnBlur={false}
                  matchWidth
                >
                  <PopoverTrigger>
                    <Button colorScheme="pink" style={{ width: 0, height: 0 }}></Button>
                  </PopoverTrigger>
                  <PopoverContent width={width >= 510 ? 'fit-content' : '100vw'}>
                    <PopoverHeader fontWeight="semibold" border={'none'}>
                      <PopoverCloseButton />
                    </PopoverHeader>
                    <PopoverArrow />

                    <PopoverBody>
                      <Calendar
                        noDisabled={false}
                        setAvailableDates={setAvailableDates}
                        selected={selected}
                        setSelected={setSelected}
                        restaurantId={restaurantData?.findRestaurantById?._id}
                      />
                    </PopoverBody>
                    <hr />
                    <Flex justifyContent={'space-between'} padding={'20px'}>
                      <Flex width={'100%'} justifyContent={'center'}>
                        <Box margin={width >= 450 && '10px'}>
                          <Value style={{ textAlign: 'center', fontSize: 14 }}>Guests</Value>
                          <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
                            <GuestsButton
                              onClick={() => {
                                !(guests == 0) && setGuests((prev) => prev - 1);
                              }}
                              disabled={guests == 0}
                              style={{ marginRight: 10 }}
                            >
                              -
                            </GuestsButton>
                            <Value style={{ margin: '0 20px' }}>{guests}</Value>
                            <GuestsButton onClick={() => setGuests((prev) => prev + 1)}>+</GuestsButton>
                          </Flex>
                        </Box>
                      </Flex>
                      {width >= 450 && (
                        <Box margin={'10px'}>
                          <Value style={{ textAlign: 'center', fontSize: 14, marginBottom: 20 }}>Time</Value>
                          <Flex alignItems={'center'} justifyContent={'center'}>
                            <BsArrowLeft
                              onClick={() => availableTimeIdx != 0 && setAvailableTimeIdx((prev) => prev - 1)}
                              color="#FF9916"
                            />
                            <Label style={{ margin: '0 20px' }}>{allTimes[availableTimeIdx - 1]}</Label>
                            <Value style={{ margin: '0 20px', fontSize: 18 }}>{allTimes[availableTimeIdx]}</Value>
                            <Label style={{ margin: '0 20px' }}>{allTimes[availableTimeIdx + 1] || ''}</Label>
                            <BsArrowRight
                              onClick={() =>
                                availableTimeIdx != allTimes.length - 1 && setAvailableTimeIdx((prev) => prev + 1)
                              }
                              color="#FF9916"
                            />
                          </Flex>
                        </Box>
                      )}
                      {width >= 650 && (
                        <SearchButton
                          onClick={() => {
                            const selectedAlt = selected;
                            selectedAlt.setHours(parseInt(allTimes[availableTimeIdx]?.split(':')[0]));
                            setSelected(selectedAlt);
                            onToggle();
                          }}
                        >
                          Apply
                        </SearchButton>
                      )}
                    </Flex>
                    {width < 450 && (
                      <Box margin={'10px'} paddingBottom={'20px'}>
                        <Value style={{ textAlign: 'center', fontSize: 14, marginBottom: 20 }}>Time</Value>
                        <Flex alignItems={'center'} justifyContent={'space-evenly'}>
                          <BsArrowLeft
                            onClick={() => availableTimeIdx != 0 && setAvailableTimeIdx((prev) => prev - 1)}
                            color="#FF9916"
                          />
                          <Label style={{ margin: '0 20px' }}>{allTimes[availableTimeIdx - 1]}</Label>
                          <Value flex style={{ margin: '0 20px', fontSize: 18 }}>
                            {allTimes[availableTimeIdx]}
                          </Value>
                          <Label style={{ margin: '0 20px' }}>{allTimes[availableTimeIdx + 1] || ''}</Label>
                          <BsArrowRight
                            onClick={() =>
                              availableTimeIdx != allTimes.length - 1 && setAvailableTimeIdx((prev) => prev + 1)
                            }
                            color="#FF9916"
                          />
                        </Flex>
                      </Box>
                    )}
                    {width < 650 && (
                      <>
                        <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} marginBottom={'20px'}>
                          <SearchButton
                            onClick={() => {
                              const selectedAlt = selected;
                              selectedAlt.setHours(parseInt(allTimes[availableTimeIdx]?.split(':')[0]));
                              setSelected(selectedAlt);
                              onToggle();
                            }}
                          >
                            Apply
                          </SearchButton>
                        </Flex>
                      </>
                    )}
                  </PopoverContent>
                </Popover>
                <Handle style={{ fontSize: 12 }}>Search for available Spaces for a reservation</Handle>
              </Flex>
              <Flex justifyContent={'space-between'}>
                <Popover
                  returnFocusOnClose={false}
                  isOpen={isOpenDate}
                  onClose={onCloseDate}
                  placement="bottom"
                  closeOnBlur={false}
                  matchWidth
                >
                  <PopoverTrigger>
                    <Card onClick={onToggleDate}>
                      <Label>Date</Label>
                      <Value>
                        {weekdaysShort()[selected.getDay()]}, {monthsShort()[selected.getMonth()]} {selected.getDate()}
                      </Value>
                    </Card>
                  </PopoverTrigger>
                  <PopoverContent width={width >= 510 ? 'fit-content' : '100vw'}>
                    <PopoverHeader fontWeight="semibold" border={'none'}>
                      <PopoverCloseButton />
                    </PopoverHeader>
                    <PopoverArrow />

                    <PopoverBody>
                      <Calendar
                        setAvailableDates={setAvailableDates}
                        selected={selected}
                        setSelected={setSelected}
                        restaurantId={restaurantData?.findRestaurantById?._id}
                        noDisabled
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Popover
                  returnFocusOnClose={false}
                  isOpen={isOpenTime}
                  onClose={onCloseTime}
                  placement="bottom"
                  closeOnBlur={false}
                  matchWidth
                >
                  <PopoverTrigger>
                    <Card
                      onClick={() => {
                        onToggleTime();
                        const selectedC = selected;
                        selectedC.setHours(availableTimeIdx2 - 1);
                        setSelected(selectedC);
                      }}
                    >
                      <Label>Time</Label>
                      <Value>
                        {selected.getHours() > 12 ? selected.getHours() - 12 : selected.getHours()}{' '}
                        {selected.getHours() > 12 ? 'PM' : 'AM'} GMT+{Math.floor(selected.getTimezoneOffset() / 60)}
                      </Value>
                    </Card>
                  </PopoverTrigger>
                  <PopoverContent width={width >= 510 ? 'fit-content' : '100vw'}>
                    <PopoverHeader fontWeight="semibold" border={'none'}>
                      <PopoverCloseButton />
                    </PopoverHeader>
                    <PopoverArrow />

                    <PopoverBody>
                      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
                        <BsArrowLeft
                          onClick={() => {
                            setAvailableTimeIdx2((prev) => prev - 1);
                            const selectedC = selected;
                            selectedC.setHours(availableTimeIdx2 - 1);
                            setSelected(selectedC);
                          }}
                          color="#FF9916"
                        />
                        <Label style={{ margin: '0 20px' }}>{allTimes2[availableTimeIdx2 - 1]}</Label>
                        <Value style={{ margin: '0 20px', fontSize: 18 }}>{allTimes2[availableTimeIdx2]}</Value>
                        <Label style={{ margin: '0 20px' }}>{allTimes2[availableTimeIdx2 + 1] || ''}</Label>
                        <BsArrowRight
                          onClick={() => {
                            availableTimeIdx2 != allTimes2.length - 1 && setAvailableTimeIdx2((prev) => prev + 1);
                            const selectedC = selected;
                            selectedC.setHours(availableTimeIdx2 + 1);
                            setSelected(selectedC);
                          }}
                          color="#FF9916"
                        />
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Value>Guests</Value>
                <Flex alignItems={'center'}>
                  <GuestsButton
                    onClick={() => {
                      !(guests == 0) && setGuests((prev) => prev - 1);
                    }}
                    disabled={guests == 0}
                  >
                    -
                  </GuestsButton>
                  <Value>{guests}</Value>
                  <GuestsButton onClick={() => setGuests((prev) => prev + 1)}>+</GuestsButton>
                </Flex>
              </Flex>
              <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
                <SearchButton onClick={onToggle}>Search</SearchButton>
              </Flex>
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
          {!checkout ? (
            <>
              <NavigationButtonContainer>
                <NavigationButton
                  active={toggleState === 1 ? true : false}
                  onClick={() => {
                    toggleTab(1);
                    setData(spacesData);
                  }}
                >
                  All Spaces
                </NavigationButton>
                <NavigationButton
                  active={toggleState === 2 ? true : false}
                  onClick={() => {
                    toggleTab(2);
                    setData(indoorData);
                  }}
                >
                  Indoor
                </NavigationButton>
                <NavigationButton
                  active={toggleState === 3 ? true : false}
                  onClick={() => {
                    toggleTab(3);
                    setData(outdoorData);
                  }}
                >
                  Outdoor
                </NavigationButton>
                <NavigationButton
                  active={toggleState === 4 ? true : false}
                  onClick={() => {
                    toggleTab(4);
                    setData(diningData);
                  }}
                >
                  Dining
                </NavigationButton>
                <NavigationButton
                  active={toggleState === 5 ? true : false}
                  onClick={() => {
                    toggleTab(5);
                    setData(loungeData);
                  }}
                >
                  Lounge
                </NavigationButton>
              </NavigationButtonContainer>
              <Box>
                {data?.getAllSpaces?.slice(0, 5)?.map((space, i) => {
                  return (
                    <Flex key={i} justifyContent={'space-between'} marginBottom={width <= 450 ? 35 : 70}>
                      <Flex>
                        <Image
                          width={width <= 450 ? 75 : 150}
                          height={width <= 450 ? 50 : 100}
                          src={'/images/space-placeholder.png' ?? space?.images[0]}
                          alt="space logo"
                        />
                        <Stack>
                          <SpaceTitle>{space.name}</SpaceTitle>
                          <SpaceDescription>{space?.description}</SpaceDescription>
                          <MinimumSpend>
                            Minimum Spend {space.minimumBookingFee ? `N${space.minimumBookingFee}` : 'None'}
                          </MinimumSpend>
                        </Stack>
                      </Flex>

                      <Stack>
                        <ReservationButton
                          onClick={() => {
                            setBookingSpaceId(space._id);
                            space.hasReservation
                              ? deleteReservation({
                                  variables: {
                                    id: space._id,
                                  },
                                })
                              : setRModal(true);
                          }}
                          made={space?.hasReservation}
                          disabled={space.minimumBookingFee || space?.hasBooking}
                        >
                          {space?.hasReservation ? 'Remove Reservation' : 'Make Reservation'}
                        </ReservationButton>
                        <BookingButton
                          onClick={() => {
                            setBookingSpaceId(space._id);
                            setBookingSpaceAmount(space.minimumBookingFee);
                            !space?.hasBooking && setBModal(true);
                          }}
                          made={space?.hasBooking}
                          disabled={!space.minimumBookingFee || space?.hasReservation}
                        >
                          {space?.hasBooking ? 'Booking Added' : 'Book now'}
                        </BookingButton>
                      </Stack>
                    </Flex>
                  );
                })}
                {data?.getAllSpaces?.length == 0 && (
                  <SpaceTitle>
                    <None name={'No space available'} />
                  </SpaceTitle>
                )}
              </Box>
            </>
          ) : (
            <Box>
              <Name style={{ textAlign: 'center' }}>Checkout</Name>
              <Flex alignItems={'center'} justifyContent={'center'}>
                <Flex flexDir={'column'} alignItems={'center'} marginRight={5}>
                  <Circle
                    size={4}
                    border={'1px'}
                    marginLeft={'2'}
                    borderColor={'#0F264C'}
                    backgroundColor={checkoutStage == 'Login' ? '#fff' : '#0F264C'}
                  />
                  <Address style={{ color: `${checkoutStage != 'Login' && '#0F264C'}` }}>Login to the Account</Address>
                </Flex>

                <div
                  style={{
                    border: `1px solid ${checkoutStage == 'Login' ? '#BBC3C9' : '#0F264C'}`,
                    height: 1,
                    width: '228px',
                  }}
                />
                <Flex flexDir={'column'} alignItems={'center'} marginLeft={5}>
                  <Circle
                    size={4}
                    border={'1px'}
                    marginLeft={'2'}
                    backgroundColor={checkoutStage == 'Success' ? '#0F264C' : '#fff'}
                    borderColor={checkoutStage == 'Success' ? '#0F264C' : '#BBC3C9'}
                  />
                  <Address>Make Payment</Address>
                </Flex>
              </Flex>
              <Spacer height={2} />
              <Flex w={'100%'} alignItems={'center'} justifyContent={'center'}>
                {checkout && checkoutStage == 'Login' ? (
                  <LoginComponent />
                ) : checkoutStage == 'Success' ? (
                  <SuccessContainer>
                    <SuccessCircle>
                      <Image src={'/images/Tik.png'} alt="tik" />
                    </SuccessCircle>
                    <SuccessText>Your reservation has been successfully made</SuccessText>
                    <Label style={{ textAlign: 'center' }}>
                      <span style={{ color: '#ff9916' }}>Contact us</span> if you have any problem
                    </Label>
                  </SuccessContainer>
                ) : // <Payment
                //   id={bookingData?.createBooking?.id}
                //   onSuccess={() => {
                //     setCheckoutStage('Success');
                //     setTimeout(() => {
                //       router.push(`/restaurant/${router.query._id}`);
                //     }, 3000);
                //   }}
                //   amount={20000}
                //   email={'visiondaniels32@gmail.com'}
                // />
                paymentIntent ? (
                  <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent }}>
                    <Payment
                      confirmPayment2={null}
                      order={false}
                      bookingData={bookingData}
                      amount={bookingSpaceAmount}
                    />
                  </Elements>
                ) : (
                  <Spinner />
                )}
                <hr />
              </Flex>
              <Flex justifyContent={'flex-end'}>
                {checkoutStage !== 'Success' && (
                  <>
                    <CancelButton
                      onClick={() => {
                        toggleCheckout();
                        setCheckoutStage('Login');
                      }}
                    >
                      Cancel Order
                    </CancelButton>
                    <SummaryButton>Order Summary</SummaryButton>
                  </>
                )}
              </Flex>
            </Box>
          )}
        </RightBox>
      </MainWrapper>
      <SimilarPlacesSlider similarData={similarData} />
      <LoginModal onClose={() => setModal(false)} modal={modal} />
      <BookingModal
        setBookingData={setBookingData}
        datetime={selected}
        spaceId={bookingSpaceId}
        spaceAmount={bookingSpaceAmount}
        restaurantId={restaurantData?.findRestaurantById?._id}
        onConfirm={(amount) => {
          authToken ? setCheckoutStage('Payment') : setCheckoutStage('Login');
          createIntent({
            variables: {
              data: {
                amount: amount * 100,
                currency: 'ngn',
              },
            },
          });
          toggleCheckout();
        }}
        onClose={() => setBModal(false)}
        modal={bmodal}
      />
      <ReservationModal
        setBookingData={setBookingData}
        datetime={selected}
        spaceId={bookingSpaceId}
        restaurantId={restaurantData?.findRestaurantById?._id}
        onClose={() => setRModal(false)}
        modal={rmodal}
      />
      <Footer />
    </>
  );
};

export default Reservation;
