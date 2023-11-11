import cards from './cardsInfo';
import {
  Title,
  WrapperContainer,
  WrapperContainerAll,
  WrapperTitle,
} from './Motivation.styled';

const Motivation = () => {
  return (
    <>
      <Title>Why me?</Title>
      <WrapperContainerAll>
        {cards.map((item, idx) => (
          <WrapperContainer key={idx} idx={idx}>
            {item.icon}
            <WrapperTitle>{`\u201C${item.title}\u201D`}</WrapperTitle>
            {item.description}
          </WrapperContainer>
        ))}
      </WrapperContainerAll>
    </>
  );
};

export default Motivation;
