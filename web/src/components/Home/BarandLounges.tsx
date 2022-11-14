import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GiBinoculars } from 'react-icons/gi';

import { SEARCHRESTUARANT_BYTERM_QUERY } from '../../graphQL/queries';

import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './barandlounges-styles';
import CardRec from './CardRec';

export const calcCrow = (lat1: any, lon1: any, lat2: any, lon2: any) => {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

const BarsandLounges = () => {
  const [visible, setVisible] = useState(6);
  const [barsAndLounges, setBarsAndLounges] = useState([]);

  const { loading, data, error } = useQuery(SEARCHRESTUARANT_BYTERM_QUERY, {
    variables: { term: 'bars and lounges' },
  });

  const showMore = () => {
    setVisible(visible + 6);
  };
  const showLess = () => {
    setVisible(6);
  };

  // This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)

  useEffect(() => {
    if ('geolocation' in navigator) {
      if (data) {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: long } }) => {
          const barsClone = [...data?.searchRestaurants];
          barsClone.sort((a, b) => {
            const [longA, latA] = [a?.location?.longitude, a?.location?.latitude];
            const [longB, latB] = [b?.location?.longitude, b?.location?.latitude];
            const distA = calcCrow(latA, longA, lat, long);
            const distB = calcCrow(latB, longB, lat, long);
            return distA - distB;
          });
          setBarsAndLounges(barsClone);
        });
      } else {
        data && setBarsAndLounges(data?.searchRestaurants);
      }
    }
  }, [data]);

  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Bars and Lounges near you</RecHeader>
        </RecHeaderContainer>

        <RecRow id="restaurants">
          <CardRec visible={visible} data={barsAndLounges} loading={loading} error={error} />
        </RecRow>
        {visible >= barsAndLounges.length ? (
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

export default BarsandLounges;
