import PriceCardsList from 'components/PriceCardsList/PriceCardsList';
import Comments from '../Comments/Comments';
import Container from 'components/Container/Container';

const ClientSay = () => {
  return (
    <Container>
      <Comments />
      <PriceCardsList />
    </Container>
  );
};

export default ClientSay;
