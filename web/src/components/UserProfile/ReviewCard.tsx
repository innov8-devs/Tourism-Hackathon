import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { BsShareFill } from 'react-icons/bs';

import { Avatar } from '../RestaurantDetails/reviewcard-styles';

import {
  DisplayName,
  FaqCard,
  FaqCardInner,
  Picture,
  QuestionContainer,
  QuestionText,
  QuestionTime,
} from './profilereview-styles';

const ReviewCard = ({ item }) => {
  return (
    <Link
      href={
        item.business
          ? `/${item.businessType}/${item.business?.name.split(' ').join('-')}-${item.business?.shortId}?tab=3`
          : '#'
      }
      passHref
    >
      <FaqCard>
        <FaqCardInner>
          {item.user.profileImage ? <Picture src={item.user.profileImage} alt="reviewerProfile" /> : <Avatar />}
          <QuestionContainer>
            <DisplayName>{`${item.user.username}`}</DisplayName>
            <QuestionTime>{moment(item.meta.createdAt).fromNow()}</QuestionTime>
            <QuestionText>{item.body}</QuestionText>
          </QuestionContainer>
          <BsShareFill style={{ margin: '0 0 0 auto', cursor: 'pointer', fontSize: '40px' }} />
        </FaqCardInner>
      </FaqCard>
    </Link>
  );
};

export default ReviewCard;
