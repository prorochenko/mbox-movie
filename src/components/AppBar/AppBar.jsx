import css from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';

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
    position: relative;
    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
      position: absolute;
      left: calc(50% - 50%);
      bottom: -5px;
      border-radius: 50px;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
  }
`;

const AppBar = () => {
  return (
    <header className={css.header}>
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
          <AiOutlineSearch size={'1.14em'} />
        </a>
        <a href="search">
          <IoMdNotificationsOutline size={'1.14em'} />
        </a>
        <a href="search">
          <AiOutlineUserAdd size={'1.14em'} />
        </a>
      </div>
    </header>
  );
};

export default AppBar;
