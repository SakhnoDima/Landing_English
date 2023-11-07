import { useState } from 'react';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as BurgerMenu } from '../../images/svg/menu.svg';
import HeaderComponent from './Header.styled';
import Nav from '../NavMenu/NavMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      {isOpen && <Nav toggleMenu={toggleNav} />}
      <HeaderComponent>
        <Logo className="logo" />
        <BurgerMenu onClick={toggleNav} className="menu" />
      </HeaderComponent>
    </>
  );
};

export default Header;
