import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Flex, Input, useDisclosure } from '@chakra-ui/react';
import router from 'next/router';
import { BiSearch, BiX } from 'react-icons/bi';

import { REVIEWS_QUERY } from '../../graphQL/queries';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import None from '../Global/None';

import { MainWrapper, RecHeader, RecHeaderContainer, RecRow, RecSecondaryTitle } from './recommendations-styles';
import ReviewCard from './ReviewCard';

// const visited = new Set();

const AppReviews = () => {
  const { data, loading, error } = useQuery(REVIEWS_QUERY);
  const [visible] = useState(9);
  const [term, setTerm] = useState('');
  const { isOpen: searchButtonClicked, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();

  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          {width < 850 && searchButtonClicked ? null : <RecHeader>HighTable Reviews</RecHeader>}
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
                placeholder="Search Reviews"
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
        <RecSecondaryTitle>Popular reviews you would like</RecSecondaryTitle>
        <RecRow id="reviews">
          <ReviewCard visible={visible} data={data?.findReviews} loading={loading} error={error} />
          {data?.findReviews?.length <= 0 ? <None name="No review currently" noTop /> : null}
        </RecRow>
      </MainWrapper>
    </div>
  );
};

export default AppReviews;
