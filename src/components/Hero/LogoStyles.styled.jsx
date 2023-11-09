import { motion } from 'framer-motion';
import styled from 'styled-components';

const SvgAnimStyles = styled(motion.div)`
  position: relative;
  width: 360px;
  height: 273px;
  margin: 45px auto 66px -9px;

  .certificate,
  .r__line,
  .l__line,
  .star,
  .folder,
  .notepad {
    position: absolute;
    animation: 3s normal infinite rotate;
  }

  .pencil {
    position: absolute;
    animation: 3s normal infinite rotateP;
    width: 14px;
    height: 20px;
    bottom: 74px;
    left: 23px;
  }

  .notepad {
    width: 39px;
    height: 35px;
    left: 33px;
    bottom: 77px;
  }

  .certificate {
    width: 28px;
    height: 34px;
    bottom: 28px;
    left: 55px;
  }

  .r__line {
    width: 28px;
    height: 10px;
    left: 37px;
    bottom: 133px;
  }

  .star {
    width: 23px;
    height: 23px;
    top: 53px;
    left: 77px;
  }

  .l__line {
    width: 26px;
    height: 16px;
    top: 36px;
    right: 67px;
  }

  .folder {
    width: 48px;
    height: 40px;
    top: 60px;
    right: 33px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 80px;
    width: 324px;
    height: 301px;
    margin: 0;

    .pencil {
      height: 19px;
      bottom: 85px;
      left: 22px;
    }

    .notepad {
      width: 37px;
      height: 32px;
      left: 32px;
      bottom: 86px;
    }

    .certificate {
      width: 26px;
      height: 32px;
      bottom: 34px;
      left: 53px;
    }

    .r__line {
      width: 26px;
      height: 9px;
      left: 18px;
      bottom: 144px;
    }

    .star {
      width: 21px;
      height: 21px;
      top: 68px;
      left: 62px;
    }

    .l__line {
      width: 24px;
      height: 15px;
      top: 62px;
      right: 63px;
    }

    .folder {
      width: 44px;
      height: 37px;
      top: 85px;
      right: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    bottom: 120px;
    width: 568px;
    height: 430px;
    .pencil {
      width: 23px;
      height: 32px;
      bottom: 117px;
      left: 35px;
    }

    .notepad {
      width: 63px;
      height: 55px;
      left: 50px;
      bottom: 121px;
    }

    .certificate {
      width: 44px;
      height: 54px;
      bottom: 45px;
      left: 88px;
    }

    .r__line {
      width: 45px;
      height: 15px;
      left: 57px;
      bottom: 211px;
    }

    .star {
      width: 36px;
      height: 36px;
      top: 85px;
      left: 122px;
    }

    .l__line {
      width: 41px;
      height: 25px;
      top: 59px;
      right: 106px;
    }

    .folder {
      width: 76px;
      height: 53px;
      top: 96px;
      right: 52px;
    }
  }

  @keyframes rotate {
    0% {
      rotate: 0deg;
    }
    50% {
      rotate: 20deg;
    }
    100% {
      rotate: 0deg;
    }
  }
  @keyframes rotateP {
    0% {
      rotate: 90deg;
    }
    50% {
      rotate: 0deg;
    }
    100% {
      rotate: 90deg;
    }
  }
`;

const SvgAnim = ({ children }) => {
  return (
    <SvgAnimStyles
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration: 1, delay: 0.5}}
    >
      {children}
    </SvgAnimStyles>
  );
};

export default SvgAnim;
