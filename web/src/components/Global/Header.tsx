import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
import { BiCalendarEvent, BiCart, BiHome, BiHotel, BiRestaurant, BiSearch } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FaCcDiscover } from 'react-icons/fa';
import { MdEdit, MdOutlineRateReview, MdEvent } from 'react-icons/md';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { FIND_CUSTOMER } from '../../graphQL/queries';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from '../../styles/Home.module.css';
import { AUTH_TOKEN, USER_DATA } from '../constants';
import CreateEventModal from '../Home/CreateEventModal';
import MobileReviewModal from '../Home/MobileReviewModal';
import SignOutModal from '../ProfileOverviewComponents/SignOutModal';
import LoginModal from '../RestaurantDetails/LoginModal';
import SearchBarModal from '../SearchBarModal';

import {
  BtnContainer,
  DesktopButton,
  HeaderEmailInitial,
  Logo,
  MainWrapperStyles,
  MobileButton,
  Nav,
  NavButton,
} from './header-styles';

const MainWrapper = styled.section`
  ${MainWrapperStyles}
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();
  const token = localStorage.getItem(AUTH_TOKEN);

  const { isOpen: isOpenReviewModal, onClose: onCloseReviewModal, onToggle: onToggleReviewModal } = useDisclosure();
  const { isOpen: modal, onClose: onCloseLogin, onToggle: onToggleLogin } = useDisclosure();
  const { isOpen: isOpenEvents, onClose: onCloseEvents, onToggle: onToggleEvents } = useDisclosure();

  const authToken = localStorage.getItem(AUTH_TOKEN);
  const { data } = useQuery(FIND_CUSTOMER, {
    fetchPolicy: 'network-only',
  });
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    localStorage.setItem(USER_DATA, data?.findOneCustomer?._id);
    localStorage.setItem('user', JSON.stringify(data?.findOneCustomer));
  }, [data]);

  return (
    <>
      <Head>
        {!router.pathname.startsWith('/restaurant/[_id]') && (
          <>
            <meta property="og:title" content="HighTable" />
            <meta property="og:image" content="https://i.postimg.cc/7Ykc44Xx/Black-Hightable-with-tagline-1.png" />
            <meta
              property="og:description"
              content="HighTable Africa - Experience Africa like never before! Discover restaurants, nightlife, hotels, attractions, and activities across Africa.  With HighTable, you can plan your next trip, read honest and reliable peer reviews, make reservations, connect with communities, and more. "
            />
            <meta property="title" content="HighTable" />
            <meta property="image" content="https://i.postimg.cc/7Ykc44Xx/Black-Hightable-with-tagline-1.png" />
            <meta
              property="description"
              content="HighTable Africa - Experience Africa like never before! Discover restaurants, nightlife, hotels, attractions, and activities across Africa.  With HighTable, you can plan your next trip, read honest and reliable peer reviews, make reservations, connect with communities, and more. "
            />
          </>
        )}
      </Head>
      <Nav scroll={false}>
        <SignOutModal onClose={() => setShow(false)} show={show} />
        <MainWrapper scroll={false}>
          <div className={styles.navContainer}>
            <div className={styles.headerLogo}>
              <Link href="/" passHref>
                <Logo src="/images/logo.png" alt="logo" className={styles.logo} />
              </Link>
            </div>

            <div className={styles.navRightContainer}>
              {width >= 600 && (
                <div className={styles.navButtonsContainer}>
                  <Link href="/" passHref>
                    <NavButton className={styles.navButton}>{width >= 810 ? 'Home' : <BiHome size={24} />}</NavButton>
                  </Link>
                  <Link href="/discover" passHref>
                    <NavButton id="discover" className={styles.navButton}>
                      {width >= 810 ? 'Discover' : <FaCcDiscover size={24} />}
                    </NavButton>
                  </Link>
                  <Link href="/restaurants" passHref>
                    <NavButton id="restaurantsHeader" className={styles.navButton}>
                      {width >= 810 ? 'Restaurants' : <BiRestaurant size={24} />}
                    </NavButton>
                  </Link>
                  <Link href="/events" passHref>
                    <NavButton id="eventsHeader" className={styles.navButton}>
                      {width >= 810 ? 'Events' : <BiCalendarEvent size={24} />}
                    </NavButton>
                  </Link>
                  <Link href="/hotels" passHref>
                    <NavButton id="hotelsHeader" className={styles.navButton}>
                      {width >= 810 ? 'Hotels' : <BiHotel size={24} />}
                    </NavButton>
                  </Link>
                  <Link href="/people" passHref>
                    <NavButton id="peoplesHeader" className={styles.navButton}>
                      {width >= 810 ? 'People' : <BsPeople size={24} />}
                    </NavButton>
                  </Link>

                  {authToken ? null : (
                    <Link href="/login" passHref>
                      <NavButton className={styles.navButtonSignup}>Log in</NavButton>
                    </Link>
                  )}
                </div>
              )}
              {authToken ? null : (
                <Link href="/signup" passHref>
                  <BtnContainer>
                    <DesktopButton join>Sign Up</DesktopButton>
                    <MobileButton join>Sign Up</MobileButton>
                  </BtnContainer>
                </Link>
              )}

              {authToken ? (
                <>
                  <Spacer width={'75px'} />
                  <Box
                    onClick={() => {
                      router.push('/cart');
                    }}
                    pos={'relative'}
                    mr={3}
                  >
                    <BiCart cursor={'pointer'} size={25} color={'rgba(40, 40, 40, 0.63)'} />
                    <Box
                      pos={'absolute'}
                      top={-1}
                      right={-1}
                      w={3.5}
                      h={3.5}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      bg={'red'}
                      borderRadius={'50%'}
                    >
                      <Text fontSize={12} fontWeight={'bold'} color={'white'}>
                        {cart.length >= 10 ? '9+' : cart.length}
                      </Text>
                    </Box>
                  </Box>
                  <BiSearch onClick={onToggle} size={25} style={{ marginRight: 10 }} color={'rgba(40, 40, 40, 0.63)'} />
                  <Link href={`/profile/${data?.findOneCustomer.username}`} passHref>
                    {
                      <HeaderEmailInitial>
                        {data?.findOneCustomer?.profileImage ? (
                          <Image
                            src={data?.findOneCustomer?.profileImage}
                            alt="profile"
                            className={styles.avatar}
                            objectFit="cover"
                            quality={30}
                            layout="fill"
                          />
                        ) : (
                          data?.findOneCustomer?.email[0]
                        )}
                      </HeaderEmailInitial>
                    }
                  </Link>
                </>
              ) : null}
            </div>
          </div>
          {width <= 600 && (
            <div className={styles.navButtonsContainer} style={{ transform: 'translateY(-5px)' }}>
              <Link href="/" passHref>
                <NavButton selected={router?.pathname == '/'} className={styles.navButton}>
                  <BiHome size={24} />
                </NavButton>
              </Link>
              <Link href="/restaurants" passHref>
                <NavButton
                  id="restaurantsHeader"
                  selected={router?.pathname?.startsWith('/restaurant')}
                  className={styles.navButton}
                >
                  <BiRestaurant size={24} />
                </NavButton>
              </Link>
              <Link href="/events" passHref>
                <NavButton
                  id="eventsHeader"
                  selected={router?.pathname?.startsWith('/event')}
                  className={styles.navButton}
                >
                  <BiCalendarEvent size={24} />
                </NavButton>
              </Link>
              <Link href="/hotels" passHref>
                <NavButton
                  id="hotelsHeader"
                  selected={router?.pathname?.startsWith('/hotel')}
                  className={styles.navButton}
                >
                  <BiHotel size={24} />
                </NavButton>
              </Link>
              <Link href="/people" passHref>
                <NavButton
                  id="peoplesHeader"
                  selected={router?.pathname?.startsWith('/people')}
                  className={styles.navButtonSignup}
                >
                  <BsPeople size={24} />
                </NavButton>
              </Link>

              {authToken ? null : (
                <Link href="/login" passHref>
                  <MobileButton join style={{ backgroundColor: '#0F264C', color: '#fff', width: 50 }}>
                    Log in
                  </MobileButton>
                </Link>
              )}
            </div>
          )}
        </MainWrapper>
        {width <= 600 ? (
          <Menu>
            <MenuButton
              as={Button}
              borderRadius={'50%'}
              bg={'#FF9916'}
              w={'50px'}
              h={'50px'}
              color={'#fff'}
              pos={'fixed'}
              bottom={'30px'}
              right={'30px'}
              zIndex={10000000000}
              disabled={isOpenReviewModal || isOpen || isOpenEvents}
            >
              <MdEdit />
            </MenuButton>
            <MenuList minWidth={'130px'}>
              <MenuItem
                icon={<MdOutlineRateReview />}
                onClick={() => {
                  if (!token) {
                    onToggleLogin();
                    return;
                  }
                  onToggleReviewModal();
                  onToggleEvents;
                }}
                width={'130px'}
              >
                <Text>Review</Text>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  if (!token) {
                    onToggleLogin();
                    return;
                  }
                  onToggleEvents();
                }}
                icon={<MdEvent />}
                width={'130px'}
              >
                <Text>Event</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}
        <MobileReviewModal isOpen={isOpenReviewModal} onClose={onCloseReviewModal} />
        <LoginModal modal={modal} onClose={onCloseLogin} />
        <CreateEventModal isOpen={isOpenEvents} onClose={onCloseEvents} />
        <SearchBarModal isOpen={isOpen} onClose={onClose} />
      </Nav>
    </>
  );
};

export default Header;
