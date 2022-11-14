import React, { useEffect } from 'react';

import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useBoolean,
  useToast,
} from '@chakra-ui/react';
import moment from 'moment';
import { BiPlus } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';

import { DELETE_RESERVATION, FIND_ALL_RESERVATION } from '../../graphQL/queries';

import { Header, SectionDescription, SectionTitle } from './reservation-details-modal.styles';

export interface IReservation {
  _id?: string;
  customer?: string;
  seats?: string;
  datetime?: string;
  verified?: boolean;
  status?: string;
  amount?: number;
  title?: string;
  type?: string;
  restaurantId?: string;
  restaurant?: {
    _id?: string;
    shortId?: string;
    name?: string;
    email?: string;
    logo?: string;
    address?: string;
    tags?: {
      _id?: string;
      name?: string;
    }[];
  };
  space?: {
    _id?: string;
    name?: string;
    availableTablesPerTime?: number;
  };
  remainingSpaces?: number;
}

type IProps = {
  reservation: IReservation;
  isOpen: boolean;
  onClose: () => void;
};

const ReservationDetailsModal: React.FC<IProps> = ({ reservation, isOpen, onClose }) => {
  const [copied, { on, off }] = useBoolean();
  const toast = useToast();
  const [deleteReservation] = useMutation(DELETE_RESERVATION, {
    variables: { id: reservation?._id },
    refetchQueries: [{ query: FIND_ALL_RESERVATION }],
    onCompleted: () => {
      toast({ status: 'success', title: 'Successfully deleted reservation' });
      onClose();
    },
  });

  useEffect(() => {
    off();
  }, [reservation, copied, off]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Header>{reservation?.title}</Header>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={reservation?.restaurant?.logo} alt={'Logo'} width={'100%'} height={'250px'} />
          <Flex mb={2} gap={5} alignItems={'center'}>
            <Box>
              <Text color={'#0F264C'} fontSize={16} fontWeight={700}>
                {reservation?.restaurant?.name}
              </Text>
              <Text>{reservation?.restaurant?.tags?.map((el) => el.name).join(', ')}</Text>
            </Box>
            <IoCallOutline size={50} />
          </Flex>
          <Text
            textOverflow={'ellipsis'}
            overflow={'hidden'}
            display={'-webkit-box'}
            color={'#AD6600'}
            style={{
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
            fontSize={12}
            mb={4}
          >
            {reservation?.restaurant?.address}
          </Text>
          <SectionTitle>Reserved Date</SectionTitle>
          <SectionDescription>{moment(reservation?.datetime).format('Do MMM, YYYY')}</SectionDescription>

          <SectionTitle>HT Reservation Code</SectionTitle>
          <Flex justifyContent={'space-between'}>
            <SectionDescription>{reservation?._id?.slice(20)}</SectionDescription>
            <Text
              cursor={'pointer'}
              onClick={async () => {
                await navigator.clipboard.writeText(reservation?._id?.slice(20));
                on();
              }}
              color={'#0055FF'}
              fontSize={10}
            >
              {copied ? 'Copy' : 'Copied'}
            </Text>
          </Flex>

          <SectionTitle>Reservation Details</SectionTitle>
          <SectionDescription>{reservation?.title}</SectionDescription>

          <Flex mb={4} justifyContent={'space-between'}>
            <SectionTitle>Reservation Fee</SectionTitle>
            <SectionTitle>#{reservation?.amount}</SectionTitle>
          </Flex>

          <Flex mb={10} justifyContent={'space-between'}>
            <SectionTitle>Status</SectionTitle>
            <SectionTitle
              style={{
                color:
                  reservation?.status?.toLowerCase() == 'confirmed'
                    ? '#0055FF'
                    : reservation?.status?.toLowerCase() == 'rejected'
                    ? '#FF000A'
                    : 'rgba(40, 40, 40, 0.63)',
                fontSize: 10,
              }}
            >
              {reservation?.status?.toLowerCase() == 'confirmed'
                ? 'Reserved'
                : reservation?.status?.toLowerCase() == 'rejected'
                ? 'Rejected'
                : 'Awaiting Confirmation'}
            </SectionTitle>
          </Flex>
          {/* <Button mb={5} color={'#0F264C'} w={'100%'} border={'1px solid'} bg={'white'} borderColor={'#0F264C'}>
            Edit Reservation
            <BiPlus style={{ marginLeft: '5px' }} />
          </Button> */}
          <Button
            onClick={() => {
              if (confirm('Are you sure you want to delete this reservation?')) {
                deleteReservation();
              }
            }}
            color={'#FF000A'}
            w={'100%'}
            border={'1px solid'}
            bg={'white'}
            borderColor={'#FF000A'}
          >
            Cancel Reservation
            <BiPlus style={{ marginLeft: '5px' }} />
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReservationDetailsModal;
