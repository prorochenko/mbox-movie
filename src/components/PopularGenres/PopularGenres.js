import css from './PopularGenres.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

const PopularGenres = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        Popular Genres <IoIosArrowForward />
      </h2>
      <ul className={css.list}>
        <li>
          <button type="button" className={css.romance}>
            Romance
          </button>
        </li>
        <li>
          <button type="button" className={css.Drama}>
            Drama
          </button>
        </li>
        <li>
          <button type="button" className={css.Historical}>
            Historical
          </button>
        </li>
        <li>
          <button type="button" className={css.Action}>
            Action
          </button>
        </li>
        <li>
          <button type="button" className={css.Scifi}>
            Sci-fi
          </button>
        </li>
        <li>
          <button type="button" className={css.Horror}>
            Horror
          </button>
        </li>
        <li>
          <button type="button" className={css.Comedy}>
            Comedy
          </button>
        </li>
        <li>
          <button type="button" className={css.Documentary}>
            Documentary
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PopularGenres;
