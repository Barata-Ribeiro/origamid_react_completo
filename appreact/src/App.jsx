import React from 'react';
import Input from './03-Formularios/18-componentes/form/Input';
import Select from './03-Formularios/18-componentes/form/Select';
import Radio from './03-Formularios/18-componentes/form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('vermelho');
  const [frutas, setFrutas] = React.useState('limão');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['vermelho', 'verde', 'azul']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['limão', 'maçã', 'morango']}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={['smartphone', 'notebook', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} required />
      <button>Enviar</button>
    </form>
  );
};

export default App;
