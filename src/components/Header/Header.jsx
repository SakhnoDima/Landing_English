import { useState } from 'react';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as BurgerMenu } from '../../images/svg/menu.svg';
import HeaderComponent from './Header.styled';
import Nav from '../NavMenu/NavMenu';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && <Nav toggleMenu={toggleNav} />}
      </AnimatePresence>

      <HeaderComponent>
        <Logo className="logo" />
        <BurgerMenu onClick={toggleNav} className="menu" />
      </HeaderComponent>
    </>
  );
};

export default Header;
