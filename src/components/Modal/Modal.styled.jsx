import { motion } from 'framer-motion';
import styled from 'styled-components';

const ModalStyles = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
  overflow: hidden;
  padding: ${({ $isPopUp }) => ($isPopUp ? '0px' : '32px 24px')};
  background: var(--background-color-white);
  border-radius: 20px;
  .bg {
    position: absolute;
    left: ${({ $isPopUp }) => ($isPopUp ? '100px' : '118px')};
    bottom: ${({ $isPopUp }) => ($isPopUp ? '-167px' : '0')};
    z-index: -1;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  @media screen and (orientation: landscape) {
    margin-top: 80px;
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
    padding-block: ${({ $isPopUp }) => ($isPopUp ? '52' : '80px')}px;
    min-width: ${({ $isPopUp }) => ($isPopUp ? 'auto' : '827px')};
    .bg {
      ${({ $isPopUp }) => ($isPopUp ? 'right: 0' : 'left: 294px')};
      width: ${({ $isPopUp }) => ($isPopUp ? 'auto' : '533px')};
      height: ${({ $isPopUp }) => ($isPopUp ? 'auto' : '499px')};
    }
    .close {
      top: ${({ $isPopUp }) => ($isPopUp ? '24' : '42')}px;
      right: ${({ $isPopUp }) => ($isPopUp ? '30' : '54')}px;
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

  @media screen and (orientation: landscape) {
    overflow-y: scroll;
  }
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

const ModalPlaceholder = ({ children, $isPopUp }) => (
  <ModalStyles
    initial={{ scale: 0.5, y: '-50%', x: '-50%' }}
    animate={{
      y: '-50%',
      x: '-50%',
      scale: 1,
      transition: { duration: 0.2 },
    }}
    exit={{ scale: 0 }}
    $isPopUp={$isPopUp}
  >
    {children}
  </ModalStyles>
);

export default ModalPlaceholder;
