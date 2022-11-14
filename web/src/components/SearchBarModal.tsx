import { useState } from 'react';

import { Flex, Input, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';

const SearchBarModal = ({ isOpen, onClose }) => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop={'15vh'}>
          <ModalBody>
            <Flex alignItems={'center'}>
              <BiSearch size={24} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push(`/search?term=${term}`);
                  onClose();
                }}
                style={{ flex: 1 }}
              >
                <Input
                  onChange={(e) => setTerm(e.target.value)}
                  padding={'10px'}
                  variant={'unstyled'}
                  placeholder="Search Events, restaurants and People"
                />
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBarModal;
