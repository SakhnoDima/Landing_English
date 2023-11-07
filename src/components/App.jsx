import ClientSay from './ClientSay/ClientSay';
import Container from './Container/Container';
import PriceCardsList from './PriceCardsList/PriceCardsList';

export const App = () => {
  return (
    <>
      <Container>
        <PriceCardsList />
        <ClientSay />
      </Container>
    </>
  );
};
