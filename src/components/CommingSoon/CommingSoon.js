import css from './CommingSoon.module.scss';
import Bunny from '../../assets/images/CommingSoon/1.png';
import year from '../../assets/images/CommingSoon/2021.gif';

const CommingSoon = () => {
  return (
    <div className={css.box}>
      <div className={css.background}>
        <a href="bunny" target="_blank">
          <img
            src={Bunny}
            alt="Maturing"
            width="739"
            height="392"
            className={css.leftBar}
          />
        </a>

        <a href="commingsoon" target="_blank" className={css.rightBar}>
          <img src={year} alt="Maturing" width="294" height="148" />
          <p className={css.text}>Comming soon...</p>
        </a>
      </div>
    </div>
  );
};

export default CommingSoon;
