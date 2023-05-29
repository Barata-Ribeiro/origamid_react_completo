import React from 'react';
import Input from './03-Formularios/18-componentes/form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} required />
      <button>Enviar</button>
    </form>
  );
};

export default App;
