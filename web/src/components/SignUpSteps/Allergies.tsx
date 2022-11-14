import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import Select from 'react-select';
import { gql } from 'storejars-react-toolkit';

import CheckBox from '../SignupCheckbox';

import { CheckBoxContainer, PrefContainer, TopHeading } from './ipa-styles';

const USER_ALLERGIES = gql`
  query FindProperties($type: PropertyType) {
    findProperties(data: { type: $type }) {
      _id
      name
      type
      meta {
        active
        updatedAt
        deactivatedAt
        createdAt
      }
    }
  }
`;

type Props = {
  setRemoteAllergie: Function;
  allergies?: any[];
};

const Allergies: React.FC<Props> = ({ setRemoteAllergie, allergies }) => {
  const [checked, setChecked] = useState([]);
  const [AllergiesListed, setAllergiesListed] = useState([]);

  useEffect(() => {
    allergies && setChecked(allergies.map((el) => el._id));
  }, [allergies]);

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '100%',
      height: '48px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '150%',
      color: '#0f264c',
      padding: '0px 10px',
      boxSizing: 'border-box',
      transition: '0.3s',
    }),
  };

  const handleCheck = (Allergie: { label?: string; _id: any }) => {
    const present = checked.includes(Allergie._id);
    if (!present) {
      setChecked((prev) => [...prev, Allergie._id]);
    } else {
      const newChecked = checked.filter((item) => item !== Allergie._id);
      setChecked(newChecked);
    }
  };

  const { data: Allergies } = useQuery(USER_ALLERGIES, {
    variables: { type: 'allergy' },
    onCompleted: (data) => {
      const defaultstate = data?.findProperties.map((item: any, index: number) => {
        if (index <= 10) {
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
      setAllergiesListed(defaultstate);
    },
  });

  const selectOptions = Allergies?.findProperties.map((item) => {
    return {
      value: item._id,
      label: item.name,
    };
  });

  const handleSelectChange = (selectedOption) => {
    setAllergiesListed((prev) => {
      const newAllergies = prev.map((item) => {
        if (item._id === selectedOption?.value) {
          return {
            ...item,
            disabled: false,
          };
        } else {
          return item;
        }
      });
      return newAllergies;
    });
  };

  useEffect(() => {
    setRemoteAllergie(checked);
  }, [checked, setRemoteAllergie]);

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your Allergies in a few simple steps</TopHeading>
        <CheckBoxContainer>
          {AllergiesListed?.map((item) => {
            return (
              !item.disabled && (
                <CheckBox
                  key={item._id}
                  label={item.name}
                  checked={checked.includes(item._id)}
                  onChange={() => {
                    handleCheck(item);
                  }}
                />
              )
            );
          })}
        </CheckBoxContainer>

        <Select
          placeholder="Find more Allergies"
          theme={(theme) => {
            return {
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#ff9916',
                primary: '#ff9916',
              },
            };
          }}
          styles={customStyles}
          onChange={handleSelectChange}
          options={selectOptions}
          isClearable={true}
        />
      </PrefContainer>
    </div>
  );
};

export default Allergies;
