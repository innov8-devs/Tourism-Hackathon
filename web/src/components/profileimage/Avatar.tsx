import React, { useState } from 'react';

import styled from 'styled-components';

import CreateAvatar from './CreateAvatar';
import Portal from './Portal';
import ProfilePhoto from './ProfilePhoto';

type portalInner = {
  flexDirection: string;
};

const PortalInner = styled.div<portalInner>`
  width: 100%;
  height: ${(props) => (props.flexDirection === 'column' ? '450px' : '140px')};
  border: 1px solid #ff9916;
  borderradius: 4px;
  margin: auto;
  display: flex;
  gap: 10px;
  justify-content: ${(props) => (props.flexDirection === 'column' ? 'space-between' : 'center')};
  align-items: center;
  padding: 10px;
  flex-direction: ${(props) => props.flexDirection};
  @media (max-width: 980px) {
    height: ${(props) => (props.flexDirection === 'column' ? '350px' : '140px')};
  }
`;

type Props = {
  show: boolean;
  setShow: Function;
  customerImage: String;
  flexDirection: string;
};

const Avatar: React.FC<Props> = ({ show, setShow, customerImage, flexDirection }) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const getData = (isOpened, imageSrc) => {
    setShow(isOpened);
    setImageSrc(imageSrc);
  };

  return (
    <React.Fragment>
      <ProfilePhoto
        show={show}
        setShow={setShow}
        getData={getData}
        imageSrc={customerImage ? customerImage : imageSrc}
      />
      {show && (
        <Portal portalDiv="createAvatarDiv">
          <PortalInner flexDirection={flexDirection}>
            <CreateAvatar flexDirection={flexDirection} getData={getData} />
          </PortalInner>
        </Portal>
      )}
      <br />
    </React.Fragment>
  );
};
export default Avatar;
