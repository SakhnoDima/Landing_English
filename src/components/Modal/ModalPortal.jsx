import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as SvgBgLg } from 'images/svg/form_svg.svg';
import { ReactComponent as SvgBgSm } from 'images/svg/form_sm_svg.svg';
import { ReactComponent as Close } from 'images/svg/x.svg';

import ModalPlaceholder, { Overlay } from './Modal.styled';
import Form from '../Form/Form';
import { useModal } from 'hooks/ModalContext';
import PopUp from 'components/PopUp/PopUp';

const ModalPortal = () => {
  const { closeModal } = useModal();
  const [isSubmitted, setSubmitted] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

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
      <ModalPlaceholder $isPopUp={isSubmitted}>
        {isSubmitted ? (
          <PopUp />
        ) : (
          <Form setSubmitted={() => setSubmitted(true)} />
        )}
        <Close className="close" onClick={closeModal} />
        {isDesktop && !isSubmitted ? (
          <SvgBgLg className="bg" />
        ) : (
          <SvgBgSm className="bg" />
        )}
      </ModalPlaceholder>
    </Overlay>,
    document.body
  );
};

export default ModalPortal;
