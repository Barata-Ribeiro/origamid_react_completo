import React from 'react';

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  // Se active for verdadeiro, mostra a pergunta na tela
  if (active === false) return null;
  return (
    <fieldset
      style={{ padding: '2rem', marginBottom: '1rem', border: '2px solid #eee' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>
          <input
            type='radio'
            id={id}
            name={id}
            value={option}
            checked={value === option /* checked compara o valor passado com a opção */}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
