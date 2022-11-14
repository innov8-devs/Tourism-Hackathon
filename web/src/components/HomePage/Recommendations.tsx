import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Flex, Input, useDisclosure } from '@chakra-ui/react';
import router from 'next/router';
import { BiSearch, BiX } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_RESTAURANTS_QUERY } from '../../graphQL/queries';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CardRec from '../Home/CardRec';

import {
  MainWrapper,
  RecButton,
  RecButtonText,
  RecHeader,
  RecHeaderContainer,
  RecRow,
  RecSecondaryTitle,
} from './recommendations-styles';

const AppRecommendations = () => {
  const [visible, setVisible] = useState(9);
  const [term, setTerm] = useState('');
  const { isOpen: searchButtonClicked, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();
  const { loading, data, error, fetchMore } = useQuery(RECOMMEND_RESTAURANTS_QUERY, {
    variables: {
      limit: 18,
    },
  });

  const showMore = () => {
    setVisible(visible + 3);
    fetchMore({
      variables: {
        limit: visible + 3,
      },
    });
  };

  const showLess = () => {
    setVisible(9);
    fetchMore({
      variables: {
        limit: 9,
      },
    });
    router.push('#restaurants');
  };
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          {width < 850 && searchButtonClicked ? null : <RecHeader>HighTable Recommendations</RecHeader>}
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
                router.push(`/search?term=${term}`);
              }}
              style={{ flex: searchButtonClicked ? 1 : 0 }}
            >
              <Input
                onChange={(e) => setTerm(e.target.value)}
                padding={'10px'}
                variant={'unstyled'}
                placeholder="Search Recommendations"
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
        <RecSecondaryTitle>Check out some of our recommended experiences</RecSecondaryTitle>
        <RecRow id="restaurants">
          <CardRec visible={visible} data={data?.recommendRestaurants} loading={loading} error={error} />
        </RecRow>
        {visible >= data?.recommendRestaurants?.length ? (
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

export default AppRecommendations;
