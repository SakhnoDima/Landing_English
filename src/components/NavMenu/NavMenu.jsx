import { useEffect } from 'react';

import NavMenu, { NavStyles, UlComponent } from './Navmenu.styled';
import { ReactComponent as Close } from '../../images/svg/x.svg';
import { sectionLinks } from 'constants/constants';

const Nav = ({ toggleMenu, isVisible }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) toggleMenu();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = e => {
      if (e.code === 'Escape') toggleMenu();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <NavMenu onBackdropClick={handleBackdropClick} isVisible={isVisible}>
      <Close onClick={toggleMenu} className="close-btn" />
      <NavStyles>
        <UlComponent>
          {sectionLinks.map(({ link, text }) => (
            <li key={link} onClick={toggleMenu}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </UlComponent>
      </NavStyles>
    </NavMenu>
  );
};

export default Nav;
