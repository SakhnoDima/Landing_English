import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderStyles = styled(motion.header)`
  display: flex;
  justify-content: flex-end;
  padding-inline-end: 16px;
  padding-block-start: 48px;
  gap: 30px;
  position: sticky;
  z-index: 998;
  .logo {
    width: 200px;
    height: 60px;
  }
  .menu {
    width: 42px;
    height: 42px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
    .logo {
      width: 152px;
      height: 41px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 36px 120px;
    .logo {
      width: 179px;
      height: 49px;
    }
  }
`;
const HeaderComponent = ({ children }) => (
  <HeaderStyles
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  >
    {children}
  </HeaderStyles>
);
export default HeaderComponent;
