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
          <a href="later" target="_blank" className={css.btnmovie}>
            <img src={Later} alt="Later" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="man" target="_blank" className={css.btnmovie}>
            <img src={Man} alt="Man" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="dunkirk" target="_blank" className={css.btnmovie}>
            <img src={Dunkirk} alt="Dunkirk" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="enormity" target="_blank" className={css.btnmovie}>
            <img src={Enormity} alt="Enormity" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="vanitas" target="_blank" className={css.btnmovie}>
            <img src={Vanitas} alt="Vanitas" width="206" height="309" />
          </a>
        </li>
        <li>
          <a href="something" target="_blank" className={css.btnmovie}>
            <img src={Something} alt="Something" width="206" height="309" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TrendingTVShows;
