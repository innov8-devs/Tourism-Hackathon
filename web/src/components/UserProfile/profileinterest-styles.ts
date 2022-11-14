import styled from 'styled-components';

export const PhotoContainer = styled.div`
  margin: 40px 0 0 0;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 0 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9916;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff9916;
  }
  @media (min-width: 500px) {
    height: 790px;
    overflow-y: scroll;
  }
`;

export const data = [
  {
    id: 1,
    img: '/football.png',
    title: 'Football',
    description: 'Everything pertaining to soccer.',
  },
  {
    id: 2,
    img: '/comic.png',
    title: 'Comic',
    description: 'Comic book events and characters',
  },
  {
    id: 3,
    img: '/comedy.png',
    title: 'Comedy',
    description: 'For people who love to laugh out loud',
  },
  {
    id: 4,
    img: '/movie.png',
    title: 'Movie',
    description: 'For those who enjoy great entertainment.',
  },
  {
    id: 5,
    img: '/comedy.png',
    title: 'Comedy',
    description: 'For people who love to laugh out loud',
  },
  {
    id: 6,
    img: '/football.png',
    title: 'Football',
    description: 'Everything pertaining to soccer.',
  },
  {
    id: 7,
    img: '/movie.png',
    title: 'Movie',
    description: 'For those who enjoy great entertainment.',
  },
  {
    id: 8,
    img: '/comic.png',
    title: 'Comic',
    description: 'Comic book events and characters',
  },
  {
    id: 9,
    img: '/football.png',
    title: 'Football',
    description: 'Everything pertaining to soccer.',
  },
  {
    id: 10,
    img: '/movie.png',
    title: 'Movie',
    description: 'For those who enjoy great entertainment.',
  },
  {
    id: 11,
    img: '/comedy.png',
    title: 'Comedy',
    description: 'For people who love to laugh out loud',
  },
  {
    id: 12,
    img: '/comic.png',
    title: 'Comic',
    description: 'Comic book events and characters',
  },
];
