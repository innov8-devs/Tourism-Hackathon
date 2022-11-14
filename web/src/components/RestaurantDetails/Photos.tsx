import React from 'react';

import { gql, useQuery } from '@apollo/client';

import PhotoSkeleton from '../Skeleton/PhotoSkeleton';

import { PhotoContainer } from './photos-styles';
import PhotosCard from './PhotosCard';

const RESTAURANTS_PHOTOS_QUERY = gql`
  query findPhoto($data: QueryPhotoInput!) {
    findPhoto(data: $data) {
      _id
      title
      url
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
        updatedAt
      }
    }
  }
`;

const Photos = ({ photosData }) => {
  // const setOpen = () => setOpen(!open);

  const { loading, error, data } = useQuery(RESTAURANTS_PHOTOS_QUERY, {
    variables: {
      data: {
        businessId: photosData?.findRestaurantById._id,
        businessType: 'restaurant',
      },
    },
  });

  if (loading) return <PhotoSkeleton />;
  if (error) return <PhotoSkeleton />;

  return (
    <div>
      {/* <Button upload>
        post a photo <Camera src="/images/camera.png" />
      </Button> */}
      {data?.findPhoto.length > 0 ? (
        <PhotoContainer>
          {data?.findPhoto.map((item, index) => (
            <PhotosCard key={index} item={item} />
          ))}
        </PhotoContainer>
      ) : (
        <div>
          <p>
            Photos are not available at the moment <br /> Please check back later...
          </p>
        </div>
      )}
      {/* do not clear the code below>>> will use later in the future */}
      {/* <DropdownContainer>
        <h3>Share photo on</h3>
        <ShareType>
          <h6>Facebook</h6>
          <img src="/images/fbShare.png" />
        </ShareType>
        <ShareType>
          <h6>Instagram</h6>
          <img src="/images/igShare.png" />
        </ShareType>
        <ShareType>
          <h6>Copy Link</h6>
        </ShareType>
      </DropdownContainer> */}
    </div>
  );
};

export default Photos;
