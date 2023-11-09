import Container from 'components/Container/Container';
import {
  CooperationIcon,
  IntersactiveIcon,
  MotivationIcon,
  StressIcon,
  TextWrapper,
  TextWrapperSecondary,
  Title,
  Wrapper,
  WrapperContainer,
  WrapperContainerAll,
  WrapperText,
  WrapperTitle,
} from './Motivation.styled';

const Motivation = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Why me?</Title>
        <WrapperContainerAll>
          <WrapperContainer>
            <StressIcon />
            <WrapperTitle>{`\u201CNo stress, no barriers\u201D`}</WrapperTitle>
            <WrapperText>
              You will overcome your
              <TextWrapperSecondary>language barrier</TextWrapperSecondary>
            </WrapperText>
          </WrapperContainer>
          <WrapperContainer>
            <MotivationIcon />
            <WrapperTitle>{`\u201CMotivation and support\u201D`}</WrapperTitle>
            <WrapperText>
              You will find your own
              <TextWrapperSecondary>
                motivation and support
              </TextWrapperSecondary>
            </WrapperText>
          </WrapperContainer>
          <WrapperContainer>
            <IntersactiveIcon />
            <WrapperTitle>{`\u201CInteractive learning\u201D`}</WrapperTitle>
            <WrapperText>
              No boring exercises from textbooks.
              <TextWrapper> Only interactive quizzes,</TextWrapper> my own
              materials customized
              <TextWrapper>to your needs and level</TextWrapper>
            </WrapperText>
          </WrapperContainer>
          <WrapperContainer>
            <CooperationIcon />
            <WrapperTitle>{`\u201CCooperation\u201D`}</WrapperTitle>
            <WrapperText>
              My knowledge and your commitment will make
              <TextWrapper>miraclesyour language barrier</TextWrapper>
            </WrapperText>
          </WrapperContainer>
        </WrapperContainerAll>
      </Container>
    </Wrapper>
  );
};

export default Motivation;
