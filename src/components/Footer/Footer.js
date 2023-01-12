import css from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import logoDesk1x from '../../assets/images/LogoDesk@1x.png';
import logoDesk2x from '../../assets/images/LogoDesk@2x.png';

const Footer = () => {
  return (
    <div className={css.box}>
      <div className={css.logo}>
        <NavLink to="/">
          <picture>
            <source
              srcsset={`${logoDesk1x} 1x,
                  ${logoDesk2x} 2x`}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <img
              src={logoDesk2x}
              alt="logo"
              loading="lazy"
              width="294"
              height="148"
            />
          </picture>
        </NavLink>
      </div>
      <div>
        <ul className={css.list}>
          <li>
            <li>
              <a href="Voice">Voice over and Subtitle</a>
            </li>
            <li>
              <a href="mediacenter">Media Center</a>
            </li>
            <li>
              <a href="privacy">Privacy</a>
            </li>
            <li>
              <a href="contactus">Contact us</a>
            </li>
          </li>
          <li>
            <li>
              <a href="voice">Voice Description</a>
            </li>
            <li>
              <a href="investor">Investor Relations</a>
            </li>
            <li>
              <a href="legal">Legal Provisions</a>
            </li>
          </li>
          <li>
            <li>
              <a href="help">Help Center</a>
            </li>
            <li>
              <a href="job">Job Opportunities</a>
            </li>
            <li>
              <a href="cookies">Cookies Preferences</a>
            </li>
          </li>
          <li>
            <li>
              <a href="gift">Gift Cards</a>
            </li>
            <li>
              <a href="terms">Terms of Use</a>
            </li>
            <li>
              <a href="corpinformation">Corporate Informations</a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
