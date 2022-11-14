import { useMemo, useState } from 'react';

import { useMutation } from '@apollo/client';
import { Box, Flex, Image, Spacer, useDisclosure, useToast } from '@chakra-ui/react';
import moment from 'moment';
import { BsHandThumbsDownFill, BsHandThumbsUpFill, BsPersonCircle, BsThreeDotsVertical } from 'react-icons/bs';

import {
  REVIEWS_QUERY,
  REVIEW_DISLIKE_MUTATION,
  REVIEW_LIKE_MUTATION,
  REVIEW_UNDISLIKE_MUTATION,
  REVIEW_UNLIKE_MUTATION,
} from '../../graphQL/queries';
import { USER_DATA } from '../constants';
import LoginModal from '../RestaurantDetails/LoginModal';
import SkeletonCard from '../Skeleton/Skeleton';
import StarRatings from '../StarRatings';

import {
  About,
  HorizontalRule,
  LikeContainer,
  LikeNumber,
  RecCard,
  RecColumn,
  RecColumnCon,
  RestaurantName,
  RevBottomContainer,
  RevBottomLeft,
  RevBottomRightText,
  ReviewTypeText,
  ReviewTypography,
  UserName,
} from './review-card-styles';

const ReviewCards = ({ loading, error, data, visible }) => {
  if (loading) return <SkeletonCard />;
  if (error) return <SkeletonCard />;

  return (
    <>
      <RecColumnCon>
        {data?.slice(0, visible).map((review, index) => (
          <RecColumn key={index}>
            <ReviewCard review={review} />
          </RecColumn>
        ))}
      </RecColumnCon>
    </>
  );
};

const ReviewCard = ({ review }) => {
  const toast = useToast();
  const [liked, setLiked] = useState(review.likedByUser);
  const [disliked, setDisliked] = useState(review.dislikedByUser);
  const { isOpen: modal, onToggle, onClose } = useDisclosure();

  const token = useMemo(() => localStorage.getItem(USER_DATA), []);

  const [reviewLike] = useMutation(REVIEW_LIKE_MUTATION, {
    variables: {
      reviewId: review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: review?.business?._id,
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
      reviewId: review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: review?.business?._id,
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
      reviewId: review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: review?.business?._id,
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
      reviewId: review._id,
    },
    refetchQueries: [
      {
        query: REVIEWS_QUERY,
        variables: {
          restaurantId: review?.business?._id,
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
    if (!token) {
      return onToggle();
    }
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
    if (!token) {
      return onToggle();
    }
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

  return (
    <RecCard>
      <Flex p={4} alignItems={'center'}>
        {review?.business?.logo ? (
          <Image src={review?.business?.logo} borderRadius={'50%'} marginRight={4} width={10} height={10} alt="logo" />
        ) : (
          <BsPersonCircle
            style={{
              marginRight: 20,
            }}
            color="#888"
            size={40}
          />
        )}
        <Box w={'70%'}>
          <RestaurantName>{review?.business?.name}</RestaurantName>
          <About>{review?.business?.description}</About>
        </Box>
        <BsThreeDotsVertical style={{ marginLeft: 'auto' }} />
      </Flex>
      <Box p={4} pt={0} pb={1}>
        <Flex alignItems={'center'} gap={2}>
          <UserName>
            {review?.user?.firstName} {review?.user?.lastName}
          </UserName>
          <ReviewTypeText textTransform={'capitalize'}>{review?.reviewType} review</ReviewTypeText>
        </Flex>
        <StarRatings rating={review.rating} enabled={false} />
        <ReviewTypography>{review.body}</ReviewTypography>
        <Image src={review?.images[0] || '/reviewPlaceholder.png'} alt="image" width={'100%'} height={'200px'} />
      </Box>
      <RevBottomContainer>
        <RevBottomLeft>
          <LikeContainer>
            <LikeNumber>{review.likes ? review.likes : 0}</LikeNumber>
            <HorizontalRule />
            <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={handleLiked} />
            <Spacer width={10} />
            <BsHandThumbsDownFill color={disliked ? '#ff9916' : 'grey'} size="20px" onClick={handleDisliked} />
            <HorizontalRule />
            <LikeNumber>{review.dislikes ? review.dislikes : 0}</LikeNumber>
          </LikeContainer>
        </RevBottomLeft>
        <RevBottomRightText>{moment(review.meta.createdAt).fromNow()} </RevBottomRightText>
      </RevBottomContainer>
      <LoginModal modal={modal} onClose={onClose} />
    </RecCard>
  );
};

export default ReviewCards;
