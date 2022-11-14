import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_RESTAURANTS_QUERY } from '../../graphQL/queries';
import Spinner from '../Spinner';

import { calcCrow } from './BarandLounges';
import CardRec from './CardRec';
import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './kitchen-styles';

const Kitchens = () => {
  const [visible, setVisible] = useState(6);
  const [fetching, setFetching] = useState(false);
  const [noMore, setNoMore] = useState(false);

  const { loading, data, error, fetchMore } = useQuery(RECOMMEND_RESTAURANTS_QUERY, {
    variables: {
      skip: 0,
      limit: 6,
    },
  });

  const [restaurants, setRestaurants] = useState([]);

  const showMore = async () => {
    setFetching(true);
    await fetchMore({
      variables: {
        skip: data?.recommendRestaurants.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setNoMore(true);
          return prev;
        }
        if (fetchMoreResult.recommendRestaurants.length < 6) {
          setNoMore(true);
        }
        return {
          ...prev,
          recommendRestaurants: [...prev.recommendRestaurants, ...fetchMoreResult.recommendRestaurants],
        };
      },
    });
    if (data && data?.recommendRestaurants.length === visible) {
      setNoMore(true);
    } else if (data && data?.recommendRestaurants.length > visible) {
      setVisible(visible + 6);
    }
    setFetching(false);
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      if (data) {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: long } }) => {
          const barsClone = [...data?.recommendRestaurants];
          barsClone.sort((a, b) => {
            const [longA, latA] = [a?.location?.longitude, a?.location?.latitude];
            const [longB, latB] = [b?.location?.longitude, b?.location?.latitude];
            const distA = calcCrow(latA, longA, lat, long);
            const distB = calcCrow(latB, longB, lat, long);
            return distA - distB;
          });
          setRestaurants(barsClone);
        });
      } else {
        data && setRestaurants(data?.recommendRestaurants);
      }
    }
  }, [data]);

  const showLess = () => {
    setVisible(6);
  };

  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Restaurants near you</RecHeader>
        </RecHeaderContainer>

        <RecRow id="restaurants">
          <CardRec visible={visible} data={restaurants} loading={loading} error={error} />
        </RecRow>
        {visible < data?.recommendRestaurants.length ? (
          <RecButton onClick={showLess}>
            <FaArrowRight />
            <RecButtonText>See less</RecButtonText>
          </RecButton>
        ) : (
          <RecButton disabled={noMore} onClick={showMore}>
            {!fetching && !noMore ? (
              <>
                <GiBinoculars size={26} />
                <RecButtonText>See more</RecButtonText>
              </>
            ) : fetching && !noMore ? (
              <Spinner />
            ) : (
              <RecButtonText aria-disabled>No more</RecButtonText>
            )}
          </RecButton>
        )}
      </MainWrapper>
    </div>
  );
};

export default Kitchens;
