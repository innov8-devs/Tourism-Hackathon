import { useEffect, useRef, useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Spinner,
  useBoolean,
} from '@chakra-ui/react';
import Link from 'next/link';
import { GrNext, GrPrevious } from 'react-icons/gr';

import useNumber from '../../../hooks/useNumber';
import styles from '../../../styles/Home.module.css';
import { range } from '../../../utils/helpers';

import { Header, Logo } from './suggest-a-new-business-modal';

function convertValues(data: string[], keys: string[]) {
  const result = {};
  for (const idx of range(data.length)) {
    if (!result[keys[idx]]) result[keys[idx]] = data[idx];
  }
  return result;
}

const SuggestNewBusinessModal = ({ isOpen, onClose, stages, onClick, loading, keys }) => {
  const [hasPrev, setPrev] = useBoolean(false);
  const [hasNxt, setNxt] = useBoolean(true);
  const { value: stage, increment, decrement, zero } = useNumber(0);
  const [suggestValues, setSuggestValues] = useState(Array(stages.length).fill(''));
  const [inpVal, setVal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setVal(suggestValues[stage] || stages[stage]?.default);
  }, [stage, stages, suggestValues]);

  useEffect(() => {
    if (!inpVal && !stages[stage]?.optional) {
      setErrorMessage('Required');
    } else {
      setErrorMessage('');
    }
  }, [inpVal, stage, suggestValues, stages]);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    stage > 0 && setPrev.on();
    stage <= 0 && setPrev.off();
    stage >= stages.length - 1 && setNxt.off();
    stage < stages.length - 1 && setNxt.on();
  }, [setPrev, stage, setNxt, stages.length]);

  const onCloseAlt = () => {
    onClose();
    zero();
    setSuggestValues([]);
    setPrev.off();
    setNxt.on();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseAlt} size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Flex alignItems={'center'}>
            <div className={styles.headerLogo}>
              <Link href="/" passHref>
                <Logo src="/images/logo.png" alt="logo" className={styles.logo} />
              </Link>
            </div>
            <Header>{stages[stage]?.title}</Header>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <FormControl isInvalid={errorMessage !== ''}>
            <FormLabel>
              {stages[stage]?.id || stage + 1}. {stages[stage]?.label}
            </FormLabel>
            {stages[stage]?.isSelect ? (
              <Select
                value={inpVal || stages[stage]?.label}
                ref={selectRef}
                color={!inpVal ? 'gray.400' : 'black'}
                placeholder={stages[stage]?.label}
                onChange={(e) => setVal(e.target.value)}
              >
                {stages[stage]?.values.map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                value={inpVal}
                onChange={(e) => setVal(e.target.value)}
                ref={inputRef}
                type={stages[stage]?.isPhone ? 'tel' : 'text'}
                placeholder={stages[stage]?.label}
              />
            )}
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
          <Spacer height={10} />
          <Flex justifyContent={'space-between'}>
            {hasPrev ? (
              <Button
                padding={2}
                background={'#ff9916'}
                _hover={{
                  backgroundColor: '#fff',
                  color: '#ff9916',
                  border: '1px solid #ff9916',
                }}
                onClick={() => {
                  if (!errorMessage) {
                    const allVals = suggestValues;
                    allVals[stage] = inpVal;
                    setSuggestValues(allVals);
                    decrement(1);
                    setVal('');
                    setErrorMessage('');
                    if (inputRef.current) inputRef.current.value = '';
                  }
                }}
              >
                {stages[stage - 1]?.stepEnd ? 'Previous Step' : <GrPrevious />}
              </Button>
            ) : (
              <Button opacity={0}></Button>
            )}
            {hasNxt ? (
              <Button
                padding={2}
                background={'#ff9916'}
                _hover={{
                  backgroundColor: '#fff',
                  color: '#ff9916',
                  border: '1px solid #ff9916',
                }}
                onClick={() => {
                  if (!errorMessage) {
                    const allVals = suggestValues;
                    allVals[stage] = inpVal;
                    setSuggestValues(allVals);
                    if (stages[stage]?.nextDependent && inpVal != stages[stage]?.nextDependent) {
                      increment(2);
                    } else {
                      increment(1);
                    }
                    setVal('');
                    setErrorMessage('');
                    if (inputRef.current) inputRef.current.value = '';
                  }
                }}
              >
                {stages[stage]?.stepEnd ? 'Next Step' : <GrNext />}
              </Button>
            ) : (
              <Button
                padding={2}
                background={'#ff9916'}
                _hover={{
                  backgroundColor: '#fff',
                  color: '#ff9916',
                  border: '1px solid #ff9916',
                }}
                onClick={() => {
                  if (!errorMessage) {
                    const allVals = suggestValues;
                    allVals[stage] = inpVal;
                    setSuggestValues(allVals);
                    onClick({ variables: { data: { ...convertValues(allVals, keys) } } });
                    onCloseAlt();
                    if (inputRef.current) inputRef.current.value = '';
                  }
                }}
              >
                {loading ? <Spinner /> : stages[stage]?.finalText}
              </Button>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuggestNewBusinessModal;
