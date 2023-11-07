import { motion } from 'framer-motion';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';

import PreloadComponent from './Preload.styled';

const styles = {
  width: '100vw',
  height: '100vh',
  background: 'var(--background-color-white)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const logo = {
    initial: { opacity: 1 },
    show: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.5
      },
    },
  };

const Preload = () => {
  return (
    <div style={styles}>
      <PreloadComponent>
        <motion.div variants={logo}>
          <Logo className="logo" />
        </motion.div>
      </PreloadComponent>
    </div>
  );
};

export default Preload;
