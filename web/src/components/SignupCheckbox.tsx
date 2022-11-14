import { BsFillCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const FollowBtn = styled.button<{ checked?: boolean }>`
  width: 185px;
  height: 80px;
  margin: 10px 5px;
  position: relative;

  background: ${(props) => (props.checked ? '#0F264C' : '#f4f4f4')};
  border: 1px solid rgba(15, 38, 76, 0.45);
  border-radius: 14px;
  color: ${(props) => (props.checked ? '#f4f4f4' : '#0F264C')};

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 500px) {
    margin: 0px 8px 24px 0;
    width: 120px;
    height: 70px;
  }
`;

const FollowText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  position: absolute;
  bottom: 15px;
  left: 22px;
  text-align: left;
  margin-right: 20%;
  @media (max-width: 500px) {
    font-size: 13px;
    margin: 0 4px 0 0;
  }
`;

const SignupCheckbox = ({ checked, onChange, label }) => {
  return (
    <FollowBtn onClick={onChange} checked={checked}>
      {checked && <BsFillCheckCircleFill size={25} style={{ position: 'absolute', top: 10, right: 13 }} />}
      <FollowText>{`${label}`}</FollowText>
    </FollowBtn>
  );
};

export default SignupCheckbox;
