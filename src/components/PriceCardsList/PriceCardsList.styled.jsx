import styled from 'styled-components';

import mobBack from 'images/chat_png/backMob.png';
import tabBack from 'images/chat_png/backTab.png';
import deskBack from 'images/chat_png/backDesk.png';

const cardsPositions = {
  2: 'b',
  3: 'c',
  4: 'd',
};

export const StyledWrap = styled.section`
  padding: 60px 0;
  scroll-margin-block-start: 80px;
  background: url(${mobBack});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding: 80px 0 35px 0;
    background: url(${tabBack});
  }

  @media screen and (min-width: 1440px) {
    background: url(${deskBack});
  }
`;
export const StyledList = styled.ul`
  display: flex;

  flex-direction: column;
  gap: 24px;
  width: 343px;
  margin: 0 auto;
  li {
    transition: transform 0.3s;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas: ${({ $id }) =>
      !$id ? "'a b' 'c d'" : "'a b''a c''a d'"};
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 688px;

    li {
      transition: none;
    }

    .div1 {
      grid-area: ${({ $id }) =>
        $id === 1 ? 'a' : $id ? cardsPositions[$id] : 'a'};
    }
    .div2 {
      grid-area: ${({ $id }) => ($id === 2 ? 'a' : 'b')};
    }
    .div3 {
      grid-area: ${({ $id }) => ($id === 3 ? 'a' : 'c')};
    }
    .div4 {
      grid-area: ${({ $id }) => ($id === 4 ? 'a' : 'd')};
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    height: 433px;

    li {
      transition: transform 0.3s;
    }
  }
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border-radius: 16px;

  h2 {
    color: #1d1e1f;
    font-family: Anek Bangla, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.85;
  }

  p {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: inside;
    margin-bottom: 26px;
    li {
      color: #1d1e1f;
      text-align: center;
      font-family: Anek Bangla, sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  &:nth-child(odd) {
    background-color: var(--background-card-white);
  }

  &:nth-child(even) {
    background-color: var(--background-card-white-blue);
  }

  &:last-child {
    h2 {
      width: 170px;
      line-height: 1.4;
      text-align: center;
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 334px;

    h2 {
      font-size: 18px;
      margin-bottom: 2px;
    }
    &.active {
    }
  }
  @media screen and (min-width: 1440px) {
    h2 {
      font-size: 20px;
    }
    &:nth-child(even) {
      background-color: transparent;
    }

    &:nth-child(odd) {
      background-color: transparent;
    }
    &:hover {
      &:nth-child(odd) {
        background-color: var(--background-card-white);
      }

      &:nth-child(even) {
        background-color: var(--background-card-white-blue);
      }
    }

    &:last-child {
      padding-top: 45px;
      h2 {
        margin-bottom: 0;
      }
    }

    &.active {
      &:nth-child(odd) {
        background-color: var(--background-card-white);
      }

      &:nth-child(even) {
        background-color: var(--background-card-white-blue);
      }

      &:last-child {
        padding-top: 16px;
      }
    }
  }
`;

export const StyledReadMore = styled.button`
  background: none;
  border: none;
  color: #000;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--text-blue);
  }
`;

export const StyledMainParagraph = styled.p`
  text-align: center;
  font-family: Anek Bangla, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const MainParagraphMom = styled.p`
  text-align: center;
  font-family: Anek Bangla, sans-serif;
  font-size: 18px;
  line-height: 1.8;
`;

export const TwoParagraphMom = styled.p`
  text-align: center;
  font-family: Anek Bangla, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`;
export const YouGet = styled.p`
  text-align: center;

  font-family: Anek Bangla, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Price = styled.p`
  text-align: center;
  font-family: Anek Bangla, sans-serif;
  font-size: 16px;
  line-height: 1.3;
`;
