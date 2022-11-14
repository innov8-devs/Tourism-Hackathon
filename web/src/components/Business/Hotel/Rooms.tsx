import React from 'react';

import { Box, Image, Spacer } from '@chakra-ui/react';

import { Row } from '../../RestaurantDetails/restaurantabout-styles';

import { Button, Typography } from './rooms-styles';

export default function Room({ roomDetails, img }) {
  return (
    <Box width={'100%'} padding={5} border="2px" borderColor={'#E4E4E4'} borderRadius={8}>
      <Row style={{ marginBottom: '10px' }}>
        <Image
          src={roomDetails.roomImage || img}
          width={20}
          height={16}
          borderRadius={4}
          marginRight={4}
          marginBottom={4}
          alt="Room image"
        />
        <h3>{roomDetails.name}</h3>
      </Row>
      <Spacer height={2} />
      <Typography style={{ marginBottom: '10px' }}>Price for 2 nights</Typography>
      <Typography style={{ fontWeight: 600, marginBottom: '10px' }}>
        {roomDetails?.price?.replace('GHS', '#') || '#20000'}
      </Typography>
      <Typography style={{ fontSize: 14, marginBottom: '10px' }}>Includes taxes and charges</Typography>
      <Button>Select Room</Button>
    </Box>
  );
}
