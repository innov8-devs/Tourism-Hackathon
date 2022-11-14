import {
  AmountContainer,
  AmountPlace,
  AmountPrice,
  CalendarContainer,
  CalendarRightContainer,
  CalendarRightText,
  CalendarText,
  InnerContainer,
  LatestEventContainer,
} from './latestevent-styles';

const LatestEvent = () => {
  return (
    <LatestEventContainer>
      <InnerContainer>
        <CalendarContainer>
          <CalendarText> Wed </CalendarText>
          <CalendarText> 21 </CalendarText>
          <CalendarText> Oct</CalendarText>
        </CalendarContainer>
        <CalendarRightContainer>
          <CalendarRightText> KUTU World Tour 2021 </CalendarRightText>
          <AmountContainer>
            <AmountPrice>NGN 5000</AmountPrice>
            <hr style={{ width: '15px', transform: ' rotate(90deg)', color: '#EDF0FA' }} />
            <AmountPlace> Lagos, Nigeria</AmountPlace>
          </AmountContainer>
          {/* <Button small>Get Ticket</Button> */}
        </CalendarRightContainer>
      </InnerContainer>
    </LatestEventContainer>
  );
};

export default LatestEvent;
