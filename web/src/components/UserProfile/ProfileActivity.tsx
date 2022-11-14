import React from 'react';

import { useQuery } from '@apollo/client';
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import Link from 'next/link';

import { FIND_ACTIVITIES } from '../../graphQL/queries';

import {
  ActivityCard,
  ActivityContainer,
  CardImg,
  Description,
  InnerCard,
  Left,
  NameContainer,
  Time,
} from './profileactivity-styles';

const allowedActivityTypes = [
  'FollowingActivity',
  'UnFollowingActivity',
  'LikeReviewActivity',
  'CreateReviewActivity',
  'LikeEventActivity',
  'DislikeReviewActivity',
];

const ProfileActivity = () => {
  const { data } = useQuery(FIND_ACTIVITIES);

  return (
    <ActivityContainer>
      {data?.activityFeed?.map((activity) => {
        if (!allowedActivityTypes.includes(activity?.__typename)) return null;
        return (
          <ActivityCard key={activity._id}>
            <InnerCard>
              <Left>
                <CardImg src="/activityDp.png" alt="activityDp" />
                <NameContainer>
                  <h6>{'You'}</h6>
                  <p>
                    {getAppropriateActivityText(activity?.__typename, activity?.review?.reviewType || 'business')}{' '}
                    {(activity?.__typename == 'FollowingActivity' || activity?.__typename == 'UnFollowingActivity') && (
                      <Text
                        display={'inline'}
                        color={'black'}
                        _hover={{
                          textDecoration: 'underline',
                        }}
                      >
                        <Link
                          href={`/profile/${
                            activity?.__typename == 'FollowingActivity'
                              ? activity?.followed?.username || activity?.followed?.name
                              : activity?.unfollowed?.username || activity?.followed?.name
                          }`}
                          passHref
                        >{`${
                          activity?.__typename == 'FollowingActivity'
                            ? activity?.followed?.username || activity?.followed?.name
                            : activity?.unfollowed?.username || activity?.followed?.name
                        }`}</Link>
                      </Text>
                    )}
                  </p>
                </NameContainer>
              </Left>
              <Time>{moment(activity.meta.createdAt).fromNow()} </Time>
            </InnerCard>
            <Description>{activity?.review?.body || ''}</Description>
          </ActivityCard>
        );
      })}
    </ActivityContainer>
  );
};

function getAppropriateActivityText(activityText: string, reviewType?: string): string {
  switch (activityText) {
    case 'FollowingActivity':
      return `Followed`;
    case 'UnFollowingActivity':
      return `UnFollowed`;
    case 'LikeReviewActivity':
      return 'Liked a review';
    case 'CreateReviewActivity':
      return `Created reviewed a ${reviewType}`;
    case 'LikeEventActivity':
      return 'Liked an event';
    case 'DislikeReviewActivity':
      return 'Disliked a review';
    default:
      return '';
  }
}

export default ProfileActivity;
