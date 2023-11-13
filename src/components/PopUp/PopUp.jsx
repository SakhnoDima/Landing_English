import Button from 'components/Button/Button';
import PopUpWindow from './PopUp.styled';
import { useModal } from 'hooks/ModalContext';

const PopUp = () => {
  const { closeModal } = useModal();

  return (
    <PopUpWindow>
      <p className="message">Thank you,<br /> I will contact you soon!</p>
      <Button $type="origin" $size="small" handleClick={closeModal}>
        Ok
      </Button>
    </PopUpWindow>
  );
};

export default PopUp;
