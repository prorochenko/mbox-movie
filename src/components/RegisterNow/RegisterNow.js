import css from './RegisterNow.module.scss';
import BackgroundRegister from '../../assets/images/RegisterNow/1.png';

const RegisterNow = () => {
  return (
    <div className={css.box}>
      <div className={css.background}>
        <div>
          <img
            src={BackgroundRegister}
            alt="Maturing"
            width="739"
            height="392"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
