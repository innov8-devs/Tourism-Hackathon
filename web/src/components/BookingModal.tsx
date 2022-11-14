import { ChangeEvent, useMemo, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Box,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Textarea,
  useToast,
} from '@chakra-ui/react';

import { MAKE_BOOKING } from '../graphQL/queries';
import useWindowDimensions from '../hooks/useWindowDimensions';

import { Amount, ConfirmBooking, Header, Label, Value } from './booking-modal-styles';
import { FormErrorMessage } from './payment-styles';

const BookingModal = ({ onClose, modal, onConfirm, restaurantId, spaceId, datetime, setBookingData, spaceAmount }) => {
  const toast = useToast();
  const [formErrors, setFormErrors] = useState({
    name: '',
    guests: '',
    phone: '',
    additionalNotes: '',
  });

  const { width } = useWindowDimensions();

  const computedPadding = useMemo(
    () =>
      width < 350
        ? '10px'
        : width < 450
        ? '20px'
        : width < 600
        ? '20px 50px'
        : width < 800
        ? '40px 100px'
        : '70px 200px',
    [width],
  );

  const [formVals, setFormVals] = useState({
    name: '',
    guests: '',
    phone: '',
    additionalNotes: '',
  });

  const [createBooking, { data }] = useMutation(MAKE_BOOKING, {
    variables: {
      data: {
        restaurantId,
        spaceId,
        seats: parseInt(formVals?.guests),
        title: formVals?.name,
        additionalNotes: '',
        datetime,
      },
    },
    onCompleted: () => {
      setBookingData(data?.createBooking);
      toast({ title: 'Booking added successfully', status: 'success', duration: 3000 });
    },
  });

  async function handleConfirm() {
    const acquiredErrors = { name: '', guests: '', phone: '', additionalNotes: '' };
    let errorOccurred = false;
    if (formVals.name == '') {
      acquiredErrors.name = 'Name cannot be empty';
      errorOccurred = true;
    }
    if (formVals.phone == '') {
      acquiredErrors.phone = 'Phone cannot be empty';
      errorOccurred = true;
    }
    if (formVals.guests == '') {
      acquiredErrors.guests = 'Guests cannot be empty';
      errorOccurred = true;
    }
    setFormErrors(acquiredErrors);
    if (errorOccurred) return null;
    await createBooking({
      variables: {
        data: {
          restaurantId,
          spaceId,
          seats: parseInt(formVals?.guests),
          title: formVals?.name,
          additionalNotes: formVals?.additionalNotes,
          datetime,
        },
      },
    });
    onClose();
    onConfirm(spaceAmount);
  }

  function handleInputChange(term) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormVals((prev) => ({ ...prev, [term]: e.target.value }));
    };
  }

  return (
    <Modal size={'4xl'} isOpen={modal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={computedPadding}>
        <ModalCloseButton />
        <ModalBody>
          <Header>Please provide the following information for your booking for</Header>
          <Flex justifyContent={'space-evenly'} flexDir={width < 400 ? 'column' : 'row'}>
            <Box>
              <Label>Date</Label>
              <Value>Wed, Nov 24</Value>
            </Box>
            <Box>
              <Label>Time</Label>
              <Value>10 pm GMT+1</Value>
            </Box>
          </Flex>
          <Amount style={{ textAlign: 'center' }}>#{spaceAmount}</Amount>
          <FormControl marginBottom={'20px'} isRequired>
            <Input type="text" placeholder="Reservation Name" onChange={handleInputChange('name')} />
            <FormErrorMessage>{formErrors.name}</FormErrorMessage>
          </FormControl>
          <Flex marginBottom={'20px'} flexDir={width < 600 ? 'column' : 'row'} gap={width < 600 ? 4 : 0}>
            <FormControl marginRight={'30px'} isRequired>
              <NumberInput min={1} max={50}>
                <NumberInputField placeholder="Number of guests" onChange={handleInputChange('guests')} />
              </NumberInput>
              <FormErrorMessage>{formErrors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <Input type="phone" placeholder="Contact Phone" onChange={handleInputChange('phone')} />
              <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl>
            <Textarea placeholder="Additional Instructions" onChange={handleInputChange('additionalNotes')} />
          </FormControl>
          <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
            <ConfirmBooking
              onClick={() => {
                handleConfirm();
              }}
            >
              Confirm Booking
            </ConfirmBooking>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Label style={{ textAlign: 'center' }}>
              <span style={{ color: '#ff9916' }}>Contact us</span> if you have any problem
            </Label>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
