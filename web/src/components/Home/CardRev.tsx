import { Spacer } from '@chakra-ui/react';
import moment from 'moment';
import { BiDislike, BiLike, BiShareAlt } from 'react-icons/bi';
import { BsFillStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';

import { range } from '../../utils/helpers';
import { Avatar } from '../RestaurantDetails/reviewcard-styles';
import { Picture } from '../UserProfile/profilereview-styles';

import {
  LikeContainer,
  LikeNumber,
  RevBottomContainer,
  RevBottomLeft,
  RevBottomRightText,
  RevCard,
  RevColumn,
  RevComment,
  ReviewLeftWord,
  ReviewTypography,
  ReviewTypographyButton,
  ReviewWord,
  RevSecondaryContainer,
  RevTopContainer,
  RevTopLeft,
  RevUser,
  RevUserContainer,
  RightStar,
  StarContainer,
} from './cardrev-styles';

const CardRev = ({ review, restaurant }) => {
  return (
    <RevColumn>
      <RevCard>
        <RevTopContainer>
          <RevTopLeft>
            {review?.user?.profileImage ? (
              <Picture src={review?.user?.profileImage} alt="reviewerProfile" />
            ) : (
              <Avatar />
            )}
            <RevUserContainer>
              <RevUser>{restaurant?.name}</RevUser>
              <RevComment>Eat Pray Love</RevComment>
            </RevUserContainer>
          </RevTopLeft>
          <BsThreeDotsVertical />
        </RevTopContainer>
        <StarContainer>
          <RevSecondaryContainer>
            <ReviewLeftWord style={{ marginRight: 20 }}>
              {review?.user?.firstName} {review?.user?.lastName}
            </ReviewLeftWord>
            <ReviewWord>Review</ReviewWord>
          </RevSecondaryContainer>
          <RightStar>
            {range(review?.rating || 1).map((star, i) => {
              return <BsFillStarFill key={i} />;
            })}
          </RightStar>
        </StarContainer>
        <ReviewTypography>{review?.body}</ReviewTypography>
        <ReviewTypographyButton>...See more </ReviewTypographyButton>
        <RevBottomContainer>
          <RevBottomLeft>
            <LikeContainer>
              <LikeNumber>{review?.likes}</LikeNumber>
              <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
              <BiLike />
              <Spacer width={5} />
            </LikeContainer>
            <LikeContainer>
              <LikeNumber>{review?.dislikes}</LikeNumber>
              <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
              <BiDislike />
              <Spacer width={5} />
            </LikeContainer>
            <LikeContainer>
              <LikeNumber>{review?.comments || 24}</LikeNumber>
              <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
              <MdMessage />
              <Spacer width={5} />
            </LikeContainer>
            <BiShareAlt />
          </RevBottomLeft>
          <RevBottomRightText>{moment(review?.meta?.createdAt)?.fromNow() || '2 days'}</RevBottomRightText>
        </RevBottomContainer>
      </RevCard>
    </RevColumn>
  );
};

export default CardRev;
