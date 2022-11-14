import { Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import defaultImage from '../../../public/images/logo.png';
import {
  Left,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Location,
  Pin,
  RecCardInnerContainer,
  ReviewTop,
  RightReview,
} from '../Home/cardrec-styles';
import { RightStar } from '../Home/cardrev-styles';
import StarRating from '../StarRating';

const FavoriteRestaurant = () => {
  return (
    <Flex
      borderWidth="1px"
      flexDirection="column"
      borderRadius="lg"
      w="420px"
      h="450px"
      direction="column"
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}
      gap={4}
    >
      <Flex minHeight="240px" position={'relative'} flex={1} bg="orange.200">
        <Image objectFit="cover" layout="fill" src={defaultImage} alt="restaurant" />
      </Flex>
      <Stack flex={{ base: '1', md: '2' }} flexDirection="column" justifyContent="center">
        <RecCardInnerContainer style={{ margin: 0 }}>
          <Left>
            <Link href={`/#`} passHref>
              <LeftTitle>NOK Restaurant</LeftTitle>
            </Link>
            <LeftSubTitle>Chinese dining, Middle Eastern, Vegetarian diet</LeftSubTitle>
          </Left>
        </RecCardInnerContainer>
        <ReviewTop>
          <RightStar>
            <StarRating count={5} size={20} value={4} activeColor={'#ff9916'} inactiveColor={'#ddd'} />
          </RightStar>
          <RightReview>50 Reviews</RightReview>
        </ReviewTop>
        <LeftLocation>
          <Link href="/#">
            <Pin style={{ fill: '#ff9916 !important' }} />
          </Link>
          <Location>Lagos, Nigeria</Location>
        </LeftLocation>
      </Stack>
    </Flex>
  );
};

export default FavoriteRestaurant;
