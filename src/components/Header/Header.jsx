import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as BurgerMenu } from '../../images/svg/menu.svg';
import HeaderComponent, { HeaderContainer } from './Header.styled';
import Nav from '../NavMenu/NavMenu';
import { Overlay } from 'components/Modal/Modal.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Overlay isNav={true} handleClick={toggleNav}>
            <Nav toggleMenu={toggleNav} />
          </Overlay>
        )}
      </AnimatePresence>

      <HeaderContainer>
        <HeaderComponent>
          <a href="#hero">
            <Logo className="logo" />
          </a>
          {!isOpen && <BurgerMenu onClick={toggleNav} className="menu" />}
        </HeaderComponent>
      </HeaderContainer>
    </>
  );
};

export default Header;
