import {
  MainWrapper,
  RecButton,
  RecButtonText,
  RecHeader,
  RecHeaderContainer,
  RecHyphen,
  RecIcon,
  RecRow,
  RecSecondaryTitle,
} from './attractions-styles';
import CardAttractions from './CardAttractions';

const Attractions = () => {
  return (
    <div>
      <MainWrapper>
        <RecHeaderContainer>
          <RecHeader>Attractions</RecHeader>
          <RecHyphen />
        </RecHeaderContainer>
        <RecSecondaryTitle> Great Experiences outside your home</RecSecondaryTitle>
        <RecRow>
          <CardAttractions />
          <CardAttractions />
          <CardAttractions />
          <CardAttractions />
          <CardAttractions />
          <CardAttractions />
        </RecRow>
        <RecButton>
          <RecIcon src="/images/seemoreIcon.png" alt="see more" />
          <RecButtonText>See more</RecButtonText>
        </RecButton>
      </MainWrapper>
    </div>
  );
};

export default Attractions;
