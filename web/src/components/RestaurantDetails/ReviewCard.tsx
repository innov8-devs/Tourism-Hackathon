import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Spacer, useToast } from '@chakra-ui/react';
import moment from 'moment';
import Link from 'next/link';
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from 'react-icons/bs';

import {
  REVIEWS_QUERY,
  REVIEW_DISLIKE_MUTATION,
  REVIEW_LIKE_MUTATION,
  REVIEW_UNDISLIKE_MUTATION,
  REVIEW_UNLIKE_MUTATION,
} from '../../graphQL/queries';
import StarRatings from '../StarRatings';

import {
  Avatar,
  HorizontalRule,
  LikeContainer,
  LikeNumber,
  RevBottomContainer,
  RevBottomLeft,
  RevBottomRightText,
  RevCard,
  RevComment,
  ReviewLeftWord,
  ReviewTypography,
  ReviewWord,
  RevSecondaryContainer,
  RevTopContainer,
  RevTopLeft,
  RevUser,
  RevUserContainer,
  RevUserPic,
  RightStar,
  StarContainer,
} from './reviewcard-styles';
import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = (props) => {
  const toast = useToast();
  const [liked, setLiked] = useState(props.review.likedByUser);
  const [disliked, setDisliked] = useState(props.review.dislikedByUser);

  const [reviewLike] = useMutation(REVIEW_LIKE_MUTATION, {
    variables: {
      reviewId: props.review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: props._id,
        },
      },
    ],
    onCompleted: (data) => {
      if (data?.likeReview.status) return;
    },
    onError: (err) => {
      toast({ status: 'error', title: err.message });
      setLiked(!liked);
    },
  });

  const [reviewUnlike] = useMutation(REVIEW_UNLIKE_MUTATION, {
    variables: {
      reviewId: props.review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: props._id,
        },
      },
    ],
    onCompleted: (data) => {
      if (data?.unlikeReview.status) return;
    },
    onError: (error) => {
      toast({ status: 'error', title: error.message });
      setLiked(!liked);
    },
  });

  const [reviewDislike] = useMutation(REVIEW_DISLIKE_MUTATION, {
    variables: {
      reviewId: props.review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: props._id,
        },
      },
    ],
    onCompleted: (data) => {
      if (data?.dislikeReview.status) return;
    },
    onError: (err) => {
      toast({ status: 'error', title: err.message });
      setDisliked(!liked);
    },
  });

  const [reviewUnDislike] = useMutation(REVIEW_UNDISLIKE_MUTATION, {
    variables: {
      reviewId: props.review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: props._id,
        },
      },
    ],
    onCompleted: (data) => {
      if (data?.unDislikeReview.status) return;
    },
    onError: (error) => {
      toast({ status: 'error', title: error.message });
      setDisliked(!disliked);
    },
  });

  const handleLiked = () => {
    if (liked) {
      reviewUnlike();
      setLiked(false);
    } else {
      if (disliked) {
        reviewUnDislike();
        setDisliked(false);
      }
      reviewLike();
      setLiked(true);
    }
  };

  const handleDisliked = () => {
    if (disliked) {
      reviewUnDislike();
      setDisliked(false);
    } else {
      if (liked) {
        reviewUnlike();
        setLiked(false);
      }
      reviewDislike();
      setDisliked(true);
    }
  };

  // eslint-disable-next-line no-console

  return (
    <div>
      {props.review.user ? (
        <RevCard key={props.index}>
          <RevTopContainer>
            <Link href={`/profile/${props.review.user?.username}`} passHref>
              <RevTopLeft>
                {props.review.user?.profileImage ? (
                  <RevUserPic src={props.review.user?.profileImage} alt="reviewAvatar" />
                ) : (
                  <Avatar />
                )}
                <RevUserContainer>
                  <RevUser>{props.review.user?.firstName + ' ' + props.review.user?.lastName}</RevUser>
                  <RevComment>{`${props.review.user?.username}`}</RevComment>
                </RevUserContainer>
              </RevTopLeft>
            </Link>
          </RevTopContainer>
          <StarContainer>
            <RevSecondaryContainer>
              <ReviewLeftWord>{props.review.ratings}</ReviewLeftWord>
              <ReviewWord>ratings</ReviewWord>
            </RevSecondaryContainer>
            <RightStar>
              <StarRatings token={props.token} rating={props.review.rating} enabled={false} />
            </RightStar>
          </StarContainer>
          <ReviewTypography>{props.review.body}</ReviewTypography>
          <RevBottomContainer>
            <RevBottomLeft>
              <LikeContainer>
                <LikeNumber>{props.review.likes ? props.review.likes : 0}</LikeNumber>
                <HorizontalRule />
                <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={handleLiked} />
                <Spacer width={10} />
                <BsHandThumbsDownFill color={disliked ? '#ff9916' : 'grey'} size="20px" onClick={handleDisliked} />
                <HorizontalRule />
                <LikeNumber>{props.review.dislikes ? props.review.dislikes : 0}</LikeNumber>
              </LikeContainer>
            </RevBottomLeft>
            <RevBottomRightText>{moment(props.review.meta.createdAt).fromNow()} </RevBottomRightText>
          </RevBottomContainer>
        </RevCard>
      ) : null}
    </div>
  );
};

export default ReviewCard;
