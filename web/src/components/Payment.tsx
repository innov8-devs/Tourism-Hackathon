import { useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import { Box, Flex, FormControl, Input, Spacer, useDisclosure } from '@chakra-ui/react';
import creditCardType from 'credit-card-type';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { usePaystackPayment } from 'react-paystack';

import { CONFIRM_PAYMENT } from '../graphQL/queries';

import { Button, FormErrorMessage } from './payment-styles';

const Payment = ({ amount, email, onSuccess, id }) => {
  const [cardLength, setCardLength] = useState(16);
  const [paymentReference] = useState(new Date().getMilliseconds().toString());
  const initializePayment = usePaystackPayment({
    reference: paymentReference,
    amount,
    email,
    publicKey: 'pk_test_e4b7eecdd3264377da3971e69b394f03deb9da63',
  });
  const [confirmPayment] = useMutation(CONFIRM_PAYMENT, {
    onCompleted: () => {},
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    number: '',
    cvv: '',
    exp: '',
  });
  const [formVals, setFormVals] = useState({
    name: '',
    type: '',
    number: '',
    cvv: '',
    exp: '',
  });

  function handleSubmit() {
    let errors = false;
    const allErrors = {
      name: '',
      number: '',
      cvv: '',
      exp: '',
    };
    if (!formVals.name) {
      allErrors.name = 'You have to enter a name';
      errors = true;
    }
    if (!formVals.number) {
      allErrors.number = 'You have to enter a card number';
      errors = true;
    }
    if (!formVals.cvv) {
      allErrors.cvv = 'You have to enter a card cvv';
      errors = true;
    }
    if (!formVals.exp) {
      allErrors.exp = 'You have to enter a card expiry date';
      errors = true;
    }
    setFormErrors(allErrors);

    if (errors) return null;
    (initializePayment as any)(async (ref: any) => {
      setFormVals({
        name: '',
        type: '',
        number: '',
        cvv: '',
        exp: '',
      });
      nameInput.current.value = '';
      cvvField.current.value = '';
      dateField.current.value = '';
      numberField.current.value = '';
      confirmPayment({
        variables: {
          reference: ref.reference,
          id,
        },
      });
      onSuccess(ref);
    });
  }

  const nameInput = useRef(null);
  const numberField = useRef(null);
  const dateField = useRef(null);
  const cvvField = useRef(null);

  const { isOpen: focus } = useDisclosure();
  return (
    <Box>
      <Cards cvc={formVals.cvv} expiry={formVals.exp} focused={focus} name={formVals.name} number={formVals.number} />
      <Spacer height={5} />
      <FormControl marginBottom={'20px'} isRequired>
        <Input
          ref={numberField}
          onChange={(e) => {
            if (
              !parseInt(e.target.value[e.target.value.length - 1]) &&
              e.target.value[e.target.value.length - 1] != ' '
            ) {
              e.target.value = e.target.value.slice(0, -2);
            }
            const card = creditCardType(e.target.value);
            card[0]?.gaps.forEach((gap) => {
              if (e.target.value.replaceAll(' ', '').length == gap) e.target.value += ' ';
            });
            card[0]?.lengths[0] && setCardLength(card[0]?.lengths[0]);
            setFormVals((prev) => ({ ...prev, number: e.target.value }));
            e.target.value.replaceAll(' ', '').length == cardLength && nameInput.current.focus();
          }}
          type="string"
          placeholder="Card Number"
          required
        />
        <FormErrorMessage>{formErrors.number}</FormErrorMessage>
      </FormControl>
      <FormControl marginBottom={'20px'} isRequired>
        <Input
          ref={nameInput}
          type="text"
          onChange={(e) => setFormVals((prev) => ({ ...prev, name: e.target.value }))}
          placeholder="Name on Card"
          required
        />
        <FormErrorMessage>{formErrors.name}</FormErrorMessage>
      </FormControl>
      <Flex marginBottom={'20px'}>
        <FormControl marginBottom={'20px'} marginRight={'20px'} isRequired>
          <Input
            ref={dateField}
            type="text"
            onChange={(e) => {
              e.target.value =
                e.target.value.length == 3 && e.target.value[2] != '/'
                  ? e.target.value.slice(0, 2) + '/' + e.target.value[2]
                  : e.target.value;
              setFormVals((prev) => ({ ...prev, exp: e.target.value }));

              e.target.value.length == 5 && cvvField.current.focus();
            }}
            placeholder="Exp Dates"
            required
          />
          <FormErrorMessage>{formErrors.exp}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <Input
            ref={cvvField}
            type="number"
            placeholder="CVV"
            onChange={(e) => {
              setFormVals((prev) => ({ ...prev, cvv: e.target.value }));
              e.target.value.length == 3 && cvvField.current.blur();
            }}
            required
          />
          <FormErrorMessage>{formErrors.cvv}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex width={'100%'} justifyContent={'center'}>
        <Button onClick={handleSubmit}>Make payment</Button>
      </Flex>
    </Box>
  );
};

export default Payment;
