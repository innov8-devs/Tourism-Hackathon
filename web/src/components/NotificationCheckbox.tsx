import React, { useState } from 'react';

import styled from 'styled-components';

interface CheckboxProps {
  toggle?: boolean;
}

const Slider = styled.span<CheckboxProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color }) => (toggle ? color : 'white')};
  border-radius: 15px;
  transition: 0.5s;
  border-color: #ccc;

  &:before {
    content: '';

    position: absolute;
    left: 2px;
    bottom: 2px;
    border-color: #ccc;
    width: 20px;
    height: 20px;
    border-radius: 100%;

    background-color: ${({ toggle, color }) => (toggle ? 'white' : color)};

    transition: 0.5s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;

const Switch = styled.label<CheckboxProps>`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle, color }) => (toggle ? color : 'white')};
  border-radius: 15px;
  transition: 0.8s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const NotificationCheckbox = ({ checked = false, color = '#FF9916' }) => {
  const [toggle, setToggle] = useState(checked);
  return (
    <Switch>
      <Input {...{ color }} type="checkbox" defaultChecked={toggle} />
      <Slider {...{ toggle, color }} onClick={() => setToggle(!toggle)} />
    </Switch>
  );
};

export default NotificationCheckbox;
