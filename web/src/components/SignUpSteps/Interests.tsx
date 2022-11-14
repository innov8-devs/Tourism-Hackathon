import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import { USER_INTERESTS } from '../../graphQL/queries';
import CheckBox from '../SignupCheckbox';

import { CheckBoxContainer, PrefContainer, TopHeading } from './ipa-styles';

type Props = {
  setRemoteInterest: Function;
  interests: any[];
  onChanged?: () => void;
};

const Interests: React.FC<Props> = ({ setRemoteInterest, interests: alreadyInterests, onChanged = () => {} }) => {
  const [checked, setChecked] = useState([]);
  const [interestsListed, setInterestsListed] = useState([]);

  useEffect(() => {
    alreadyInterests && setChecked(alreadyInterests);
  }, [alreadyInterests]);

  const handleCheck = (interest: { label?: string; _id: any }) => {
    const present = checked.some((el) => el._id == interest._id);
    onChanged();
    if (!present) {
      setChecked((prev) => [...prev, interest]);
    } else {
      const newChecked = checked.filter((item) => item._id !== interest._id);
      setChecked(newChecked);
    }
  };

  useQuery(USER_INTERESTS, {
    variables: { type: 'interest' },
    onCompleted: (data) => {
      const defaultstate = data?.findProperties.map((item: any, index: number) => {
        if (index <= 15) {
          return {
            _id: item._id,
            name: item.name,
            disabled: false,
          };
        } else {
          return {
            _id: item._id,
            name: item.name,
            disabled: true,
          };
        }
      });
      setInterestsListed(defaultstate);
    },
  });

  useEffect(() => {
    setRemoteInterest(checked);
  }, [checked, setRemoteInterest]);

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your Interests in a few simple steps</TopHeading>

        <CheckBoxContainer>
          {interestsListed?.map((item) => {
            return (
              !item.disabled && (
                <CheckBox
                  key={item._id}
                  label={item.name}
                  checked={checked?.some((el) => el._id == item._id)}
                  onChange={() => {
                    handleCheck(item);
                  }}
                />
              )
            );
          })}
        </CheckBoxContainer>
      </PrefContainer>
    </div>
  );
};

export default Interests;
