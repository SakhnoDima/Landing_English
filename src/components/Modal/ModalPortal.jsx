import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useModal } from 'hooks/ModalContext';
import Form from '../Form/Form';
import PopUp from 'components/PopUp/PopUp';

import { ReactComponent as SvgBgLg } from 'images/svg/form_svg.svg';
import { ReactComponent as SvgBgSm } from 'images/svg/form_sm_svg.svg';
import { ReactComponent as Close } from 'images/svg/x.svg';
import ModalPlaceholder, { Overlay } from './Modal.styled';

const ModalPortal = () => {
  const { closeModal } = useModal();
  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
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
          <PopUp isError={isError} />
        ) : (
          <Form
            setSubmitted={(isError = false) => {
              setIsError(isError);
              setSubmitted(true);
            }}
          />
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
