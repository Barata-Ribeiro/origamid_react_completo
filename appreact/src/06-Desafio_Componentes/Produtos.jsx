import React from 'react';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo text={'Produtos'} />
      {produtos.map((produto) => (
        <fieldset style={{ margin: '1rem 0' }} key={produto.nome}>
          <h3>{produto.nome}</h3>
          <ul>
            {produto.propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </fieldset>
      ))}
    </section>
  );
};

export default Produtos;
