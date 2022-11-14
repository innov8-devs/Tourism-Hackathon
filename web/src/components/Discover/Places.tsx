import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { BiRightArrow } from 'react-icons/bi';

import { RECOMMEND_RESTAURANTS_QUERY } from '../../graphQL/queries';
import Spinner from '../Spinner';

import CardPlaces from './CardPlaces';
import { CardContainer, MainWrapper, NextIcon, Title, TitleContainer } from './places-styles';

const Places = () => {
  const { data: places, loading } = useQuery(RECOMMEND_RESTAURANTS_QUERY);
  const router = useRouter();

  const scrollRight = () => {
    const right = document.querySelector(CardContainer);
    right.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <MainWrapper>
        <TitleContainer>
          <Title>Places to follow</Title>
          <BiRightArrow />
        </TitleContainer>
        <CardContainer>
          {places?.recommendRestaurants?.map((place) => (
            <CardPlaces key={place.id} place={place} />
          ))}
          {loading && <Spinner />}
        </CardContainer>
        {router.pathname === '/recommended' || (
          <NextIcon onClick={scrollRight} src="/images/placesScroll.png" alt="placesScroll" />
        )}
      </MainWrapper>
    </>
  );
};

export default Places;
