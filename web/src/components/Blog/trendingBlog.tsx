import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

const TrendingBlog = ({ img, title, description }) => {
  return (
    <Flex bg={'#fff'} mb={7} p={0} boxShadow={'0px 7px 29px rgba(100, 100, 111, 0.2)'}>
      <Image mr={2} flex={1} src={img} alt={'Trending image'} width={300} height={'inherit'} />
      <Box p={3} flex={1}>
        <Text fontWeight={500} lineHeight={'30px'} fontSize={30} textTransform={'capitalize'}>
          {title}
        </Text>
        <Text>{description}</Text>
        <Box p={2} bg={'#FF9916'} color={'#fff'}>
          300 Views
        </Box>
      </Box>
    </Flex>
  );
};

export default TrendingBlog;
