import React from 'react';

// ...props é somente o resto.
const Input = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' {...props} />
    </div>
  );
};

// O type="text" pode ser o padrão do input.
// Mas com o {...props} eu posso substituir os valores.

export default Input;
