import Button from './Button/Button';

export const App = () => {
  const handleClick = () => {
    console.log('Ok');
  };
  return (
    <div>
      <Button $type={'origin'} $size={'hero'} handleClick={handleClick}>
        <p>Book a trial lesson</p>
      </Button>
      <Button $type={'secondary'} $size={'form'} handleClick={handleClick}>
        <p>Send</p>
      </Button>
      <Button $type={'secondary'} $size={'choose'} handleClick={handleClick}>
        <p>Choose</p>
      </Button>
      <Button $type={'origin'} $size={'small'} handleClick={handleClick}>
        <p>ok</p>
      </Button>
    </div>
  );
};
