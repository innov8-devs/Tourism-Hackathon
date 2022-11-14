import React, { useState } from 'react';

import Button from '../Button';
import CustomLink from '../CustomLink';

import { SidebarData } from './SideBarData';
import {
  LeftNav,
  LinkContainer,
  MyAccountFrame,
  MyAccountFrameTitle,
  MyAccountItemsContainer,
} from './sidemenu-styles';
import SignOutModal from './SignOutModal';

const SideMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <LeftNav>
      <SignOutModal onClose={() => setShow(false)} show={show} />
      <MyAccountFrame>
        <MyAccountItemsContainer>
          <MyAccountFrameTitle> My Account </MyAccountFrameTitle>
          {SidebarData.map((row, i) => (
            <LinkContainer key={i}>
              <CustomLink href={row.path}>
                <a>{row.title}</a>
              </CustomLink>
            </LinkContainer>
          ))}
          <Button small criticalAction onClick={() => setShow(true)}>
            Sign Out
          </Button>
        </MyAccountItemsContainer>
      </MyAccountFrame>
    </LeftNav>
  );
};

export default SideMenu;
