import React, { useMemo } from 'react';

import { ApolloProvider } from '@apollo/client';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import { ChakraProvider } from '@chakra-ui/react';
import { useJsApiLoader } from '@react-google-maps/api';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import './_app.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AutoVerifyJwt from '../components/AutoVerifyJwt';
import Layout from '../components/Layout';
import { client, persistor, theme, config } from '../config';
import store from '../redux/store';
import HeaderSearchStateProvider from '../state/HeaderSearchContextProvider';

import '@fontsource/montserrat';
import '@fontsource/dm-serif-display';

Bugsnag.start({
  apiKey: config.BUGSNAG,
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

function MyApp({ Component, pageProps }: AppProps) {
  const library: ['places', 'geometry', 'drawing'] = useMemo(() => ['places', 'geometry', 'drawing'], []);
  useJsApiLoader({
    id: `${process.env.REACT_APP_MAPID}`,
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API}`,
    libraries: library,
  });

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-KQ38HRYN64`} />
      <Script strategy="lazyOnload" id={'1'}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQ38HRYN64', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
        <meta name="application-name" content="HighTable Africa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HighTable Africa" />
        <meta name="description" content="Experience The best of africa" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hightable.africa/" />
        <meta property="og:title" content="HighTable" />
        <meta property="og:image" content="https://i.postimg.cc/7Ykc44Xx/Black-Hightable-with-tagline-1.png" />
        <meta
          property="og:description"
          content="HighTable Africa - Experience Africa like never before! Discover restaurants, nightlife, hotels, attractions, and activities across Africa.  With HighTable, you can plan your next trip, read honest and reliable peer reviews, make reservations, connect with communities, and more. "
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <ApolloProvider client={client}>
              <ChakraProvider theme={theme}>
                <HeaderSearchStateProvider>
                  <Layout>
                    <AutoVerifyJwt>
                      <Component {...pageProps} />
                    </AutoVerifyJwt>
                  </Layout>
                </HeaderSearchStateProvider>
              </ChakraProvider>
            </ApolloProvider>
          </ErrorBoundary>
        </PersistGate>
      </Provider>

      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQ38HRYN64"></script>
      <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(‘js’, new Date()); gtag(‘config’, ‘G-KQ38HRYN64’); </script> */}
    </>
  );
}

// Patent: https://patents.google.com/patent/US20100250231A1/en?inventor=Irving+Almagro

export default MyApp;
