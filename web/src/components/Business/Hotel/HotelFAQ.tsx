import React from 'react';

// import { gql, useQuery } from '@apollo/client';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useControllableState,
  Center,
  Button,
} from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroller';

import { FaqGrid } from '../../RestaurantDetails/faq-styles';
// import FaqSkeleton from '../../Skeleton/FaqSkeleton';

// const RESTAURANT_FAQ_QUERY = gql`
//   query findFAQ($data: QueryFAQInput!) {
//     findFAQ(data: $data) {
//       _id
//       restaurantId
//       question
//       answer
//       meta {
//         active
//         createdAt
//         activatedAt
//         deactivatedAt
//         updatedAt
//       }
//     }
//   }
// `;

const HotelFaq = (props) => {
  // eslint-disable-next-line no-unused-vars
  const hotel = props.data;

  const [value, setValue] = useControllableState({ defaultValue: 17 });

  const data = { findFAQ: [] };

  //   const { loading, error, data } = useQuery(RESTAURANT_FAQ_QUERY, {
  //     variables: {
  //       data: {
  //         restaurantId: restaurantId,
  //       },
  //     },
  //   });

  //   if (loading) return <FaqSkeleton />;
  //   if (error) return <FaqSkeleton />;

  const loadMore = (load) => {
    if (!load) return null;
    setValue(value + 15);
  };

  return (
    <>
      {data?.findFAQ.length > 0 ? (
        <FaqGrid>
          <InfiniteScroll
            pageStart={0}
            hasMore={value < data?.findFAQ.length}
            loadMore={() => loadMore(false)}
            loader={
              <Center>
                <Button onClick={loadMore} bg="#ff9916" colorScheme="orange">
                  Load More
                </Button>
              </Center>
            }
            useWindow={false}
          >
            <Accordion
              style={{
                height: '680px',
                overflow: 'auto',
              }}
              allowToggle
            >
              {Array(value)
                .fill(0)
                .map((_, index) => (
                  <AccordionItem key={index} _focus={{ boxshadow: 'none' }}>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'orange', color: 'white' }} _focus={{ boxshadow: 'none' }}>
                        <Box flex="1" textAlign="left">
                          {data?.findFAQ[index]?.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg="white" pb={4}>
                      {data?.findFAQ[index]?.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </InfiniteScroll>
        </FaqGrid>
      ) : (
        <div>
          <h1>
            No FAQ at the moment <br /> Please check back later
          </h1>
        </div>
      )}
    </>
  );
};

export default HotelFaq;
