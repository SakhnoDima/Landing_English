import styled from 'styled-components';
import { motion } from 'framer-motion';

const PreloadStyles = styled(motion.div)`
  .logo {
    width: 245px;
    height: 67px;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 304px;
      height: 83px;
    }
  }
`;

export const PreloadOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-color-white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: ${({ $isComplete }) => ($isComplete ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const PreloadComponent = ({ children, setComplete }) => (
  <PreloadStyles
    variants={container}
    initial="initial"
    animate="show"
    onAnimationComplete={() => setComplete()}
  >
    {children}
  </PreloadStyles>
);

export default PreloadComponent;
