import css from './RegisterNow.module.scss';

const RegisterNow = () => {
  return (
    <div className={css.box}>
      <div className={css.background}>
        <h2 className={css.title}>
          Are You New Here ? <br />
          Don’t wait, Register Now.{' '}
        </h2>
        <button type="button" className={css.btn}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default RegisterNow;
