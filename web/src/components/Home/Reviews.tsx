import CardRev from './CardRev';
import {
  MainWrapper,
  RevButton,
  RevButtonText,
  RevHeader,
  RevHeaderContainer,
  RevHyphen,
  RevIcon,
  RevRow,
  RevSecondaryTitle,
} from './reviews-styles';

const Reviews = () => {
  return (
    <div>
      <MainWrapper>
        <RevHeaderContainer>
          <RevHeader>Hightable Reviews</RevHeader>
          <RevHyphen />
        </RevHeaderContainer>
        <RevSecondaryTitle> Popular reviews you would like</RevSecondaryTitle>

        <RevRow>
          <CardRev review={{}} restaurant={{}} />
          <CardRev review={{}} restaurant={{}} />
          <CardRev review={{}} restaurant={{}} />
          <CardRev review={{}} restaurant={{}} />
          <CardRev review={{}} restaurant={{}} />
          <CardRev review={{}} restaurant={{}} />
        </RevRow>
        <RevButton>
          <RevIcon src="/images/seemoreIcon.png" alt="see more" />
          <RevButtonText>See more</RevButtonText>
        </RevButton>
      </MainWrapper>
    </div>
  );
};

export default Reviews;
