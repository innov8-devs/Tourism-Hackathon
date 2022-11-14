import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_EVENTS_QUERY_2 } from '../../graphQL/queries';
import None from '../Global/None';

import CardEvents from './CardEvents';
import { MainWrapper, RecButton, RecButtonText, RecHeader, RecHeaderContainer, RecRow } from './hightableevents-styles';

const HightableEvents = () => {
  const [visible, setVisible] = useState(6);
  const [eData, setData] = useState([]);
  const { loading, data, error, fetchMore } = useQuery(RECOMMEND_EVENTS_QUERY_2, {
    variables: {
      skip: 0,
      limit: 6,
      upcoming: true,
    },
  });

  useEffect(() => {
    setData(data?.recommendEventsAlt);
  }, [data]);

  const showMore = async () => {
    await fetchMore({
      variables: {
        skip: data?.recommendEventsAlt.length,
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
          <RecHeader>HighTable Recommended Upcoming Events</RecHeader>
        </RecHeaderContainer>

        <RecRow id="events">
          <CardEvents visible={visible} data={data?.recommendEventsAlt} loading={loading} error={error} />
        </RecRow>
        {data?.recommendEventsAlt?.length == 0 && <None name={'No Upcoming Event Currently'} noTop />}

        {visible < eData?.length ? (
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

export default HightableEvents;
