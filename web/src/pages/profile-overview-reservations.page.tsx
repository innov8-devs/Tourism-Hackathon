import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import { GiHamburgerMenu } from 'react-icons/gi';

import Header from '../components/Global/Header';
import None from '../components/Global/None';
import MobileNavbar from '../components/ProfileOverviewComponents/mobileLeftNavbar';
import ReservationDetailsModal, { IReservation } from '../components/ProfileOverviewComponents/ReservationDetailsModal';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import { FIND_ALL_RESERVATION } from '../graphQL/queries';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/signup.module.css';

import {
  GridItem,
  GridTitle,
  GridTitleItem,
  MainContainer,
  RightContent,
  RightContentTitle,
} from './profile-overview-reservations.styles';

const ProfileOverviewReviews = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data: reservations } = useQuery(FIND_ALL_RESERVATION);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [activeReservation, setActiveReservation] = useState<IReservation>({});

  const [allReservations, setAllReservations] = useState({});

  useEffect(() => {
    const res = reservations?.getAllReservations;
    const groupedRes = {};
    res
      ?.filter((el) => new Date(el.datetime) > new Date())
      ?.map((el) => {
        if (!Object.keys(groupedRes).includes(new Date(el.datetime).toDateString())) {
          groupedRes[new Date(el.datetime).toDateString()] = [el];
        } else {
          groupedRes[new Date(el.datetime).toDateString()].push(el);
        }
      });
    setAllReservations(groupedRes);
    setActiveReservation(
      groupedRes[
        Object.keys(groupedRes)?.sort((a, b) => {
          return (
            moment(new Date(groupedRes[a][0].datetime)).date() - moment(new Date(groupedRes[b][0].datetime)).date()
          );
        })[0]
      ],
    );
  }, [reservations]);

  const { width } = useWindowDimensions();

  const showSidebar = () => {
    setSidebar(!sidebar);
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <SideMenu />

        <RightContent>
          <MobileNavbar showSidebar={showSidebar} sidebar={sidebar} />
          <GiHamburgerMenu className={styles.sideBarOpen} onClick={showSidebar} />
          <RightContentTitle>My Reservations</RightContentTitle>
          {/* {reviews ? api.map((...reviewProps) => {return(<Reviews />)}) : <NoReviews />} */}
          <Flex gap={5}>
            <Box>
              <GridTitle>
                <GridTitleItem idx={1} style={{ width: 170 }}>
                  Restaurant Name
                </GridTitleItem>
                {width >= 590 && <GridTitleItem idx={2}>Table Description</GridTitleItem>}
                <GridTitleItem idx={3}>Reserved Date</GridTitleItem>
                {width >= 700 && <GridTitleItem idx={4}>HTR Code</GridTitleItem>}
                {width >= 490 && <GridTitleItem idx={5}>Type</GridTitleItem>}
                <GridTitleItem idx={6}>Status</GridTitleItem>
              </GridTitle>
              {Object.keys(allReservations)
                ?.sort((a, b) => {
                  return (
                    moment(new Date(allReservations[a][0].datetime)).date() -
                    moment(new Date(allReservations[b][0].datetime)).date()
                  );
                })
                ?.map((datetime) => {
                  return (
                    <>
                      <Text mb={2} fontSize={14} color={'#402B2B'}>
                        {moment(datetime).format('Do MMM, YYYY')}
                      </Text>
                      {allReservations[datetime]?.map((reservation, i) => (
                        <GridItem
                          onClick={() => {
                            setActiveReservation(reservation);
                            onToggle();
                          }}
                          key={i}
                        >
                          <GridTitleItem idx={1} style={{ width: 170 }}>
                            {width >= 590 ? (
                              <Flex>
                                <Image width={7} height={7} src={reservation?.restaurant?.logo} alt={'img'} />
                                <Box>
                                  <Text color={'#0F264C'} fontSize={15}>
                                    {reservation?.restaurant?.name.split(' ').slice(0, 2).join(' ')}
                                  </Text>
                                  <Text
                                    noOfLines={2}
                                    textOverflow={'ellipsis'}
                                    overflow={'hidden'}
                                    display={'-webkit-box'}
                                    color={'#AD6600'}
                                    style={{
                                      WebkitLineClamp: 1,
                                      WebkitBoxOrient: 'vertical',
                                    }}
                                    fontSize={10}
                                  >
                                    {reservation?.restaurant?.address}
                                  </Text>
                                </Box>
                              </Flex>
                            ) : (
                              <Text color={'#0F264C'} fontSize={14}>
                                {reservation?.restaurant?.name.split(' ').slice(0, 2).join(' ')}
                              </Text>
                            )}
                          </GridTitleItem>
                          {width >= 590 && <GridTitleItem idx={2}>{reservation?.title}</GridTitleItem>}
                          <GridTitleItem idx={3}>{moment(reservation?.datetime).format('Do MMM, YYYY')}</GridTitleItem>
                          {width >= 700 && <GridTitleItem idx={4}>{reservation?._id.slice(20)}</GridTitleItem>}
                          {width >= 490 && <GridTitleItem idx={5}>{reservation?.type}</GridTitleItem>}
                          <GridTitleItem
                            idx={6}
                            style={{
                              color:
                                reservation?.status.toLowerCase() == 'confirmed'
                                  ? '#0055FF'
                                  : reservation?.status.toLowerCase() == 'rejected'
                                  ? '#FF000A'
                                  : 'rgba(40, 40, 40, 0.63)',
                              fontSize: 10,
                            }}
                          >
                            {reservation?.status}
                          </GridTitleItem>
                        </GridItem>
                      ))}
                    </>
                  );
                })}
              {Object.keys(allReservations)?.length == 0 && (
                <None name="You don't have any upcoming reservation." noTop />
              )}
            </Box>
          </Flex>
        </RightContent>
        <ReservationDetailsModal reservation={activeReservation} isOpen={isOpen} onClose={onClose} />
      </MainContainer>
    </>
  );
};

export default ProfileOverviewReviews;
