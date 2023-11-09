import styled from 'styled-components';
import { ReactComponent as ArrowFlexble } from 'images/svg/arrow.svg';

export const Wrapper = styled.div`
  background-color: var(--background-white);
  padding: 32px 0px;

  @media (min-width: 768px) {
    padding: 40px 0px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 42px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    gap: 0px;
    align-items: center;
  }
`;

export const CountNumber = styled.p`
  color: transparent;
  -webkit-text-stroke: 1px var(--border-white-blue);

  font-weight: 600;
  font-size: 50px;
  font-family: Archivo Black;

  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    height: 72px;
    font-size: 72px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: 3px solid var(--border-white-blue);
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 273px;
    width: 216px;
    padding: 32px 16px;
    gap: 8px;
  }

  @media (min-width: 1440px) {
    height: 252px;
    width: 335px;
    padding: 24px 54px;
    gap: 8px;
  }
`;

export const CountTitle = styled.h3`
  color: var(--text-blue);
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const CountList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: normal;
  list-style-type: disc;
  padding-left: 20px;

  @media (min-width: 1440px) {
    padding-left: 10px;
    gap: 4px;
  }
`;

export const CountItem = styled.li`
  color: var(--text-blue);
  font-size: 14px;

  @media (min-width: 768px) {
    width: 155px;
    line-height: normal;
  }

  @media (min-width: 1440px) {
    width: 220px;
    font-size: 16px;
  }
`;

export const CountWrapperList = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    gap: 0px;
  }
`;

export const Arrow = styled(ArrowFlexble)`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }
`;
