import css from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import logoDesk1x from '../../assets/images/LogoDesk@1x.png';
import logoDesk2x from '../../assets/images/LogoDesk@2x.png';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'tvshows', text: 'TV Shows' },
  { href: 'movies', text: 'Movies' },
  { href: 'series', text: 'Series' },
];

const NavItem = styled(NavLink)`
  color: #ffffff;
  opacity: 0.5;
  text-decoration: none;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  &.active {
    color: #ffffff;
    opacity: 1;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
  }
`;
const AppBar = () => {
  return (
    <header className={css.box}>
      <div className={css.logo}>
        <NavLink to="/">
          <picture>
            <source
              srcsset={`${logoDesk1x} 1x,
                  ${logoDesk2x} 2x`}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <img src={logoDesk2x} alt="logo" loading="lazy" />
          </picture>
        </NavLink>
      </div>

      <div className={css.text}>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </div>
      <div className={css.icons}>
        <a href="search">
          {/* <IconContext.Provider value={{ size: '18' }}> */}
          <AiOutlineSearch className={css.tmp} />
          {/* </IconContext.Provider> */}
        </a>
        <a href="search">
          <IoMdNotificationsOutline />
        </a>
        <a href="search">
          <AiOutlineUserAdd />
        </a>
      </div>
    </header>
  );
};

export default AppBar;
