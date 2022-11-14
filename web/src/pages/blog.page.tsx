import React from 'react';

import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';

import BlogCard from '../components/Blog/blog-card';
import BlogCategory from '../components/Blog/blogCategory';
import TrendingBlog from '../components/Blog/trendingBlog';
import Sub from '../components/Home/Sub';

import {
  BlogTitle,
  Categories,
  CategoryHeaderTag,
  CategoryText,
  MainContainer,
  ReadMoreButton,
  SectionText,
} from './blog-styles';

const blog = () => {
  return (
    <>
      <Box width={'100%'} bgSize={'cover'} minH={'40vh'} bgImage={'url("/images/blog.png")'} p={'50px 0'}>
        <MainContainer>
          <CategoryHeaderTag>Category</CategoryHeaderTag>
          <BlogTitle>The best place to Have fun with loved ones this December</BlogTitle>
          <ReadMoreButton>Read More</ReadMoreButton>
        </MainContainer>
      </Box>
      <Categories>
        {categories.map((category, i) => (
          <CategoryText key={i}>{category}</CategoryText>
        ))}
      </Categories>
      <MainContainer>
        <Box height={14} />
        <SectionText>Recent Posts</SectionText>
        <Box
          width={'100%'}
          overflowX={'scroll'}
          sx={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'transparent',
              borderRadius: '5px',
            },
          }}
          mb={100}
        >
          <Flex width={'fit-content'} gap={5}>
            {blogs.map((blog, i) => (
              <BlogCard key={i} imgSrc={blog.img} title={blog.txt} />
            ))}
          </Flex>
        </Box>
        <SectionText>Featured Posts</SectionText>
        <Box
          width={'100%'}
          overflowX={'scroll'}
          sx={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'transparent',
              borderRadius: '5px',
            },
          }}
          mb={100}
        >
          <Flex width={'fit-content'} gap={5}>
            {blogs.map((blog, i) => (
              <BlogCard key={i} imgSrc={blog.img} title={blog.txt} />
            ))}
          </Flex>
        </Box>
        <SectionText>Whats Trending?</SectionText>
        <Flex gap={100}>
          <Box flex={1}>
            {trendingBlogs.map((blog, i) => (
              <TrendingBlog key={i} description={blog?.description} img={blog.img} title={blog.title} />
            ))}
          </Box>
          <Box bgImage={'/images/tour.png'} width={'400px'} height={'inherit'} mb={7} bgSize={'cover'} pos={'relative'}>
            <Box
              clipPath={'polygon(0 25%, 100% 0, 100% 100%, 0% 100%)'}
              pos={'absolute'}
              bottom={'0'}
              bg={'#0091E9'}
              color={'#fff'}
              height={'400px'}
              pt={'30%'}
              w={'100%'}
              display={'flex'}
              alignItems={'center'}
              flexDir={'column'}
            >
              <Text textAlign={'center'} mb={3} fontSize={30} fontWeight={600}>
                Global Tour To Paris
              </Text>
              <Text mb={5}>Lorem ipsum dolor sit ame</Text>
              <Button bg={'#FF9916'}>Book Now</Button>
            </Box>
          </Box>
        </Flex>{' '}
        <SectionText style={{ marginTop: '100px' }}>Blog Categories</SectionText>
        <Grid gap={4} mb={200} gridTemplateColumns={'repeat(4, 1fr)'}>
          {blogCategories.map((category, idx) => (
            <BlogCategory key={idx} idx={idx} title={category} img={`/images/blogCategory${idx + 1}.png`} />
          ))}
        </Grid>
      </MainContainer>
      <Sub />
    </>
  );
};

export default blog;
const categories = ['Featured', 'Travel Tips', 'Stories', 'Upcoming Events', 'Trending', 'Be Inspired', 'Category'];
const blogs = [
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
  {
    img: '/images/blog.png',
    txt: 'Nunc lobortis nunc porttitor dolor eleifend gravida maximus ',
  },
];

const trendingBlogs = [
  {
    img: '/images/trending1.png',
    title: 'The best place to Have fun with loved ones this December',
    description:
      'Aenean tincidunt lorem ut ante elementum, vitae commodo diam vehicula. Nunc et aliquet orci. Praesent massa erat, ornare in enim er arcu nunc helppl hmkl...',
  },
  {
    img: '/images/trending2.png',
    title: 'Amazing thing to see on a visit to Seychelles',
    description:
      'Aenean tincidunt lorem ut ante elementum, vitae commodo diam vehicula. Nunc et aliquet orci. Praesent massa erat, ornare in enim er arcu nunc helppl hmkl...',
  },
  {
    img: '/images/trending3.png',
    title: '5 reasons to book an hotel room in savanna lodges',
    description:
      'Aenean tincidunt lorem ut ante elementum, vitae commodo diam vehicula. Nunc et aliquet orci. Praesent massa erat, ornare in enim er arcu nunc helppl hmkl...',
  },
];

const blogCategories = ['Events', 'Stories', 'Gists', 'Music', 'Hotels', 'Featured', 'Travels', 'Featured'];
