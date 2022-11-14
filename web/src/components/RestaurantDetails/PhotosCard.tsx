import React, { useState } from 'react';

import { BsHandThumbsUpFill } from 'react-icons/bs';

import { BottomContainer, BottomLeft, BottomRight, MainText, Photo, PhotoCard, Share } from './photoscard-styles';
import { Row } from './restaurantabout-styles';

const PhotosCard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  // const [open, setOpen] = useState(false);
  return (
    <PhotoCard key={item._id}>
      <Photo src={item.url} />
      <div style={{ width: '100%', height: '', padding: '10px' }}>
        <BottomContainer>
          <BottomLeft>
            <div>
              <MainText>{item.title.toLowerCase()}</MainText>
            </div>
          </BottomLeft>
          <BottomRight>
            <Row>
              <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={() => setLiked(!liked)} />
              <Share />
            </Row>
          </BottomRight>
        </BottomContainer>
      </div>
    </PhotoCard>
  );
};

export default PhotosCard;
