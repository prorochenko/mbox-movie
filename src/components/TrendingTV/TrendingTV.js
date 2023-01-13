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
          Trending Movies&nbsp;
          <IoIosArrowForward className={css.title__arrow} />
        </a>
      </h2>
      <ul className={css.list}>
        <li>
          <a href="echo" target="_blank" className={css.btnmovie}>
            <img src={Echo} alt="Echo" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="interlock" target="_blank" className={css.btnmovie}>
            <img src={Interlock} alt="Interlock" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="maturing" target="_blank" className={css.btnmovie}>
            <img src={Maturing} alt="Maturing" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="horror" target="_blank" className={css.btnmovie}>
            <img src={Leap} alt="Maturing" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="oak" target="_blank" className={css.btnmovie}>
            <img src={Oak} alt="Oak" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="legal" target="_blank" className={css.btnmovie}>
            <img src={Legal} alt="Legal" width="206" height="309" />
          </a>
        </li>
      </ul>
      <a href="trendingtv" target="_blank" className={css.btn}>
        See more
      </a>
    </div>
  );
};

export default TrendingTV;
