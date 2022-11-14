import React, { useMemo } from 'react';

import { useMutation } from '@apollo/client';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { Marker } from '@react-google-maps/api';
import { BiGlobe, BiPhone } from 'react-icons/bi';

import { CLAIM_BUSINESS } from '../../graphQL/queries';
import styles from '../../styles/Home.module.css';
import { countriesOfOperation } from '../BecomePartner/Modals/constants';
import SuggestNewBusinessModal from '../BecomePartner/Modals/SuggestNewBusinessModal';
import { TourButton } from '../Home/cardrec-styles';
import GoogleMapcomponent from '../map/GoogleMapcomponent';

import {
  AboutContainer,
  BottomContainer,
  BottomHeader,
  BottomRightContainer,
  BoxC,
  BoxD,
  BoxDMapContainer,
  BtnContainer,
  FoodImage,
  FoodImageContainer,
  InnerBox,
  OpenDays,
  OtherButtons,
  Row,
  TextDetails,
} from './restaurantabout-styles';

const RestaurantAbout = ({ data }) => {
  const location = data?.findRestaurantById.location;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const toast = useToast();

  const [claimBusiness, { loading: claimBusinessLoading }] = useMutation(CLAIM_BUSINESS, {
    onCompleted: () => {
      toast({ status: 'success', title: 'Successfully Sent Hightable Business Claim Request' });
    },
    onError: (err) => {
      toast({ status: 'error', title: err });
    },
  });

  const claimBusinessInfo = useMemo(() => {
    return [
      {
        title: 'Claim Your Business',
        label: 'Official Business Name',
        default: data?.findRestaurantById?.name,
      },
      ...otherInfo,
    ];
  }, [data?.findRestaurantById]);

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
          <div className={styles.boxContent}>
            <h4 className={styles.h4Text}>Details</h4>
            <p>{data?.findRestaurantById?.description}</p>
            {data?.findRestaurantById.special_diets && (
              <>
                <h4 className={styles.h4Text}>Special Diets</h4>
                <p>{data?.findRestaurantById.special_diets}</p>
              </>
            )}
            {/* <InfoContainer>
              <WebContainer>
                <WebImg src="/images/website.png" />
                <WebTextLink target="_blank" href={data?.findRestaurantById.url}>
                  {data?.findRestaurantById.url}
                </WebTextLink>
              </WebContainer>
              <WebContainer>
                <WebImg src="/images/aboutPhone.png" />
                <WebText href={`tel:${data?.findRestaurantById.telephone}`}>
                  {data?.findRestaurantById.telephone}
                </WebText>
              </WebContainer>
            </InfoContainer>
            <OpenDays> Open Sun - Fridays (7:00am - 11:00pm) </OpenDays> */}
          </div>
          {/* <div className={styles.boxContent}>
            <h4 className={styles.h4Text}>Special Diets</h4>
            <p>Vegatarian options, Diabetic options, Customizable orders, Fast food.</p>
          </div> */}
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
            <p style={{ marginBottom: '20px' }}>{data?.findRestaurantById.address}</p>
            <Row style={{ marginBottom: '20px' }}>
              <Row>
                <BiGlobe style={{ marginRight: '10px' }} />
                <TextDetails noMargin>{data?.findRestaurantById?.url}</TextDetails>
              </Row>
              <Row>
                <BiPhone style={{ marginRight: '10px' }} />
                <TextDetails noMargin>{data?.findRestaurantById?.telephone}</TextDetails>
              </Row>
            </Row>
            <OpenDays> Open Sun - Fridays (7:00am - 11:00pm) </OpenDays>
          </div>
        </BoxD>
      </InnerBox>
      <BottomHeader>Highlights</BottomHeader>
      <BottomContainer>
        <FoodImageContainer>
          <FoodImage src="/images/foodVeg.png" />
          <TourButton
            style={{
              top: '50%',
              left: '50%',
              width: 'fit-content',
              height: 'min-content',
              transform: 'translate(-50%, -50%)',
            }}
            onClick={onToggle}
          >
            Claim This Business
          </TourButton>
        </FoodImageContainer>
        <BottomRightContainer>
          <div>
            <BtnContainer>
              {(
                (data?.findRestaurantById?.highlights?.length > 0 && data?.findRestaurantById?.highlights) ||
                data?.findRestaurantById?.tags?.map((el) => el.name)
              )?.map((el, i) => (
                <OtherButtons key={i}>{el.toUpperCase()}</OtherButtons>
              ))}
            </BtnContainer>
          </div>
        </BottomRightContainer>
      </BottomContainer>
      <SuggestNewBusinessModal
        stages={claimBusinessInfo}
        onClick={claimBusiness}
        loading={claimBusinessLoading}
        keys={[
          'businessName',
          'relationship',
          'fullName',
          'country',
          'city',
          'email',
          'phoneNumber',
          'howDidYouHearAboutUs',
        ]}
        onClose={onClose}
        isOpen={isOpen}
      />
    </AboutContainer>
  );
};

const otherInfo = [
  {
    title: 'General Business Info',
    label: 'Relationship with business',
    isSelect: true,
    values: ['CEO', 'Growth', 'Other'],
    default: 'CEO',
  },
  {
    title: 'General Business Info',
    label: 'Full Name',
  },
  {
    title: 'General Business Info',
    label: 'Country',
    isSelect: true,
    values: countriesOfOperation,
    default: 'Nigeria',
  },
  {
    title: 'General Business Info',
    label: 'City',
  },
  {
    title: 'General Business Info',
    label: 'Email',
  },
  {
    title: 'General Business Info',
    label: 'Phone Number',
    isPhone: true,
  },
  {
    title: 'General Business Info',
    label: 'How did you hear about business on highTable',
    isSelect: true,
    values: ['Twitter', 'LinkedIn', 'Search Engine', 'Other'],
    default: 'Search Engine',
    hasNext: false,
    finalText: 'Claim your Business',
  },
];

export default RestaurantAbout;
