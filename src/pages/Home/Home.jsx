import Hero from '../../components/HeroSection/Hero';
import TrendingTVShows from '../../components/TrendingTVShows/TrendingTVShows';
import TrendingTV from '../../components/TrendingTV/TrendingTV';
import PopularGenres from '../../components/PopularGenres/PopularGenres';
import PopularActors from '../../components/PopularActors/PopularActors';
import CommingSoon from '../../components/CommingSoon/CommingSoon';
import RegisterNow from '../../components/RegisterNow/RegisterNow';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingTVShows />
      <TrendingTV />
      <PopularGenres />
      <PopularActors />
      <CommingSoon />
      <RegisterNow />
      <Footer />
    </>
  );
};
export default Home;
