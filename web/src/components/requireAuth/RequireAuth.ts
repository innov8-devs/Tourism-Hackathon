import { useToast } from '@chakra-ui/react';
import Router, { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

import { AUTH_TOKEN } from '../constants';

function RequireAuthWrapper({ children }: { children: JSX.Element }) {
  //QUERY CLIENT TO GET USER FROM CACHE
  const toast = useToast();
  const pathname = useRouter().pathname;
  const token = localStorage.getItem(AUTH_TOKEN);
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    toast({ status: 'error', title: 'You must be logged in to view this page' });
    setTimeout(() => {
      return Router.push({
        pathname: '/login',
        query: {
          redirect: pathname,
        },
      });
    }, 1500);
  }
  return children;
}

export async function RequireAuthFunction() {
  const pathname = useRouter().pathname;

  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    setTimeout(() => {
      return Router.push({
        pathname: '/login',
        query: {
          redirect: pathname,
        },
      });
    }, 1500);
  }
  return null;
}

export default RequireAuthWrapper;
