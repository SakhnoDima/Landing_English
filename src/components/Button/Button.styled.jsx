import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: ${({ $width }) => {
    if ($width === 'small') {
      return '104px';
    } else if ($width === 'hero') {
      return '343px';
    } else if ($width === 'form') {
      return '294px';
    } else if ($width === 'choose') {
      return '278px';
    }
  }};
  height: 48px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ $type }) =>
    $type === 'origin' ? ' var(--orange-primary)' : 'var(--white)'};
  border-radius: 60px;
  border: 2px solid var(--orange-primary);

  font-family: Anek Bangla;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  background-color: ${props =>
    props.$type === 'origin' ? 'inherit' : 'var(--orange-primary)'};
  &:hover {
    color: ${({ $type }) =>
      $type !== 'origin' ? ' var(--orange-primary)' : 'var(--white)'};
    background-color: ${({ $type }) =>
      $type === 'origin' ? 'var(--orange-primary)' : 'var(--white)'};
  }
  &:active {
    border-color: ${({ $type }) =>
      $type !== 'origin' ? 'var(--orange-primary)' : 'var(--orange-secondary)'};
    background-color: ${({ $type }) =>
      $type === 'origin' ? 'var(--orange-secondary)' : '#FFF2EF'};
  }
  @media screen and (min-width: 768px) {
    width: ${({ $width }) => {
      if ($width === 'small') {
        return '104px';
      } else if ($width === 'hero') {
        return '216px';
      } else if ($width === 'form') {
        return '353px';
      } else if ($width === 'choose') {
        return '264px';
      }
    }};
    font-size: 20px;
    height: 48px;
  }
  @media screen and (min-width: 1440px) {
    width: ${({ $width }) => {
      if ($width === 'small') {
        return '104px';
      } else if ($width === 'hero') {
        return '253px';
      } else if ($width === 'form') {
        return '353px';
      } else if ($width === 'choose') {
        return '239px';
      }
    }};
    font-size: 20px;
    height: 40px;
  }
`;
