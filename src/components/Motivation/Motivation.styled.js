import styled from 'styled-components';

import mob from 'images/whyMe_mobile.png';
import tablet from 'images/whyMe_tablet.png';
import desktop from 'images/whyMe_desktop.png';

import { ReactComponent as Stress } from 'images/svg/stress.svg';
import { ReactComponent as Motivation } from 'images/svg/motivation.svg';
import { ReactComponent as Intersactive } from 'images/svg/intersactive.svg';
import { ReactComponent as Cooperation } from 'images/svg/cooperation.svg';

export const Wrapper = styled.div`
  background: no-repeat url(${mob});
  background-color: var(--background-color-white);
  background-size: cover;
  padding: 60px 0;

  @media (min-width: 768px) {
    background-image: url(${tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${desktop});
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: normal;
  margin-bottom: 59px;
  justify-content: center;
  display: flex;

  @media (min-width: 1440px) {
    margin-bottom: 86px;
  }
`;

export const WrapperContainerAll = styled.div`
  display: flex;
  gap: 51px;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 60px 20px;
    flex-wrap: wrap;
    flex-direction: unset;
  }

  @media (min-width: 1440px) {
    gap: 20px;
    flex-wrap: nowrap;
  }
`;

export const WrapperContainer = styled.div`
  display: flex;
  width: 343px;
  padding: 32px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--blue-background-Secondary);
  position: relative;

  @media (min-width: 768px) {
    width: 334px;
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 251px;
    padding: 53px 12px;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const StressIcon = styled(Stress)`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;

  @media (min-width: 1440px) {
    width: 92px;
    height: 92px;
  }
`;

export const MotivationIcon = styled(Motivation)`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;

  @media (min-width: 1440px) {
    width: 92px;
    height: 92px;
  }
`;

export const IntersactiveIcon = styled(Intersactive)`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;

  @media (min-width: 1440px) {
    width: 92px;
    height: 92px;
  }
`;

export const CooperationIcon = styled(Cooperation)`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;

  @media (min-width: 1440px) {
    width: 92px;
    height: 92px;
  }
`;

export const WrapperTitle = styled.h3`
  font-size: 18px;
  line-height: normal;

  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.6;
  }
`;

export const WrapperText = styled.p`
  width: 312px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 1440px) {
    width: 242px;
    font-size: 16px;
  }
`;

export const TextWrapper = styled.span`
  display: block;
`;

export const TextWrapperSecondary = styled.span`
  @media (min-width: 1440px) {
    display: block;
  }
`;
