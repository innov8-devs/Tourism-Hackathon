import { useState } from 'react';

import { useQuery } from '@apollo/client';
import router from 'next/router';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_RESTAURANTS_QUERY } from '../../graphQL/queries';

import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './barandlounges-styles';
import CardRec from './CardRec';

const TrendingPlacesAbuja = () => {
  const [visible, setVisible] = useState(6);
  const { loading, data, error } = useQuery(RECOMMEND_RESTAURANTS_QUERY, {
    variables: { limit: 100 },
  });

  const showMore = () => {
    setVisible(visible + 6);
  };

  const showLess = () => {
    setVisible(6);
    router.push('#restaurants');
  };
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Trending Places In Abuja</RecHeader>
        </RecHeaderContainer>

        <RecRow id="restaurants">
          <CardRec
            visible={visible}
            data={data?.recommendRestaurants?.filter((el) => el.address?.toLowerCase()?.includes('abuja'))}
            loading={loading}
            error={error}
          />
        </RecRow>
        {visible >= data?.recommendRestaurants?.filter((el) => el.address?.toLowerCase()?.includes('abuja')).length ? (
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

export default TrendingPlacesAbuja;
