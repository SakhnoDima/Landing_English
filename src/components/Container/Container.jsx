import React from 'react';
import { StyledContainer } from './Container.styled';

const Container = ({ children, $colorize = false, hero = false }) => {
  return <StyledContainer $hero={hero} $colorize={$colorize}>{children}</StyledContainer>;
};

export default Container;
