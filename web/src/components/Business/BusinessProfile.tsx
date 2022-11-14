import React, { useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import { Spinner, Stack, Tag, TagLabel, TagLeftIcon, useToast } from '@chakra-ui/react';
import { Marker } from '@react-google-maps/api';
import { useRouter } from 'next/router';
import { BsFilePdf, BsThreeDotsVertical } from 'react-icons/bs';

import { HOTEL_DETAIL_QUERY } from '../../graphQL/queries';
import {
  Address,
  AddressContainer,
  BoxA,
  Button,
  ButtonsContainer,
  DetailsContainer,
  FollowContainer,
  FollowDescription,
  FollowHeading,
  Handle,
  ImageContainer,
  LocationIcon,
  Name,
  ProfileContainer,
  ProfileImg,
  Rating,
  RatingsContainer,
  RestaurantImg,
  RestaurantImgContainer,
  StarContainer,
  Verified,
} from '../../pages/restaurant/[_id]/index-styles';
import { AUTH_TOKEN } from '../constants';
import GoogleMapcomponent from '../map/GoogleMapcomponent';
import LoginModal from '../RestaurantDetails/LoginModal';
import StarRating from '../StarRating';

const hotelImages = [
  '/images/hotel1.png',
  '/images/hotel2.png',
  '/images/hotel3.png',
  '/images/hotel4.png',
  '/images/hotel5.png',
  '/images/hotel6.jpg',
  '/images/hotel7.jpg',
  '/images/hotel8.jpg',
  '/images/hotel9.jpg',
  '/images/hotel10.jpg',
  '/images/hotel11.jpg',
  '/images/hotel12.jpg',
];

const FOLLOW_HOTEL_MUTATION = gql`
  mutation FollowHotel($id: ID!) {
    followHotel(id: $id) {
      status
    }
  }
`;

const UNFOLLOW_HOTEL_MUTATION = gql`
  mutation UnFollowHotel($id: ID!) {
    unfollow(id: $id) {
      status
    }
  }
`;

const randomNum = Math.floor(Math.random() * hotelImages.length);

export default function BusinessProfile({
  businessData,
  labelText,
  toggleState = -1,
  Location = () => {
    return <></>;
  },
}) {
  const [modal, setModal] = useState(false);
  const [followId, setFollowId] = useState('');
  const toast = useToast();

  const [followHotel, { loading: followingProcess }] = useMutation(FOLLOW_HOTEL_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: HOTEL_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ title: 'Successfully followed Hotel', status: 'success', duration: 3000 });
    },
  });
  const [unFollowHotel] = useMutation(UNFOLLOW_HOTEL_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: HOTEL_DETAIL_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ title: 'Successfully unfollowed Hotel', status: 'success', duration: 3000 });
    },
  });

  const router = useRouter();
  const token = localStorage.getItem(AUTH_TOKEN);

  const handleFollow = async (id, mode = 1) => {
    if (!token) {
      setModal(true);
      return null;
    } else {
      setFollowId(id);
      if (mode == 1) {
        await followHotel({
          variables: {
            id,
          },
        });
      } else {
        await unFollowHotel({
          variables: {
            id,
          },
        });
      }

      router.reload();
    }
  };

  return (
    <>
      <BoxA>
        <Stack>
          <ImageContainer>
            <ProfileContainer>
              {businessData?.verified ? <Verified src="/images/verified.png" /> : null}
              <ProfileImg src={businessData?.logo || hotelImages[randomNum]} />
            </ProfileContainer>
            <DetailsContainer>
              <Name>{businessData?.name}</Name>
              <Handle>@{businessData?.name.toLowerCase().split(' ').join('_')}</Handle>
              <AddressContainer>
                <LocationIcon />
                <Address>{businessData?.address}</Address>
              </AddressContainer>
            </DetailsContainer>
          </ImageContainer>

          <ButtonsContainer>
            <Button onClick={() => handleFollow(businessData?._id, businessData?.youFollow ? 2 : 1)}>
              {followingProcess ? <Spinner /> : businessData?.youFollow ? 'Following' : 'Follow'}
            </Button>
            <Button secondary>Reservations</Button>
            <TagLeftIcon fill="#0F264C" boxSize="30px" as={BsThreeDotsVertical} />
          </ButtonsContainer>

          <RatingsContainer>
            <Rating>{businessData?.rating || 5}.0</Rating>
            <StarContainer>
              <StarRating
                count={5}
                size={20}
                value={businessData?.rating || 5}
                activeColor={'#0F264C'}
                inactiveColor={'#ddd'}
              />
            </StarContainer>
          </RatingsContainer>

          <FollowDescription>{businessData?.tags?.slice(0, 5).map((el) => el.name)}</FollowDescription>

          <FollowContainer>
            <Stack alignItems={'center'}>
              <FollowHeading>{businessData?.followerCount || 0}</FollowHeading>
              <FollowDescription>Followers</FollowDescription>
            </Stack>
            <Stack alignItems={'center'}>
              <FollowHeading>{businessData?.followingCount || 0}</FollowHeading>
              <FollowDescription>Following</FollowDescription>
            </Stack>
            <Tag
              display={'flex'}
              flexDirection={'column'}
              padding={2}
              alignItems={'center'}
              justifyContent={'center'}
              backgroundColor={'#fff'}
              boxShadow={'md'}
            >
              <TagLeftIcon fill="#000" boxSize="40px" as={BsFilePdf} />
              <TagLabel fontSize={'14px'}>{labelText}</TagLabel>
            </Tag>
          </FollowContainer>
        </Stack>
      </BoxA>
      {businessData?.__typename == 'Hotel' ? (
        <GoogleMapcomponent
          center2={{
            lat: businessData?.location?.latitude,
            lng: businessData?.location?.longitude,
          }}
        >
          <Marker position={{ lat: businessData?.location?.latitude, lng: businessData?.location?.longitude }} />
        </GoogleMapcomponent>
      ) : toggleState == 1 ? (
        <RestaurantImgContainer>
          <RestaurantImg src={businessData?.logo || hotelImages[randomNum]} />
          {/* <TourButton>Take a tour</TourButton> */}
        </RestaurantImgContainer>
      ) : (
        <Location />
      )}
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </>
  );
}
