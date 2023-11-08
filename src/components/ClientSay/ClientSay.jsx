import PriceCardsList from 'components/PriceCardsList/PriceCardsList';
import Comments from 'components/Comments/Comments';
import Company from 'components/Company/Company';

const ClientSay = () => {
  return (
    <section>
      <Comments />
      <Company />
      <PriceCardsList />
    </section>
  );
};

export default ClientSay;
