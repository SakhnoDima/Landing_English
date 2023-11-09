import styled from 'styled-components';
import { breakpoints } from '../../constants/constants';

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.mob}px;
  background-color: ${({ $colorize }) =>
    $colorize === true ? ' var(--background-white)' : ' '};
  padding: 0 16px;
  @media screen and (min-width: ${breakpoints.tab}px) {
    max-width: ${breakpoints.tab}px;
    padding: 0 40px;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    max-width: ${breakpoints.desk}px;
    padding: ${({ $hero }) => ($hero ? '0px 40px 0px 120px' : '0px 120px')};
  }
`;
