import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Select, useToast } from '@chakra-ui/react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { ADVERTISE_BUSINESS } from '../../graphQL/queries';
import AllCountries from '../../utils/countries';
import Button from '../Button';
import Spinner from '../Spinner';

import {
  ButtonContainer,
  EditProfileDataForm,
  EditProfileDataInput,
  EditProfileDataLabel,
  Error,
  MainContainer,
} from './adcreationform-styles';

interface adCreationFormValues {
  email: string;
  phoneNumber: string;
  businessName: string;
  country: string;
  city: string;
  industry: string;
  product: string;
  budget: string;
}

const AdCreationForm = () => {
  const toast = useToast();
  const [advertiseBusiness, { loading }] = useMutation(ADVERTISE_BUSINESS, {
    onCompleted: () => {
      toast({ status: 'success', title: 'Ad has been submitted' });
    },
    onError: () => {
      toast({ status: 'error', title: 'Error occurred in submitting ad' });
    },
  });

  const [countries] = useState(AllCountries);

  const initialValues: adCreationFormValues = {
    email: '',
    businessName: '',
    phoneNumber: '',
    country: '',
    city: '',
    industry: '',
    product: '',
    budget: '',
  };

  const schema = Yup.object({
    email: Yup.string().required('Required').email('Invalid email address').nullable(),
    businessName: Yup.string().min(3).required('Required'),
    phoneNumber: Yup.string().required('Required'),
    country: Yup.string()
      .oneOf(countries.map((el) => el.name))
      .required(),
    city: Yup.string().min(3).required('Required'),
    industry: Yup.string().min(3).required('Required'),
    product: Yup.string().min(3).required('Required'),
    budget: Yup.string().min(3).required('Required'),
  });

  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: adCreationFormValues, formikHelpers: FormikHelpers<adCreationFormValues>) => {
          advertiseBusiness({
            variables: { data: values },
          });
          formikHelpers.resetForm();
        }}
      >
        {(props) => (
          <EditProfileDataForm onSubmit={props.handleSubmit}>
            <EditProfileDataLabel>Company Name</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.businessName}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Company Name"
              type="text"
              id="businessName"
              name="businessName"
            />
            {props.errors.businessName && <Error>{props.errors.businessName}</Error>}

            <EditProfileDataLabel>Email Address</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="jane@doe.com"
              type="email"
              id="email"
              name="email"
            />
            {props.errors.email && <Error>{props.errors.email}</Error>}

            <EditProfileDataLabel>Phone Number</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.phoneNumber}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Phone Number"
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
            />
            {props.errors.phoneNumber && <Error>{props.errors.phoneNumber}</Error>}

            <EditProfileDataLabel>Country</EditProfileDataLabel>
            <Select
              id="country"
              name="country"
              onChange={props.handleChange}
              value={props.values.country}
              onBlur={props.handleBlur}
            >
              {countries.map((country, idx) => (
                <option key={idx} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
            {props.errors.country && <Error>{props.errors.country}</Error>}

            <EditProfileDataLabel>City</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.city}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="city"
              type="city"
              id="city"
              name="city"
            />
            {props.errors.city && <Error>{props.errors.city}</Error>}

            <EditProfileDataLabel>Industry</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.industry}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Industry"
              type="industry"
              id="industry"
              name="industry"
            />
            {props.errors.industry && <Error>{props.errors.industry}</Error>}

            <EditProfileDataLabel>Product</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.product}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Product"
              type="product"
              id="product"
              name="product"
            />
            {props.errors.product && <Error>{props.errors.product}</Error>}

            <EditProfileDataLabel>Budget</EditProfileDataLabel>
            <EditProfileDataInput
              value={props.values.budget}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              placeholder="Budget"
              type="budget"
              id="budget"
              name="budget"
            />
            {props.errors.budget && <Error>{props.errors.budget}</Error>}

            <ButtonContainer>
              <Button small> {loading ? <Spinner /> : 'Create Ad'}</Button>
            </ButtonContainer>
          </EditProfileDataForm>
        )}
      </Formik>
    </MainContainer>
  );
};

export default AdCreationForm;
