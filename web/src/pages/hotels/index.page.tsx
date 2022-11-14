import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import Footer from '../../components/Global/Footer';
import Header from '../../components/Global/Header';
import { calcCrow } from '../../components/Home/BarandLounges';
import CardRec from '../../components/Home/CardRec';
import SkeletonCard from '../../components/Skeleton/Skeleton';
import { FIND_HOTELS } from '../../graphQL/queries';
import useNumber from '../../hooks/useNumber';

import { CardContainer, Heading, MainContainer, Subsection, Tag } from './_index-styles';

const Hotels = () => {
  const {
    data: hotels,
    loading,
    error,
  } = useQuery(FIND_HOTELS, {
    variables: {
      limit: 100,
    },
  });
  const { value: hotelsVisible, increment, decrement } = useNumber(9);
  const { value: hotelsVisible2, increment: increment2, decrement: decrement2 } = useNumber(9);
  const {
    data: hotelsNearYou,
    loading: loadingNearYou,
    error: errorNearYou,
  } = useQuery(FIND_HOTELS, {
    variables: {
      limit: 100,
    },
  });
  const [nearYou, setNearYou] = useState([]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      if (hotelsNearYou) {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: long } }) => {
          const barsClone = [...hotelsNearYou?.findHotels];
          barsClone.sort((a, b) => {
            const [longA, latA] = [a?.location?.longitude, a?.location?.latitude];
            const [longB, latB] = [b?.location?.longitude, b?.location?.latitude];
            const distA = calcCrow(latA, longA, lat, long);
            const distB = calcCrow(latB, longB, lat, long);
            return distA - distB;
          });
          setNearYou(barsClone);
        });
      } else {
        hotelsNearYou && setNearYou(hotelsNearYou?.findHotels);
      }
    }
  }, [hotelsNearYou]);

  function seeMore() {
    increment(6);
  }

  function seeLess() {
    decrement(6);
  }

  function seeMore2() {
    increment2(6);
  }

  function seeLess2() {
    decrement2(6);
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Heading>Discover hotels with HighTable</Heading>
        {loading || error ? (
          <SkeletonCard />
        ) : (
          <CardContainer>
            <CardRec
              data={hotels?.findHotels}
              error={null}
              loading={false}
              visible={hotelsVisible}
              seeMore={seeMore}
              seeLess={seeLess}
            />
          </CardContainer>
        )}
        <Subsection>Hotels Near You</Subsection>
        <Tag />
        {loadingNearYou || errorNearYou ? (
          <SkeletonCard />
        ) : (
          <CardContainer>
            <CardRec
              data={nearYou}
              error={errorNearYou}
              loading={loadingNearYou}
              visible={hotelsVisible2}
              seeMore={seeMore2}
              seeLess={seeLess2}
            />
          </CardContainer>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Hotels;
