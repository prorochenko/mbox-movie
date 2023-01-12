import Hero from '../../components/HeroSection/Hero';
import TrendingTVfrom from '../../components/TrendingTV/TrendingTV';
import PopularGenres from '../../components/PopularGenres/PopularGenres';
import PopularActors from '../../components/PopularActors/PopularActors';
import CommingSoon from '../../components/CommingSoon/CommingSoon';

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingTVfrom />
      <PopularGenres />
      <PopularActors />
      <CommingSoon />
    </>
  );
};
export default Home;
