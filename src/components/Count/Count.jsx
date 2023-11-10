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
  ItemWrapper,
} from './Count.styled';
import { howItWorks } from 'constants/constants';

const Count = () => {
  return (
    <Wrapper id="howItWorks">
      <Container>
        <Title>How does it work?</Title>
        <CountWrapper>
          {howItWorks.map((item, idx, arr) => (
            <ItemWrapper key={idx}>
              <CountWrapperList key={idx}>
                <CountNumber>{item.number}</CountNumber>
                <CountContainer>
                  <CountTitle>{item.title}</CountTitle>
                  <CountList>
                    {item.perks.map(perk => (
                      <CountItem key={perk}>{perk}</CountItem>
                    ))}
                  </CountList>
                </CountContainer>
              </CountWrapperList>
              {idx !== arr.length - 1 ? <Arrow /> : null}
            </ItemWrapper>
          ))}
        </CountWrapper>
      </Container>
    </Wrapper>
  );
};

export default Count;