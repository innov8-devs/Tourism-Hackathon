import { useMutation } from '@apollo/client';
import { Box, Flex, useToast } from '@chakra-ui/react';
import { PaymentElement, useStripe /*, useElements */, useElements } from '@stripe/react-stripe-js';
import router from 'next/router';
import styled from 'styled-components';

import { CONFIRM_PAYMENT } from '../../graphQL/queries';

export const Button = styled.button<{ made?: boolean }>`
  /* Primary Color- Orange */
  color: #fff;
  background: #ff9916;
  border-radius: 8px;
  padding: 10px;
  width: fit-content;
  align-self: center;
`;

const Payment = ({ amount, bookingData, confirmPayment2, order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();

  const [confirmPayment] = useMutation(CONFIRM_PAYMENT, {
    onCompleted: () => {},
    onError: () => {},
  });

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {},
    });

    if (result.paymentIntent?.status == 'succeeded') {
      confirmPayment2
        ? confirmPayment2({
            variables: {
              reference: result?.paymentIntent?.id,
              id: bookingData?._id,
            },
          })
        : confirmPayment({
            variables: {
              reference: result?.paymentIntent?.id,
              id: bookingData?._id,
            },
          });
      router.back();
    } else {
      toast({ status: 'error', title: 'An Error Occured During Payment' });
    }
  };

  return (
    <Box w={'100%'} padding={order && '0 50px 0 0'} margin={!order && '20px 90px'}>
      <PaymentElement />
      <Flex width={'100%'} justifyContent={'center'} mt={4}>
        <Button onClick={handleSubmit}>Make payment # {Intl.NumberFormat().format(amount)}</Button>
      </Flex>
    </Box>
  );
};

export default Payment;
