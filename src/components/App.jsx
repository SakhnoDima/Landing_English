import ClientSay from './ClientSay/ClientSay';
import Count from './Count/Count';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import WhyMe from './WhyMe/WhyMe';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Count />
      <WhyMe />
      <ClientSay />
      <Footer />
    </>
  );
};
