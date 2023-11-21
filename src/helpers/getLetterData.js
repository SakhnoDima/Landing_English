export const getLetterData = values => {
  const client = {};

  const inputNames = ['name', 'email', 'phone', 'message'];

  inputNames.forEach(name => {
    if (values[name]) {
      client[name] = values[name];
    }
  });
  return client;
};
