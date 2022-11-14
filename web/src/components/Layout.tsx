import { useRouter } from 'next/router';

import Footer from './Global/Footer';
import Header from './Global/Header';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {(router.pathname === '/forgot-password' ||
        router.pathname === '/recommended' ||
        router.pathname === '/search' ||
        router.pathname === '/about' ||
        router.pathname === '/update-preferences' ||
        router.pathname === '/contact' ||
        router.pathname === '/blog' ||
        router.pathname === '/event/[_id]' ||
        router.pathname === '/event/[_id]/ticket' ||
        router.pathname === '/') && <Header />}
      {/* {router.pathname === '/restaurantDetails' && <Nav />} */}
      {children}
      {(router.pathname === '/event-reservations' ||
        router.pathname === '/about' ||
        router.pathname === '/recommended' ||
        router.pathname === '/forgot-password' ||
        router.pathname === '/profile-settings' ||
        router.pathname === '/profile-overview-reviews' ||
        router.pathname === '/ad-creation' ||
        router.pathname === '/account-settings' ||
        router.pathname === '/payment-preference' ||
        router.pathname === '/notification-settings' ||
        router.pathname === '/search' ||
        router.pathname === '/blog' ||
        router.pathname === '/event/[_id]' ||
        router.pathname === '/about' ||
        router.pathname === '/') && <Footer />}
    </>
  );
};

export default Layout;
