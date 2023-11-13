import { motion } from 'framer-motion';

import { ReactComponent as Logo } from '../../images/svg/logo.svg';

import PreloadComponent from './Preload.styled';
import { useRef } from 'react';
import { useEffect } from 'react';

const styles = {
  width: '100vw',
  height: '100vh',
  background: 'var(--background-color-white)',
  position: 'fixed',
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
      duration: 2,
    },
  },
};

const Preload = () => {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.display = 'none';
    }, 2000);
  });

  return (
    <div ref={ref} style={styles}>
      <PreloadComponent>
        <motion.div variants={logo}>
          <Logo className="logo" />
        </motion.div>
      </PreloadComponent>
    </div>
  );
};

export default Preload;
