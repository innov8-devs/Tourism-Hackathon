import Link from 'next/link';

import Header from '../components/Global/Header';
import SideMenu from '../components/ProfileOverviewComponents/SideMenu';

import {
  AddIcon,
  Box,
  ContentBox,
  ContentDescription,
  ContentTitle,
  Description,
  EditIcon,
  GreyText,
  LogosContainer,
  MainFrame,
  MasterCardLogo,
  PaymentBanner,
  PaypalLogo,
  RightContentTitle,
  RightFrame,
  SettingItem,
  Title,
  TitleBox,
  VisaLogo,
} from './paymentpreference-styles';

const PaymentPreference = () => {
  return (
    <>
      <Header />
      <MainFrame>
        <SideMenu />
        <RightFrame>
          <RightContentTitle> Payment Preferences </RightContentTitle>
          <SettingItem>
            <TitleBox>
              <Title>Saved Payment Methods</Title>
            </TitleBox>
            <ContentBox>
              <ContentDescription>
                <ContentTitle>MasterCard</ContentTitle>
                <Description>5874</Description>
              </ContentDescription>
              <Link href="/billing-details">
                <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
              </Link>
            </ContentBox>
            <ContentBox>
              <ContentDescription>
                <ContentTitle>Visa</ContentTitle>
                <Description>5874</Description>
              </ContentDescription>
              <Link href="/billing-details">
                <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
              </Link>
            </ContentBox>
            <ContentBox>
              <ContentDescription>
                <ContentTitle>Paypal</ContentTitle>
                <Description>paypal@gmail.com</Description>
              </ContentDescription>
              <Link href="/billing-details">
                <EditIcon src="/images/IconLibrary/pencil.png" alt="pencil icon"></EditIcon>
              </Link>
            </ContentBox>
          </SettingItem>
          <SettingItem>
            <TitleBox>
              <Title>Add Payment Methods </Title>
            </TitleBox>
            <ContentBox>
              <ContentDescription>
                <ContentTitle>Credit Card</ContentTitle>
                <Description>Add Credit Card Information</Description>
              </ContentDescription>
              <Link href="/billing-details">
                <AddIcon src="/images/IconLibrary/add.png" alt="Add Icon"></AddIcon>
              </Link>
            </ContentBox>
            <ContentBox>
              <ContentDescription>
                <ContentTitle>Paypal</ContentTitle>
                <Description>Add Paypal Account Information</Description>
              </ContentDescription>
              <AddIcon src="/images/IconLibrary/add.png" alt="Add Icon"></AddIcon>
            </ContentBox>
          </SettingItem>
          <PaymentBanner>
            <Box>
              <GreyText>Accepted Payment Methods</GreyText>
              <LogosContainer>
                <MasterCardLogo src="/images/IconLibrary/mastercard.png"></MasterCardLogo>
                <VisaLogo src="/images/IconLibrary/visa.png"></VisaLogo>
                <PaypalLogo src="/images/IconLibrary/paypal.png"></PaypalLogo>
              </LogosContainer>
            </Box>
          </PaymentBanner>
        </RightFrame>
      </MainFrame>
    </>
  );
};

export default PaymentPreference;
