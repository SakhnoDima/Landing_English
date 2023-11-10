import Container from 'components/Container/Container';
import {
  CountContainer,
  CountList,
  CountNumber,
  CountTitle,
  CountWrapper,
  Title,
  Wrapper,
  CountItem,
  CountWrapperList,
  Arrow,
} from './Count.styled';

const Count = () => {
  return (
    <Wrapper id="howItWorks">
      <Container>
        <Title>How does it work?</Title>
        <CountWrapper>
          <CountWrapperList>
            <CountNumber>01</CountNumber>
            <CountContainer>
              <CountTitle>Evaluation of...</CountTitle>
              <CountList>
                <CountItem>your current level</CountItem>
                <CountItem>your strong and weak points in learning</CountItem>
                <CountItem>your professional and private needs</CountItem>
              </CountList>
            </CountContainer>
          </CountWrapperList>
          <Arrow />
          <CountWrapperList>
            <CountNumber>02</CountNumber>
            <CountContainer>
              <CountTitle>You get...</CountTitle>
              <CountList>
                <CountItem>personal learning program</CountItem>
                <CountItem>
                  achievement of your goals within the deadline
                </CountItem>
              </CountList>
            </CountContainer>
          </CountWrapperList>
          <Arrow />
          <CountWrapperList>
            <CountNumber>03</CountNumber>
            <CountContainer>
              <CountTitle>Result...</CountTitle>
              <CountList>
                <CountItem>satisfaction of a learning process</CountItem>
                <CountItem>achievement of your goals</CountItem>
                <CountItem>self-esteem</CountItem>
                <CountItem>confidence and language fluency</CountItem>
              </CountList>
            </CountContainer>
          </CountWrapperList>
        </CountWrapper>
      </Container>
    </Wrapper>
  );
};

export default Count;
