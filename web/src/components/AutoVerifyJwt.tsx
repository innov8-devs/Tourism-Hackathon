import React, { ReactNode } from 'react';

import jwt_decode from 'jwt-decode';

import { AUTH_TOKEN } from './constants';

type Props = {
  children: ReactNode;
};

const AutoVerifyJwt: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  // eslint-disable-next-line no-console
  if (token) {
    const decodedJwt: any = jwt_decode(token);
    // eslint-disable-next-line no-console
    if (decodedJwt?.exp * 1000 < Date.now()) {
      localStorage.removeItem(AUTH_TOKEN);
    }
  }
  return <>{children}</>;
};

export default AutoVerifyJwt;
