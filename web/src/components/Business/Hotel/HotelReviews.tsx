import React, { useEffect, useState } from 'react';

import { gql, useMutation, useQuery } from '@apollo/client';
import { useBoolean, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { FaStar } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import * as Yup from 'yup';

import { UPLOAD_MULTIPLE_IMAGES } from '../../../graphQL/queries';
import styles from '../../../styles/Home.module.css';
import { AUTH_TOKEN } from '../../constants';
import ProgressBar from '../../ProgressBar';
import { RequireAuthFunction } from '../../requireAuth/RequireAuth';
import LoginModal from '../../RestaurantDetails/LoginModal';
import {
  Button,
  ButtonContainer,
  CancelIcon,
  CardContainer,
  ErrorsContainer,
  FormContainer,
  ImageAttachCon,
  ImageAttachIcon,
  ImageAttachIconImg,
  ImagePreview,
  ImagePreviewCon,
  ImagePreviewContainer,
  Rating,
  RatingContainer,
  RatingHeader,
  RatingsContainer,
  RatingsWrapper,
  ReviewBtn,
  ReviewBtnContainer,
  ReviewCon,
  ReviewInputStyles,
  WriteReviewContainer,
  WriteReviewInnerContainer,
} from '../../RestaurantDetails/restaurantsreview-styles';
import ReviewCard from '../../RestaurantDetails/ReviewCard';
import Spinner from '../../Spinner';

function FilteredPropsInputField({ className, type, ...props }) {
  return <Field type={type} className={className} {...props} as={type} />;
}

const ReviewInput = styled(FilteredPropsInputField)`
  ${ReviewInputStyles}
`;

const reviewSchema = Yup.object().shape({
  body: Yup.string().min(3, 'must be 5 characters or less'),
  rating: Yup.string().min(1, 'must be 5 characters or less').required('Ratings is required').nullable(),
});

export const REVIEWS_QUERY = gql`
  query FindReviews($hotelId: ID) {
    findReviews(data: { businessId: $hotelId, businessType: hotel }) {
      _id
      body
      rating
      likes
      likedByUser
      user {
        _id
        email
        firstName
        lastName
        profileImage
        username
      }
      meta {
        createdAt
        updatedAt
      }
    }
  }
`;

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReview($body: String, $rating: Int!, $hotelId: ID!, $images: [String!]) {
    createReview(data: { businessId: $hotelId, businessType: hotel, body: $body, rating: $rating, images: $images }) {
      _id
      body
      rating
      likes
      images
      meta {
        createdAt
        updatedAt
      }
    }
  }
`;

const HotelsReview = ({ hotel }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [rate, setRating] = useState(null);
  const [files, setFiles] = useState([]);
  const [loadLogin, setLoad] = useBoolean(false);

  const hotelId = hotel?._id;
  const token = localStorage.getItem(AUTH_TOKEN);
  const toast = useToast();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = async (values) => {
    if (!token) {
      setLoad.on();
      return null;
    }
    if (files.length <= 0) {
      toast({ title: 'No images attached', duration: 3000, status: 'error' });
      const payload = {
        ...values,
        rating: parseInt(values.rating),
        body: values.body === '' ? undefined : values.body,
      };
      await createReview({ variables: payload });
    } else {
      const {
        data: {
          uploadImages: { urls },
        },
      } = await uploadImages({
        variables: {
          name: 'reviewImages',
          files: files,
          location: 'reviews',
        },
      });
      const payload = {
        ...values,
        rating: parseInt(values.rating),
        body: values.body === '' ? undefined : values.body,
        images: urls,
      };
      await createReview({ variables: payload });
    }
    handleReviewDisplay();
  };

  const handleImageChange = (e) => {
    setFiles((files) => {
      const newState = [...files];
      if (newState.length < 4) {
        for (let i = 0; i < e.target.files.length; i++) {
          newState.push(e.target.files[i]);
        }
      } else {
        toast({ title: 'Maximum attached files limit reached', duration: 3000, status: 'error' });
      }
      return newState;
    });
  };

  const handleImageDelete = (e) => {
    setFiles((files) => {
      const newState = [...files];
      newState.splice(+e.target.id, 1);
      return newState;
    });
  };

  const handleReviewDisplay = () => {
    if (show) {
      setRating(null);
    }
    setShow(!show);
  };

  const [createReview, { loading }] = useMutation(CREATE_REVIEW_MUTATION, {
    variables: {
      body: ' ',
      rating: null,
      hotelId: hotelId,
      images: [],
    },
    refetchQueries: [{ query: REVIEWS_QUERY, variables: { hotelId: hotelId } }],
    onCompleted: () => {
      setShow(false);
      setRating(null);
      toast({ title: 'Review submitted successfully', status: 'error', duration: 3000 });
    },
  });

  const [uploadImages, { loading: imageUploading }] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {
      setFiles([]);
      toast({ title: 'Images uploaded successfully', duration: 3000, isClosable: true, status: 'success' });
    },
    onError: () => {
      toast({ title: 'Error uploading images', duration: 3000, isClosable: true, status: 'error' });
    },
  });

  const { data: reviews, loading: reviewsLoading } = useQuery(REVIEWS_QUERY, {
    variables: { hotelId },
  });

  const authToken = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    if (loadLogin) {
      RequireAuthFunction();
    }
  }, [loadLogin]);

  if (reviewsLoading) return <div> Loading...</div>;

  return (
    <ReviewCon>
      <RatingHeader>Average Ratings</RatingHeader>
      <RatingContainer>
        <div>
          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Excellent</div>
            <ProgressBar
              value={reviews?.findReviews.filter((review) => review.rating == 5).length}
              max={reviews?.findReviews.length}
            />
            <span style={{ marginLeft: '10px' }}>
              {reviews?.findReviews.filter((review) => review.rating == 5).length}
            </span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Very Good</div>
            <ProgressBar
              value={reviews?.findReviews.filter((review) => review.rating == 4).length}
              max={reviews?.findReviews.length}
            />
            <span style={{ marginLeft: '10px' }}>
              {reviews?.findReviews.filter((review) => review.rating == 4).length}
            </span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Average</div>
            <ProgressBar
              value={reviews?.findReviews.filter((review) => review.rating == 3).length}
              max={reviews?.findReviews.length}
            />
            <span style={{ marginLeft: '10px' }}>
              {reviews?.findReviews.filter((review) => review.rating == 3).length}
            </span>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div className={styles.progressText}>Poor</div>
            <ProgressBar
              value={reviews?.findReviews.filter((review) => review.rating == 2).length}
              max={reviews?.findReviews.length}
            />
            <span style={{ marginLeft: '10px' }}>
              {reviews?.findReviews.filter((review) => review.rating == 2).length}
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={styles.progressText}>Terrible</div>
            <ProgressBar
              value={reviews?.findReviews.filter((review) => review.rating == 1).length}
              max={reviews?.findReviews.length}
            />
            <span style={{ marginLeft: '10px' }}>
              {reviews?.findReviews.filter((review) => review.rating == 1).length}
            </span>
          </div>
        </div>
        <ReviewBtnContainer className={styles.reviewPhotoBtn}>
          <ReviewBtn
            onClick={() => {
              if (authToken) {
                handleReviewDisplay();
                setFiles([]);
              } else {
                setModal(true);
              }
            }}
          >
            {!show ? `Write a Review` : `Cancel`}
          </ReviewBtn>
        </ReviewBtnContainer>
      </RatingContainer>

      {show && (
        <Formik
          initialValues={{
            body: '',
            rating: null,
            hotelId: hotelId,
            image: null,
          }}
          validationSchema={reviewSchema}
          onSubmit={(value) => {
            handleSubmit(value);
          }}
        >
          {({ errors, touched }) => {
            return (
              <FormContainer>
                <Form style={{ width: '100%' }}>
                  <div style={{ margin: '0 0 25px 0', position: 'relative' }}>
                    <ReviewInput
                      type="textarea"
                      name="body"
                      id="body"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder="Write a review"
                    ></ReviewInput>
                    <ImageAttachIcon>
                      <ImageAttachCon type="file" id="image" name="image" onChange={(e) => handleImageChange(e)} />
                      <ImageAttachIconImg />
                    </ImageAttachIcon>
                    {files && (
                      <ImagePreviewContainer>
                        {files.map((file, index) => {
                          return (
                            <ImagePreviewCon key={index}>
                              <ImagePreview key={index}>{file.name ? file.name : ''}</ImagePreview>
                              <CancelIcon id={String(index)} onClick={handleImageDelete} />
                            </ImagePreviewCon>
                          );
                        })}
                      </ImagePreviewContainer>
                    )}
                    <WriteReviewContainer>
                      <WriteReviewInnerContainer>
                        <RatingsWrapper>
                          <span>Rate your Experience</span>
                        </RatingsWrapper>
                        <RatingsWrapper>
                          {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;

                            return (
                              <RatingsContainer key={index}>
                                <label>
                                  <Field
                                    type="radio"
                                    name="rating"
                                    value={givenRating}
                                    onClick={() => {
                                      setRating(givenRating);
                                    }}
                                    style={{ display: 'none' }}
                                  />
                                  <Rating>
                                    <FaStar
                                      color={givenRating < rate || givenRating === rate ? 'orange' : 'rgb(192,192,192)'}
                                      size={24}
                                    />
                                  </Rating>
                                </label>
                              </RatingsContainer>
                            );
                          })}
                        </RatingsWrapper>
                        <ErrorsContainer>{errors.rating && touched.rating && errors.rating}</ErrorsContainer>
                      </WriteReviewInnerContainer>
                      <ButtonContainer>
                        <Button type="submit" disabled={imageUploading} onClick={() => {}}>
                          {imageUploading || loading ? <Spinner /> : `Submit`}
                        </Button>
                      </ButtonContainer>
                    </WriteReviewContainer>
                  </div>
                </Form>
              </FormContainer>
            );
          }}
        </Formik>
      )}
      <CardContainer>
        {reviews?.findReviews.map((review, index) => (
          <ReviewCard key={review._id} review={review} index={index} restData={hotel} data={{ review }} token={token} />
        ))}
      </CardContainer>
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </ReviewCon>
  );
};

export default HotelsReview;
