import React from 'react';
import Input from './03-Formularios/19-validacao/form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  const validateCep = (value) => {
    if (value.length === 0) {
      setError('Informe um CEP válido.');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido.');
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  const handleChange = ({ target }) => {
    // Só vai validar na mudança se o error estiver na tela
    if (error) validateCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateCep(cep)) console.log('Enviou...');
    else console.log('Erro...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='CEP'
        type='text'
        id='cep'
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='00000-000'
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
