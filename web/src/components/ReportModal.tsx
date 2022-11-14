import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GrNext } from 'react-icons/gr';

import { Header, HeaderText, Typography } from './report-modal-styles';

const possibleReportTypes = ["It's Spam", "I just don't like it", 'Illegal goods', 'Violence', 'Not delivering orders'];
const supportActions = [
  {
    text: 'Block',
    danger: true,
    onClick: (router) => {
      router.push('/restaurants');
    },
  },
  {
    text: 'Restrict',
    danger: true,
    onClick: (router) => {
      router.push('/restaurants');
    },
  },
  {
    text: 'Cancel',
    danger: false,
    onClick: () => {},
  },
];

const ReportModal = ({ onClose, isOpen, businessType = 'restaurant', onEnd }) => {
  const { isOpen: isOpenSupport, onClose: onCloseSupport, onToggle: onToggleSupport } = useDisclosure();

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent padding={'10px'} height={isOpenSupport ? 0 : 'fit-content'} overflow={'hidden'}>
        <ModalHeader>
          <Header>Report {businessType}</Header>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HeaderText size="md" bold>
            Why are you reporting this {businessType}
          </HeaderText>
          <HeaderText size="sm">
            Your report is anonymous except if you&apos;re reporting an intellectual property infringement. If someone
            is in immediate danger, call the local emergency services don&apos;t wait.
          </HeaderText>
          {possibleReportTypes.map((type, i) => (
            <Flex
              key={i}
              padding={2}
              _first={{
                borderTop: '1px solid #ccc',
                marginTop: '20px',
              }}
              _hover={{
                backgroundColor: '#ccc',
              }}
              borderBottom={'1px'}
              borderColor={'#ccc'}
              justifyContent={'space-between'}
              onClick={() => {
                onToggleSupport();
                onEnd(type);
              }}
            >
              <Typography>{type}</Typography>
              <GrNext />
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
      <SupportActionsModal
        onCloseParent={onClose}
        isOpen={isOpenSupport}
        onClose={onCloseSupport}
        name={'R.S.V.P Restaurant'}
      />
    </Modal>
  );
};

const SupportActionsModal = ({ onClose, isOpen, name, onCloseParent }) => {
  const router = useRouter();
  return (
    <Modal
      onClose={() => {
        onClose();
        onCloseParent();
      }}
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent padding={'10px'}>
        <ModalHeader>
          <Header>Support Actions</Header>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HeaderText size="md" bold>
            What else would you like to do
          </HeaderText>
          <HeaderText size="sm">We won&apos;t let them know if you take any of these actions</HeaderText>
          {supportActions.map((type, i) => (
            <Flex
              key={i}
              padding={2}
              _first={{
                borderTop: '1px solid #ccc',
                marginTop: '20px',
              }}
              _hover={{
                backgroundColor: '#ccc',
              }}
              borderBottom={'1px'}
              borderColor={'#ccc'}
              justifyContent={'space-between'}
              onClick={() => {
                type.onClick(router);
                onClose();
                onCloseParent();
              }}
            >
              <Typography style={{ color: type?.danger ? 'red' : 'blue' }}>
                {type.text} {type.danger && name}
              </Typography>
              <GrNext />
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;
