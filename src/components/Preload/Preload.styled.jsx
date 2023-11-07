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

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const PreloadComponent = ({ children }) => (
  <PreloadStyles variants={container} initial='initial' animate='show'>
    {children}
  </PreloadStyles>
);

export default PreloadComponent;
