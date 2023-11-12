import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscription, setSubscription] = useState('none');

  const openModal = (sub = 'none') => {
    setIsOpen(true);
    setSubscription(sub);
  };

  const toggleModal = () => setIsOpen(prev => !prev);

  const closeModal = () => {
    setIsOpen(false);
    setSubscription('none');
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, toggleModal, subscription }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
