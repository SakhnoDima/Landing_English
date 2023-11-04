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

//?=========================
// $type={'origin'} для стили для кнопки в Hero и Ок
// $size={'hero'} width для кнопки Hero
// $size={'form'} width для кнопки формы
// $size={'choose'} width для кнопки карты
// $size={'small''} width для кнопки Ок
