import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MultiStepForm, Step } from 'react-multi-form';
import { gql } from 'storejars-react-toolkit';

import sOnboarding from '../../public/sOnboarding.jpg';
import Button from '../components/Button';
import Allergies from '../components/SignUpSteps/Allergies';
import Interests from '../components/SignUpSteps/Interests';
import 'react-toastify/dist/ReactToastify.css';
import Preference from '../components/SignUpSteps/Preference';

import { BtnContainer, Container, Left, MainContainer, Right, SkipBtn } from './signupsteps-styles';
import { PREFERENCES_MUTATION } from './update-preferences.page';

const INTERESTS_MUTATION = gql`
  mutation AddManyToInterests($interests: [ID!]!) {
    addManyToInterests(interests: $interests) {
      status
    }
  }
`;

const ALLERGIES_MUTATION = gql`
  mutation AddManyAllergies($allergies: [ID!]!) {
    addManyAllergies(allergies: $allergies) {
      status
    }
  }
`;

const SignupStep = () => {
  const [active, setActive] = useState(1);

  const [checkInterest, setCheckInteresst] = useState([]);
  const [checkAllergy, setCheckAllergy] = useState([]);
  const [checkPreference, setCheckPreference] = useState([]);

  const router = useRouter();
  const toast = useToast();

  const [addManyToInterests] = useMutation(INTERESTS_MUTATION, {
    variables: {
      interests: checkInterest.map((el) => el._id),
    },

    onCompleted: () => {
      toast({ title: 'Interests added successfully', status: 'error', duration: 3000 });
      setTimeout(() => {
        setActive(active + 1);
      }, 1500);
    },
    onError: () => {
      toast({ status: 'error', title: 'Something went wrong, please try again later', duration: 3000 });
    },
  });

  const [addManyAllergies] = useMutation(ALLERGIES_MUTATION, {
    variables: {
      allergies: checkAllergy,
    },

    onCompleted: () => {
      setTimeout(() => {
        router.push('/recommended');
      }, 1500);
    },
    onError: () => {
      toast({ status: 'error', title: 'Something went wrong, please try again later', duration: 3000 });
    },
  });

  const [addManyPreferences] = useMutation(PREFERENCES_MUTATION, {
    variables: {
      preferences: checkPreference,
    },

    onCompleted: () => {
      toast({ title: 'Preferences added successfully', status: 'success' });
      setTimeout(() => {
        setActive(active + 1);
      }, 1500);
    },
    onError: () => {
      toast({ status: 'error', title: 'Something went wrong, please try again later', duration: 3000 });
    },
  });

  const [alreadyPreference] = useState([]);

  const handleNext = () => {
    if (active < 3) {
      if (active === 1) {
        addManyToInterests({
          variables: {
            interests: checkInterest.map((el) => el._id),
          },
        });
      } else if (active === 2) {
        addManyPreferences({
          variables: {
            preferences: checkPreference,
          },
        });
      }
    } else if (active === 3) {
      addManyAllergies({
        variables: {
          allergies: checkAllergy,
        },
      });
    }
  };

  const handleSkip = () => {
    if (active < 2) {
      setActive(active + 1);
    } else {
      router.push('/');
    }
  };

  return (
    <MainContainer>
      <Left>
        <Image alt="signUpImage" src={sOnboarding} layout="fill" objectFit="cover" />
      </Left>
      <Right>
        <Container>
          <MultiStepForm accentColor="#FF9916" activeStep={active}>
            <Step label="Interests">
              <Interests interests={null} setRemoteInterest={setCheckInteresst} />
            </Step>
            <Step label="Preferences">
              <Preference
                setRemotePreference={setCheckPreference}
                interests={checkInterest}
                onChanged={() => {}}
                preferences={alreadyPreference}
              />
            </Step>
            <Step label="Allergies">
              <Allergies setRemoteAllergie={setCheckAllergy} />
            </Step>
          </MultiStepForm>
          <BtnContainer>
            {active > 1 && (
              <span onClick={() => setActive(active - 1)}>
                <Button disabled={active === 1 ? true : false} backTwo>
                  Back
                </Button>
              </span>
            )}
            <SkipBtn onClick={handleSkip}>Skip for now</SkipBtn>
            <span onClick={handleNext}>
              <Button small>Continue</Button>
            </span>
          </BtnContainer>
        </Container>
      </Right>
    </MainContainer>
  );
};

export default SignupStep;
