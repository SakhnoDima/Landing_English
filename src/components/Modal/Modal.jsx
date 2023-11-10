import { ReactComponent as SvgBg } from '../../images/svg/form_svg.svg';
import { ReactComponent as Close } from '../../images/svg/x.svg';

import Form from '../Form/Form';
import ModalPlaceholder from './Modal.styled';

export const Modal = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: 'rgba(112, 112, 112, 0.5)',
      }}
    >
      <ModalPlaceholder>
        <Form />
        <Close className='close' />
        <SvgBg className='bg' />
      </ModalPlaceholder>
    </div>
  );
};
