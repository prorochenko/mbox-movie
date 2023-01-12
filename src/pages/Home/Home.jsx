import Hero from '../../components/HeroSection/Hero';
import TrendingTVfrom from '../../components/TrendingTV/TrendingTV';
import PopularGenres from '../../components/PopularGenres/PopularGenres';
import PopularActors from '../../components/PopularActors/PopularActors';
import CommingSoon from '../../components/CommingSoon/CommingSoon';
import RegisterNow from '../../components/RegisterNow/RegisterNow';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingTVfrom />
      <PopularGenres />
      <PopularActors />
      <CommingSoon />
      <RegisterNow />
      <Footer />
    </>
  );
};
export default Home;
