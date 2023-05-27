import React from 'react';

const Produtos = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img
        style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '400px' }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </>
  );
};

export default Produtos;
