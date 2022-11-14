import React from 'react';

import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiCheckCircle } from 'react-icons/bi';

import { eventLink } from '../../utils/helpers';

const PostSuccessful = ({ isOpen, onClose, id, name }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent height={'30vh'} pos={'relative'}>
        <ModalCloseButton />
        <ModalHeader>
          <Heading>Event Created</Heading>
        </ModalHeader>
        <ModalBody display={'flex'} flexDir={'column'} alignItems={'center'}>
          <BiCheckCircle size={80} color={'#14903f'} />
          <Text>
            Post Succcessful{' '}
            <Link passHref href={eventLink(name, id)}>
              <span style={{ fontWeight: 'bolder', cursor: 'pointer' }}>View Post</span>
            </Link>
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostSuccessful;
