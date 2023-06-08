import React from 'react';
import Exemplo from './06-maisReact/32-useReducer/Exemplo';

const reducer = (state, action) => {
  // if (action === 'increment') {
  //   return (state += 1);
  // }
  // if (action === 'decrement') {
  //   return (state -= 1);
  // }

  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Error action não existe!');
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => dispatch('INCREMENT')}>+</button>
        <button onClick={() => dispatch('DECREMENT')}>-</button>
      </div>
      <p>{state}</p>
      <Exemplo />
    </>
  );
};

export default App;
