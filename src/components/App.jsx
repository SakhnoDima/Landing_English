import Container from './Container/Container';

export const App = () => {
  return (
    <>
      <Container $colorize={true}>
        <div>ok1</div>
      </Container>
      <Container>
        <div>ok2</div>
      </Container>
    </>
  );
};
