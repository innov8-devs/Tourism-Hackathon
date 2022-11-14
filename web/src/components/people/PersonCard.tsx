import { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { useBoolean, useToast } from '@chakra-ui/react';

import { FOLLOW_CUSTOMER_MUTATION, PEOPLE_LIST_QUERY, UNFOLLOW_CUSTOMER_MUTATION } from '../../graphQL/queries';
import { AUTH_TOKEN } from '../constants';
import { RequireAuthFunction } from '../requireAuth/RequireAuth';
import LoginModal from '../RestaurantDetails/LoginModal';
import SkeletonCard from '../Skeleton/Skeleton';

import { RecColumnCon } from './personCard-styles';
import SinglePerson from './SinglePerson';

const PersonCard = ({
  visible,
  data,
  loading,
  error,
}: {
  visible: number;
  data: any[];
  loading: boolean;
  error: any;
}) => {
  const toast = useToast();
  const [modal, setModal] = useState(false);
  const [followId, setFollowId] = useState('');
  const [followName, setFollowName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [loadLogin, setLoad] = useBoolean(false);
  const [followCustomer] = useMutation(FOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: PEOPLE_LIST_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ status: 'success', title: `Successfully followed ${followName}` });
    },
  });
  const [unFollowCustomer] = useMutation(UNFOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: followId,
    },
    refetchQueries: [{ query: PEOPLE_LIST_QUERY }],
    onCompleted: () => {
      setFollowId('');
      toast({ status: 'success', title: `Successfully unfollowed ${followName}` });
    },
  });

  const token = localStorage.getItem(AUTH_TOKEN);

  const handleFollow = async (id: string, name: string, mode = 1) => {
    if (!token) {
      setModal(true);
      return null;
    } else {
      setFollowId(id);
      setFollowName(name);
      if (mode == 1) {
        await followCustomer({
          variables: {
            id,
          },
        });
      } else {
        await unFollowCustomer({
          variables: {
            id,
          },
        });
      }
    }
  };

  useEffect(() => {
    if (loadLogin) {
      RequireAuthFunction();
    }
  }, [loadLogin]);

  if (loading) return <SkeletonCard />;
  if (error) return <SkeletonCard />;

  return (
    <>
      <RecColumnCon>
        {data?.slice(0, visible).map((person) => (
          <SinglePerson key={person?._id} person={person} handleFollow={handleFollow} />
        ))}
      </RecColumnCon>
      <LoginModal onClose={() => setModal(false)} modal={modal} />
    </>
  );
};

export default PersonCard;
