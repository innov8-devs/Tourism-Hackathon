import React, { useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  useColorModeValue,
  useControllableState,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsSearch, BsSuitHeartFill } from 'react-icons/bs';
import { FaLocationArrow, FaUtensils } from 'react-icons/fa';
import { HiAdjustments } from 'react-icons/hi';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

import defaultImage from '../../public/images/logo.png';
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
} from '../components/Home/cardrec-styles';
import { RightStar } from '../components/Home/cardrev-styles';
import { CUSTOMER_SEARCH_QUERY, EVENTS_SEARCH_QUERY, RESTAURANTS_SEARCH_QUERY } from '../components/Home/Hero';
import { RecHeader } from '../components/Home/kitchen-styles';
import Spinner from '../components/Spinner';
import StarRating from '../components/StarRating';
import { MainWrapper } from '../styles/common';
import { concatAddress, eventLink, optimizeImage, restaurantLink } from '../utils/helpers';

import { Options } from './search-styles';

type Props = {};

export function ResultCard(item) {
  return (
    <Flex
      borderWidth="1px"
      flexDirection={{ base: 'column', md: 'row' }}
      borderRadius="lg"
      w={{ base: '100%', md: '80%' }}
      h={{ base: '450px', md: '15rem' }}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}
      gap={4}
    >
      <Flex height="100%" position={'relative'} flex={1} bg="orange.200">
        <Image
          objectFit="cover"
          layout="fill"
          src={
            item?.logo && item?.logo.indexOf('res.cloudinary.com') > -1
              ? optimizeImage(item.logo)
              : item?.images && item?.images.length > 0 && item.images[0].indexOf('res.cloudinary.com') > -1
              ? optimizeImage(item.images[0])
              : item?.profileImage
              ? item?.profileImage
              : defaultImage
          }
          alt="restaurant"
        />
      </Flex>
      <Stack flex={{ base: '1', md: '2' }} flexDirection="column" justifyContent="center" pb={1}>
        <RecCardInnerContainer>
          <Left>
            <Link
              href={`/${
                item.type == 'restaurant'
                  ? `/${restaurantLink(item?.name, item?._id)}`
                  : item.type == 'person'
                  ? `/profile/${item?.username}`
                  : `/${eventLink(item?.title, item?._id)}`
              }`}
              passHref
            >
              <LeftTitle>
                {item?.name ? item?.name : item.title ? item.title : item.firstName + ' ' + item.lastName}
              </LeftTitle>
            </Link>
            {item?.description && <LeftSubTitle>{item?.description}</LeftSubTitle>}
            {item?.about && <LeftSubTitle>{item?.about}</LeftSubTitle>}
          </Left>
        </RecCardInnerContainer>
        <ReviewTop>
          <RightStar>
            {item.rating && !item.likes && (
              <StarRating count={5} size={20} value={4} activeColor={'#ff9916'} inactiveColor={'#ddd'} />
            )}
            {!item.rating && <BsSuitHeartFill fill="red" />}
          </RightStar>
          <RightReview>
            {item?.reviewCount ? `${item?.reviewCount} Reviews` : item.likes >= 0 ? `${item.likes} likes` : ' '}
          </RightReview>
        </ReviewTop>
        <LeftLocation>
          <Link href="/#">
            <Pin style={{ fill: '#ff9916 !important' }} />
          </Link>
          <Location>
            {item.address && typeof item.address === 'string'
              ? item?.address.toLowerCase()
              : concatAddress(item?.address)}
          </Location>
        </LeftLocation>
      </Stack>
    </Flex>
  );
}

const Search: React.FC<Props> = () => {
  const router = useRouter();
  const [value, setValue] = useControllableState({ defaultValue: 10 });
  const [search, setSearch] = useControllableState({ defaultValue: '' });
  const [filter, setFilter] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    router?.query?.filter && setFilter(router?.query?.filter as string);
  }, [router?.query?.filter]);
  const { term } = Object.fromEntries(
    router?.asPath
      ?.split('?')[1]
      ?.split('&')
      ?.map((el) => el.split('=')) || [],
  );
  function getUser() {
    if (router.isReady) {
      const userID = router?.query?.term as string;
      if (userID?.length > 0) {
        return userID;
      }
      return null;
    }
  }
  const [getSearchItem, { data: searchData, loading: searchLoading }] = useLazyQuery(RESTAURANTS_SEARCH_QUERY, {
    variables: { term: getUser() || term, limit: 20, offset: 0 },
    fetchPolicy: 'cache-and-network',
  });

  const [getSearchCustomer, { data: searchCustomerData, loading: LoadingCustomer }] = useLazyQuery(
    CUSTOMER_SEARCH_QUERY,
    {
      variables: { term: getUser() || term, limit: 20, offset: 0 },
      fetchPolicy: 'cache-and-network',
    },
  );

  const [getSearchEvents, { data: searchEventsData, loading: LoadingEvents }] = useLazyQuery(EVENTS_SEARCH_QUERY, {
    variables: { term: getUser() || term, limit: 20, offset: 0 },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (getUser() !== '') {
      getSearchItem({
        variables: { term: getUser() || term, offset: searchData?.searchRestaurants?.length, limit: 20 },
      });
      getSearchCustomer({
        variables: { term: getUser() || term, offset: searchCustomerData?.searchCustomer?.length, limit: 20 },
      });
      getSearchEvents({
        variables: { term: getUser() || term, offset: searchEventsData?.searchEvents.length, limit: 20 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSearchCustomer, getSearchEvents, getSearchItem]);

  useEffect(() => {
    if (search !== '') {
      getSearchItem({ variables: { term: search, offset: searchData?.searchRestaurants?.length, limit: 20 } });
      getSearchCustomer({
        variables: { term: search, offset: searchCustomerData?.searchCustomer?.length, limit: 20 },
      });
      getSearchEvents({ variables: { term: search, offset: searchEventsData?.searchEvents.length, limit: 20 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSearchCustomer, getSearchEvents, getSearchItem, search]);

  useEffect(() => {}, []);

  return (
    <MainWrapper>
      <Box mt={4} w={['100%', '100%', '80%']} pl="2" pr="2">
        <form>
          <Flex gap={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} size="24" />
              </InputLeftElement>
              <Input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder={getUser() ? (getUser() as string) : 'Your Hightable experience awaits'}
              />
            </InputGroup>
            <InputGroup>
              <Select onChange={(e) => setLocation(e.target.value)} placeholder=" Pick a Location">
                <Options value="Lagos">Lagos</Options>
                <Options value="Abuja">Abuja</Options>
                <Options value="Accra">Accra</Options>
              </Select>
              <InputRightElement pointerEvents="none">
                <Icon as={FaLocationArrow} size="24" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </form>
        <HStack mt={4} spacing={4}>
          <Tag
            onClick={setFilter.bind(this, '')}
            _hover={{ backgroundColor: '#ffa500aa' }}
            p={2}
            size={'md'}
            color="white"
            bg={filter == '' && '#ffa500'}
            colorScheme="orange"
          >
            <TagLabel color={filter == '' ? '#fff' : '#000'}>All results</TagLabel>
          </Tag>
          <Box display={{ base: 'none', md: 'block' }}>
            {['Restaurants', 'Events', 'People', 'Lagos'].map((tags) => (
              <Tag
                _hover={{ backgroundColor: '#ffa500aa' }}
                p={2}
                size={'md'}
                key={tags}
                colorScheme="gray"
                bg={filter == tags && '#ffa500'}
                onClick={() => setFilter(tags)}
              >
                <TagLabel color={filter == tags && '#fff'}>{tags}</TagLabel>
                <TagRightIcon fill={filter == tags ? '#fff' : '#ffa500'} as={FaUtensils} />
              </Tag>
            ))}
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <Select
              placeholder="Filter"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              {['Restaurants', 'Events', 'People', 'Lagos'].map((tags, i) => (
                <option key={i}>{tags}</option>
              ))}
            </Select>
          </Box>
          <Tag
            _hover={{ backgroundColor: '#ffa500aa' }}
            p={2}
            size={'md'}
            colorScheme="gray"
            bg={'#fff'}
            border={'1px solid #0F264C'}
          >
            <TagRightIcon fill={'#000'} marginRight={1} as={HiAdjustments} />
            <TagLabel color={'#000'}>More Filters</TagLabel>
          </Tag>
        </HStack>
      </Box>
      <Box mt={4}>
        <Flex>
          <Box w={['100%', '100%', '50%']}>
            <RecHeader>Search Result List</RecHeader>
          </Box>
          <Center w={['100%', '100%', '50%']}>
            <Divider borderColor="black" alignContent={'center'} orientation="horizontal" />
          </Center>
        </Flex>
      </Box>
      <Box mt={8} minH="500px">
        {!searchLoading && !LoadingCustomer && !LoadingEvents && (
          <VStack spacing={4} alignItems={'flex-start'} pl={{ base: '2', md: '4' }} pr={{ base: '2', md: '0' }}>
            {['Restaurants', 'Lagos', ''].includes(filter) &&
              searchData?.searchRestaurants?.map(
                (restaurant, index) =>
                  (filter == 'Lagos'
                    ? restaurant.address.includes('Lagos')
                    : location
                    ? restaurant.address.includes(location)
                    : true) &&
                  index > value - 11 &&
                  index < value && <ResultCard key={index + restaurant._id} {...restaurant} type={'restaurant'} />,
              )}
            {['Events', 'Lagos', ''].includes(filter) &&
              searchEventsData?.searchEvents?.map(
                (event, index) =>
                  (filter == 'Lagos'
                    ? event?.address?.street?.includes('Lagos')
                    : location
                    ? event.address.includes(location)
                    : true) &&
                  index > value - 11 &&
                  index < value && <ResultCard key={index + event._id} {...event} type={'event'} />,
              )}
            {(filter == 'People' || filter == '') &&
              searchCustomerData?.searchCustomers?.map(
                (restaurant, index) =>
                  index > value - 11 &&
                  index < value && <ResultCard key={index + restaurant._id} {...restaurant} type={'person'} />,
              )}
          </VStack>
        )}
        {searchData?.searchRestaurants?.length === 0 &&
          searchCustomerData?.searchCustomers?.length === 0 &&
          searchEventsData?.searchEvents?.length === 0 && (
            <Center minH="500px">
              <Alert
                status="warning"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                w="450px"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  No results found
                </AlertTitle>
                <AlertDescription maxWidth="sm">Please try another search term</AlertDescription>
              </Alert>
            </Center>
          )}
        {searchLoading && LoadingCustomer && LoadingEvents && (
          <Center minH="500px">
            <Spinner />
          </Center>
        )}
      </Box>
      <Box mt={8} w={['100%', '100%', '80%']}>
        <Flex w="100%" justifyContent="space-between" alignItems="space-between" pr="1" pl="1">
          <Button
            variant="outline"
            colorScheme="blackAlpha"
            disabled={value <= 10}
            leftIcon={<IoArrowBackOutline />}
            onClick={() => setValue(value - 10)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            colorScheme="blackAlpha"
            disabled={searchData?.searchRestaurants?.length <= value}
            onClick={() => setValue(value + 10)}
            rightIcon={<IoArrowForwardOutline />}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </MainWrapper>
  );
};

export default Search;
