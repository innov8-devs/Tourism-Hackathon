import { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const StarsContainer = styled.div`
  display: flex;
`;

function StarRatings(props) {
  const [currentValue, setCurrentValue] = useState(props.rating);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <StarsContainer>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={props.size}
            onClick={() => (props.token && props.enabled ? handleClick(index + 1) : null)}
            onMouseOver={() => {
              props.token && props.enabled ? handleMouseOver(index + 1) : null;
            }}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: 'pointer',
            }}
          />
        );
      })}
    </StarsContainer>
  );
}

export default StarRatings;
