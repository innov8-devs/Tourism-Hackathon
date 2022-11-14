import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0 40px auto;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  color: #0f264c;
  margin: 0;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-overflow-scrolling: touch;

  @media (max-width: 900px) {
    width: 100vw;
    overflow-x: scroll;
  }
`;

export const NextIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const places = [
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 1,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 2,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 3,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos4',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 4,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 5,
  },
  {
    img: '/images/places4.png',
    title: 'Circa Lagos',
    details: 'Chinese dining, Middle Eastern, Vegetarian diet',
    address: 'Victoria Island, Lagos',
    id: 6,
  },
];
