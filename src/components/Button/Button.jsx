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

//! $type={'origin'} стилі для кнопки в Hero и Ок

//? $size={'hero'} width для кнопки Hero
//  <Button $type={'origin'} $size={'hero'} handleClick={handleClick}>
//  <p>Book a trial lesson</p>
// </Button>

//? $size={'small''} width для кнопки Ок
//<Button $type={'origin'} $size={'small'} handleClick={handleClick3}>
//<p>ok</p>
//</Button>

//! $type={'secondary'} стилі для кнопки в формі та картках

//? $size={'form'} width для кнопки формы
//<Button $type={'secondary'} $size={'form'} handleClick={handleClick1}>
//<p>Send</p>
//</Button>

//? $size={'choose'} width для кнопки карты
//<Button $type={'secondary'} $size={'choose'} handleClick={handleClick2}>
//<p>Choose</p>
//</Button>
