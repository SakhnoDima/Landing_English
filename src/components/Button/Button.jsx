import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ $type, $size, children, handleClick }) => {
  return (
    <StyledButton $type={$type} $width={$size} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
