import { ReactDOM } from 'react';

import { ReactComponent as SvgBg } from '../../images/svg/form_svg.svg';
import { ReactComponent as Close } from '../../images/svg/x.svg';

import Form from '../Form/Form';
import ModalPlaceholder, { Overlay } from './Modal.styled';

export const Modal = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <ModalPlaceholder>
        <Form />
        <Close className="close" />
        <SvgBg className="bg" />
      </ModalPlaceholder>
    </Overlay>
  );
};
