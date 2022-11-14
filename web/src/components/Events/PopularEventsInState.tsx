import { useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { BiCaretDown } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';

import { RECOMMEND_EVENTS_QUERY } from '../../graphQL/queries';
import None from '../Global/None';
import CardEvents from '../Home/CardEvents';
import {
  MainWrapper,
  RecButton,
  RecButtonText,
  RecHeader,
  RecHeaderContainer,
  RecRow,
} from '../Home/hightableevents-styles';

const PopularEventsInState = () => {
  // eslint-disable-next-line no-unused-vars
  const [allPlaces, setAllPlaces] = useState(['Lagos', 'Abuja', 'Accra']);
  const [availablePlaces, setAvailablePlaces] = useState(allPlaces);
  const [location, setLocation] = useState('');
  const [visible, setVisible] = useState(6);
  const [isOpen, setIsOpen] = useState(false);
  const { loading, data, error, fetchMore } = useQuery(RECOMMEND_EVENTS_QUERY, {
    variables: {
      skip: 0,
      limit: 100,
      location: '',
    },
  });

  const showMore = async () => {
    setVisible(visible + 6);
  };

  const showLess = () => {
    setVisible(6);
  };

  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>
            Popular Events in <span style={{ color: '#FF9916' }}>{location || 'Africa'}</span>
          </RecHeader>
          <BiCaretDown size={45} onClick={setIsOpen.bind(true)} />
        </RecHeaderContainer>

        <RecRow id="events">
          <CardEvents
            visible={visible}
            data={data?.recommendEvents?.slice(0, visible)}
            loading={loading}
            error={error}
          />
        </RecRow>
        {data?.recommendEvents.length == 0 && <None name={'No Popular Event Currently'} noTop />}
        {visible >= data?.recommendEvents.length ? (
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
      <Modal isOpen={isOpen} onClose={setIsOpen.bind(false)}>
        <ModalOverlay />
        <ModalContent
          sx={{
            '&::-webkit-scrollbar': {
              width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#C4C4C4',
              borderRadius: '5px',
            },
          }}
          maxHeight={{ base: '100vh', md: '80vh' }}
          overflowY={'scroll'}
          width={{ base: '100%', md: 'fit-content' }}
          height={{ base: '100%', md: 'fit-content' }}
        >
          <ModalHeader>
            <Input
              placeholder="Lagos"
              width={'80%'}
              onChange={(e) => {
                const searchResults = allPlaces.filter((place) =>
                  place.toLowerCase().startsWith(e.target.value.toLowerCase()),
                );
                setAvailablePlaces(searchResults);
              }}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {availablePlaces.map((place, i) => {
              return (
                <Box
                  key={i}
                  _hover={{
                    backgroundColor: '#ccc',
                  }}
                  backgroundColor={location == place ? '#aaa' : '#fff'}
                  onClick={() => {
                    setLocation(place);
                    fetchMore({
                      variables: {
                        skip: 0,
                        limit: 6,
                        location,
                      },
                    });
                    setIsOpen(false);
                  }}
                >
                  <Text padding={15}>{place}</Text>
                  <hr />
                </Box>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="#FF9916"
              _hover={{
                backgroundColor: '#fff',
                color: '#FF9916',
                border: '1px solid #FF9916',
              }}
              onClick={() => setIsOpen(false)}
              mr={3}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PopularEventsInState;
