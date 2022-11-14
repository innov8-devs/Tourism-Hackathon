import CardInfluencer from './CardInfluencer';
import { Left, LeftText, MainContainer, NextIcon, Right } from './influencer-styles';

const Influencers = () => {
  const scrollRight = () => {
    const right = document.querySelector(Right);
    right.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <MainContainer>
      <Left>
        <LeftText>HighTable Influencers</LeftText>
      </Left>
      <Right>
        <CardInfluencer />
      </Right>
      <NextIcon onClick={scrollRight} src="/images/nextIcon.png" alt="nextIcon" />
    </MainContainer>
  );
};

export default Influencers;
