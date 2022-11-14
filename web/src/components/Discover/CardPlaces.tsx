import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Image } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import styled from 'styled-components';

import { RESTAURANT_DETAIL_QUERY } from '../../graphQL/queries';
import { FOLLOW_RESTAURANT_MUTATION, UNFOLLOW_RESTAURANT_MUTATION } from '../../pages/restaurant/[_id]/index.page';
import StarRatings from '../StarRatings';

import { FollowBtnStyles, FollowTextStyles } from './cardpeople-styles';
import {
  Address,
  CardPlacesContainer,
  CardPlacesContent,
  CardPlacesTitle,
  Details,
  ImgContainer,
  Left,
  Right,
  RightReview,
} from './cardplaces-styles';

const FollowBtn = styled.button`
  ${FollowBtnStyles}
`;
const FollowText = styled.span`
  ${FollowTextStyles}
`;

const CardPlaces = ({ place }) => {
  const [followed, setFollowed] = useState(false);
  const [followId, setFollowId] = useState('');
  const [followRestaurant] = useMutation(FOLLOW_RESTAURANT_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: RESTAURANT_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
    },
  });
  const [unFollowRestaurant] = useMutation(UNFOLLOW_RESTAURANT_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: RESTAURANT_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
    },
  });

  return (
    <>
      <CardPlacesContainer key={place.id}>
        <ImgContainer>
          <Image width={400} height={240} src={place.logo} alt="place" />
          <Right>
            <StarRatings rating={place.rating} size={12} />
            <RightReview>{place.reviewCount} reviews</RightReview>
          </Right>
        </ImgContainer>
        <CardPlacesContent>
          <Left>
            <CardPlacesTitle>{place.name}</CardPlacesTitle>
            <Details>{place.details}</Details>
            <Address>{place.address}</Address>
          </Left>
          <FollowBtn
            follow={followed ? true : false}
            onClick={() => {
              setFollowed(!followed);
              setFollowId(place._id);
              followed
                ? unFollowRestaurant({ variables: { id: place._id } })
                : followRestaurant({ variables: { id: place._id } });
            }}
          >
            <FollowText follow={followed ? true : false}>{followed ? 'Followed' : 'Follow'}</FollowText>
            {followed ? null : <BiPlus />}
          </FollowBtn>
        </CardPlacesContent>
      </CardPlacesContainer>
    </>
  );
};

export default CardPlaces;
