import React from 'react';

import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import None from '../Global/None';

import InterestCard from './InterestCard';
import { PhotoContainer } from './profileinterest-styles';

const ProfileInterest = ({ customer, addOther }) => {
  return (
    <PhotoContainer>
      {customer?.interests?.map((item, index) => (
        <InterestCard key={index} item={item} unSelected={!addOther} />
      ))}
      {addOther && (
        <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Link href={'/update-preferences'} passHref>
            <Button bg="#ff9916" colorScheme="orange">
              Discover More
            </Button>
          </Link>
        </Flex>
      )}
      {customer?.interests?.length == 0 && (
        <None name={`${!addOther ? `${customer?.firstName} doesn't` : "You  don't"} have any interest`} noTop></None>
      )}
    </PhotoContainer>
  );
};

export default ProfileInterest;
