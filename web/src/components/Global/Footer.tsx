import { Icon } from '@chakra-ui/react';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

//import Link from 'next/link';
import {
  aboutHighTable,
  AboutHighTable,
  contries,
  currencies,
  explore,
  FooterContainer,
  FooterWrapper,
  LeftDiv,
  LocationContainer,
  MainWrapper,
  RightDiv,
  Social,
  SocialContainer,
} from './footer-styles';

const Footer = () => {
  return (
    <FooterContainer>
      <MainWrapper>
        <FooterWrapper>
          <LeftDiv>
            <div className={styles.innerLeftDiv}>
              <AboutHighTable>
                <h4 className={styles.title}>Company</h4>
                {aboutHighTable.map((item) => (
                  <div key={item.id}>
                    <a className={styles.links} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </AboutHighTable>
              <AboutHighTable>
                <h4 className={styles.title}>Explore</h4>
                {explore.map((item) => (
                  <div key={item.id}>
                    <a className={styles.links} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </AboutHighTable>
            </div>
          </LeftDiv>
          <RightDiv>
            <LocationContainer>
              <select className={styles.footerLocationLeft} name="select">
                {currencies.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <select className={styles.footerLocationRight} name="select">
                {contries.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </LocationContainer>

            <SocialContainer>
              {Social.map((item) => (
                <a key={item.id} href={item.link}>
                  <Icon fill="white" as={item.src} width={30} height={30} className={styles.socialIcon} />
                </a>
              ))}
            </SocialContainer>
          </RightDiv>
        </FooterWrapper>
        <div className={styles.footerLogoContainer}>
          <Image className={styles.footerLogo} src="/images/logoWhBg.png" alt="logo" width={206} height={52} />
          <p className={styles.footerComment}>© {new Date().getFullYear()} HighTable LLC All rights reserved.</p>
        </div>
      </MainWrapper>
    </FooterContainer>
  );
};

export default Footer;
