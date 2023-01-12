import css from './CommingSoon.module.scss';
import Bunny from '../../assets/images/CommingSoon/1.png';
import year from '../../assets/images/CommingSoon/2021.gif';

const CommingSoon = () => {
  return (
    <div className={css.box}>
      <div className={css.background}>
        <img src={Bunny} alt="Maturing" width="739" height="392" />
      </div>
      <div>
        <img src={year} alt="Maturing" width="739" height="392" />
        Coomiing soon
      </div>
    </div>
  );
};

export default CommingSoon;
