import css from './Hero.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';
// import Batman1x from '../../assets/images/batmanDesk@1x.png';
// import Batman2x from '../../assets/images/batmanDesk@2x.png';

const Hero = () => {
  setTimeout(() => {
    document.addEventListener('mousemove', parallax);

    const elemMainPic = document.querySelector('#mainPic');

    function parallax(e) {
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      elemMainPic.style.transform =
        'translateX(' +
        _mouseX / -550 +
        '%) translateY(' +
        _mouseY / -500 +
        '%)';
    }
  }, 300);

  return (
    <>
      <div className={css.box}>
        <div className={css.rightPart}>
          <h1 className={css.title}>Zack Snyder's Justice League</h1>
          <div className={css.data}>
            <div className={css.dataGroup}>
              <p className={css.dataNumbers}>2018</p>
              <p className={css.dataAge}>18+</p>
              <p className={css.dataNumbers}>4h 2min</p>
            </div>
            <p className={css.dataNumbers}>
              8.8
              <IconContext.Provider value={{ color: '#FFB800' }}>
                <AiFillStar />
              </IconContext.Provider>
            </p>
          </div>
          <p className={css.text}>
            Determined to ensure Superman's ultimate sacrifice was not in vain,
            Bruce Wayne aligns forces with Diana Prince with plans to recruit a
            team of metahumans to protect the world from an approaching threat
            of catastrophic proportions.
          </p>
          <div className={css.btns}>
            <button type="button" className={css.buttonBlue}>
              Watch
            </button>
            <button type="button" className={css.buttonWhite}>
              More Information
            </button>
          </div>
        </div>
        {/* <div className={css.rightBar}> */}
        <div id="mainPic" className={css.mainPic}></div>
        {/* <picture className={css.picture}>
          <source
            srcsset={`${Batman1x} 1x,
                  ${Batman2x} 2x`}
            type="image/png"
            media="(min-width: 1280px)"
          />
          <img src={Batman2x} alt="logo" loading="lazy" />
        </picture> */}
      </div>
      <div className={css.bottom}></div>
    </>
  );
};

export default Hero;
