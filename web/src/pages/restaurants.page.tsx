import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BarsandLounges from '../components/Home/BarandLounges';
import Kitchens from '../components/Home/Kitchen';
import LocalDishes from '../components/Home/LocalDishes';
import Recommendation from '../components/Home/Recommendation';
import { emptyCart } from '../redux/cartRedux';

import { MainContainer } from './hotels/_index-styles';

const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);
  return (
    <>
      <Header />
      <MainContainer>
        <Recommendation />
        <Kitchens />
        <BarsandLounges />
        <LocalDishes />
      </MainContainer>
      <Footer />
    </>
  );
};

export default RestaurantsPage;
