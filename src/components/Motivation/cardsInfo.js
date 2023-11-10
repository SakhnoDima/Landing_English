import React from 'react';

import {
  StressIcon,
  CooperationIcon,
  IntersactiveIcon,
  MotivationIcon,
  WrapperText,
  TextWrapperSecondary,
  TextWrapper,
} from './Motivation.styled';

const cards = [
  {
    icon: React.createElement(StressIcon),
    title: 'No stress, no barriers',
    description: (
      <WrapperText>
        You will overcome your
        <TextWrapperSecondary>language barrier</TextWrapperSecondary>
      </WrapperText>
    ),
  },
  {
    icon: React.createElement(MotivationIcon),
    title: 'Motivation and support',
    description: (
      <WrapperText>
        You will find your own
        <TextWrapperSecondary>motivation and support</TextWrapperSecondary>
      </WrapperText>
    ),
  },
  {
    icon: React.createElement(IntersactiveIcon),
    title: 'Interactive learning',
    description: (
      <WrapperText>
        No boring exercises from textbooks.
        <TextWrapper> Only interactive quizzes,</TextWrapper> my own materials
        customized
        <TextWrapper>to your needs and level</TextWrapper>
      </WrapperText>
    ),
  },
  {
    icon: React.createElement(CooperationIcon),
    title: 'Cooperation',
    description: (
      <WrapperText>
        My knowledge and your commitment will make
        <TextWrapper>miracles</TextWrapper>
      </WrapperText>
    ),
  },
];

export default cards;