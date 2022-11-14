import { useState } from 'react';

import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { IoBookmarksOutline } from 'react-icons/io5';

import styles from '../../styles/Home.module.css';
import { EventsData } from '../../types/types';
import { concatAddress, eventLink } from '../../utils/helpers';
import { USER_DATA } from '../constants';
import LoginModal from '../RestaurantDetails/LoginModal';
import SkeletonCard from '../Skeleton/Skeleton';

import {
  ButtonCon,
  CardImgCon,
  FavTag,
  Left,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Location,
  Mail,
  Pin,
  RecCard,
  RecCardInnerContainer,
  RecCardOuterContainer,
  RecColumn,
  RecColumnCon,
  TicketButton,
} from './cardevents-styles';
import EventsModal from './EventsModal';

const CardEvents = ({
  visible,
  data,
  loading,
  error,
}: {
  visible: number;
  data: EventsData[];
  loading: boolean;
  error: any;
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { isOpen: modal, onClose: onCloseModal, onToggle: onToggleModal } = useDisclosure();
  const [eventId, setEventId] = useState('');
  const auth = localStorage.getItem(USER_DATA);

  if (loading) return <SkeletonCard />;
  if (error) return <SkeletonCard />;

  const defaultId = localStorage.getItem(USER_DATA);

  //const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const images = [
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455277/images/reviews/1654455277046events3.jpg',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654252376/images/reviews/1654252374832EventParty.png',
    'https://res.cloudinary.com/hightable-africa/image/upload/h_245/q_auto:best/v1654455221/images/reviews/1654455220788events2.jpg',
  ];

  return (
    <RecColumnCon>
      {data?.slice(0, visible).map((event, index) => (
        <RecColumn key={event._id}>
          <Link passHref href={eventLink(event.title, event._id)}>
            <RecCard>
              <FavTag>
                <IoBookmarksOutline className={styles.tag} />
              </FavTag>
              <CardImgCon>
                <Image
                  src={(event?.images && event?.images[0]) || images[index]}
                  blur="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUEhKoBwABJwC1GKRsJgAAAABJRU5ErkJggg=="
                  placeholder="blur"
                  alt={event.title}
                  height={'100%'}
                  width={'100%'}
                  objectFit="cover"
                />
              </CardImgCon>
              <RecCardOuterContainer>
                <RecCardInnerContainer>
                  <Left>
                    <LeftTitle key={event._id}>{event.title}</LeftTitle>
                    <LeftSubTitle>{event?.description}</LeftSubTitle>
                  </Left>
                </RecCardInnerContainer>
                <LeftLocation>
                  <Pin style={{ fill: '#ff9916 !important' }} />

                  <Location>{event.address ? concatAddress(event.address) : 'Virtual'}</Location>
                </LeftLocation>
                <Flex gap={4} justifyContent={'center'}>
                  <Mail style={{ fill: '#ff9916 !important', margin: 'auto 0' }} />
                  <Flex flexDir={'column'}>
                    <Location style={{ fontSize: 13 }}>{`${new Date(event.start).toUTCString()}`} -</Location>
                    <Location style={{ fontSize: 13 }}>{`${new Date(event.end).toUTCString()}`}</Location>
                  </Flex>
                </Flex>
                <ButtonCon>
                  <TicketButton
                    done={event?.attendees?.some((el) => el._id == defaultId)}
                    onClick={() => {
                      setEventId(event._id);
                      if (!event?.attendees?.some((el) => el._id == defaultId)) {
                        if (auth != 'undefined') {
                          onToggle();
                        } else {
                          onToggleModal();
                        }
                      }
                    }}
                  >
                    {event?.attendees?.some((el) => el._id == defaultId) ? 'Attending' : 'Attend'}
                  </TicketButton>
                </ButtonCon>
              </RecCardOuterContainer>
            </RecCard>
          </Link>
        </RecColumn>
      ))}
      <LoginModal modal={modal} onClose={onCloseModal} />
      <EventsModal id={eventId} onClose={onClose} isOpen={isOpen} />
    </RecColumnCon>
  );
};

export default CardEvents;
