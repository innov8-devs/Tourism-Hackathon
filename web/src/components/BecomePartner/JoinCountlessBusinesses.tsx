import React from 'react';

import { Flex, Image } from '@chakra-ui/react';

import { Header } from './hero-styles';
import { MainWrapper } from './patner-amc-styles';

const JoinCountlessBusinesses = () => {
  return (
    <MainWrapper style={{ marginBottom: '100px', paddingTop: '58px' }}>
      <Header
        size="sm"
        style={{ width: 'min(1200px, 100%)', textAlign: 'center', paddingRight: '50px', paddingLeft: '50px' }}
      >
        Join the countless businesses on the <span style={{ color: '#ff9916' }}>HighTable</span> side of life
      </Header>
      <Flex
        justifyContent={'space-around'}
        textAlign={'center'}
        width={'100%'}
        flexWrap={'wrap'}
        alignItems={'center'}
        gap={{ md: '0', base: '10' }}
      >
        <Image src="images/countlessBusinesses1.png" alt="business-logo" height={'150px'} />
        <Image src="images/countlessBusinesses2.png" alt="business-logo" height={'150px'} />
        <Image src="images/countlessBusinesses3.png" alt="business-logo" height={'150px'} />
        <Image src="images/countlessBusinesses4.png" alt="business-logo" height={'150px'} />
        <Image src="images/countlessBusinesses5.png" alt="business-logo" height={'150px'} />
      </Flex>
    </MainWrapper>
  );
};

export default JoinCountlessBusinesses;
