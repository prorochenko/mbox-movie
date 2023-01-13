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
        <li className={css.actor}>
          <a href="samanta" target="_blank">
            <img src={Samanta} alt="Samanta" width="190" height="190" />
            <p className={css.name}>Samantha Bowen</p>
          </a>
        </li>
        <li className={css.actor}>
          <a href="rhys" target="_blank">
            <img src={Rhys} alt="Rhys" width="190" height="190" />
            <p className={css.name}>Rhys Birch</p>
          </a>
        </li>
        <li className={css.actor}>
          <a href="james" target="_blank">
            <img src={James} alt="James" width="190" height="190" />
            <p className={css.name}>James Holloway</p>
          </a>
        </li>
        <li className={css.actor}>
          <a href="jashua" target="_blank">
            <img src={Jashua} alt="Jashua" width="190" height="190" />
            <p className={css.name}>Joshua Walton</p>
          </a>
        </li>
        <li className={css.actor}>
          <a href="patrick" target="_blank">
            <img src={Patrick} alt="Patrick" width="190" height="190" />
            <p className={css.name}>Patrick Elliott</p>
          </a>
        </li>
        <li className={css.actor}>
          <a href="morgan" target="_blank">
            <img src={Morgan} alt="Morgan" width="190" height="190" />
            <p className={css.name}>Morgan O'Neill</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PopularActors;
