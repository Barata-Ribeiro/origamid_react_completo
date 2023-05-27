import React from 'react';
import { GlobalStorage } from './11-useContext_2_exercicio/GlobalContext';
import Produto from './11-useContext_2_exercicio/Produto';
import ButtonLimpar from './11-useContext_2_exercicio/ButtonLimpar';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <ButtonLimpar />
    </GlobalStorage>
  );
};

export default App;
