import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import styled from 'styled-components';

export const aboutHighTable = [
  {
    title: 'About Us',
    link: '/about',
    id: 1,
  },
  // {
  //   title: 'Content Integrity',
  //   link: '/content',
  //   id: 7,
  // },
  {
    title: 'Terms of Use',
    link: '/terms-of-use',
    id: 8,
  },
  {
    title: 'Privacy and Cookies Statement',
    link: '/privacy-and-cookies-statement',
    id: 9,
  },
];

export const explore = [
  // {
  //   title: 'About Us',
  //   link: '/about',
  //   id: 3,
  // },
  // {
  //   title: 'Blog',
  //   link: '/blog',
  //   id: 4,
  // },
  {
    title: 'Business Center',
    link: '/become-partner',
    id: 5,
  },
  {
    title: 'Contact Us',
    link: '/contact',
    id: 6,
  },
];
export const getTheApp = [
  {
    title: 'IOS App',
    link: '/ios',
    id: 1,
  },
  {
    title: 'Android App',
    link: '/android',
    id: 2,
  },
];

export const contries = [
  {
    title: 'Ghana',
  },
  {
    title: 'Kenya',
  },
  {
    title: 'Nigeria',
  },
  {
    title: 'South Africa',
  },
];
export const currencies = [
  {
    title: 'GHC',
  },
  {
    title: 'KES',
  },
  {
    title: 'NGN',
  },
  {
    title: 'ZAR',
  },
];

export const Social = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/hightable_africa',
    id: 2,
    src: FaInstagramSquare,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/hightable_africa',
    id: 3,
    src: FaTwitterSquare,
  },

  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/company/hightable-africa',
    id: 4,
    src: FaLinkedin,
  },
];

export const FooterContainer = styled.section`
  width: 100%;
  background: #000000;
  padding: 20px;
`;

export const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RightDiv = styled.div`
  color: #fff4e7;
  padding: 20px 5px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AboutHighTable = styled.div`
  margin-right: 50px;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
