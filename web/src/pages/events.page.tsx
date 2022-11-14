import { useState } from 'react';

import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Spacer, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';

import PopularEventsInState from '../components/Events/PopularEventsInState';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import EventsBillBoard from '../components/Home/EventsBillBoard';
import HightableEvents from '../components/Home/HightableEvents';

import { Caption } from './event-styles';
import { Heading, MainContainer, Subsection, Tag } from './hotels/_index-styles';

const Events = () => {
  const router = useRouter();
  const [term, setTerm] = useState('');
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>Discover Events With HighTable</Heading>
        <Flex alignItems={'center'} margin={2}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search?term=${term}&filter=Events`);
            }}
            style={{ flex: 1 }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiSearch />
              </InputLeftElement>
              <Input onChange={(e) => setTerm(e.target.value)} placeholder="Search Events" />
            </InputGroup>
          </form>
        </Flex>
        <Spacer height={'20px'} />
        <EventsBillBoard />
        <Spacer height={'20px'} />
        <Subsection>Categories</Subsection>
        <Tag />
        <Spacer height={'20px'} />
        <Box
          width={'100%'}
          overflowX={'scroll'}
          sx={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#C4C4C4',
              borderRadius: '5px',
            },
          }}
        >
          <Flex width={'fit-content'} gap={5}>
            <Stack width={'450px'}>
              <Image src="/images/concerts.png" alt="Concerts" />
              <Caption>Concerts</Caption>
            </Stack>
            <Stack width={'450px'}>
              <Image src="/images/sports.png" alt="Sports" />
              <Caption>Sports</Caption>
            </Stack>
            <Stack width={'450px'}>
              <Image src="/images/cinema.png" alt="Cinema/Theatre" />
              <Caption>Cinema/Theatre</Caption>
            </Stack>
            <Stack width={'450px'}>
              <Image src="/images/concerts.png" alt="Concerts" />
              <Caption>Concerts</Caption>
            </Stack>
          </Flex>
        </Box>
        <Spacer height={'20px'} />
        <HightableEvents />
        <PopularEventsInState />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Events;
