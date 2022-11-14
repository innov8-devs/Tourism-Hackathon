import React from 'react';

import Link from 'next/link';

import Button from '../components/Button';
import People from '../components/Discover/People';
import Places from '../components/Discover/Places';

import {
  Container,
  Header,
  Left,
  LeftImg,
  LeftTextTwo,
  MainContainer,
  MobileImg,
  Right,
  WelcomeContainer,
} from './recommendation-styles';

const Recommended = () => {
  return (
    <MainContainer>
      <Left>
        <LeftImg src="/images/siginFormImg.png" />
        <MobileImg src="/images/siginFormImgMobile.png" alt="signInFormImg" />
        <WelcomeContainer>
          <LeftTextTwo>Thanks for Signing up.</LeftTextTwo>
        </WelcomeContainer>
      </Left>
      <Right>
        <Container>
          <Header>Recommended for you</Header>
          <Places />
          <People />
          <div style={{ width: '250px', margin: '-32px auto 20px auto' }}>
            <Link href="/?startTutorial=true" passHref>
              <Button small={false}>Finish</Button>
            </Link>
          </div>
        </Container>
      </Right>
    </MainContainer>
  );
};

export default Recommended;
