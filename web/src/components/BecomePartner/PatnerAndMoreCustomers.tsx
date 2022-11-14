import React from 'react';

import { Flex, Stack } from '@chakra-ui/react';
import { BiBuildings } from 'react-icons/bi';
import { BsShopWindow } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';

import config from '../../config';

import { Header, Typography } from './hero-styles';
import { Button, MainWrapper } from './patner-amc-styles';

const PartnerAndMoreCustomers = () => {
  return (
    <MainWrapper style={{ marginBottom: '100px' }}>
      <Header
        size="sm"
        style={{ width: 'min(1200px, 100%)', textAlign: 'center', paddingRight: '50px', paddingLeft: '50px' }}
      >
        Become a partner with <span style={{ color: '#ff9916' }}>HighTable</span> & get more customers
      </Header>
      <Flex
        justifyContent={{ lg: 'space-between', base: 'center' }}
        textAlign={'center'}
        width={'min(1200px, 100%)'}
        flexWrap={'wrap'}
        alignItems={'center'}
        gap={{ md: '0', base: '10' }}
      >
        <Stack width={'fit-content'} alignItems={'center'}>
          <BsShopWindow size={56} />
          <Typography size="md" bold>
            Restaurants
          </Typography>
          <Typography style={{ width: '278px' }} size="sm">
            Reach new customers by partnering with HighTable. This would connect you to best clients
          </Typography>
          <a target="_blank" href={config.HIGHTABLE_BUSINESS_URI} rel="noreferrer">
            <Button rightArrow>Restaurants</Button>
          </a>
        </Stack>
        <Stack width={'fit-content'} alignItems={'center'}>
          <MdEventAvailable size={56} />
          <Typography size="md" bold>
            Events
          </Typography>
          <Typography style={{ width: '278px' }} size="sm">
            Reach new customers by partnering with HighTable. This would connect you to best clients
          </Typography>
          <a target="_blank" href={config.HIGHTABLE_BUSINESS_URI} rel="noreferrer">
            <Button rightArrow>Events</Button>
          </a>
        </Stack>
        <Stack width={'fit-content'} alignItems={'center'}>
          <BiBuildings size={56} />
          <Typography size="md" bold>
            Trending Places
          </Typography>
          <Typography style={{ width: '278px' }} size="sm">
            Reach new customers by partnering with HighTable. This would connect you to best clients
          </Typography>
          <a target="_blank" href={config.HIGHTABLE_BUSINESS_URI} rel="noreferrer">
            <Button rightArrow>Trending Places</Button>
          </a>
        </Stack>
      </Flex>
    </MainWrapper>
  );
};

export default PartnerAndMoreCustomers;
