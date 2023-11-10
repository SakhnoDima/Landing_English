import {
  StyledDivBottom,
  StyledDivTop,
  StyledPBottom,
  StyledPTop,
  StyledWrapper,
} from './Chat.styled';

const Chat = () => {
  return (
    <StyledWrapper>
      <StyledDivTop>
        <StyledPTop>Don`t know where to start?</StyledPTop>
      </StyledDivTop>
      <StyledDivBottom>
        <StyledPBottom>Try to answer one of these questions</StyledPBottom>
      </StyledDivBottom>
    </StyledWrapper>
  );
};

export default Chat;
