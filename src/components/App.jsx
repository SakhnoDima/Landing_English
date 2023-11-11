import ClientSay from './ClientSay/ClientSay';
import Count from './Count/Count';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Preload from './Preload/Preload';
import WhyMe from './WhyMe/WhyMe';

export const App = () => {

  return (
    <>
      <Preload />
      <Header />
      <Hero />
      <Count />
      <WhyMe />
      <ClientSay />
      <Footer />
    </>
  );
};
