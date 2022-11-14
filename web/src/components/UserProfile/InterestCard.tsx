import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_INTEREST } from '../../graphQL/queries';

import { AddButton, CardImg, Description, InterestCardontainer, Title, TitleContainer } from './interestcard-styles';

const InterestCard = ({ item, unSelected = false }) => {
  const profile = JSON.parse(localStorage.getItem('user')?.toString() == 'null' ? '{}' : localStorage.getItem('user'));
  const [add, setAdd] = useState(unSelected ? false : true);
  const [addInterest] = useMutation(ADD_INTEREST, {
    variables: {
      id: item._id,
    },
  });

  useEffect(() => {
    setAdd(profile?.interests.some((interest) => interest._id == item._id));
  }, [item._id, profile]);

  return (
    <InterestCardontainer key={item._id}>
      <TitleContainer>
        <CardImg src={item.img} alt={item.title} />
        <div>
          <Title>{item.name}</Title>
          <Description>{item?.description}</Description>
        </div>
      </TitleContainer>
      <AddButton
        added={add ? true : false}
        onClick={() => {
          addInterest();
          setAdd(!add);
        }}
      >
        {add ? ' Added' : ' Add +'}
      </AddButton>
    </InterestCardontainer>
  );
};

export default InterestCard;
