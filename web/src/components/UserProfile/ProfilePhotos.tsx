import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '@chakra-ui/react';

import { FIND_REVIEWS_QUERY } from '../../graphQL/queries';
import None from '../Global/None';
import SkeletonCard from '../Skeleton/Skeleton';

import { PhotoContainer } from './profileinterest-styles';
import { ButtonTryAgain, ErrorBox, ErrorContainer } from './profilephotos-styles';
import ProfilePhotosCard from './ProfilePhotosCard';

const ProfilePhotos = ({ userId, isYou, name }) => {
  const toast = useToast();
  const { data, loading, error } = useQuery(FIND_REVIEWS_QUERY, {
    variables: { userId },
  });

  useEffect(() => {
    if (data?.findReviewsByUserId.length === 0) {
      toast({
        title: `${isYou ? 'You' : name} ${isYou ? "haven't" : "hasn't"} posted any review photos yet!`,
        status: 'error',
        duration: 3000,
      });
    }
  }, [data, name, isYou, toast]);

  const filteredPhotos = data?.findReviewsByUserId.filter((item) => item.images?.length > 0);

  return (
    <div>
      <PhotoContainer>
        {filteredPhotos && filteredPhotos.map((item, index) => <ProfilePhotosCard key={index} item={item} />)}
        {loading && <SkeletonCard />}
        {error && (
          <ErrorContainer>
            <ErrorBox type="error">
              <h1>Oops!</h1>
              <h2>Something went wrong</h2>
              <ButtonTryAgain>Try again</ButtonTryAgain>
            </ErrorBox>
          </ErrorContainer>
        )}
        {!loading && !error && filteredPhotos.length <= 0 && (
          <None name={`${!isYou ? `${name} hasn't` : "You  haven't"} posted any review photos`} noTop></None>
        )}
      </PhotoContainer>
    </div>
  );
};

export default ProfilePhotos;
