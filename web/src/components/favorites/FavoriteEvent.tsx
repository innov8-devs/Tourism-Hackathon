import { Flex, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { IoBookmarksOutline } from 'react-icons/io5';

import styles from '../../styles/Home.module.css';
import { concatAddress, eventLink } from '../../utils/helpers';
import {
  ButtonCon,
  CardImgCon,
  FavTag,
  Left,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Pin,
  RecCard,
  RecCardInnerContainer,
  RecCardOuterContainer,
  RecColumn,
  TicketButton,
} from '../Home/cardevents-styles';

import { LabelText } from './favorite-restaurant.styled';

const FavoriteEvent = () => {
  const images = [
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
  ];
  return (
    <RecColumn style={{ width: 420 }} key={event.title}>
      <RecCard>
        <FavTag>
          <IoBookmarksOutline className={styles.tag} />
        </FavTag>
        <CardImgCon>
          <Image
            src={images[0]}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUEhKoBwABJwC1GKRsJgAAAABJRU5ErkJggg=="
            placeholder="blur"
            alt={event.title}
            layout="fill"
            objectFit="cover"
            quality={10}
          />
        </CardImgCon>
        <RecCardOuterContainer>
          <RecCardInnerContainer>
            <Left>
              <Link href={eventLink(event.title, event._id)} passHref>
                <LeftTitle key={event._id}>{event.title}</LeftTitle>
              </Link>
              <LeftSubTitle>{event?.description}</LeftSubTitle>
            </Left>
          </RecCardInnerContainer>
          <Flex justifyContent={'space-between'} width={'100%'}>
            <Flex style={{ flex: 1 }} alignItems={'flex-start'} justifyContent={'flex-start'}>
              <Pin style={{ fill: '#4B4B4B !important', alignSelf: 'flex-start' }} forget />

              <LabelText>{concatAddress(event.address)}</LabelText>
            </Flex>
            <LeftLocation style={{ flex: 1 }}>
              <Stack>
                <Flex>
                  <BiCalendar style={{ fill: '#4B4B4B !important', marginRight: 10 }} />
                  <LabelText>{`${event.start.split(' ').slice(0, 4).join(' ')}`}</LabelText>
                </Flex>
                <Flex>
                  <BsClock style={{ fill: '#4B4B4B !important', marginRight: 10 }} />
                  <LabelText>{`${event.start.split(' ')[4]}`}</LabelText>
                </Flex>
              </Stack>
            </LeftLocation>
          </Flex>

          <ButtonCon>
            <TicketButton>View Event Details</TicketButton>
          </ButtonCon>
        </RecCardOuterContainer>
      </RecCard>
    </RecColumn>
  );
};

const event = {
  _id: '624571c9ce0f8c0004f809de',
  ownerId: '61f1b9f10215d3000473b2d5',
  ownerType: 'customer',
  title: 'Karaoke Friday',
  description: 'N/A',
  host: 'Hungry Dolphin',
  address: { street: 'Ikeja, Lagos', city: null, state: null, country: null, __typename: 'Address' },
  location: { latitude: 7.3986, longitude: 9.0765, __typename: 'Coordinates' },
  start: 'Wed Jul 13 2022 09:54:20 GMT+01006pm',
  end: 'Wed Jul 13 2022 10:54:20 GMT+0100',
  ticketLimit: 150,
  meta: { active: true, __typename: 'Meta' },
  __typename: 'Event',
};

export default FavoriteEvent;
