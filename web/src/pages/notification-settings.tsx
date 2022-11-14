import SideMenu from '../components/ProfileOverviewComponents/SideMenu';
import Radio from '../components/Radio';
import ToggleSlider from '../components/ToggleSlider';

import {
  ContentBox,
  ContentDescription,
  ContentTitle,
  Description,
  MainContainer,
  RadioButtonsWrapper,
  RightContentTitle,
  RightFrame,
  SettingItem,
  Title,
  TitleBox,
  ToggleSliderWrapper,
} from './notificationsettings-styles';

const NotificationSettings = () => {
  return (
    <MainContainer>
      <SideMenu />
      <RightFrame>
        <RightContentTitle> Notification Settings</RightContentTitle>
        <SettingItem>
          <TitleBox>
            <Title>Push Notification</Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> New followers </ContentTitle>
              <Description>Send notification</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Hightable recommendations </ContentTitle>
              <Description>Send me notification alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Direct Messages</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Messages from business owners</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Messages from business owners</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Comment replies</ContentTitle>
              <Description> Send me review alerts </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Review Likes</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Review comments</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Food orders</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>New HT blog posts</ContentTitle>
              <Description> Notify me </Description>
            </ContentDescription>
            <RadioButtonsWrapper>
              <Radio name="test">Always</Radio>
              <Radio name="test">Only from people I follow</Radio>
              <Radio name="test">Never</Radio>
            </RadioButtonsWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Confirmed reservations</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Confirmed Events</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>New deals and offers</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle>Promotions and services</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
        </SettingItem>
        <SettingItem>
          <TitleBox>
            <Title> Push Notification </Title>
          </TitleBox>
          <ContentBox>
            <ContentDescription>
              <ContentTitle> Food orders</ContentTitle>
              <Description>Send me review alerts</Description>
            </ContentDescription>
            <ToggleSliderWrapper>
              <ToggleSlider />
            </ToggleSliderWrapper>
          </ContentBox>
        </SettingItem>
      </RightFrame>
    </MainContainer>
  );
};

export default NotificationSettings;
