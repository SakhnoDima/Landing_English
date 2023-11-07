import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  height: 52px;
  font-weight: 500;
`;

export const WrapperMain = styled.div`
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--background-card-dark-blue);

  transform: scale(0.5);
  transition: transform 300ms;
  opacity: 0.5;

  background: var(--background-color-white);
  height: ${({ $isExpanded }) => ($isExpanded ? '500px' : '403px')};

  display: none;

  &.activeSlide {
    transform: scale(1);
    opacity: 1;
    display: block;
  }
`;

export const WrapperPersonal = styled.div`
  display: flex;
  margin: 16px auto 23px 24px;
  gap: 35px;
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
`;

export const Text = styled.p`
  width: 312px;
  height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '243px')};

  font-family: Montserrat;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.38;
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
  bottom: -66px;
`;

export const ArrowPrev = styled.div`
  background: transparent;
  position: absolute;
  cursor: pointer;
  z-index: 10;

  left: 32.5%;
  bottom: -66px;
`;
