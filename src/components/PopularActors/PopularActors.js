import css from './PopularActors.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import Samanta from '../../assets/images/TrendingActors/1.png';
import Rhys from '../../assets/images/TrendingActors/2.png';
import James from '../../assets/images/TrendingActors/3.png';
import Jashua from '../../assets/images/TrendingActors/4.png';
import Patrick from '../../assets/images/TrendingActors/5.png';
import Morgan from '../../assets/images/TrendingActors/6.png';

const PopularActors = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        <div className={css.line}></div>
        <a href="Popular">
          Popular Actors & Directors&nbsp;
          <IoIosArrowForward className={css.title__arrow} />
        </a>
      </h2>
      <ul className={css.list}>
        <li>
          <img src={Samanta} alt="Maturing" width="190" height="190" />
          <p className={css.name}>Samantha Bowen</p>
        </li>
        <li>
          <img src={Rhys} alt="Maturing" width="190" height="190" />
          <p className={css.name}>Rhys Birch</p>
        </li>
        <li>
          <img src={James} alt="Maturing" width="190" height="190" />
          <p className={css.name}>James Holloway</p>
        </li>
        <li>
          <img src={Jashua} alt="Maturing" width="190" height="190" />
          <p className={css.name}>Joshua Walton</p>
        </li>
        <li>
          <img src={Patrick} alt="Maturing" width="190" height="190" />
          <p className={css.name}>Patrick Elliott</p>
        </li>
        <li>
          <img src={Morgan} alt="Maturing" width="190" height="190" />
          <p className={css.name}>Morgan O'Neill</p>
        </li>
      </ul>
    </div>
  );
};

export default PopularActors;
