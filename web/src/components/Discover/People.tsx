import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { BiRightArrow } from 'react-icons/bi';

import { PEOPLE_LIST_QUERY } from '../../graphQL/queries';
import Spinner from '../Spinner';

import CardPeople from './CardPeople';
import { CardContainer, MainWrapper, NextIcon, Title, TitleContainer } from './people-styles';

const People = () => {
  const router = useRouter();
  const { data: people, loading } = useQuery(PEOPLE_LIST_QUERY);

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
          <Title>People to follow</Title>
          <BiRightArrow />
        </TitleContainer>
        <CardContainer>
          {people?.recommendUsers
            ?.slice(1)
            ?.map(
              (person, i, arr) => i % 2 == 0 && <CardPeople person={person} person2={arr[i + 1]} key={person._id} />,
            )}
          {loading && <Spinner />}
        </CardContainer>
        {router.pathname === '/recommended' || (
          <NextIcon onClick={scrollRight} src="/images/placesScroll.png" alt="placesScroll" />
        )}
      </MainWrapper>
    </>
  );
};

export default People;
