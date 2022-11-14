import React, { useState } from 'react';

import Link from 'next/link';
import { GrFormClose } from 'react-icons/gr';

import styles from '../../styles/signup.module.css';
import Button from '../Button';
//import CustomLink from '../CustomLink';

import {
  CancelConainer,
  MyAccountFrameTitle,
  NavHeader,
  NavMenu,
  NavMenuContainer,
  NavMenuItems,
  SignOutFooterContainer,
} from './mobileleftnavbar-styles';
import { SidebarData } from './SideBarData';
import SignOutModal from './SignOutModal';

function MobileNavbar({ showSidebar, sidebar }) {
  const [show, setShow] = useState(false);

  return (
    <nav className={sidebar ? 'mobileNav-menu active' : 'mobileNav-menu'}>
      <NavMenu>
        <NavHeader>
          <MyAccountFrameTitle> My Account</MyAccountFrameTitle>
          <CancelConainer>
            <GrFormClose className={styles.sideBarClose} onClick={showSidebar} />
          </CancelConainer>
        </NavHeader>
        <SignOutModal onClose={() => setShow(false)} show={show} />
        <NavMenuContainer>
          <NavMenuItems>
            {SidebarData?.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path} passHref>
                    <div className={styles.linkContainer}>
                      <a>{item.title}</a>
                    </div>
                  </Link>
                </li>
              );
            })}
          </NavMenuItems>
          <SignOutFooterContainer>
            <Button small criticalAction onClick={() => setShow(true)}>
              Sign Out
            </Button>
          </SignOutFooterContainer>
        </NavMenuContainer>
      </NavMenu>
    </nav>
    // </MobileNavWrapper>
  );
}

export default MobileNavbar;
