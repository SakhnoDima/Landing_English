import Button from 'components/Button/Button';
import { useModal } from 'hooks/ModalContext';

import PopUpWindow from './PopUp.styled';

const PopUp = () => {
  const { closeModal } = useModal();

  return (
    <PopUpWindow>
      <p className="message">
        Thank you,
        <br /> I will contact you soon!
      </p>
      <Button $type="origin" $size="small" handleClick={closeModal}>
        Ok
      </Button>
    </PopUpWindow>
  );
};

export default PopUp;
