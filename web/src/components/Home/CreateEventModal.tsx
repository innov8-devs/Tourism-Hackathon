import { ChangeEventHandler, useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { BiImage } from 'react-icons/bi';
import { BsXCircleFill } from 'react-icons/bs';
import * as Yup from 'yup';

import { CREATE_EVENT, UPLOAD_MULTIPLE_IMAGES } from '../../graphQL/queries';
import { Header } from '../booking-modal-styles';
import { AddImageText } from '../RestaurantDetails/review-modal.styles';
import Spinner from '../Spinner';

import PhotoEditorModal from './PhotoEditorModal';
import PostSuccessful from './PostSuccessful';

interface EventsData {
  title: string;
  description: string;
  address: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  category: string;
  mode: string;
  uri: string;
  frequency: number;
  price: number;
  tickets: number;
  eventType: string;
}

const initialValues: EventsData = {
  title: '',
  description: '',
  address: '',
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  category: 'concerts',
  mode: 'virtual',
  uri: '',
  frequency: 0,
  tickets: 0,
  price: 0,
  eventType: 'free',
};

const categories = [
  'concerts',
  'sports',
  'cinema',
  'lifestyle',
  'education',
  'career',
  'religious',
  'house party',
  'virtual',
  'networking',
  'festivals',
  'premiere',
];

const modes = ['virtual', 'physical'];

const schema = Yup.object<EventsData>({
  title: Yup.string().required('Event Title is required').min(3, 'Event Title must be at least 3 characters'),
  description: Yup.string().min(10, 'Description must be at least 10 characters'),
  address: Yup.string().required('Address is required'),
  startDate: Yup.string().required('Start Date is required'),
  startTime: Yup.string().required('Start Time is required'),
  endDate: Yup.string().required('End Date is required'),
  endTime: Yup.string().required('End Time is required'),
  category: Yup.string().required('Category is required'),
  mode: Yup.string(),
  uri: Yup.string().url(),
  frequency: Yup.number(),
  tickets: Yup.number(),
  price: Yup.number(),
  eventType: Yup.string(),
});

const CreateEventModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState('');
  const fileRef = useRef<HTMLInputElement>();
  const toast = useToast();
  const { isOpen: isOpenPhoto, onClose: onClosePhoto, onToggle: onTogglePhoto } = useDisclosure();
  const { isOpen: isOpenSuccessful, onClose: onCloseSuccessful, onToggle: onToggleSuccessful } = useDisclosure();
  const [createEvent, { loading, data: event }] = useMutation(CREATE_EVENT, {
    onCompleted: () => {
      toast({ title: 'Successfully created event', duration: 3000, status: 'success' });
      onToggleSuccessful();
      onClose();
    },
    onError: (error) => {
      toast({ title: 'Error occured', description: error.message, duration: 3000, status: 'error' });
    },
  });

  const [uploadImages, { loading: uploadImagesLoading }] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {},
    onError: () => {},
  });

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const uris = await uploadImages({
      variables: {
        files: e.target.files as any,
        name: e.target.files[0].name,
        location: e.target.files[0].type,
      },
    });

    if (uris?.data) setImage(uris?.data?.uploadImages?.urls[0]);
    onTogglePhoto();
  };

  const handleSubmit = async (val: EventsData) => {
    const start = new Date(val.startDate);
    start.setHours(+val.startTime.split(':')[0], +val.startTime.split(':')[1]);

    const end = new Date(val.endDate);
    end.setHours(+val.endTime.split(':')[0], +val.endTime.split(':')[1]);

    const user = JSON.parse(localStorage.getItem('user'));
    let locationDetails = {};
    if (val.mode == 'physical') {
      locationDetails = {
        address: { street: val.address },
      };
    } else {
      locationDetails = { eventUrl: val.uri };
    }
    if (+val.frequency) {
      locationDetails = { ...locationDetails, repeats: +val.frequency };
    }
    const pricingDetails = val.eventType == 'paid' ? { price: val.price, ticketLimit: val.tickets } : {};
    createEvent({
      variables: {
        data: {
          title: val.title,
          description: val.description,
          host: `${user?.firstName} ${user?.lastName}`,
          start,
          end,
          images: [image],
          ownerId: user?._id,
          ownerType: 'customer',
          eventType: val.eventType,
          eventCategory: val.category || 'category',
          eventMode: val.mode,
          ...pricingDetails,
          ...locationDetails,
        },
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent height={'70vh'} overflowY={'scroll'} overflowX={'hidden'} pos={'relative'}>
        <ModalCloseButton />
        <ModalHeader>
          <Header>Event Details</Header>
        </ModalHeader>
        <ModalBody>
          <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileChange} />
          <Box
            width={'100%'}
            height={'270px'}
            bg={!image && '#f3f2ef'}
            mb={5}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDir={'column'}
            boxShadow={'0px 3px 6px rgba(78, 51, 0, 0.37)'}
            _hover={{
              boxShadow: '0px 9px 12px rgba(78, 51, 0, 0.37)',
            }}
            transition={'all 100ms ease-in'}
            borderRadius={'10px'}
            cursor={'pointer'}
            onClick={() => !image && fileRef?.current?.click()}
            bgImage={image && image}
            bgSize={'cover'}
          >
            {image ? (
              <BsXCircleFill
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: '50px',
                }}
                onClick={() => setImage('')}
              />
            ) : uploadImagesLoading ? (
              <Spinner />
            ) : (
              <>
                <BiImage />
                <AddImageText>Upload Cover Image</AddImageText>
              </>
            )}
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values, formikHelpers) => {
              handleSubmit(values);
              formikHelpers.resetForm();
              setImage('');
              onClose();
            }}
          >
            {({ errors, isSubmitting, handleSubmit: formSubmit, values, handleBlur, handleChange, resetForm }) => (
              <Form onSubmit={formSubmit}>
                <Flex flexDir={'column'} alignItems={'stretch'}>
                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Title</FormLabel>
                    <Input
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Event Name"
                    />
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Description</FormLabel>
                    <Textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      placeholder={'Description'}
                      name="description"
                    />
                    {errors.description && <FormErrorMessage>{errors.description}</FormErrorMessage>}
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Category</FormLabel>
                    <Select
                      textTransform={'capitalize'}
                      id="category"
                      className="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    >
                      {categories.map((category, i) => (
                        <option key={i} value={category} style={{ textTransform: 'capitalize' }}>
                          {category}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors.address}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Mode</FormLabel>
                    <Select
                      textTransform={'capitalize'}
                      id="mode"
                      className="mode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mode}
                    >
                      {modes.map((mode, i) => (
                        <option key={i} value={mode} style={{ textTransform: 'capitalize' }}>
                          {mode}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors.address}</FormErrorMessage>
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    {values.mode == 'virtual' ? (
                      <>
                        <FormLabel>Event URL</FormLabel>
                        <Input
                          value={values.uri}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          name="uri"
                          id="uri"
                          placeholder="Google Meet, teams, zoom etc link"
                        />
                        <FormErrorMessage>{errors.uri}</FormErrorMessage>
                      </>
                    ) : values.mode == 'physical' ? (
                      <>
                        <FormLabel>Event Address</FormLabel>
                        <Input
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Address"
                        />
                        <FormErrorMessage>{errors.address}</FormErrorMessage>
                      </>
                    ) : null}
                  </FormControl>
                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Type</FormLabel>
                    <Select
                      textTransform={'capitalize'}
                      id="eventType"
                      className="eventType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.eventType}
                    >
                      <option value="free">Free</option>
                      <option value="paid">Paid</option>
                      <option value="reservation">Reservation</option>
                    </Select>
                    <FormErrorMessage>{errors.eventType}</FormErrorMessage>
                  </FormControl>
                  {values.eventType == 'paid' && (
                    <>
                      <FormControl marginBottom={'20px'} isRequired>
                        <FormLabel>Price (₦)</FormLabel>
                        <Input
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          name="price"
                          id="price"
                          placeholder="How much does a ticket cost"
                        />
                        <FormErrorMessage>{errors.price}</FormErrorMessage>
                      </FormControl>
                      <FormControl marginBottom={'20px'} isRequired>
                        <FormLabel>Tickets</FormLabel>
                        <Input
                          value={values.tickets}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          name="tickets"
                          id="tickets"
                          placeholder="How many tickets are available"
                        />
                        <FormErrorMessage>{errors.tickets}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}

                  <FormControl marginBottom={'20px'} isRequired>
                    <FormLabel>Event Frequency</FormLabel>
                    <Select
                      textTransform={'capitalize'}
                      id="frequency"
                      className="frequency"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.frequency}
                    >
                      <option value={0}>Once</option>
                      <option value={24}>Daily</option>
                      <option value={168}>Weekly</option>
                      <option value={336}>Bi Weekly</option>
                      <option value={672}>Monthly</option>
                      <option value={8064}>Annually</option>
                    </Select>
                    <FormErrorMessage>{errors.frequency}</FormErrorMessage>
                  </FormControl>
                  <Flex gap={2} flexDir={{ base: 'column', sm: 'row' }}>
                    <FormControl marginBottom={'20px'} isRequired>
                      <FormLabel>Start Date</FormLabel>
                      <Input
                        value={values.startDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="date"
                        name="startDate"
                        id="startDate"
                        placeholder="Start Date"
                      />
                      <FormErrorMessage>{errors.startDate}</FormErrorMessage>
                    </FormControl>
                    <FormControl marginBottom={'20px'} isRequired>
                      <FormLabel>Start Time</FormLabel>
                      <Input
                        value={values.startTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="time"
                        name="startTime"
                        id="startTime"
                        placeholder="Start Time"
                      />
                      <FormErrorMessage>{errors.startTime}</FormErrorMessage>
                    </FormControl>
                  </Flex>

                  <Flex gap={2} flexDir={{ base: 'column', sm: 'row' }}>
                    <FormControl marginBottom={'20px'} isRequired>
                      <FormLabel>End Date</FormLabel>
                      <Input
                        value={values.endDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="date"
                        name="endDate"
                        id="endDate"
                        placeholder="End Date"
                      />
                      <FormErrorMessage>{errors.endDate}</FormErrorMessage>
                    </FormControl>
                    <FormControl marginBottom={'20px'} isRequired>
                      <FormLabel>End Time</FormLabel>
                      <Input
                        value={values.endTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="time"
                        name="endTime"
                        id="endTime"
                        placeholder="End Time"
                      />
                      <FormErrorMessage>{errors.endTime}</FormErrorMessage>
                    </FormControl>
                  </Flex>

                  <Flex
                    bg={'#fff'}
                    bottom={0}
                    left={0}
                    p={2}
                    borderTop={'1px solid rgba(0,0,0,.15)'}
                    pos={'sticky'}
                    alignItems={'flex-end'}
                    w={'100%'}
                  >
                    <Button
                      disabled={isSubmitting || loading}
                      onClick={() => {
                        handleSubmit(values);
                        resetForm();
                        setImage('');
                      }}
                      bg="#ff9916"
                      boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'}
                      ml={'auto'}
                      p={'10px 15px'}
                      borderRadius={'100px'}
                      type="submit"
                    >
                      Create
                    </Button>
                  </Flex>
                </Flex>
              </Form>
            )}
          </Formik>
          <PhotoEditorModal isOpen={isOpenPhoto} onClose={onClosePhoto} {...{ image, setImage }} />
          <PostSuccessful
            isOpen={isOpenSuccessful}
            onClose={onCloseSuccessful}
            id={event?.createEvent?._id}
            name={event?.createEvent?.title}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateEventModal;
