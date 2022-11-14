import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import router from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { PEOPLE_LIST_QUERY } from '../../graphQL/queries';
import { USER_DATA } from '../constants';

import { Button, ButtonText, Header, MainWrapper, Row } from './findPeople-styles';
import PersonCard from './PersonCard';

const max = 50;

const FindPeople = () => {
  const { loading, data, error } = useQuery(PEOPLE_LIST_QUERY, {
    variables: {
      limit: 30,
    },
  });
  const [visible, setVisible] = useState(9);
  const showMore = () => {
    setVisible(visible + 15);
  };

  const defaultId = localStorage.getItem(USER_DATA);

  const showLess = () => {
    setVisible(9);
    router.push('#people');
  };
  return (
    <div>
      <MainWrapper>
        <Header>Find People With Similar Interests on Hightable</Header>
        <Row id="people">
          <PersonCard
            visible={visible}
            data={data?.recommendUsers?.filter((el) => el?._id !== defaultId)}
            loading={loading}
            error={error}
          />
        </Row>
        {visible >= max ? (
          <Button onClick={showLess}>
            <FaArrowRight />
            <ButtonText>See less</ButtonText>
          </Button>
        ) : (
          <Button onClick={showMore}>
            <GiBinoculars size={26} />
            <ButtonText>See more</ButtonText>
          </Button>
        )}
      </MainWrapper>
    </div>
  );
};

export default FindPeople;
