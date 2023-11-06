import { useEffect } from 'react';

import NavMenu, { NavStyles, UlComponent } from './Navmenu.styled';
import { ReactComponent as Close } from '../../images/svg/x.svg';

const Nav = ({ toggleMenu }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) toggleMenu();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') toggleMenu();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <NavMenu onBackdropClick={handleBackdropClick}>
      <Close onClick={toggleMenu} className="close-btn" />
      <NavStyles>
        <UlComponent>
          <li onClick={toggleMenu}>
            <a href="#home">How does it work?</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#home">Why me?</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#home">What my clients say</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#home">Clients</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#home">My service</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#home">Contact me</a>
          </li>
        </UlComponent>
      </NavStyles>
    </NavMenu>
  );
};

export default Nav;
