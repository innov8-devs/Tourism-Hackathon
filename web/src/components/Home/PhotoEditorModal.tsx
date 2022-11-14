import React, { ChangeEventHandler, useCallback, useRef, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Box,
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Flex,
  Button,
} from '@chakra-ui/react';
import Cropper from 'react-easy-crop';
import { BiRotateLeft, BiRotateRight } from 'react-icons/bi';
import { CgEditFlipH, CgEditFlipV } from 'react-icons/cg';
import 'cropperjs/dist/cropper.css';

import 'react-image-crop/dist/ReactCrop.css';
import { UPLOAD_MULTIPLE_IMAGES } from '../../graphQL/queries';
import { Header } from '../booking-modal-styles';

import getCroppedImg from './photo-editor-utils';

export default function PhotoEditorModal({ isOpen, onClose, image, setImage }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [uploadImages] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {},
    onError: () => {},
  });
  const fileRef = useRef<HTMLInputElement>();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const uris = await uploadImages({
      variables: {
        files: e.target.files as any,
        name: e.target.files[0].name,
        location: e.target.files[0].type,
      },
    });

    if (uris?.data) setImage(uris?.data?.uploadImages?.urls[0]);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
  };

  const handleSubmit = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels, rotation);

      const uris = await uploadImages({
        variables: {
          files: [croppedImage],
          name: 'Cropped image',
          location: 'Nigeria',
        },
      });

      if (uris?.data) setImage(uris?.data?.uploadImages?.urls[0]);
      onClose();
    } catch (e) {
      return;
    }
  }, [croppedAreaPixels, image, onClose, rotation, setImage, uploadImages]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent height={'70vh'} pos={'relative'}>
        <ModalCloseButton />
        <ModalHeader>
          <Header>Edit Cover Photo</Header>
        </ModalHeader>
        <ModalBody>
          <div className="crop-container" style={{ height: 280, width: '100%', position: 'relative' }}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              rotation={rotation}
              onCropComplete={onCropComplete}
            />
          </div>
          <Flex gap={2} justifyContent={'right'} mb={4} mt={8}>
            <Box
              p={2}
              border={'1px solid black'}
              borderRadius={'50%'}
              _hover={{ bgColor: '#f0f0f0' }}
              _active={{ bgColor: '#e0e0e0' }}
              onClick={() => setRotation(rotation + 90)}
            >
              <BiRotateRight size={24} />
            </Box>
            <Box
              p={2}
              border={'1px solid black'}
              borderRadius={'50%'}
              _hover={{ bgColor: '#f0f0f0' }}
              _active={{ bgColor: '#e0e0e0' }}
              onClick={() => setRotation(rotation - 90)}
            >
              <BiRotateLeft size={24} />
            </Box>
            <Box
              p={2}
              border={'1px solid black'}
              borderRadius={'50%'}
              _hover={{ bgColor: '#f0f0f0' }}
              _active={{ bgColor: '#e0e0e0' }}
            >
              <CgEditFlipV size={24} />
            </Box>
            <Box
              p={2}
              border={'1px solid black'}
              borderRadius={'50%'}
              _hover={{ bgColor: '#f0f0f0' }}
              _active={{ bgColor: '#e0e0e0' }}
            >
              <CgEditFlipH size={24} />
            </Box>
          </Flex>
          <Flex gap={4}>
            <FormControl>
              <FormLabel>Zoom</FormLabel>
              <Slider
                onChange={(val) => {
                  setZoom(1 + val / 50);
                }}
                aria-label="slider-ex-1"
                defaultValue={0}
                max={100}
                min={0}
              >
                <SliderTrack bg="#8c8c8c">
                  <SliderFilledTrack bg="#0F264C" />
                </SliderTrack>
                <SliderThumb bg="#0F264C" />
              </Slider>
            </FormControl>
            <FormControl>
              <FormLabel>Straighten</FormLabel>
              <Slider
                onChange={(val) => {
                  setRotation(val * 0.9);
                }}
                aria-label="slider-ex-1"
                defaultValue={30}
                size={'lg'}
              >
                <SliderTrack bg="#8c8c8c">
                  <SliderFilledTrack bg="#0F264C" />
                </SliderTrack>
                <SliderThumb bg="#0F264C" />
              </Slider>
            </FormControl>
          </Flex>
          <Flex
            bg={'#fff'}
            p={2}
            borderTop={'1px solid rgba(0,0,0,.15)'}
            alignItems={'flex-end'}
            w={'100%'}
            mt={'auto'}
          >
            <Button
              border="1px solid #ff9916"
              bg={'#ffffff'}
              boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'}
              ml={'auto'}
              p={'10px 15px'}
              borderRadius={'100px'}
              type="submit"
            >
              Change Photo
            </Button>
            <Button
              bg="#ff9916"
              boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'}
              ml={4}
              p={'10px 15px'}
              borderRadius={'100px'}
              type="submit"
              onClick={handleSubmit}
            >
              Apply
            </Button>
            <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileChange} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
