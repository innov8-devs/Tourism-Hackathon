import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Button, Center, useControllableState } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroller';

// import { gql, useMutation } from '@apollo/client';

import { FIND_REVIEWS_QUERY } from '../../graphQL/queries';
import None from '../Global/None';
import LoginModal from '../RestaurantDetails/LoginModal';
import FaqSkeleton from '../Skeleton/FaqSkeleton';

import { CardContainer } from './profilereview-styles';
import ReviewCard from './ReviewCard';

// const CREATE_ANSWER_MUTATION = gql`
//   mutation findReviewsByUserId($_id: ID, $body: String) {
//     findReviewsByUserId(data: { _id: $_id, body: $body }) {
//       _id
//       body
//     }
//   }
// `;

interface IProps {
  name: string;
  isYou: boolean;
  userId: string;
}

const ProfileReview = ({ isYou, name, userId }: IProps) => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useControllableState({ defaultValue: 10 });

  // const [createAnswer, { loading }] = useMutation(CREATE_ANSWER_MUTATION, {
  //   variables: {
  //     body: formik.values.body,
  //   },
  // });

  // useEffect(() => {
  //   createAnswer();
  // }, [createAnswer]);

  const { data, loading, error } = useQuery(FIND_REVIEWS_QUERY, {
    variables: { userId: userId },
  });

  const loadMore = async (load) => {
    if (!load) return null;
    setValue(value + 10);
  };

  return (
    <Box style={{ height: '450px', overflow: 'auto' }}>
      {!loading && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => loadMore(false)}
          hasMore={value < data?.findReviewsByUserId.length}
          useWindow={false}
          loader={
            <Center>
              <Button _focus={{ boxshadow: 'none' }} onClick={loadMore} bg="#ff9916" colorScheme="orange">
                Load More
              </Button>
            </Center>
          }
        >
          <CardContainer>
            {[...(data?.findReviewsByUserId || [])]?.reverse()?.map((item, index) => {
              if (index <= value) {
                return <ReviewCard key={index} item={item} />;
              }
              return null;
            })}
            {data?.findReviewsByUserId?.length == 0 && (
              <None name={`${!isYou ? `${name} hasn't` : "You  haven't"} created any review`} noTop></None>
            )}
          </CardContainer>
        </InfiniteScroll>
      )}
      {(loading || error) && <FaqSkeleton />}

      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </Box>
  );
};

export default ProfileReview;
