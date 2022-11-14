import { useState } from 'react';

import { useQuery } from '@apollo/client';
import router from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { SEARCHRESTUARANT_BYTERM_QUERY } from '../../graphQL/queries';

import CardRec from './CardRec';
import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './localdishes-styles';

const LocalDishes = () => {
  const [visible, setVisible] = useState(6);
  const { loading, data, error } = useQuery(SEARCHRESTUARANT_BYTERM_QUERY, {
    variables: {
      term: 'african and nigerian food and intercontinental',
    },
  });

  const showMore = () => {
    setVisible(visible + 6);
  };

  const showLess = () => {
    setVisible(6);
    router.push('#dishes');
  };
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Get the Best Local Dishes on HighTable</RecHeader>
        </RecHeaderContainer>

        <RecRow id="dishes">
          <CardRec visible={visible} data={data?.searchRestaurants} loading={loading} error={error} />
        </RecRow>
        {visible >= data?.searchRestaurants.length ? (
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

export default LocalDishes;
