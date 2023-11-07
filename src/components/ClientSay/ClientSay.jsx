import PriceCardsList from 'components/PriceCardsList/PriceCardsList';
import Comments from '../Comments/Comments';
import Container from 'components/Container/Container';

const ClientSay = () => {
  return (
    <section>
      <Container>
        <Comments />
        <PriceCardsList />
      </Container>
    </section>
  );
};

export default ClientSay;
