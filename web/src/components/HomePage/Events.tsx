import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Flex, Input, useDisclosure } from '@chakra-ui/react';
import router from 'next/router';
import { BiSearch, BiX } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_EVENTS_QUERY } from '../../graphQL/queries';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import None from '../Global/None';
import CardEvents from '../Home/CardEvents';

import {
  MainWrapper,
  RecButton,
  RecButtonText,
  RecHeader,
  RecHeaderContainer,
  RecRow,
  RecSecondaryTitle,
} from './recommendations-styles';

const AppEvents = () => {
  const [visible, setVisible] = useState(6);
  const { loading, data, error, fetchMore } = useQuery(RECOMMEND_EVENTS_QUERY, {
    variables: {
      skip: 0,
      limit: 100,
    },
  });
  const [term, setTerm] = useState('');
  const { isOpen: searchButtonClicked, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();

  const showMore = async () => {
    await fetchMore({
      variables: {
        skip: data?.recommendEvents.length,
      },
    });

    setVisible(visible + 6);
  };

  const showLess = () => {
    setVisible(6);
  };

  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          {width < 850 && searchButtonClicked ? null : <RecHeader>Events on HighTable</RecHeader>}
          <Flex
            alignItems={'center'}
            borderBottom={searchButtonClicked ? '1px solid black' : 'none'}
            width={searchButtonClicked ? '100%' : 'fit-content'}
            flex={1}
            mr={width < 850 && '50px'}
            ml={width < 850 && searchButtonClicked ? '8px' : 'auto'}
          >
            <BiSearch size={24} cursor={'pointer'} style={{ marginLeft: 'auto' }} onClick={onToggle} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/search?term=${term}&filter=Events`);
              }}
              style={{ flex: searchButtonClicked ? 1 : 0 }}
            >
              <Input
                onChange={(e) => setTerm(e.target.value)}
                padding={'10px'}
                variant={'unstyled'}
                placeholder="Search Events"
                width={searchButtonClicked ? '100%' : '0px'}
              />
            </form>
            <BiX
              size={24}
              cursor={'pointer'}
              onClick={onToggle}
              style={{ display: searchButtonClicked ? 'initial' : 'none' }}
            />
          </Flex>
        </RecHeaderContainer>
        <RecSecondaryTitle>Don’t miss out on the latest events</RecSecondaryTitle>

        <RecRow id="events">
          <CardEvents
            visible={visible}
            data={data?.recommendEvents?.slice(0, visible)}
            loading={loading}
            error={error}
          />
        </RecRow>
        {data?.recommendEvents?.slice(0, visible)?.length == 0 && <None name={'No Upcoming Event Currently'} noTop />}

        {visible < data?.recommendEvents?.slice(0, visible)?.length ? (
          <RecButton onClick={showLess}>
            <FaArrowRight />
            <RecButtonText>See less</RecButtonText>
          </RecButton>
        ) : (
          <RecButton onClick={showMore}>
            <GiBinoculars size={26} />
            <RecButtonText>See more</RecButtonText>
          </RecButton>
        )}
      </MainWrapper>
    </div>
  );
};

export default AppEvents;
