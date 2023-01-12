import css from './TrendingTV.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

const TrendingTV = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        Trending TV Shows <IoIosArrowForward />
      </h2>
      <div></div>
      <button type="button"></button>
    </div>
  );
};

export default TrendingTV;
