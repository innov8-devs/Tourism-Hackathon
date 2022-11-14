import { useRef } from 'react';

import { useMutation } from '@apollo/client';
import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { BiImage } from 'react-icons/bi';

import { UPLOAD_MULTIPLE_IMAGES } from '../../graphQL/queries';
import Button from '../Button';
import { AddImageText } from '../RestaurantDetails/review-modal.styles';
import { RemovableImage } from '../RestaurantDetails/ReviewModal';

const PhotosModal = ({ isOpen, onClose, setRemoteImages: setFiles, images: files }) => {
  const fileRef = useRef<HTMLInputElement>();

  const [uploadImages, { loading: uploadImagesLoading }] = useMutation(UPLOAD_MULTIPLE_IMAGES, {
    variables: {
      name: '',
      files: [],
      location: '',
    },
    onCompleted: () => {},
    onError: () => {},
  });

  const handleFileChange = async (e) => {
    const uris = await uploadImages({
      variables: { files: e.target.files, name: e.target.files[0].name, location: e.target.files[0].type },
    });

    if (uris?.data)
      setFiles((files) => {
        return [...files, ...uris?.data?.uploadImages?.urls];
      });
  };

  const deleteImage = (idx: number) => {
    const filesC = [...files];
    filesC.splice(idx, 1);
    setFiles(filesC);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading>Attach Photos</Heading>
        </ModalHeader>
        <ModalBody>
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
          <Button
            onClick={() => {
              onClose();
            }}
            disabled={files.length == 0}
            type="submit"
            small
            style={{ marginTop: 50, cursor: 'pointer', zIndex: -1 }}
          >
            Add Images
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PhotosModal;
