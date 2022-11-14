import { useMutation } from '@apollo/client';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { ATTEND_EVENT, RECOMMEND_EVENTS_QUERY } from '../../graphQL/queries';
import { Header } from '../booking-modal-styles';

interface EventsData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  guests: number;
}

const initialValues: EventsData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  location: '',
  guests: 1,
};

const schema = Yup.object<EventsData>({
  fullName: Yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
  email: Yup.string().email('Email must be a valid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  location: Yup.string().required('Location is required').min(3, 'Location must be at least 3 characters'),
  guests: Yup.number().min(1, 'Guests must be at least 1').required(),
});

const EventsModal = ({ isOpen, onClose, id }) => {
  const toast = useToast();
  const [attendEvent] = useMutation(ATTEND_EVENT, {
    refetchQueries: [{ query: RECOMMEND_EVENTS_QUERY }],
    onCompleted: (data) => {
      data.status && toast({ title: 'Attend Event Request Has Been Sent', status: 'success', duration: 3000 });
    },
    onError: (error) => {
      toast({ title: error.message, status: 'error', duration: 3000 });
    },
  });

  return (
    <Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Header>Customer Details</Header>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values) => {
              await attendEvent({
                variables: {
                  data: {
                    ...values,
                    _id: id,
                  },
                },
              });
              onClose();
            }}
          >
            {({ errors, isSubmitting, handleSubmit, values, handleBlur, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Flex flexDir={'column'} alignItems={'stretch'}>
                  <FormControl marginBottom={'20px'} isRequired>
                    <Input
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                    />
                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <Input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <Input
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="phone"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number e.g +2348112907883"
                    />
                    <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <Input
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location e.g No 1 Lagoon street,  Lagos Island"
                    />
                    <FormErrorMessage>{errors.location}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginRight={'30px'} isRequired>
                    <NumberInput min={1} max={50}>
                      <NumberInputField
                        value={values.guests}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Number of guests"
                        id="guests"
                        name="guests"
                        type="number"
                      />
                    </NumberInput>
                    <FormErrorMessage>{errors.guests}</FormErrorMessage>
                  </FormControl>
                  <Button
                    disabled={isSubmitting}
                    bg="#ff9916"
                    boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'}
                    m={'20px auto'}
                    p={2}
                    type="submit"
                  >
                    Attend Event
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventsModal;
