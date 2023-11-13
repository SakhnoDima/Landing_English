import { motion } from 'framer-motion';
import styled from 'styled-components';

const ModalStyles = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  padding: 32px 24px;
  background: var(--background-color-white);
  border-radius: 20px;
  .bg {
    position: absolute;
    left: 118px;
    bottom: 0;
    z-index: -1;
    width: 753px;
    height: 482px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding-inline: 64px;
    .bg {
      left: 186px;
    }
    .close {
      top: 24px;
      right: 30px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-block: 80px;
    min-width: 827px;
    .bg {
      left: 294px;
      width: 533px;
      height: 499px;
    }
    .close {
      top: 42px;
      right: 54px;
    }
  }
`;

const OverlayStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: ${({ $isNav }) =>
    $isNav ? 'transparent' : 'rgba(112, 112, 112, 0.5)'};
`;

export const Overlay = ({ children, handleClick, isNav = false }) => {
  const handleBackdropClick = e =>
    e.target === e.currentTarget ? handleClick() : null;

  return (
    <OverlayStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={handleBackdropClick}
      $isNav={isNav}
    >
      {children}
    </OverlayStyles>
  );
};

const ModalPlaceholder = ({ children }) => (
  <ModalStyles
    initial={{ scale: 0.5, y: '-50%', x: '-50%' }}
    animate={{
      y: '-50%',
      x: '-50%',
      scale: 1,
      transition: { duration: 0.2 },
    }}
    exit={{ scale: 0 }}
  >
    {children}
  </ModalStyles>
);

export default ModalPlaceholder;
