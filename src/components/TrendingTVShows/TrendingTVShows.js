import css from './TrendingTVShows.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import Later from '../../assets/images/TrendingTVShows/1232.png';
import Man from '../../assets/images/TrendingTVShows/2.png';
import Dunkirk from '../../assets/images/TrendingTVShows/3.png';
import Enormity from '../../assets/images/TrendingTVShows/4.png';
import Vanitas from '../../assets/images/TrendingTVShows/5.png';
import Something from '../../assets/images/TrendingTVShows/6.png';

const TrendingTVShows = () => {
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
          <button type="button" className={css.btnmovie}>
            <img src={Later} alt="Maturing" width="206" height="309" />
          </button>
        </li>
        <li>
          <button type="button" className={css.btnmovie}>
            <img src={Man} alt="Maturing" width="206" height="309" />
          </button>
        </li>
        <li>
          <button type="button" className={css.btnmovie}>
            <img src={Dunkirk} alt="Maturing" width="206" height="309" />
          </button>
        </li>
        <li>
          <button type="button" className={css.btnmovie}>
            <img src={Enormity} alt="Maturing" width="206" height="309" />
          </button>
        </li>
        <li>
          <button type="button" className={css.btnmovie}>
            <img src={Vanitas} alt="Maturing" width="206" height="309" />
          </button>
        </li>
        <li>
          <button type="button" className={css.btnmovie}>
            <img src={Something} alt="Maturing" width="206" height="309" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TrendingTVShows;
