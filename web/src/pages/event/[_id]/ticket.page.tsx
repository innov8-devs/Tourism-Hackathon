import { useMemo, useState } from 'react';

import { Box, Button, Flex, Grid, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react';
import image from 'next/image';
import router from 'next/router';
import { BiCaretDown, BiMinus, BiPlus } from 'react-icons/bi';

import CardPayment from '../../../components/Events/CardPayment';
import { EventPayment } from '../../../components/Events/EventPayment';
import { client } from '../../../config';
import { EVENTS_DETAIL_QUERY } from '../../../graphQL/queries';
import { getRestaurantId } from '../../../utils/helpers';

import { BackContainer, Back, MainWrapper } from './index-styles';
import { parseDate } from './index.page';

const BuyTicket = ({ data }) => {
  const [noOfTickets, setNoOfTickets] = useState(1);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { isOpen: isOpenCard, onClose: onCloseCard, onToggle: onToggleCard } = useDisclosure();
  const handleBack = () => {
    router.back();
  };

  const price = useMemo(() => {
    return data?.findEventById?.price * noOfTickets;
  }, [data?.findEventById?.price, noOfTickets]);

  const vat = useMemo(() => {
    return Math.ceil(price * 0.05);
  }, [price]);

  const grandTotal = useMemo(() => {
    return price + vat;
  }, [price, vat]);

  return (
    <>
      <BackContainer>
        <Back onClick={handleBack} />
      </BackContainer>
      <MainWrapper>
        <Flex
          padding={{ base: 4, lg: 1 }}
          height={{ base: 'max-content', lg: 500 }}
          gap={12}
          flexDir={{ base: 'column', lg: 'row' }}
          width={{ base: '100%', lg: 1000 }}
        >
          <Box boxShadow={'0px 1px 17px rgba(103, 34, 0, 0.17)'} flex={3} width={'100%'} height={'100%'}>
            <Image src={data?.findEventById?.images[0] || image} alt={'Image'} width={'100%'} height={'80%'} />
            <Box pl={5} pt={5}>
              <Text noOfLines={1} textTransform={'capitalize'} fontSize={30} fontWeight={700}>
                {data?.findEventById?.title}
              </Text>
              <Text>
                {parseDate(data?.findEventById?.start, data?.findEventById?.end, data?.findEventById?.repeats)[0]}
              </Text>
            </Box>
          </Box>
          <Box flex={5}>
            <Box p={6} pb={100} mb={8} boxShadow={'0px 1px 17px rgba(103, 34, 0, 0.17)'}>
              <Text m={3} mb={6} textTransform={'capitalize'} fontSize={30} fontWeight={500}>
                Select The number of tickets
              </Text>
              <Flex gap={3} justifyContent={'space-between'}>
                <Flex
                  borderBottom={'1px'}
                  fontSize={'18px'}
                  fontWeight={400}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  flex={4}
                >
                  Regular Ticket
                  <BiCaretDown />
                </Flex>
                <Flex flex={2} borderBottom={'1px'} fontSize={'18px'} fontWeight={400} color={'#0055FF'}>
                  NGN {data?.findEventById?.price}
                </Flex>
                <Flex gap={4} flex={4}>
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    p={1}
                    bg={noOfTickets > 1 ? '#d0342c' : '#C4C4C4'}
                    color={'#fff'}
                    borderRadius={'50%'}
                    w={7}
                    h={7}
                    onClick={() => noOfTickets > 1 && setNoOfTickets((prev) => prev - 1)}
                    _hover={{
                      bg: noOfTickets > 1 ? '#d0342ccc' : '#C4C4C4',
                    }}
                  >
                    <BiMinus />
                  </Flex>
                  <Flex borderBottom={'1px'} fontSize={'18px'} fontWeight={400} alignItems={'center'} gap={5}>
                    {noOfTickets}
                  </Flex>
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    p={1}
                    bg={'#0055FF'}
                    color={'#fff'}
                    borderRadius={'50%'}
                    w={7}
                    h={7}
                    onClick={() => setNoOfTickets((prev) => prev + 1)}
                    _hover={{
                      bg: '#0055FFcc',
                    }}
                  >
                    <BiPlus />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            {/* <CheckOut /> */}
            <Box px={16} py={8} boxShadow={'0px 1px 17px rgba(103, 34, 0, 0.17)'}>
              <h4 style={{ color: '#5B5B5B', fontSize: 30, fontWeight: 600, paddingBottom: 40 }}> Order Summary </h4>
              <Grid gridTemplateColumns={'repeat(2, 1fr)'} gap={8} mb={5}>
                <GridItem color={'#0F264C'} fontSize={18}>
                  Sub Total
                </GridItem>
                <GridItem color={'#0F264C'} fontSize={18}>
                  ₦ {new Intl.NumberFormat().format(price)}
                </GridItem>
                <GridItem color={'rgba(0, 0, 0, 0.6)'} fontSize={18}>
                  VAT
                </GridItem>
                <GridItem color={'#0F264C'} fontSize={18}>
                  ₦ {new Intl.NumberFormat().format(vat)}
                </GridItem>
                <GridItem fontSize={20} fontWeight={700}>
                  Total
                </GridItem>
                <GridItem fontSize={20} fontWeight={700}>
                  ₦ {new Intl.NumberFormat().format(grandTotal)}
                </GridItem>
              </Grid>
              <Button
                color={'#F8F9FA'}
                bg={'#ff9916'}
                p={4}
                _hover={{
                  bg: '#ff9916cc',
                }}
                onClick={onToggle}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </Flex>
      </MainWrapper>
      <EventPayment isOpen={isOpen} onClose={onClose} onToggleCard={onToggleCard} />
      <CardPayment
        isOpen={isOpenCard}
        onClose={onCloseCard}
        amount={grandTotal}
        eventId={data?.findEventById?._id}
        tickets={noOfTickets}
      />
    </>
  );
};

export default BuyTicket;

export async function getServerSideProps({ query }) {
  const { _id } = query;

  // TODO handle errors here
  const { data } = await client.query({
    query: EVENTS_DETAIL_QUERY,
    variables: { _id: getRestaurantId(_id) },
  });

  return {
    props: {
      data,
    },
  };
}
