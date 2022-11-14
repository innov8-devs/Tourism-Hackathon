import { useEffect, useMemo, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBoolean,
  useToast,
} from '@chakra-ui/react';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useFormik } from 'formik';
import router from 'next/router';
import * as Yup from 'yup';

import config from '../../config';
import { ATTEND_PAID_EVENT, CREATE_PAYMENT_INTENT } from '../../graphQL/queries';

interface EventsData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const initialValues: EventsData = {
  fullName: '',
  email: '',
  phoneNumber: '',
};

const schema = Yup.object<EventsData>({
  fullName: Yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
  email: Yup.string().email('Email must be a valid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

const CardPayment = ({ isOpen, onClose, amount, eventId, tickets }) => {
  const [paymentIntent, setPaymentIntent] = useState('');
  const stripePromise = useMemo(
    () => loadStripe(`${process.env.NODE_ENV === 'production' ? config.stripe.LIVE : config.stripe.TEST}`),
    [],
  );

  const toast = useToast();

  const [createIntent] = useMutation(CREATE_PAYMENT_INTENT, {
    onError: (err) => {
      toast({ status: 'error', title: err.message });
    },
    onCompleted: (data) => {
      setPaymentIntent(data?.createPaymentIntent?.client_secret);
    },
  });

  useEffect(() => {
    createIntent({
      variables: {
        data: {
          amount: amount * 100,
          currency: 'ngn',
        },
      },
    });
  }, [amount, createIntent]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading>Pay with your card</Heading>
        </ModalHeader>
        <ModalBody display={'flex'} flexDir={'column'} gap={4}>
          {paymentIntent && (
            <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent }}>
              <Payment amount={amount} eventId={eventId} tickets={tickets} onClose={onClose} />
            </Elements>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Payment = ({ amount, tickets, eventId, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();
  const [loading, { toggle: toggleLoading }] = useBoolean();

  const [formStage, setFormStage] = useState(0);
  const [reference, setPaymentId] = useState('');
  const [confirmPayment] = useMutation(ATTEND_PAID_EVENT, {
    onCompleted: () => {
      toast({
        status: 'success',
        duration: 3000,
        title: 'Attendance request successful',
      });
      onClose();
      router.back();
    },
    onError: () => {},
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (user: EventsData) => {
      confirmPayment({
        variables: {
          data: {
            amount,
            tickets,
            reference,
            user,
          },
          eventId,
        },
      });
    },
  });

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    toggleLoading();

    const result = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {},
    });

    if (result.paymentIntent?.status == 'succeeded') {
      toast({ status: 'success', title: 'Successfully Paid for event' });
      setPaymentId(result?.paymentIntent?.id);
      setFormStage(1);
    } else {
      toast({
        status: 'error',
        title: 'An Error Occured During Payment',
        description: result?.error?.message,
      });
    }
    toggleLoading();
  };

  return (
    <Box w={'100%'}>
      {formStage == 0 ? (
        <>
          <PaymentElement />
          <Flex width={'100%'} justifyContent={'center'} mt={4}>
            <Button disabled={loading} onClick={handleSubmit} bg={'#ff9916'} _hover={{ bg: '#ff9916cc' }}>
              Make payment # {Intl.NumberFormat().format(amount)}
            </Button>
          </Flex>
        </>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel>Full Name</FormLabel>
            <Input
              className="fullName"
              id="fullName"
              placeholder="Jane Doe"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              className="email"
              id="email"
              type="email"
              placeholder="jane@doe.mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              className="phoneNumber"
              id="phoneNumber"
              type="telephone"
              placeholder="E.g +2348112907883"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
          </FormControl>
          <Flex width={'100%'} justifyContent={'center'} mt={4}>
            <Button type={'submit'} mx={'auto'} bg={'#ff9916'} _hover={{ bg: '#ff9916cc' }}>
              Submit
            </Button>
          </Flex>
        </form>
      )}
    </Box>
  );
};

export default CardPayment;
