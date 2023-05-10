import React from 'react';
import Form from './05-propriedades/Form/Form';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor='red' texto='Meu Título 1'>
        <p>Teste</p>
      </Titulo>
      <Titulo cor='blue' texto='Meu Título 2' />

      <Form />
    </>
  );
};

export default App;
