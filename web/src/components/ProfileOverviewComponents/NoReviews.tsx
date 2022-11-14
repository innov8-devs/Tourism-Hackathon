import { Content, ContentTitle, NoReviewBanner, NoReviewsWrapper } from './noreviews-styles';

const NoReviews = () => {
  return (
    <NoReviewsWrapper>
      <ContentTitle> No Reviews Yet</ContentTitle>
      <Content> You have not shared any reviews yet</Content>
      <NoReviewBanner src="/images/noReviewBanner.svg"></NoReviewBanner>
    </NoReviewsWrapper>
  );
};

export default NoReviews;
