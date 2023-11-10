import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as ArrowLeft } from 'images/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'images/svg/arrow-right.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { titleAnimation } from 'constants/constants';

export const WrapperBackground = styled.section`
  background-color: var(--background-color-white);
  scroll-margin-block-start: 150px;
`;

const TitleStyles = styled(motion.h2)`
  font-size: 28px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  height: 52px;

  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 48px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const Title = ({ children }) => {
  return (
    <TitleStyles
      variants={titleAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </TitleStyles>
  );
};

export const WrapperMain = styled.div`
  position: relative;
  display: flex;
  border-radius: 16px;
  border: 1px solid var(--background-card-dark-blue);

  transform: scale(0.75);
  transition: transform 300ms;
  filter: blur(3px);

  background: var(--background-color-white);
  height: ${({ $isExpanded }) => ($isExpanded ? '500px' : '403px')};
  opacity: 0;
  margin-bottom: 124px;

  &.activeSlide {
    transform: scale(1);
    opacity: 1;
    filter: blur(0px);

    opacity: 1;
  }

  @media (min-width: 768px) {
    height: ${({ $isExpanded }) => ($isExpanded ? '500px' : '305px')};

    opacity: 1;
    &.activeSlide {
      width: 451px;
      margin-bottom: 139px;
    }
  }

  @media (min-width: 1440px) {
    height: ${({ $isExpanded }) => ($isExpanded ? '500px' : '294px')};

    &.activeSlide {
      margin-bottom: 169px;
    }
  }
`;

export const WrapperPersonal = styled.div`
  display: flex;
  margin: 16px auto 23px 24px;
  gap: 35px;

  @media (min-width: 768px) {
    padding: 5px;
  }

  @media (min-width: 1440px) {
    padding: 1px;
  }
`;

export const WrapperInfo = styled.div`
  align-items: center;
`;

export const PersonalInfoName = styled.p`
  font-size: 20px;
  line-height: 1;
`;

export const PersonalInfoProf = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

export const TextArea = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  bottom: 0;
  border-radius: 16px;
  background: var(--background-card-dark-blue);
  position: ${({ $isExpanded }) => ($isExpanded ? 'absolute' : 'relative')};
  height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '305px')};
  transition: height 0.5s ease-in-out;
  width: 100%;

  @media (min-width: 768px) {
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '198px')};
  }

  @media (min-width: 1440px) {
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '195px')};
  }
`;

export const Text = styled.p`
  width: 300px;
  height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '243px')};

  font-family: Montserrat;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.38;

  @media (min-width: 768px) {
    width: 405px;
    height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '132px')};
    line-height: 1.2;
  }

  @media (min-width: 1440px) {
    width: 341px;
    height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '143px')};
  }
`;

export const ReadMore = styled.button`
  display: ${({ $isExpanded }) => ($isExpanded ? 'none' : 'block')};
  color: var(--grey);

  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
  border: transparent;
  padding: 0;

  height: 26px;

  &:hover,
  &:focus {
    color: var(--text-blue);
    font-weight: 500;
  }
`;

export const ArrowNext = styled.div`
  background: transparent;
  position: absolute;
  cursor: pointer;
  z-index: 10;

  right: 32.5%;
  bottom: 60px;

  @media (min-width: 768px) {
    right: 42.5%;
    bottom: 80px;
  }

  @media (min-width: 1440px) {
    right: 47%;
    bottom: 121px;
  }
`;

export const ArrowLeftSvg = styled(ArrowLeft)`
  width: 48px;
  height: 48px;
  stroke: var(--black);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  &:hover,
  &:focus {
    stroke-width: 3;
  }

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

export const ArrowRightSvg = styled(ArrowRight)`
  width: 48px;
  height: 48px;
  stroke-width: 2;
  stroke: var(--black);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  &:hover,
  &:focus {
    stroke-width: 3;
  }

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

export const ArrowPrev = styled.div`
  background: transparent;
  position: absolute;
  cursor: pointer;
  z-index: 10;

  left: 32.5%;
  bottom: 60px;

  @media (min-width: 768px) {
    left: 42.5%;
    bottom: 80px;
  }

  @media (min-width: 1440px) {
    left: 47%;
    bottom: 121px;
  }
`;
