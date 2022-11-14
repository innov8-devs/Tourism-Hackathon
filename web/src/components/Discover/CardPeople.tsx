import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import styled from 'styled-components';

import { FOLLOW_CUSTOMER_MUTATION, PEOPLE_LIST_QUERY, UNFOLLOW_CUSTOMER_MUTATION } from '../../graphQL/queries';

import {
  Address,
  Details,
  FollowBtnStyles,
  FollowTextStyles,
  Name,
  NameContainer,
  PrimaryContainer,
  ProfilePicture,
  SecondaryContainer,
} from './cardpeople-styles';

const FollowBtn = styled.button`
  ${FollowBtnStyles}
`;
const FollowText = styled.span`
  ${FollowTextStyles}
`;

const CardPeople = ({ person, person2 }) => {
  const [followed, setFollowed] = useState(false);
  const [followedTwo, setFollowedTwo] = useState(false);
  const [followId, setFollowId] = useState('');
  const [followCustomer] = useMutation(FOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: PEOPLE_LIST_QUERY }],
    onCompleted: () => {
      setFollowId('');
    },
  });

  const [unFollowCustomer] = useMutation(UNFOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: PEOPLE_LIST_QUERY }],
    onCompleted: () => {
      setFollowId('');
    },
  });

  return (
    <>
      <PrimaryContainer>
        <SecondaryContainer>
          <ProfilePicture src={person.profileImage} />
          <Box display={{ base: 'block', md: 'flex' }} flex={1}>
            <NameContainer>
              <Name>
                {person.firstName} {person.lastName}
              </Name>
              <Details>{person.about} </Details>
              <Address>{person.address}</Address>
            </NameContainer>
            <FollowBtn
              follow={followed ? true : false}
              onClick={() => {
                setFollowed(!followed);
                setFollowId(person._id);
                followed
                  ? unFollowCustomer({ variables: { id: person._id } })
                  : followCustomer({ variables: { id: person._id } });
              }}
            >
              <FollowText follow={followed ? true : false}>{followed ? 'Followed' : 'Follow'}</FollowText>
              {followed ? null : <BiPlus />}
            </FollowBtn>
          </Box>
        </SecondaryContainer>
        {person2 && (
          <SecondaryContainer>
            <ProfilePicture src={person2?.profileImage} />
            <Box display={{ base: 'block', md: 'flex' }} flex={1}>
              <NameContainer>
                <Name>
                  {person2?.firstName} {person2?.lastName}
                </Name>
                <Details>{person2?.about}</Details>
                <Address>{person2?.address}</Address>
              </NameContainer>
              <FollowBtn
                follow={followedTwo ? true : false}
                onClick={() => {
                  setFollowedTwo(!followedTwo);
                  setFollowId(person2._id);
                  followed
                    ? unFollowCustomer({ variables: { id: person._id } })
                    : followCustomer({ variables: { id: person._id } });
                }}
              >
                <FollowText follow={followedTwo ? true : false}>{followedTwo ? 'Followed' : 'Follow'}</FollowText>
                {followedTwo ? null : <BiPlus />}
              </FollowBtn>
            </Box>
          </SecondaryContainer>
        )}
      </PrimaryContainer>
    </>
  );
};

export default CardPeople;
