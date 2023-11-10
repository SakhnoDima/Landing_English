import LetsTry from 'components/LetsTry/LetsTry';
import Motivation from 'components/Motivation/Motivation';
import { Wrapper } from './WhyMe.styled';
import Container from 'components/Container/Container';

const WhyMe = () => {
  return (
    <Wrapper id='whyMe'>
      <Container>
        <Motivation />
        <LetsTry />
      </Container>
    </Wrapper>
  );
};

export default WhyMe;
