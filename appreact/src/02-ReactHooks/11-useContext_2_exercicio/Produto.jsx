import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  console.log(dados);
  if (dados === null) return null;
  return (
    <div>
      <p>
        Produtos:{' '}
        {dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </p>      
    </div>
  );
};

export default Produto;
