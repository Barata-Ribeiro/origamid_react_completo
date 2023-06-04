import React from 'react';
import Produto from './04-CSS/25-animacoes/Produto';
import './04-CSS/25-animacoes/App.css';

const App = () => {
  const [ativar, setAtivar] = React.useState(false);
  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default App;
