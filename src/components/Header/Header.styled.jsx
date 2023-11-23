import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints } from 'constants/constants';

const HeaderContainerStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 998;
  width: 100%;
  background: var(--background-color-white);
`;

export const HeaderContainer = ({ children }) => (
  <HeaderContainerStyles
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 2.4 } }}
  >
    {children}
  </HeaderContainerStyles>
);

const HeaderComponent = styled.header`
  max-width: ${breakpoints.mob}px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-inline-end: 16px;
  padding-block-start: 48px;
  gap: 30px;

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
    max-width: ${breakpoints.tab}px;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
    .logo {
      width: 152px;
      height: 41px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: ${breakpoints.desk}px;
    padding: 36px 120px;
    .logo {
      width: 179px;
      height: 49px;
    }
  }
`;

export default HeaderComponent;
