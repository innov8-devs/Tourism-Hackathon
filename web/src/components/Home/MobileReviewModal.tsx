import { useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import dynamic from 'next/dynamic';
import { BiImage } from 'react-icons/bi';
import * as Yup from 'yup';

import { UPLOAD_MULTIPLE_IMAGES, CREATE_REVIEW_MUTATION } from '../../graphQL/queries';
import { Header } from '../booking-modal-styles';
import { AddImageText, Error, SubmitRatingButton } from '../RestaurantDetails/review-modal.styles';
import { RemovableImage } from '../RestaurantDetails/ReviewModal';

const DivInput = dynamic(() => import('./DivInput'), { ssr: false });

const reviewSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  additionalDetails: Yup.string()
    .max(100, 'There has to be at most 5 characters ')
    .required('Additional Info Is Required'),
});

const initialValues = {
  review: '',
  image: [],
  rating: 0,
};

interface ReviewFormValues {
  review: string;
  image: string[];
  rating: number;
}

const MobileReviewModal = ({ isOpen, onClose }) => {
  const fileRef = useRef<HTMLInputElement>();
  const [files, setFiles] = useState([]);
  const [mentions, setMentions] = useState([]);
  const [rating, setRating] = useState(5);
  const [uploadImages, { loading: uploadImagesLoading }] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {},
    onError: () => {},
  });

  const [createReview, { loading: createReviewLoading }] = useMutation(CREATE_REVIEW_MUTATION, {
    variables: {
      body: ' ',
      rating: null,
      businessId: '',
      businessType: 'restaurant',
      images: files,
    },
    onCompleted: () => {},
  });

  const handleSubmit = (values: ReviewFormValues & { mentions: string[] }) => {
    // createReview({
    //   variables: value,
    // });
    if (mentions.length <= 0) return;
    mentions.map((mention) => {
      switch (mention?.type) {
        case 'restaurant':
          createReview({
            variables: {
              body: values.review,
              businessId: mention?.id,
              businessType: 'restaurant',
              images: files,
              rating,
            },
          });
      }
    });
    setFiles([]);
    setRating(5);
  };

  const handleFileChange = async (e) => {
    const uris = await uploadImages({
      variables: { files: e.target.files, name: e.target.files[0].name, location: e.target.files[0].type },
    });
    if (uris?.data?.uploadImages?.urls?.length > 0) {
      setFiles((files) => {
        return [...files, ...uris?.data?.uploadImages?.urls];
      });
    }
  };

  const deleteImage = (idx: number) => {
    const filesC = [...files];
    filesC.splice(idx, 1);
    setFiles(filesC);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Header>Please select an emoji that matches your rating</Header>
          <Flex justifyContent={{ base: 'space-between', md: 'center' }} width={'100%'} gap={{ md: 30 }} mt={4}>
            <Image
              cursor={'pointer'}
              onClick={() => setRating(1)}
              opacity={rating == 1 ? 1 : 0.5}
              width={63}
              height={63}
              src={'/images/verySad.png'}
              alt={'Very Sad'}
            />
            <Image
              cursor={'pointer'}
              onClick={() => setRating(2)}
              opacity={rating == 2 ? 1 : 0.5}
              width={63}
              height={63}
              src={'/images/sad.png'}
              alt={'Sad'}
            />
            <Image
              cursor={'pointer'}
              onClick={() => setRating(3)}
              opacity={rating == 3 ? 1 : 0.5}
              width={63}
              height={63}
              src={'/images/noExpr.png'}
              alt={'Meh'}
            />
            <Image
              cursor={'pointer'}
              onClick={() => setRating(4)}
              opacity={rating == 4 ? 1 : 0.5}
              width={63}
              height={63}
              src={'/images/joyed.png'}
              alt={'Happy'}
            />
            <Image
              cursor={'pointer'}
              onClick={() => setRating(5)}
              opacity={rating == 5 ? 1 : 0.5}
              width={63}
              height={63}
              src={'/images/superjoyed.png'}
              alt={'Very Happy'}
            />
          </Flex>
          <Formik initialValues={initialValues} validationSchema={reviewSchema} onSubmit={() => {}}>
            {(props) => (
              <>
                <Form>
                  <DivInput
                    mentions={mentions}
                    setMentions={setMentions}
                    submitted={createReviewLoading}
                    setSubmitted={() => {}}
                    setReviewText={(val: string) => {
                      props.setFieldValue('review', val);
                    }}
                  />
                  {props.errors.review && <Error>{props.errors.review}</Error>}
                  <Spacer height={5} />

                  <Flex h={'max-content'} gap={4} flexWrap={'wrap'}>
                    {files.map((img: string, i: number) => (
                      <RemovableImage onDelete={() => deleteImage(i)} key={i} src={img} />
                    ))}
                    <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileChange} />
                    <Flex
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      h={'100px'}
                      width={'150px'}
                      flexDir={'column'}
                      boxShadow={'0px 9px 24px rgba(78, 51, 0, 0.37)'}
                      borderRadius={'10px'}
                      cursor={'pointer'}
                      onClick={() => fileRef?.current?.click()}
                    >
                      <BiImage />
                      <AddImageText>{!uploadImagesLoading ? 'Add Image' : 'Loading'}</AddImageText>
                    </Flex>
                  </Flex>
                  <Spacer height={5} />

                  <Spacer height={5} />
                  <Flex w={'100%'} justifyContent={'center'}>
                    <SubmitRatingButton
                      type="submit"
                      disabled={createReviewLoading}
                      onClick={() => {
                        handleSubmit({ ...props.values, mentions, rating });
                        onClose();
                      }}
                    >
                      {createReviewLoading ? 'Loading' : 'Submit Rating'}
                    </SubmitRatingButton>
                  </Flex>
                </Form>
              </>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MobileReviewModal;
