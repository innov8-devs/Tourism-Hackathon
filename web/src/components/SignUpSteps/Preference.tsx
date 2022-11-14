import React, { useEffect, useState } from 'react';

import { gql, useQuery } from '@apollo/client';
import { Button } from '@chakra-ui/react';

import { CheckBoxContainer, PrefContainer, TopHeading, Title } from './ipa-styles';

const USER_PREFERENCES = gql`
  query GetPreferences($interests: [ID]) {
    getPreferences(interests: $interests) {
      interest
      preferences {
        _id
        name
        interest
      }
    }
  }
`;

type Props = {
  setRemotePreference: Function;
  interests: any[];
  preferences?: any[];
  onChanged?: () => void;
};

const Preference: React.FC<Props> = ({
  setRemotePreference,
  interests,
  preferences: alreadyPreferences = [],
  onChanged = () => {},
}) => {
  const [checked, setChecked] = useState([]);
  const [preferences, setPreferencesListed] = useState([]);

  useEffect(() => {
    setChecked(alreadyPreferences.map((el) => el._id));
  }, [alreadyPreferences]);

  const handleCheck = (Preference: { label?: string; _id: any }) => {
    const present = checked.includes(Preference._id);
    onChanged();
    if (!present) {
      setChecked((prev) => [...prev, Preference._id]);
    } else {
      const newChecked = checked.filter((item) => item !== Preference._id);
      setChecked(newChecked);
    }
  };

  const { data: Preferences } = useQuery(USER_PREFERENCES, {
    variables: { interests: interests?.map((el) => el._id) },
    onCompleted: (data) => {
      setPreferencesListed(data?.getPreferences);
    },
  });

  useEffect(() => {
    setRemotePreference(checked);
  }, [checked, setRemotePreference, Preferences]);

  return (
    <div>
      <PrefContainer>
        <TopHeading>Please setup your preferences in a few simple steps</TopHeading>
        {preferences.map((preference, i) => {
          return (
            <>
              <Title key={i} style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
                {preference.interest}
              </Title>
              <CheckBoxContainer>
                {preference?.preferences?.map((item) => {
                  return (
                    !item.disabled && (
                      <Button
                        key={item._id}
                        border={'1px solid rgba(15, 38, 76, 0.45)'}
                        borderRadius={'60px'}
                        backgroundColor={checked.includes(item._id) ? '#0F264C' : '#fff'}
                        m={3}
                        color={checked.includes(item._id) ? '#fff' : '#0F264C'}
                        onClick={() => {
                          handleCheck(item);
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  );
                })}
              </CheckBoxContainer>
            </>
          );
        })}
      </PrefContainer>
    </div>
  );
};

export default Preference;
