import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { ReactComponent as SvgBg } from '../../images/svg/form_svg.svg';
import { ReactComponent as Close } from '../../images/svg/x.svg';

import ModalPlaceholder, { Overlay } from './Modal.styled';
import Form from '../Form/Form';
import { useModal } from 'hooks/ModalContext';

const ModalPortal = () => {
  const { closeModal } = useModal();

  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    const handleKeyDown = event => {
      if (event.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflowY = 'auto';
    };
  }, [closeModal]);

  return createPortal(
    <Overlay handleClick={closeModal}>
      <ModalPlaceholder>
        <Form />
        <Close className="close" onClick={closeModal} />
        <SvgBg className="bg" />
      </ModalPlaceholder>
    </Overlay>,
    document.body
  );
};

export default ModalPortal;
