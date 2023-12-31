import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--background-color-white);
  z-index: 999;
  .close-btn {
    position: absolute;
    top: 45px;
    right: 12px;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    background: rgba(255, 254, 251, 0.949);
    backdrop-filter: blur(1.5px);
    .close-btn {
      top: 24px;
      right: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    background-color: var(--background-color-white);
    width: calc(100vw - 52%);
    opacity: 0.95;
    .close-btn {
      width: 32px;
      height: 32px;
      top: 45px;
      right: 115px;
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
    font-family: 'Anek Bangla';
    font-size: 20px;
    font-weight: 500;
    line-height: 37px;
    letter-spacing: 0em;
    a {
      color: inherit;
      outline: none;
    }
  }
  li:is(:hover, :focus-within) {
    color: var(--orange-primary);
  }
  li:active,
  .active {
    color: var(--orange-secondary);
  }

  @media screen and (min-width: 1440px) {
    li {
      text-align: right;
      font-size: 24px;
      line-height: 45px;
    }
  }
`;

const NavMenu = ({ children }) => {
  return (
    <Nav
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
