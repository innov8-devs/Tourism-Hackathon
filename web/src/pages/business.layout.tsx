import React from 'react';

import Header from '../components/Global/Header';

const BusinessLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BusinessLayout;
