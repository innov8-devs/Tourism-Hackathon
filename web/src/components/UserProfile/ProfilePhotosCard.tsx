import React, { useState } from 'react';

import moment from 'moment';
import Image from 'next/image';
import { BsHandThumbsUpFill, BsShareFill } from 'react-icons/bs';

import {
  BottomContainer,
  BottomLeft,
  BottomRight,
  DropdownContainer,
  Photo,
  PhotoCard,
  ShareType,
  SubText,
} from './profilephotoscard-styles';

const ProfilePhotosCard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <PhotoCard key={item._id}>
      <Photo src={item.images[0]} />
      <div style={{ width: '100%', height: '', padding: '10px' }}>
        <BottomContainer>
          <BottomLeft>
            <div>
              <SubText>{moment(item?.meta?.createdAt).fromNow()}</SubText>
            </div>
          </BottomLeft>
          <BottomRight>
            <BsHandThumbsUpFill color={liked ? '#ff9916' : 'grey'} size="20px" onClick={() => setLiked(!liked)} />
            <BsShareFill
              onClick={() => setOpen(!open)}
              style={{ margin: '0 0 0 16px', cursor: 'pointer', fontSize: '21px' }}
            />
            {open && (
              <DropdownContainer>
                <h3>Share photo on</h3>
                <ShareType>
                  <h6>Facebook</h6>
                  <Image src="/images/fbShare.png" alt="sss" />
                </ShareType>
                <ShareType>
                  <h6>Instagram</h6>
                  <Image src="/images/igShare.png" alt="ss" />
                </ShareType>
                <ShareType>
                  <h6>Copy Link</h6>
                </ShareType>
              </DropdownContainer>
            )}
          </BottomRight>
        </BottomContainer>
      </div>
    </PhotoCard>
  );
};

export default ProfilePhotosCard;
