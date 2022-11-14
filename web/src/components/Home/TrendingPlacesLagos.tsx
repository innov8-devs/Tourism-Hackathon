import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GiBinoculars } from 'react-icons/gi';

import { SEARCHRESTUARANT_BYTERM_QUERY } from '../../graphQL/queries';

import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './barandlounges-styles';
import CardRec from './CardRec';

const TrendingPlacesLagos = () => {
  const [visible, setVisible] = useState(6);
  const { loading, data, error } = useQuery(SEARCHRESTUARANT_BYTERM_QUERY, {
    variables: { term: 'Lagos Nigeria ' },
  });

  const showMore = () => {
    setVisible(visible + 6);
  };

  const showLess = () => {
    setVisible(6);
  };
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Trending Places In Lagos</RecHeader>
        </RecHeaderContainer>

        <RecRow id="restaurants">
          <CardRec visible={visible} data={data?.searchRestaurants} loading={loading} error={error} />
        </RecRow>
        {visible >= data?.searchRestaurants.length ? (
          <RecButton onClick={showLess}>
            <GiBinoculars size={26} />
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

export default TrendingPlacesLagos;
