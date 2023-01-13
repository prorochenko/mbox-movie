import css from './PopularGenres.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import icons from '../../assets/icons/symbol-defs.svg';

const PopularGenres = () => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>
        <a href="popular">
          Popular Genres&nbsp;
          <IoIosArrowForward className={css.title__arrow} />
        </a>
      </h2>
      <ul className={css.list}>
        <li>
          <a href="romance" target="_blank" className={css.romance}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-hearts`}></use>
            </svg>
            <p className={css.text}>Romance</p>
          </a>
        </li>
        <li>
          <a href="drama" target="_blank" className={css.Drama}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-cinema-1`}></use>
            </svg>
            Drama
          </a>
        </li>
        <li>
          <a href="historical" target="_blank" className={css.Historical}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-documentary-1`}></use>
            </svg>
            Historical
          </a>
        </li>
        <li>
          <a href="action" target="_blank" className={css.Action}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-killer-1`}></use>
            </svg>
            Action
          </a>
        </li>
        <li>
          <a href="scifi" target="_blank" className={css.Scifi}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-Group-40`}></use>
            </svg>
            Sci-fi
          </a>
        </li>
        <li>
          <a href="horror" target="_blank" className={css.Horror}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-ghost-1`}></use>
            </svg>
            Horror
          </a>
        </li>
        <li>
          <a href="comedy" target="_blank" className={css.Comedy}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-smile-1`}></use>
            </svg>
            Comedy
          </a>
        </li>
        <li>
          <a href="documentary" target="_blank" className={css.Documentary}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-castle-1`}></use>
            </svg>
            Documentary
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PopularGenres;
