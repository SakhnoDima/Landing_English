import { useLayoutEffect } from 'react';

import ClientSay from './ClientSay/ClientSay';
import Count from './Count/Count';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Preload from './Preload/Preload';
import WhyMe from './WhyMe/WhyMe';
import { Modal } from './Modal/Modal';
import ModalProvider from 'hooks/ModalContext';
import { instance } from 'helpers/axios';

export const App = () => {
  useLayoutEffect(() => {
    instance.get('/wakeup');
  }, []);

  return (
    <ModalProvider>
      <Modal />
      <Preload />
      <Header />
      <Hero />
      <Count />
      <WhyMe />
      <ClientSay />
      <Footer />
    </ModalProvider>
  );
};
