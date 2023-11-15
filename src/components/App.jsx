import ModalProvider from 'hooks/ModalContext';
import ClientSay from './ClientSay/ClientSay';
import Count from './Count/Count';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Preload from './Preload/Preload';
import WhyMe from './WhyMe/WhyMe';
import { Modal } from './Modal/Modal';
import { instance } from 'helpers/axios';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    instance.get('/sendemail').catch(error => {
      console.error();
    });
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
