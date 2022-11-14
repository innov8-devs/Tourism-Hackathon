import { Flex, Image, useDisclosure } from '@chakra-ui/react';

import { Header, Typography } from './hero-styles';
import SuggestNewBusinessModal from './Modals/SuggestNewBusinessModal';
import { Button } from './patner-amc-styles';

const BecomePartnerSection = ({
  title,
  description,
  reverse = false,
  image,
  stages,
  onClickMutation,
  onClickLoading,
  mutationDataKeys,
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex
      height={'auto'}
      gap={'100px'}
      alignSelf={'center'}
      marginBottom={'100px'}
      width={'100%'}
      flexDir={{ base: 'column', md: 'column', lg: reverse ? 'row-reverse' : 'row' }}
    >
      <Flex
        flexDirection={'column'}
        width={{ base: '100%', lg: '100%', md: '70%' }}
        alignSelf={{ lg: 'center', md: 'flex-start' }}
      >
        <Header size="md">{title}</Header>
        <Typography size="md">{description}</Typography>
        <Button onClick={onToggle}>
          <Typography size="sm">{title}</Typography>
        </Button>
      </Flex>
      <Flex
        flexDirection={'column'}
        width={'100%'}
        style={{
          width: '100%',
          height: '500px',
        }}
        alignItems={{ base: 'flex-end', md: 'flex-end', lg: 'center' }}
        display={{ base: 'none', md: 'flex', lg: 'flex' }}
      >
        <Image src={image} height={'100%'} alt="hero image" />
      </Flex>
      <SuggestNewBusinessModal
        keys={mutationDataKeys}
        onClick={onClickMutation}
        loading={onClickLoading}
        stages={stages}
        onClose={onClose}
        isOpen={isOpen}
      />
    </Flex>
  );
};

export default BecomePartnerSection;
