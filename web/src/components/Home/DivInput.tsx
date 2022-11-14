import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import Loadable from 'react-loadable';
import { useQuill } from 'react-quilljs';

import styles from '../../styles/Home.module.css';
import { Error } from '../RestaurantDetails/review-modal.styles';

import 'quill-mention';
import 'quill-mention/dist/quill.mention.css';

import { CUSTOMER_SEARCH_QUERY, EVENTS_SEARCH_QUERY, RESTAURANTS_SEARCH_QUERY } from './Hero';

const ResultCard = ({ img, name, desc, searchTerm, setSearchTerm, setMode, id, type, quill }) => {
  function handleClick() {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(`${(quill.getContents().ops[0].insert as string).slice(
        0,
        (quill.getContents().ops[0].insert as string)?.length - searchTerm.length - 1,
      )}<a class="ql-mention" href="/#" data-mention-type=${type} data-mention-id=${id}>
          ${name}
        </a>`);
    }
    // const clone = `${prev.slice(
    //   0,
    //   prev.length - 4 - searchTerm.length,
    // )}<a class="ql-mention" href="/#" data-mention-type=${type} data-mention-id=${id}>
    //   ${name}
    // </a>
    // </p>`;
    setSearchTerm('');
    setMode('initial');
  }

  return (
    <Flex
      cursor={'pointer'}
      p={2}
      bg={'#fff'}
      _active={{ bgColor: '#cccccc' }}
      _hover={{ bgColor: '#e6e6e6' }}
      onClick={handleClick}
    >
      <Image src={img} alt={'User Profile'} width={50} height={50} borderRadius={'50%'} mr={1} />
      <Box>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={2} color={'#00000090'} fontWeight={500} fontSize={11}>
          {desc}
        </Text>
      </Box>
    </Flex>
  );
};

const DivInput = ({ setReviewText, mentions, setMentions, submitted, setSubmitted }) => {
  const [mode, setMode] = useState<'initial' | 'loading'>('initial');
  const [searchTerm, setSearchTerm] = useState('');
  const { quill, quillRef } = useQuill({
    placeholder: 'Write a Review',
    formats: [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'mention',
    ],
    modules: {
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        mentionDenotationChars: ['@'],
        dataAttributes: ['id', 'value', 'type'],
        source: async function (searchTerm, renderList) {
          const matchedPeople = await suggestPeople(searchTerm);
          renderList(matchedPeople);
        },
      },
    },
  });
  const [getSearchItem, { data: searchData }] = useLazyQuery(RESTAURANTS_SEARCH_QUERY, {
    variables: { term: searchTerm, limit: 20, offset: 0 },
    fetchPolicy: 'cache-and-network',
  });

  const [getSearchCustomer, { data: searchCustomerData }] = useLazyQuery(CUSTOMER_SEARCH_QUERY, {
    variables: { term: searchTerm, limit: 5, offset: 0 },
    fetchPolicy: 'cache-and-network',
  });

  const [getSearchEvents, { data: searchEventsData }] = useLazyQuery(EVENTS_SEARCH_QUERY, {
    variables: { term: searchTerm, limit: 5, offset: 0 },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (submitted) {
      if (quill) {
        quill.setText('');
        setMentions([]);
      }
    }
  }, [submitted, quill, setMentions]);

  async function suggestPeople(searchTerm) {
    if (searchTerm != '') {
      const restaurants = getSearchItem({
        variables: { term: searchTerm, offset: 0, limit: 5 },
      });
      const customers = getSearchCustomer({
        variables: { term: searchTerm, offset: 0, limit: 5 },
      });
      const events = getSearchEvents({
        variables: { term: searchTerm, offset: 0, limit: 5 },
      });
      const result = [
        (await restaurants)?.data?.searchRestaurants?.length > 0 && {
          id: 'Restaurants',
          value: 'Restaurants',
          disabled: true,
        },
        ...((await restaurants)?.data?.searchRestaurants?.map((el) => ({
          id: el?._id,
          value: el?.name,
          type: 'restaurant',
        })) || []),
        (await customers)?.data?.searchCustomers.length > 0 && { id: 'Customers', value: 'Customers', disabled: true },
        ...((await customers)?.data?.searchCustomers?.map((el) => ({
          id: el?._id,
          value: `${el?.firstName} ${el?.lastName}`,
          type: 'customer',
        })) || []),
        (await events)?.data?.searchEvents.length > 0 && { id: 'Events', value: 'Events', disabled: true },
        ...((await events)?.data?.searchEvents?.map((el) => ({ id: el?._id, value: el?.title, type: 'event' })) || []),
      ].filter((el) => el);
      return result;
    }

    return [];
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mode == 'loading' && searchTerm !== '') {
        getSearchItem({
          variables: { term: searchTerm, offset: 0, limit: 5 },
        });
        getSearchCustomer({
          variables: { term: searchTerm, offset: 0, limit: 5 },
        });
        getSearchEvents({
          variables: { term: searchTerm, offset: 0, limit: 5 },
        });
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSearchCustomer, getSearchEvents, getSearchItem, searchTerm, mode]);

  useEffect(() => {
    if (quill) {
      const textChangeHandler = () => {
        submitted && setSubmitted(false);
        let finalText = '';
        const mentions = [];
        const contents = quill.getContents().ops;
        contents.map((op) => {
          if (typeof op?.insert == 'string') {
            finalText += op?.insert;
          } else if ((op?.insert as Record<string, any>)?.mention?.denotationChar == '@') {
            mentions.push((op?.insert as Record<string, any>)?.mention);
            finalText += (op?.insert as Record<string, any>)?.mention?.value;
          }
        });
        setMentions(mentions);
        setReviewText(finalText);
      };
      quill.on('text-change', textChangeHandler);
      return () => {
        quill.off('text-change', textChangeHandler);
      };
    }
  }, [quill, quillRef, setMentions, setReviewText, submitted, setSubmitted]);

  return (
    <div id="editor" className={styles.heroSearch} style={{ marginBottom: mentions?.length <= 0 && '50px' }}>
      <div ref={quillRef} />
      <Error>{mentions?.length <= 0 && 'You must mention at least 1 place'}</Error>
      {mode == 'loading' && (
        <Box
          maxHeight={280}
          overflowY={'scroll'}
          boxShadow={'0px 8px 20px 0.9px rgba(0, 0, 0, 0.12)'}
          bg={'#fff'}
          zIndex={10}
        >
          {searchCustomerData?.searchCustomers?.map((el, i) => (
            <ResultCard
              key={i}
              desc={el?.about}
              img={el?.profileImage}
              name={`${el?.firstName} ${el?.lastName}`}
              id={el?._id}
              type={'customer'}
              {...{ searchTerm, setSearchTerm, setMode, mode, setMentions, quill }}
            />
          ))}
          {searchData?.searchRestaurants?.map((el, i) => (
            <ResultCard
              key={i}
              desc={el?.description}
              img={el?.logo}
              name={el?.name}
              id={el?._id}
              type={'restaurant'}
              {...{ searchTerm, setSearchTerm, setMode, mode, setMentions, quill }}
            />
          ))}
          {searchEventsData?.searchEvents?.map((el, i) => (
            <ResultCard
              key={i}
              desc={el?.description}
              img={el?.images[0]}
              name={el?.title}
              id={el?._id}
              type={'event'}
              {...{ searchTerm, setSearchTerm, setMode, mode, setMentions, quill }}
            />
          ))}
        </Box>
      )}
    </div>
  );
};

export default DivInput;
