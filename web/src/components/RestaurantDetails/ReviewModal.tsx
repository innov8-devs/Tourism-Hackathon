import { useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Box,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form, FormikHelpers } from 'formik';
import { BiImage } from 'react-icons/bi';
import * as Yup from 'yup';

import { CREATE_REVIEW_MUTATION, REVIEWS_QUERY, UPLOAD_MULTIPLE_IMAGES } from '../../graphQL/queries';
import { Header } from '../booking-modal-styles';

import { AddImageText, Error, SubmitRatingButton } from './review-modal.styles';

const reviewSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  additionalDetails: Yup.string()
    .max(100, 'There has to be at most 5 characters ')
    .required('Additional Info Is Required'),
});

const initialValues = {
  title: '',
  additionalDetails: '',
  image: [],
  item: '',
  rating: 0,
};

interface ReviewFormValues {
  title: string;
  additionalDetails: string;
  image: string[];
  item: string;
  rating: number;
}

const ReviewModal = ({ isOpen, onClose, item, restaurantId }) => {
  const toast = useToast();
  const fileRef = useRef<HTMLInputElement>();
  const [files, setFiles] = useState([]);
  const [rating, setRating] = useState(5);
  const [uploadImages, { loading: uploadImagesLoading }] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {
      toast({ status: 'success', title: 'Images uploaded successfully' });
    },
    onError: () => {
      toast({ status: 'error', title: 'Error uploading images' });
    },
  });

  const [createReview, { loading: createReviewLoading }] = useMutation(CREATE_REVIEW_MUTATION, {
    variables: {
      body: ' ',
      rating: null,
      businessId: restaurantId,
      businessType: 'restaurant',
      images: files,
      reviewType: 'menu',
      menuId: item?._id,
    },
    refetchQueries: [{ query: REVIEWS_QUERY, variables: { restaurantId: restaurantId } }],
    onCompleted: () => {
      toast({ status: 'success', title: 'Review submitted successfully' });
    },
  });

  const handleFileChange = async (e) => {
    const uris = await uploadImages({
      variables: { files: e.target.files, name: e.target.files[0].name, location: e.target.files[0].type },
    });
    setFiles((files) => {
      return [...files, ...uris?.data?.uploadImages?.urls];
    });
  };

  const handleSubmit = async (value: ReviewFormValues) => {
    value = { ...value, image: files, item, rating };
    const data = await createReview({
      variables: {
        body: value.additionalDetails,
        rating: value.rating,
        businessId: restaurantId,
        businessType: 'restaurant',
        images: value.image,
        reviewType: 'menu',
        menuId: value.item,
      },
    });
    onClose();
    return data?.data;
  };

  const deleteImage = (idx: number) => {
    const filesC = [...files];
    filesC.splice(idx, 1);
    setFiles(filesC);
  };

  return (
    <Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={{ base: '10px', md: '30px 75px', lg: '70px 156px' }} marginTop={'15vh'}>
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
          <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={(value, formikHelpers: FormikHelpers<ReviewFormValues>) => {
              handleSubmit(value);
              formikHelpers.resetForm();
              setFiles([]);
            }}
          >
            {(props) => (
              <>
                <Form>
                  <Input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.title}
                    placeholder={'Review Title'}
                    name="title"
                    mt={5}
                  />
                  {props.errors.title && <Error>{props.errors.title}</Error>}
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

                  <Textarea
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.additionalDetails}
                    placeholder={'Additional Information'}
                    name="additionalDetails"
                  />
                  {props.errors.additionalDetails && <Error>{props.errors.additionalDetails}</Error>}
                  <Spacer height={5} />
                  <Flex w={'100%'} justifyContent={'center'}>
                    <SubmitRatingButton type="submit" disabled={createReviewLoading}>
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

export const RemovableImage = ({ src, onDelete }) => {
  return (
    <Box pos={'relative'}>
      <Image src={src} alt={'Image'} height={'100px'} width={'150px'} />
      <Text
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'50%'}
        padding={1}
        width={6}
        height={6}
        bg={'white'}
        color={'red'}
        pos={'absolute'}
        top={1}
        right={1}
        onClick={onDelete}
        cursor={'pointer'}
      >
        X
      </Text>
    </Box>
  );
};

export default ReviewModal;
