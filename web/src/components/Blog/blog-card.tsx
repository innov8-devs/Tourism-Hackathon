import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const BlogCard = ({ imgSrc, title }) => {
  return (
    <Box
      borderRadius={'15px'}
      pos={'relative'}
      w={'300px'}
      h={'300px'}
      flexShrink={0}
      flexGrow={0}
      flexBasis={'auto'}
      bgImage={imgSrc}
      overflow={'hidden'}
      boxShadow={'0px 8px 20px 0.9px rgba(0, 0, 0, 0.12)'}
      mb={10}
    >
      <Text
        h={'4em'}
        pos={'absolute'}
        bottom={0}
        p={4}
        bgColor={'#fff'}
        color={'#4B4B4B'}
        fontSize={'20px'}
        fontWeight={'600'}
        display={'-webkit-box'}
        style={{
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {title}
      </Text>
      <Box pos={'absolute'} p={2} bg={'#091C2E'} color={'#fff'} top={0} left={0}>
        300 Views
      </Box>
      <Box pos={'absolute'} p={2} bg={'#FF9916'} color={'#fff'} top={0} right={0}>
        Category
      </Box>
    </Box>
  );
};

export default BlogCard;
