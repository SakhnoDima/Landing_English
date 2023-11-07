const { default: styled } = require('styled-components');

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
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
    cursor: pointer;
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

    &.active {
      &:nth-child(odd) {
        background-color: var(--background-card-white);
      }

      &:nth-child(even) {
        background-color: var(--background-card-white-blue);
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
