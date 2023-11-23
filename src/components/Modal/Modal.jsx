import { AnimatePresence } from 'framer-motion';

import { useModal } from 'hooks/ModalContext';

import ModalPortal from './ModalPortal';

export const Modal = () => {
  const { isOpen } = useModal();

  return <AnimatePresence>{isOpen && <ModalPortal />}</AnimatePresence>;
};
