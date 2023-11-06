import React from 'react';
import { StyledContainer } from './Container.styled';

const Container = ({ children, $colorize = false }) => {
  return <StyledContainer $colorize={$colorize}>{children}</StyledContainer>;
};

export default Container;
