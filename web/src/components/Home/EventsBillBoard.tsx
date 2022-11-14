import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

import { RECOMMEND_EVENTS_QUERY } from '../../graphQL/queries';

import {
  BillBoardText,
  BillBoardTitle,
  BoardStyle,
  ButtonCon,
  EventsBillBoardCon,
  LeftLocation,
  Location,
  Mail,
  Overlay,
  Pin,
  TicketButton,
} from './eventsbillboard-styles';
import styles from './EventsBillBoard.module.css';

const BoardStyles = styled.div`
  ${BoardStyle}
`;

//const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const Board = ({ event, index }) => {
  return (
    <BoardStyles index={index}>
      <BillBoardText>
        <BillBoardTitle>{event.title}</BillBoardTitle>
        <LeftLocation>
          <Pin style={{ fill: '#ff9916 !important' }} />

          <Location>{event?.address?.street}</Location>
        </LeftLocation>
        <LeftLocation>
          <Mail style={{ fill: '#ff9916 !important' }} />

          <Location>{new Date(event?.start).toDateString()}</Location>
        </LeftLocation>
        <ButtonCon>
          <TicketButton>Attend</TicketButton>
        </ButtonCon>
      </BillBoardText>
      {/* <Image
        src={`/images/events${random(1, 5)}.jpg`}
        alt={event.title}
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
    </BoardStyles>
  );
};

const EventsBillBoard = () => {
  const { data: Events } = useQuery(RECOMMEND_EVENTS_QUERY, {
    variables: {
      skip: 0,
      limit: 6,
    },
  });

  return (
    <EventsBillBoardCon>
      {Events?.recommendEvents.length > 0 && (
        <>
          <CarouselProvider
            className={styles.carouselProvider}
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={5}
            isPlaying={true}
            interval={3500}
          >
            <Slider className={styles.Slider}>
              {Events?.recommendEvents.map((event, index) => (
                <Slide key={event._id} index={event.id}>
                  <Board event={event} index={index} />
                </Slide>
              ))}
            </Slider>
            <ButtonBack className={styles.backButton}>{'<'}</ButtonBack>
            <ButtonNext className={styles.nextButton}>{'>'}</ButtonNext>
          </CarouselProvider>
        </>
      )}
      {!Events && (
        <Image
          src={`/images/events1.jpg`}
          alt="blury"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUEhKoBwABJwC1GKRsJgAAAABJRU5ErkJggg=="
        />
      )}
      <Overlay />
    </EventsBillBoardCon>
  );
};

export default EventsBillBoard;
