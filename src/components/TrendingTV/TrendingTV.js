import css from './TrendingTV.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import Maturing from '../../assets/images/TrendingMovies/1.png';
import Leap from '../../assets/images/TrendingMovies/2.png';
import Oak from '../../assets/images/TrendingMovies/3.png';
import Legal from '../../assets/images/TrendingMovies/4.png';
import Interlock from '../../assets/images/TrendingMovies/5.png';
import Echo from '../../assets/images/TrendingMovies/6.png';

const TrendingTV = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        <a href="Popular">
          Trending TV Shows&nbsp;
          <IoIosArrowForward className={css.title__arrow} />
        </a>
      </h2>
      <ul className={css.list}>
        <li>
          <img src={Maturing} alt="Maturing" width="206" height="309" />
        </li>
        <li>
          <img src={Leap} alt="Maturing" width="206" height="309" />
        </li>
        <li>
          <img src={Oak} alt="Maturing" width="206" height="309" />
        </li>
        <li>
          <img src={Legal} alt="Maturing" width="206" height="309" />
        </li>
        <li>
          <img src={Interlock} alt="Maturing" width="206" height="309" />
        </li>
        <li>
          <img src={Echo} alt="Maturing" width="206" height="309" />
        </li>
      </ul>
      <button type="button" className={css.btn}>
        See more
      </button>
    </div>
  );
};

export default TrendingTV;
