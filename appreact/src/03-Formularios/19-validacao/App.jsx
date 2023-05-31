import React from 'react';
import Input from './03-Formularios/19-validacao/form/Input';
import useForm from './03-Formularios/19-validacao/Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou...');
    } else {
      console.log('Formulário inválido');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label='Nome' id='nome' type='text' {...nome} />
      <Input label='Sobrenome' id='sobrenome' type='text' {...sobrenome} />
      <Input label='CEP' id='cep' type='text' placeholder='00000-000' {...cep} />
      <Input
        label='Email'
        id='email'
        type='email'
        placeholder='contato@email.com'
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
