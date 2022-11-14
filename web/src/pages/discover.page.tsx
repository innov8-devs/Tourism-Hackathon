import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BarsandLounges from '../components/Home/BarandLounges';
import Cafes from '../components/Home/Cafes';
import EventsBillBoard from '../components/Home/EventsBillBoard';
import HightableEvents from '../components/Home/HightableEvents';
import Kitchens from '../components/Home/Kitchen';
import LocalDishes from '../components/Home/LocalDishes';
import Recommendation from '../components/Home/Recommendation';
import TrendingPlacesAbuja from '../components/Home/TrendingPlacesAbuja';
import TrendingPlacesLagos from '../components/Home/TrendingPlacesLagos';

const Discover = () => {
  return (
    <>
      <Header />
      <Recommendation />
      <TrendingPlacesLagos />
      <TrendingPlacesAbuja />
      <Kitchens />
      <EventsBillBoard />
      <HightableEvents />
      <BarsandLounges />
      <LocalDishes />
      <Cafes />
      <Footer />
    </>
  );
};

export default Discover;
