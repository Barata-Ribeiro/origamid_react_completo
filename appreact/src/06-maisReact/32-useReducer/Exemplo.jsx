import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVER':
      return state.filter((item) => item !== action.content);
    case 'ADICIONAR':
      return [...state, action.content];
    default:
      throw new Error();
  }
};

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'REMOVER', content: 'Banana' })}>
        Remover Banana
      </button>
      <button onClick={() => dispatch({ type: 'ADICIONAR', content: 'Limão' })}>
        Adicionar Limão
      </button>
      {state.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Exemplo;
