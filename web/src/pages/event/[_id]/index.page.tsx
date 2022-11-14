import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { Box, Button, Flex, Image, Stack, Text, useBoolean, useDisclosure, useToast } from '@chakra-ui/react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BiBookmark, BiLike } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

import { AUTH_TOKEN } from '../../../components/constants';
import EventsModal from '../../../components/Home/EventsModal';
import { client } from '../../../config';
import {
  ADD_TO_FAVORITES,
  EVENTS_DETAIL_QUERY,
  FIND_ONE_CUSTOMER,
  LIKE_EVENT,
  REMOVE_FAVORITES,
  UNLIKE_EVENT,
} from '../../../graphQL/queries';
import { getRestaurantId } from '../../../utils/helpers';

import { Back, BackContainer, MainWrapper } from './index-styles';

const images = [
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
  'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
];
const image = images[Math.floor(Math.random() * 6)];
const EventDetails = ({ data }) => {
  const toast = useToast();
  const router = useRouter();
  const [startTime, setStartTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();
  const [saved, { toggle, on }] = useBoolean();
  const { data: user } = useQuery(FIND_ONE_CUSTOMER, {
    variables: {},
  });
  const token = localStorage.getItem(AUTH_TOKEN);
  const [interested, { toggle: toggleInterested }] = useBoolean();
  const { isOpen: isOpenAttend, onClose: onCloseAttend, onToggle: onToggleAttend } = useDisclosure();
  const [likeEvent] = useMutation(LIKE_EVENT, {
    variables: {
      eventId: data?.findEventById?._id,
    },
    onCompleted: () => {
      toggle();
    },
    onError: () => {},
  });
  const [unlikeEvent] = useMutation(UNLIKE_EVENT, {
    variables: {
      eventId: data?.findEventById?._id,
    },
    onCompleted: () => {
      toggle();
    },
    onError: () => {},
  });
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
    variables: {
      eventId: data?.findEventById?._id,
    },
    onCompleted: () => {
      toggle();
    },
    onError: () => {},
  });

  const [removeFavorites] = useMutation(REMOVE_FAVORITES, {
    variables: {
      eventId: data?.findEventById?._id,
    },
    onCompleted: () => {
      toggle();
    },
    onError: () => {},
  });
  // const location = useMemo(() => data?.findEventById?.location || null, [data]);

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    setStartTime(new Date(data?.findEventById?.start).getHours());
    setEndTime(new Date(data?.findEventById?.end).getHours());
  }, [data, on]);

  useEffect(() => {
    if (user?.findOneCustomer?.favorites?.some((el) => el.favoriteId == data?.findEventById?._id)) {
      on();
    }
  }, [user, on, data?.findEventById?._id]);

  return (
    <>
      <BackContainer>
        <Back onClick={handleBack} />
      </BackContainer>
      <MainWrapper>
        <Flex
          padding={{ base: 4, lg: 1 }}
          height={{ base: 'max-content', lg: 500 }}
          gap={12}
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Image
            flex={3}
            src={data?.findEventById?.images[0] || image}
            alt={'Image'}
            width={{ base: '100%', lg: '500px' }}
            height={'100%'}
          />
          <Box flex={5}>
            <Flex flexDir={{ base: 'column', sm: 'row' }} gap={12} mb={5}>
              <Box w={100} height={'min-content'} borderRadius={10} background={'#FF9916'} padding={2}>
                <Text fontFamily={'Lato'} fontWeight={900} fontSize={'xl'} color={'#fff'}>
                  {parseDate(data?.findEventById?.start, data?.findEventById?.end, data?.findEventById?.repeats)[0]}
                </Text>
              </Box>
              <Stack>
                <Flex>
                  <Text fontSize={16} fontWeight={600} mr={2}>
                    Time:{' '}
                  </Text>
                  <Text fontSize={16}>
                    {startTime}
                    {startTime % 12 == startTime ? 'AM' : 'PM'} - {endTime}
                    {endTime % 12 == endTime ? 'AM' : 'PM'}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={16} fontWeight={600} mr={2}>
                    Frequency:{' '}
                  </Text>
                  <Text fontSize={16}>
                    {parseDate(data?.findEventById?.start, data?.findEventById?.end, data?.findEventById?.repeats)[1]}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={16} fontWeight={600} mr={2}>
                    Mode:{' '}
                  </Text>
                  <Text fontSize={16} textTransform={'capitalize'}>
                    {data?.findEventById?.eventMode}
                  </Text>
                </Flex>
                {data?.findEventById?.eventMode == 'physical' ? (
                  <Flex>
                    <Text fontSize={16} fontWeight={600} mr={2}>
                      Location:{' '}
                    </Text>
                    <Text fontSize={16}>{data?.findEventById?.address?.street}</Text>
                  </Flex>
                ) : (
                  data?.findEventById?.eventType == 'free' && (
                    <Flex>
                      <Text fontSize={16} fontWeight={600} mr={2}>
                        URL:{' '}
                      </Text>
                      <a target="_blank" href={data?.findEventById?.eventUrl} rel="noreferrer">
                        <Text fontSize={16} textDecoration={'underline'} color={'#0F264C'} cursor={'pointer'}>
                          {data?.findEventById?.eventUrl}
                        </Text>
                      </a>
                    </Flex>
                  )
                )}
                <Flex>
                  <Text fontSize={16} fontWeight={600} mr={2}>
                    Host:{' '}
                  </Text>
                  <Text fontSize={16}>{data?.findEventById?.host}</Text>
                </Flex>
                <Box height={6} />
                <Button
                  onClick={() => {
                    if (token) {
                      if (data?.findEventById?.eventType == 'free') {
                        onToggleAttend();
                        toast({ status: 'success', title: 'Attending event' });
                      } else {
                        router.push(`${router?.asPath}/ticket`);
                      }
                    }
                  }}
                  color={'#343434'}
                  background={'#fff'}
                  border={'1px solid #343434'}
                  width={'min-content'}
                  p={5}
                >
                  Get Tickets
                </Button>
                <Flex gap={5} alignItems={'center'}>
                  <Text fontSize={13} fontWeight={600}>
                    Share:
                  </Text>
                  <AiOutlineFacebook size={25} color={'#343434'} />
                  <FaInstagram size={25} color={'#343434'} />
                  <AiOutlineTwitter size={25} color={'#343434'} />
                  <AiOutlineLinkedin size={25} color={'#343434'} />
                </Flex>
              </Stack>
            </Flex>
            <Stack>
              <Text color={'#484848'} fontWeight={600} fontSize={20} mb={5}>
                About this event
              </Text>
              <Text fontSize={16} noOfLines={7}>
                {data?.findEventById?.description}
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Box margin={'30px 0'} border={'1px solid #C4C4C4'} />
        <Box p={{ base: 4, lg: 1 }}>
          <Flex gap={3} alignItems={'center'}>
            <Button
              color={interested ? '#fff' : '#343434'}
              onClick={() => {
                if (token) {
                  interested ? unlikeEvent() : likeEvent();
                  toast({ status: 'success', title: 'Thanks, Event organizer has been informed' });
                  toggleInterested();
                }
              }}
              background={interested ? '#343434' : '#fff'}
              border={'1px solid #343434'}
              width={'min-content'}
              p={5}
            >
              <BiLike style={{ marginRight: 5 }} /> Interested
            </Button>
            <Text height={'min-content'} mr={1} p={1} bg={'rgba(255, 153, 22, 0.28)'} color={'#666670'}>
              {data?.findEventById?.likes}
            </Text>
            <Text>Interested</Text>
            <Flex flexDir={'column'} alignItems={'center'} ml={'auto'}>
              {saved ? (
                <BsFillBookmarkFill
                  cursor={'pointer'}
                  onClick={removeFavorites.bind(this)}
                  size={40}
                  color={'#0D0D0D'}
                />
              ) : (
                <BiBookmark cursor={'pointer'} onClick={addToFavorites.bind(this)} size={40} color={'#0D0D0D'} />
              )}
              <Text fontSize={14}>{saved ? 'Saved' : 'Save'}</Text>
            </Flex>
          </Flex>
          <Box height={20} />
          {/* <Flex>
            <Stack>
              <BottomHeader>Venue and Direction</BottomHeader>
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
            </Stack>
          </Flex> */}
        </Box>
      </MainWrapper>
      <EventsModal isOpen={isOpenAttend} onClose={onCloseAttend} id={data?.findEventById?._id} />
    </>
  );
};

export function parseDate(start: string, end: string, repeats: number) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const startDay = weekday[startDate.getDay()];
  const endDay = weekday[endDate.getDay()];

  switch (repeats) {
    case 24:
      return [addDateRepeatedly(startDate, repeats).toDateString(), 'Every Day'];
    case 168:
      return [
        addDateRepeatedly(startDate, repeats).toDateString(),
        `Every ${startDay} ${endDay != startDay && `- ${endDay}`}`,
      ];
    case 336:
      return [
        addDateRepeatedly(startDate, repeats).toDateString(),
        `Bi Weekly on ${startDay} ${endDay != startDay && `- ${endDay}`}`,
      ];
    case 8064:
      return [addDateRepeatedly(startDate, repeats).toDateString(), `Every ${moment(startDate).format('Do MMMM')}`];
    default:
      return [startDate.toDateString(), 'Once'];
  }
}

function addDateRepeatedly(date: Date, repeats: number) {
  const now = new Date();
  if (!repeats) return date;
  while (now > date) {
    date = new Date(new Date(date).setHours(date.getHours() + repeats));
  }
  return date;
}

export default EventDetails;

export async function getServerSideProps({ query }) {
  const { _id } = query;

  // TODO handle errors here
  const { data } = await client.query({
    query: EVENTS_DETAIL_QUERY,
    variables: { _id: getRestaurantId(_id) },
  });

  return {
    props: {
      data,
    },
  };
}
