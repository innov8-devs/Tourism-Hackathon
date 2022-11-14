import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  span {
    position: absolute;
    left: 210px;
  }
  progress {
    /* position: absolute;
    top: 40px; */
  }

  progress[value] {
    width: 145px;
    height: 14px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    border-radius: 20px;
    background: #e3e3e3;
  }

  progress[value]::-webkit-progress-value {
    border-radius: 20px;
    background: #ff9916;
  }
`;

const ProgressBar = ({ value, max }) => {
  return (
    <Container>
      <progress value={value} max={max} />
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

ProgressBar.defaultProps = {
  max: 100,
};

export default ProgressBar;
