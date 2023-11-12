const { motion } = require('framer-motion');
const { default: styled } = require('styled-components');

const ModalStyles = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
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
      left: 298px;
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
  background: rgba(112, 112, 112, 0.5);
`;

export const Overlay = ({ children }) => (
  <OverlayStyles>{children}</OverlayStyles>
);

const ModalPlaceholder = ({ children }) => (
  <ModalStyles>{children}</ModalStyles>
);

export default ModalPlaceholder;
