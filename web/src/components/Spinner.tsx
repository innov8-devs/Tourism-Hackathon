import React from 'react';

import styled from 'styled-components';

const SpinnerDiv = styled.div`
  align-self: center;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #ff9916;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => <SpinnerDiv></SpinnerDiv>;

export default Spinner;
