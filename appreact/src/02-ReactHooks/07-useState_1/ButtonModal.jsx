import React from 'react';

const ButtonModal = ({ setModal }) => {
  const buttonStyle = {
    margin: '10px',
    color: '#333',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  function handleClick() {
    setModal((ativo) => !ativo);
  }

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Abrir
    </button>
  );
};

export default ButtonModal;
