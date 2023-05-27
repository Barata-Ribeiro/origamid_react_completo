import React from 'react';

const App = () => {
  // Essa forma é bastante simples. Criando um estado para cada input...
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        id='nome'
        name='nome'
        type='text'
        value={form.nome}
        onChange={handleChange}
        // onChange={(e) => setNome(e.target.value)} // Feito da forma simples
      />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        name='email'
        type='email'
        placeholder='contato@email.com'
        value={form.email}
        required
        onChange={handleChange}
        // onChange={(e) => setEmail(e.target.value)} // Feito da forma simples
      />
      <button style={{ marginTop: '1rem' }}>Enviar</button>
    </form>
  );
};

export default App;
