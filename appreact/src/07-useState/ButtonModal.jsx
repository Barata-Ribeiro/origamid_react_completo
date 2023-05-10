import React from 'react';

const ButtonModal = ({ setModal }) => {
  const buttonStyle = {
    margin: '10px',
    color: '#333',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <button onClick={() => setModal(true)} style={buttonStyle}>
      Abrir
    </button>
  );
};

export default ButtonModal;
