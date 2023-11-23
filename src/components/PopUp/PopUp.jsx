import Button from 'components/Button/Button';
import { useModal } from 'hooks/ModalContext';

import PopUpWindow from './PopUp.styled';

const PopUp = ({ isError = false }) => {
  const { closeModal } = useModal();

  return (
    <PopUpWindow $isError={isError}>
      {isError ? (
        <p className="message">
          Ooops...
          <br />
          Something went wrong, try again later.
        </p>
      ) : (
        <p className="message">
          Thank you,
          <br /> I will contact you soon!
        </p>
      )}
      <Button
        $type="origin"
        $isError={isError}
        $size="small"
        handleClick={closeModal}
      >
        Ok
      </Button>
    </PopUpWindow>
  );
};

export default PopUp;
