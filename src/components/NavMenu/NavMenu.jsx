import { useEffect, useState } from 'react';

import { sectionLinks } from 'constants/constants';

import { ReactComponent as Close } from '../../images/svg/x.svg';
import NavMenu, { NavStyles, UlComponent } from './Navmenu.styled';

const Nav = ({ toggleMenu, isVisible }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleChangeActiveLink = keyEvent => {
    const activeIndex = sectionLinks.findIndex(el => el.link === activeLink);
    if (!activeLink) {
      setActiveLink(sectionLinks[0].link);
      return;
    }
    switch (keyEvent) {
      case 'ArrowUp':
        if (activeIndex - 1 < 0) {
          setActiveLink(sectionLinks[sectionLinks.length - 1].link);
          break;
        }
        setActiveLink(sectionLinks[activeIndex - 1].link);
        break;
      case 'ArrowDown':
        if (activeIndex + 1 === sectionLinks.length) {
          setActiveLink(sectionLinks[0].link);
          break;
        }
        setActiveLink(sectionLinks[activeIndex + 1].link);
        break;
      case 'Enter':
        window.location.href = activeLink;
        toggleMenu();
        break;
      default:
        setActiveLink('');
        break;
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = e => {
      if (e.code !== 'Escape') {
        handleChangeActiveLink(e.code);
      }
      if (e.code === 'Escape') toggleMenu();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <NavMenu isVisible={isVisible}>
      <Close onClick={toggleMenu} className="close-btn" />
      <NavStyles>
        <UlComponent>
          {sectionLinks.map(({ link, text }) => (
            <li
              key={link}
              onClick={toggleMenu}
              className={activeLink === link ? 'active' : ''}
            >
              <a href={link}>{text}</a>
            </li>
          ))}
        </UlComponent>
      </NavStyles>
    </NavMenu>
  );
};

export default Nav;
