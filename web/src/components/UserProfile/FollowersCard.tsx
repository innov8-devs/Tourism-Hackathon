import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import {
  FIND_CUSTOMER,
  FIND_FOLLOWERS,
  FOLLOW_CUSTOMER_MUTATION,
  UNFOLLOW_CUSTOMER_MUTATION,
} from '../../graphQL/queries';

import {
  Address,
  ButtonContainer,
  Details,
  FollowBtn,
  FollowText,
  Name,
  NameContainer,
  ProfilePicture,
  SecondaryContainer,
  UserName,
} from './followercard-styles';

const FollowersCard = ({ person, refetch }) => {
  const router = useRouter();

  function getUser() {
    if (router.isReady) {
      const userID = router.query.profileDetails[1];
      if (userID) {
        return userID;
      }
      return null;
    }
  }
  const [followed, setFollowed] = useState(false);
  const [unFollow] = useMutation(UNFOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: person._id,
    },
    refetchQueries: [{ query: FIND_CUSTOMER, variables: { _id: getUser() } }, { query: FIND_FOLLOWERS }],
    onCompleted: () => {
      refetch();
    },
  });
  const [follow] = useMutation(FOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: person._id,
    },
    refetchQueries: [{ query: FIND_CUSTOMER, variables: { _id: getUser() } }, { query: FIND_FOLLOWERS }],
    onCompleted: () => {
      refetch();
    },
  });

  useEffect(() => {
    setFollowed(person?.youFollow);
  }, [person]);

  return (
    <>
      <SecondaryContainer>
        <ProfilePicture src={person?.profileImage || person?.logo} />
        <NameContainer>
          <Name>{person?.name || `${person?.firstName} ${person?.lastName}`}</Name>
          <UserName>{person?.username && `@${person?.username}`}</UserName>
          <Details>{person?.about || person?.details} </Details>
          <Address>{person?.address}</Address>
        </NameContainer>
        <ButtonContainer>
          <FollowBtn
            follow={followed}
            onClick={() => {
              followed ? unFollow() : follow();
              setFollowed(!followed);
            }}
          >
            <FollowText follow={followed}>{followed ? 'UnFollow' : 'Follow'}</FollowText>
            {followed ? null : '+'}
          </FollowBtn>
        </ButtonContainer>
      </SecondaryContainer>
    </>
  );
};

export default FollowersCard;
