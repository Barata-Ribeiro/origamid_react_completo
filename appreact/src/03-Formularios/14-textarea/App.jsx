import React from 'react';

const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id='mensagem'
        value={mensagem}
        rows='5'
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
};

export default App;
