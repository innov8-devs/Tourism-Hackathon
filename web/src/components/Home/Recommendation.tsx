import { useState } from 'react';

import { useQuery } from '@apollo/client';
import router from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_RESTAURANTS_QUERY } from '../../graphQL/queries';

import CardRec from './CardRec';
import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './recommendation-styles';

const Recommendation = () => {
  const [visible, setVisible] = useState(9);
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
          <RecHeader>Suggested by HighTable</RecHeader>
          {/* <RecHyphen ok /> */}
        </RecHeaderContainer>
        {/* <RecSecondaryTitle>feel like going somewhere?</RecSecondaryTitle> */}
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

export default Recommendation;
