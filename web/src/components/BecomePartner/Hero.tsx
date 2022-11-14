import { Flex, Image } from '@chakra-ui/react';

import { Container, Header, Typography } from './hero-styles';

const BecomePartnerHero = () => {
  return (
    <Flex height={'auto'} gap={'100px'} alignItems={'center'} marginBottom={'100px'}>
      <Container>
        <Header size="lg">Lets Get Down To Business</Header>
        <Typography size="md">
          Everyday, people are looking for new hospitality and entertainment experiences and they&apos;re using
          HighTable to discover them. Reach new customers and grow your business with a free listing. Join us on the
          HighTable side of life.
        </Typography>
      </Container>
      <Container
        img
        style={{
          width: '100%',
          height: '500px',
        }}
      >
        <Image src="/images/business_center_hero.png" width={'100%'} height={'100%'} alt="hero image" />
      </Container>
    </Flex>
  );
};

export default BecomePartnerHero;
