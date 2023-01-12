import css from './PopularGenres.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import icons from '../../assets/icons/symbol-defs.svg';

const PopularGenres = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        <a href="Popular">
          Popular Genres&nbsp;
          <IoIosArrowForward className={css.title__arrow} />
        </a>
      </h2>
      <ul className={css.list}>
        <li>
          <button type="button" className={css.romance}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-hearts`}></use>
            </svg>
            <p className={css.text}>Romance</p>
          </button>
        </li>
        <li>
          <button type="button" className={css.Drama}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-cinema-1`}></use>
            </svg>
            Drama
          </button>
        </li>
        <li>
          <button type="button" className={css.Historical}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-documentary-1`}></use>
            </svg>
            Historical
          </button>
        </li>
        <li>
          <button type="button" className={css.Action}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-killer-1`}></use>
            </svg>
            Action
          </button>
        </li>
        <li>
          <button type="button" className={css.Scifi}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-Group-40`}></use>
            </svg>
            Sci-fi
          </button>
        </li>
        <li>
          <button type="button" className={css.Horror}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-ghost-1`}></use>
            </svg>
            Horror
          </button>
        </li>
        <li>
          <button type="button" className={css.Comedy}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-smile-1`}></use>
            </svg>
            Comedy
          </button>
        </li>
        <li>
          <button type="button" className={css.Documentary}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-castle-1`}></use>
            </svg>
            Documentary
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PopularGenres;
