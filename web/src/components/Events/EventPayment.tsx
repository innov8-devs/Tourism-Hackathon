import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export const EventPayment = ({ isOpen, onClose, onToggleCard }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading>Pay for Event</Heading>
        </ModalHeader>
        <ModalBody display={'flex'} flexDir={'column'} gap={4}>
          <Button bg={'#000'} color={'#fff'} _hover={{ bg: '#000c' }}>
            Pay with HiPay
          </Button>
          <Button
            onClick={() => {
              onClose();
              onToggleCard();
            }}
            bg={'#ff9916'}
            color={'#fff'}
            _hover={{ bg: '#ff9916cc' }}
          >
            Pay with Card
          </Button>
          <Button bg={'#0055ff'} color={'#fff'} _hover={{ bg: '#0055ffcc' }}>
            Pay with Bank Transfer
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
