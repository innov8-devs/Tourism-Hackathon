import { useState } from 'react';

import { Box, Flex, Image, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';
import { GiShadowFollower } from 'react-icons/gi';
import { IoBookmarksOutline, IoLocationOutline } from 'react-icons/io5';

import { Button } from '../../pages/restaurant/[_id]/index-styles';
import styles from '../../styles/Home.module.css';

import { FavTag, InterestsText, LocationText, RecCard, RecColumn, Typography } from './personCard-styles';

export default function SinglePerson({ person, handleFollow }) {
  const [followed, setIsFollowed] = useState(person?.youFollow);

  return (
    <RecColumn key={person?._id}>
      <RecCard>
        <FavTag>
          <IoBookmarksOutline className={styles.tag} />
        </FavTag>
        <Link passHref href={`/profile/${person?.username}`}>
          <Flex>
            {person?.profileImage ? (
              <Image src={person?.profileImage} marginRight={4} width={10} height={10} alt="personImage" />
            ) : (
              <BsPersonCircle
                style={{
                  marginRight: 20,
                }}
                color="#888"
                size={40}
              />
            )}
            <Box>
              <Flex alignItems={'center'}>
                <Typography size="md" bold>
                  {person.firstName.charAt(0).toUpperCase()}
                  {person.firstName.slice(1)} {person.lastName.charAt(0).toUpperCase()}
                  {person.lastName.slice(1)}
                </Typography>
                {person?.followsYou && <GiShadowFollower size={10} />}
              </Flex>

              <Typography size="sm" style={{ opacity: 0.5 }}>
                @{person.username.replace('@', '')}
              </Typography>
            </Box>
          </Flex>
        </Link>

        {person?.about && (
          <Typography
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
            }}
            size="sm"
          >
            {person?.about}
          </Typography>
        )}
        <Spacer height={3} />
        {person?.interests && (
          <InterestsText
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
            }}
            size="sm"
          >
            {person?.interests?.map((el) => el.name).join(', ')}
          </InterestsText>
        )}
        <Spacer height={5} />
        {person?.address ? (
          <Flex alignItems={'center'}>
            <Typography size="sm" style={{ marginRight: '10px' }}>
              <IoLocationOutline color={'#ad6600'} size={13} />
            </Typography>
            <LocationText size="sm">{person?.address}</LocationText>
          </Flex>
        ) : (
          <Spacer height={'1.5em'} />
        )}
        <Spacer height={3} />
        <Button
          style={{ backgroundColor: followed && '#ff9916' }}
          onClick={() => {
            setIsFollowed(followed ? false : true);
            handleFollow(person?._id, person?.firstName, followed ? 2 : 1);
          }}
        >
          {followed ? 'Following' : 'Follow'}
        </Button>
      </RecCard>
    </RecColumn>
  );
}
