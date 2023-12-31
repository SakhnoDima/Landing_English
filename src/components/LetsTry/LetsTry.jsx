import { useModal } from 'hooks/ModalContext';
import { Text, TextSpan, Button, TextSpanSecondary } from './LetsTry.styled';

const LetsTry = () => {
  const { openModal } = useModal();

  return (
    <>
      <Text>
        Today speaking English means better job, more opportunities and higher
        salary.
        <TextSpanSecondary>
          Are you preparing for a job interview in English?
        </TextSpanSecondary>
        <TextSpan>
          Don't feel confident on a business meeting with foreign partners?
        </TextSpan>
        <TextSpanSecondary>
          Contact me to learn what benefits<TextSpan> you can get.</TextSpan>
        </TextSpanSecondary>
      </Text>
      <Button onClick={openModal}>Let`s try !</Button>
    </>
  );
};

export default LetsTry;
