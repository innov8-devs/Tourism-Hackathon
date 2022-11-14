import { useEffect } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import router from 'next/router';
import Loadable from 'react-loadable';

import { VISITED } from '../components/constants';
import EventsBillBoard from '../components/Home/EventsBillBoard';
import Hero from '../components/Home/Hero';
import Sub from '../components/Home/Sub';
import AppEvents from '../components/HomePage/Events';
import AppRecommendations from '../components/HomePage/Recommendations';
import AppReviews from '../components/HomePage/Reviews';

const Tour = Loadable({
  loader: () => import('reactour'),
  loading: () => null,
});

const Home = () => {
  const { onToggle, isOpen: isTourOpen, onClose: closeTour } = useDisclosure();
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  useEffect(() => {
    if (!localStorage.getItem(VISITED) || router?.query?.startTutorial == 'true') {
      const timeout = setTimeout(() => {
        localStorage.setItem(VISITED, JSON.stringify(true));
        if (confirm('Do you want to see the tutorial')) {
          const openTutorial = true;
          if (openTutorial) onToggle();
        }
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Hero onToggle={onToggle} />
      <AppRecommendations />
      <AppReviews />
      <EventsBillBoard />
      <AppEvents />
      <Sub />
      {typeof window !== 'undefined' && (
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => {
            closeTour();
            router.push('/restaurant/r.s.v.p-6197c8181b721f0004d2fd22?startTour=true');
          }}
          onAfterOpen={disableBody}
          onBeforeClose={enableBody}
        />
      )}
    </div>
  );
};

const steps = [
  {
    selector: '#discover',
    content: 'Click here to discover new experiences',
  },
  {
    selector: '#restaurantsHeader',
    content: 'Click here to discover new restaurants',
  },
  {
    selector: '#eventsHeader',
    content: 'Click here to discover latests events',
  },
  {
    selector: '#hotelsHeader',
    content: 'Click here to discover new hotels',
  },
];

export default Home;
