import CardRestaurants from './CardRestaurants';
import { MainWrapper } from './places-styles';
import {
  RecButton,
  RecButtonText,
  RecHeader,
  RecHeaderContainer,
  RecHyphen,
  RecIcon,
  RecRow,
  RecSecondaryTitle,
} from './restaurant-styles';

const Restaurants = () => {
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Restaurants</RecHeader>
          <RecHyphen />
        </RecHeaderContainer>
        <RecSecondaryTitle> Great Experiences outside your home</RecSecondaryTitle>
        <RecRow>
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
          <CardRestaurants />
        </RecRow>
        <RecButton>
          <RecIcon src="/images/seemoreIcon.png" alt="see more" />
          <RecButtonText>See more</RecButtonText>
        </RecButton>
      </MainWrapper>
    </div>
  );
};

export default Restaurants;
