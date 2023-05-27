import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  // function handleClick(e) {
  //   e.preventDefault();
  //   global.setContar(() => global.contar + 1);
  // }

  return (
    <div>
      <h1>Inventor produto: {global.nome}</h1>
      <p>Quantidade: {global.contar}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => global.addUm()}>+</button>
        <button onClick={() => global.subUm()}>-</button>
      </div>
    </div>
  );
};

export default Produto;
