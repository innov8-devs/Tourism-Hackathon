import { Flex, Image, Text } from '@chakra-ui/react';

const None = ({ name, noTop = false }: { name: string; noTop?: boolean }) => {
  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
      marginTop={!noTop && '200px'}
    >
      <Image src={'/images/sad_face.png'} width={'200px'} height={'200px'} alt={'sad emoji'} />
      <Text>{name}</Text>
    </Flex>
  );
};

export default None;
