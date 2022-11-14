import React, { useCallback, useEffect, useState } from 'react';

import { gql, useMutation, useQuery } from '@apollo/client';
import { Flex, Grid, Image, Text, useDisclosure, useToast } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiBell, BiMessageDots } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5';
import { RWebShare } from 'react-web-share';

import Button from '../../components/Button';
import { USER_DATA } from '../../components/constants';
import EditProfileModal from '../../components/EditProfileModal';
import Modal from '../../components/Modal';
import SignOutModal from '../../components/ProfileOverviewComponents/SignOutModal';
import RequireAuthWrapper from '../../components/requireAuth/RequireAuth';
import FollowersModal from '../../components/UserProfile/FollowersModal';
import ProfileActivity from '../../components/UserProfile/ProfileActivity';
import ProfileInterests from '../../components/UserProfile/ProfileInterests';
import ProfilePhotos from '../../components/UserProfile/ProfilePhotos';
import ProfileReview from '../../components/UserProfile/ProfileReview';
import { FOLLOW_CUSTOMER_MUTATION, UNFOLLOW_CUSTOMER_MUTATION } from '../../graphQL/queries';
import styles from '../../styles/Home.module.css';

import {
  AboutSkeleton,
  Address,
  AddressPin,
  AddressSkeleton,
  AddressText,
  Back,
  BackContainer,
  BlockDropdown,
  BoxA,
  BtnContainer,
  Certificate,
  DetailsContainer,
  Divider,
  DpSkeleton,
  Followers,
  FollowersContainer,
  FollowersCount,
  FollowersSkeleton,
  FollowersText,
  Handle,
  HandleSkeleton,
  ImageContainer,
  Instagram,
  LeftBox,
  MainWrapper,
  Name,
  NameSkeleton,
  NavigationButton,
  NavigationButtonContainer,
  Portal,
  ProfileContainer,
  ReservationButton,
  RightBox,
  SetupCard,
  SetupCardDescription,
  SetUpText,
  Share,
  SignOutFooterContainer,
  SignOutMobile,
  SocialsContainer,
  SpecificInterest,
  Twitter,
} from './profiledetails-styles';

const Avatar = dynamic(() => import('../../components/profileimage/Avatar'), {
  ssr: false,
});

const FIND_CUSTOMER = gql`
  query findCustomers($username: String) {
    findCustomers(data: { username: $username }) {
      _id
      email
      username
      firstName
      username
      lastName
      username
      gender
      dob
      twitter
      instagram
      address
      about
      telephone
      verified
      profileImage
      reviewCount
      followerCount
      followingCount
      youFollow
      interests {
        _id
        name
      }
      meta {
        active
        createdAt
        activatedAt
        deactivatedAt
      }
    }
  }
`;

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const defaultId = localStorage.getItem(USER_DATA);

  const router = useRouter();
  const toast = useToast();

  function getUser() {
    if (router?.isReady) {
      const userID = router.query.profileDetails[0];
      if (userID) {
        return userID;
      }
      return null;
    }
  }

  const { loading, data, error, refetch } = useQuery(FIND_CUSTOMER, {
    variables: { username: getUser() },
    fetchPolicy: 'network-only',
  });

  const [followCustomer] = useMutation(FOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: data?.findCustomers[0]?._id,
    },
    refetchQueries: [{ query: FIND_CUSTOMER, variables: { _id: getUser() } }],
    onCompleted: () => {
      toast({ status: 'success', title: `Successfully followed ${data?.findCustomers[0]?.firstName}` });
    },
  });
  const [unFollowCustomer] = useMutation(UNFOLLOW_CUSTOMER_MUTATION, {
    variables: {
      id: data?.findCustomers[0]?._id,
    },
    refetchQueries: [{ query: FIND_CUSTOMER, variables: { _id: getUser() } }],
    onCompleted: () => {
      toast({ status: 'success', title: `Successfully unfollowed ${data?.findCustomers[0]?.firstName}` });
    },
  });

  const { isOpen, onClose, onToggle } = useDisclosure();

  const [followed, setFollowed] = useState(false);

  const handleShowModal = (value: boolean) => {
    if (value !== undefined) {
      setShowModal(value);
      return null;
    }
    setShowModal((prevState) => !prevState);
  };

  function handleFollow(type = 1) {
    if (type == 1) {
      setFollowed(true);
      followCustomer();
    } else {
      setFollowed(false);
      unFollowCustomer();
    }
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    setFollowed(data?.findCustomers[0]?.youFollow);
  }, [data]);

  const toggleDropdownListener = useCallback(() => {
    if (displayDropdown) {
      setDisplayDropdown(!displayDropdown);
    }
  }, [displayDropdown]);

  useEffect(() => {
    document.body.addEventListener('click', toggleDropdownListener);
    return () => document.body.removeEventListener('click', toggleDropdownListener);
  }, [toggleDropdownListener]);

  return (
    <RequireAuthWrapper>
      <>
        <BackContainer>
          <Back onClick={handleBack} />
        </BackContainer>
        <MainWrapper>
          <LeftBox>
            <BoxA>
              <ImageContainer>
                <ProfileContainer>
                  {loading || error ? (
                    <DpSkeleton></DpSkeleton>
                  ) : // <Image src={guy} width={120} height={120} className={styles.profileImage} alt="profile picture" />

                  data?.findCustomers[0]?._id == defaultId ? (
                    <Avatar
                      customerImage={data?.findCustomers[0]?.profileImage}
                      show={showModal}
                      setShow={handleShowModal}
                      flexDirection="column"
                    />
                  ) : data?.findCustomers[0]?.profileImage ? (
                    <Image
                      src={data?.findCustomers[0]?.profileImage}
                      marginRight={4}
                      width={10}
                      height={10}
                      alt="personImage"
                    />
                  ) : (
                    <BsPersonCircle
                      style={{
                        marginRight: 20,
                      }}
                      color="#888"
                      size={40}
                    />
                  )}
                </ProfileContainer>
                <DetailsContainer>
                  {loading || error ? (
                    <NameSkeleton>
                      <div></div>
                      <div></div>
                    </NameSkeleton>
                  ) : (
                    <Name>
                      {data &&
                        data?.findCustomers[0]?.firstName.toLowerCase() +
                          ' ' +
                          data?.findCustomers[0]?.lastName.toLowerCase()}
                    </Name>
                  )}
                  {loading || error ? (
                    <HandleSkeleton></HandleSkeleton>
                  ) : (
                    <Handle>{data?.findCustomers[0]?.username}</Handle>
                  )}

                  {loading || error ? (
                    <AddressSkeleton>
                      <AddressPin></AddressPin>
                      <AddressText></AddressText>
                    </AddressSkeleton>
                  ) : (
                    <Address>
                      <FaMapMarkerAlt style={{ marginRight: '4px' }} />
                      {data?.findCustomers[0]?.address ? data?.findCustomers[0]?.address : 'Your address'}
                    </Address>
                  )}
                  {loading || error ? (
                    <NameSkeleton>
                      <div></div>
                      <div></div>
                    </NameSkeleton>
                  ) : (
                    <SocialsContainer>
                      <Link href={data?.findCustomers[0]?.twitter ? data?.findCustomers[0]?.twitter : '#'} passHref>
                        <Twitter />
                      </Link>
                      <Link href={data?.findCustomers[0]?.instagram ? data?.findCustomers[0]?.instagram : '#'} passHref>
                        <Instagram />
                      </Link>
                    </SocialsContainer>
                  )}
                </DetailsContainer>
              </ImageContainer>
              {loading || error ? (
                <FollowersSkeleton>
                  <div></div>
                  <div></div>
                  <p></p>
                </FollowersSkeleton>
              ) : (
                <BtnContainer>
                  {data?.findCustomers[0]?._id == defaultId ? (
                    <ReservationButton
                      onClick={() => {
                        if (data?.findCustomers[0]?._id != defaultId) {
                          followed ? handleFollow(2) : handleFollow();
                        } else {
                          onToggle();
                        }
                      }}
                    >
                      {data?.findCustomers[0]?._id == defaultId ? 'Edit Profile' : followed ? 'Following' : 'Follow'}
                    </ReservationButton>
                  ) : (
                    <ReservationButton
                      onClick={() => {
                        followed ? handleFollow(2) : handleFollow();
                      }}
                    >
                      {data?.findCustomers[0]?._id == defaultId ? 'Edit Profile' : followed ? 'Following' : 'Follow'}
                    </ReservationButton>
                  )}
                  <Share onClick={() => setDisplayDropdown(!displayDropdown)} />
                  {displayDropdown && (
                    <BlockDropdown>
                      <RWebShare
                        data={{
                          text: `Checkout ${data?.findCustomers[0]?.name} on Hightable`,
                          url: `https://hightable.africa${router.asPath}`,
                          title: 'Share Restaurant',
                        }}
                        onClick={() => {
                          setDisplayDropdown(!displayDropdown);
                        }}
                      >
                        <button>Share</button>
                      </RWebShare>
                      {data?.findCustomers[0]?._id == defaultId ? (
                        <Link href="/account-settings" passHref>
                          <button>Settings</button>
                        </Link>
                      ) : (
                        <>
                          <Link href="#" passHref>
                            <button>Block {data?.findCustomers[0]?.firstName}</button>
                          </Link>
                          <Link href="#" passHref>
                            <button>Report User</button>
                          </Link>
                        </>
                      )}
                    </BlockDropdown>
                  )}
                </BtnContainer>
              )}
              {loading || error ? (
                <AboutSkeleton>
                  <div></div>
                  <div></div>
                  <div></div>
                </AboutSkeleton>
              ) : (
                <Certificate>
                  {data?.findCustomers[0]?.about
                    ? data?.findCustomers[0]?.about
                    : 'Update your profile to tell more about yourself'}
                </Certificate>
              )}
              {loading || error ? (
                <FollowersSkeleton>
                  <div></div>
                  <div></div>
                  <div></div>
                </FollowersSkeleton>
              ) : (
                <FollowersContainer>
                  <Followers>
                    <FollowersCount>{data?.findCustomers[0]?.reviewCount}</FollowersCount>
                    <FollowersText>Reviews</FollowersText>
                  </Followers>
                  <Followers>
                    <FollowersCount>{data?.findCustomers[0]?.followerCount}</FollowersCount>
                    <FollowersText
                      onClick={() => {
                        setModal(true);
                      }}
                    >
                      Followers
                    </FollowersText>
                  </Followers>
                  <Followers>
                    <FollowersCount>{data?.findCustomers[0]?.followingCount}</FollowersCount>
                    <FollowersText
                      onClick={() => {
                        setModal2(true);
                      }}
                    >
                      Following
                    </FollowersText>
                  </Followers>
                </FollowersContainer>
              )}
              {data?.findCustomers[0]?.interests.length >= 1 && (
                <>
                  <Text mb={2} mt={8}>
                    Interests
                  </Text>
                  <Flex gap={2} alignItems={'center'} flexWrap={'wrap'}>
                    {data?.findCustomers[0]?.interests?.map((interest) => (
                      <SpecificInterest key={interest._id}>{interest.name}</SpecificInterest>
                    ))}
                  </Flex>
                </>
              )}
              {data?.findCustomers[0]?._id == defaultId &&
                !(
                  data?.findCustomers[0]?.username &&
                  data?.findCustomers[0]?.about &&
                  data?.findCustomers[0]?.telephone &&
                  data?.findCustomers[0]?.interests.length >= 3 &&
                  data?.findCustomers[0]?.followingCount >= 5 &&
                  data?.findCustomers[0]?.profileImage
                ) && (
                  <>
                    <SetUpText mt={5}>Let’s get you set up</SetUpText>
                    <Grid templateColumns={'repeat(2,1fr)'} rowGap={8} columnGap={3}>
                      <Link href={'/people'}>
                        <SetupCard done={data?.findCustomers[0]?.followingCount >= 5 ? true : false}>
                          <IoPersonAddOutline size={50} />
                          <SetupCardDescription>Follow 5 accounts</SetupCardDescription>
                        </SetupCard>
                      </Link>
                      <SetupCard
                        done={
                          data?.findCustomers[0]?.username &&
                          data?.findCustomers[0]?.about &&
                          data?.findCustomers[0]?.telephone &&
                          data?.findCustomers[0]?.interests.length >= 1
                            ? true
                            : false
                        }
                      >
                        <IoPersonOutline size={50} />
                        <SetupCardDescription>Complete your profile</SetupCardDescription>
                      </SetupCard>
                      <SetupCard done={data?.findCustomers[0]?.interests.length >= 3 ? true : false} opposite>
                        <BiMessageDots size={50} />
                        <SetupCardDescription>Select at least 3 interests</SetupCardDescription>
                      </SetupCard>
                      <SetupCard done={data?.findCustomers[0]?.profileImage ? true : false} opposite>
                        <BiBell size={50} />
                        <SetupCardDescription>Upload profile picture</SetupCardDescription>
                      </SetupCard>
                    </Grid>
                  </>
                )}
              <Modal absolute={true} showModal={showModal} closeModal={handleShowModal}>
                <Portal id="createAvatarDiv" />
              </Modal>
            </BoxA>
            <SignOutFooterContainer>
              {data?.findCustomers[0]?._id == defaultId && (
                <Button small criticalAction onClick={() => setShow(true)}>
                  Sign Out
                </Button>
              )}
            </SignOutFooterContainer>
          </LeftBox>
          <RightBox>
            <NavigationButtonContainer>
              <NavigationButton active={toggleState === 1 ? true : false} onClick={() => toggleTab(1)}>
                Reviews
              </NavigationButton>
              <NavigationButton active={toggleState === 2 ? true : false} onClick={() => toggleTab(2)}>
                Photos
              </NavigationButton>
              <NavigationButton active={toggleState === 3 ? true : false} onClick={() => toggleTab(3)}>
                Interests
              </NavigationButton>
              {data?.findCustomers[0]?._id == defaultId && (
                <NavigationButton active={toggleState === 4 ? true : false} onClick={() => toggleTab(4)}>
                  Activities
                </NavigationButton>
              )}
            </NavigationButtonContainer>
            <div>
              <div className={toggleState === 1 ? styles.activeContent : styles.content}>
                <ProfileReview
                  isYou={data?.findCustomers[0]?._id == defaultId}
                  name={data?.findCustomers[0]?.firstName}
                  userId={data?.findCustomers[0]?._id}
                />
              </div>
              <div className={toggleState === 2 ? styles.activeContent : styles.content}>
                <ProfilePhotos
                  userId={data?.findCustomers[0]?._id}
                  isYou={data?.findCustomers[0]?._id == defaultId}
                  name={data?.findCustomers[0]?.firstName}
                />
              </div>
              <div className={toggleState === 3 ? styles.activeContent : styles.content}>
                <ProfileInterests
                  addOther={data?.findCustomers[0]?._id == defaultId}
                  customer={data?.findCustomers[0]}
                />
              </div>
              <div className={toggleState === 4 ? styles.activeContent : styles.content}>
                <ProfileActivity />
              </div>
            </div>
          </RightBox>
        </MainWrapper>
        <Divider />
        <SignOutMobile>
          <Button small criticalAction onClick={() => setShow(true)}>
            Sign Out
          </Button>
        </SignOutMobile>
        <FollowersModal
          id={data?.findCustomers[0]?._id}
          refetch={refetch}
          onClose={() => setModal(false)}
          modal={modal}
        />
        <FollowersModal
          id={data?.findCustomers[0]?._id}
          refetch={refetch}
          onClose={() => setModal2(false)}
          modal={modal2}
          alt
        />
        <SignOutModal onClose={() => setShow(false)} show={show} />
        <EditProfileModal isOpen={isOpen} onClose={onClose} />
      </>
    </RequireAuthWrapper>
  );
};
export default Profile;
