import React from 'react';

import { Grid, Text } from '@chakra-ui/react';
// import { Marker } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { BiDrink, BiGlobe, BiPhone, BiShare, BiWifi } from 'react-icons/bi';
import { FaCar, FaUtensils, FaWeight } from 'react-icons/fa';
import { GiBeachBall, GiCigarette, GiTennisCourt } from 'react-icons/gi';
import { GrNext } from 'react-icons/gr';
import { MdAir, MdBreakfastDining, MdMeetingRoom, MdSkateboarding } from 'react-icons/md';

import styles from '../../../styles/Home.module.css';
// import GoogleMapcomponent from '../../map/GoogleMapcomponent';
import GoogleMapcomponent from '../../map/GoogleMapcomponent';
import {
  AboutContainer,
  BoxC,
  BoxD,
  BoxDMapContainer,
  InnerBox,
  OpenDays,
  Row,
  TextDetails,
} from '../../RestaurantDetails/restaurantabout-styles';

export default function HotelAbout({ data }) {
  const location = data?.location;

  // const Map = () => {
  //   return (
  //     <GoogleMap
  //       defaultZoom={18}
  //       defaultCenter={{
  //         lat: location?.latitude,
  //         lng: location?.longitude,
  //       }}
  //     >
  //       <Marker position={{ lat: location?.latitude, lng: location?.longitude }} />
  //     </GoogleMap>
  //   );
  // };

  // const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <AboutContainer>
      <InnerBox>
        <BoxC>
          <div
            className={styles.boxContent}
            style={{
              height: 360,
            }}
          >
            <h4 className={styles.h4Text}>Details</h4>
            <p
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                WebkitLineClamp: 13,
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box',
              }}
            >
              {data?.description}
            </p>
            {data?.special_diets && (
              <>
                <h4 className={styles.h4Text}>Special Diets</h4>
                <p>{data?.special_diets}</p>
              </>
            )}
          </div>
        </BoxC>
        <BoxD>
          <div className={styles.boxdContent}>
            <h4 className={styles.h4Text}>Location </h4>
            {/* <BoxDImg src="/images/mapView.png" /> */}
            <BoxDMapContainer>
              {location && (
                <GoogleMapcomponent
                  center2={{
                    lat: location?.latitude,
                    lng: location?.longitude,
                  }}
                >
                  <Marker position={{ lat: location?.latitude, lng: location?.longitude }} />
                </GoogleMapcomponent>
              )}
            </BoxDMapContainer>
            <p style={{ marginBottom: '20px' }}>{data?.address}</p>
            <Row style={{ marginBottom: '20px' }}>
              <Row>
                <BiGlobe style={{ marginRight: '10px' }} />
                <TextDetails noMargin>{data?.url?.replace('https://', '')}</TextDetails>
              </Row>
              <Row>
                <BiPhone style={{ marginRight: '10px' }} />
                <TextDetails noMargin>{data?.telephone}</TextDetails>
              </Row>
            </Row>
            <OpenDays> Open Sun - Fridays (7:00am - 11:00pm) </OpenDays>
          </div>
        </BoxD>
      </InnerBox>
      <InnerBox>
        <BoxC>
          <div className={styles.boxContent}>
            <h4 className={styles.h4Text}>Major Facilities</h4>
            <Grid templateColumns="repeat(2, 1fr)" gap={3} columnGap={0} paddingBottom={10}>
              {data?.amenities?.map((facility: string, i: number) => {
                return (
                  <Row
                    key={i}
                    style={{
                      fontFamily: 'Montserrat',

                      alignItems: 'center',
                    }}
                  >
                    <FacilityToIcon name={facility.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())} />
                    <span style={{ fontSize: '12px', color: '#333333' }}>
                      {facility.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
                    </span>
                  </Row>
                );
              })}
            </Grid>
            <p style={{ fontWeight: 600, fontSize: 12, color: '#FF9916' }}>See all Facilities</p>
          </div>
        </BoxC>
        <BoxD>
          <div className={styles.boxdContent}>
            <Row style={{ justifyContent: 'space-between', padding: '10px' }}>
              <Text fontSize={18}>Property Policies</Text>
              <GrNext />
            </Row>
            <hr />
            <Row style={{ justifyContent: 'space-between', padding: '10px' }}>
              <Text fontSize={18}>Share this link</Text>
              <BiShare />
            </Row>
            <hr />
          </div>
        </BoxD>
      </InnerBox>
    </AboutContainer>
  );
}

export const FacilityToIcon = ({ name }) => {
  return (
    <div style={{ paddingRight: 20 }}>
      {name.includes('Wifi') ? (
        <BiWifi />
      ) : name.includes('Restaurant') || name.includes('Resturant') ? (
        <FaUtensils />
      ) : name.includes('Pool') ? (
        <MdSkateboarding />
      ) : name.includes('Gym') ? (
        <FaWeight />
      ) : name.includes('Parking') ? (
        <FaCar />
      ) : name.includes('Bar') ? (
        <BiDrink />
      ) : name.includes('Breakfast') ? (
        <MdBreakfastDining />
      ) : name.includes('Beach') ? (
        <GiBeachBall />
      ) : name.includes('Tennis') ? (
        <GiTennisCourt />
      ) : name.includes('Conference') ? (
        <MdMeetingRoom />
      ) : name.includes('Air') ? (
        <MdAir />
      ) : (
        <GiCigarette />
      )}
    </div>
  );
};
