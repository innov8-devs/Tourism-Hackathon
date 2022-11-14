import Image from 'next/image';

import { Left, RightReview } from './cardattractions-styles';
import {
  CardImg,
  FavTag,
  LeftLocation,
  LeftSubTitle,
  LeftTitle,
  Location,
  RecCard,
  RecCardInnerContainer,
  RecColumn,
  ReviewTop,
  Right,
  RightStar,
} from './cardrestaurants-styles';

const CardRestaurants = () => {
  return (
    <RecColumn>
      <RecCard>
        <FavTag src="/images/favTag.png" alt="favTag" />

        <CardImg src="/images/cardImg.png" alt="cardImg" />
        <ReviewTop>
          <RightStar>
            {Array(5).map((star, i) => {
              return <Image key={i} src="/images/star.png" alt="stars" />;
            })}
          </RightStar>
          <RightReview> 69 reviews</RightReview>
        </ReviewTop>
        <RecCardInnerContainer>
          <Left>
            <LeftTitle>NOK Restaurant</LeftTitle>
            <LeftSubTitle>Chinese dining, Middle Eastern, Vegetarian diet</LeftSubTitle>
            <LeftLocation>
              {Array(5).map((star, i) => {
                return <Image key={i} src="/images/star.png" alt="stars" />;
              })}
              <Location>Victoria Island, Lagos</Location>
            </LeftLocation>
          </Left>
          <Right>
            <RightStar>
              {Array(5).map((star, i) => {
                return <Image key={i} src="/images/star.png" alt="stars" />;
              })}
            </RightStar>
            <RightReview>69 reviews</RightReview>
          </Right>
        </RecCardInnerContainer>
      </RecCard>
    </RecColumn>
  );
};

export default CardRestaurants;
