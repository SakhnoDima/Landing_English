import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--background-color-white);
  position: absolute;
  z-index: 999;
  .close-btn {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: calc(100vw - 52%);
    right: 0;
    .close-btn {
      top: 24px;
      right: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    opacity: 0.8;
    .close-btn {
      width: 32px;
      height: 32px;
    }
  }
`;

export const NavStyles = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlComponent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  color: #000000;
  li {
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    line-height: 37px;
    letter-spacing: 0em;
    a {
      color: inherit;
    }
  }
`;

const NavMenu = ({ children, onBackdropClick }) => {
  return (
    <Nav
      onClick={e => onBackdropClick(e)}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'just' }}
      exit={{ x: '100%' }}
    >
      {children}
    </Nav>
  );
};

export default NavMenu;
