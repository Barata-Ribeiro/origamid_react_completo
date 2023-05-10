import React from 'react';

const Titulo = ({ text }) => {
  const estilos = {
    color: 'green',
    fontWeight: 'bold',
    fontSize: '2rem',
  };
  return <h1 style={estilos}>{text}</h1>;
};

export default Titulo;
