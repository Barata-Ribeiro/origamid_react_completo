import React from 'react';

const App = () => {
  // Faça um fetch (POST) para a API abaixo
  // Para a criação ser aceita é necessário enviar dodos de:
  // nome, email, senha, cep, rua, numero, bairro, cidade e estado
  const inputTypes = {
    nome: 'text',
    email: 'email',
    senha: 'password',
    cep: 'text',
    rua: 'text',
    numero: 'text',
    bairro: 'text',
    cidade: 'text',
    estado: 'text',
  };

  const [form, setForm] = React.useState(
    Object.keys(inputTypes).reduce((acc, input) => {
      return {
        ...acc,
        [input]: '',
      };
    }, {})
  );

  const [msg, setMsg] = React.useState('');

  // Essa é a função utilizado para realizar o POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) setMsg('Usuário cadastrado com sucesso!');
    else setMsg('Erro ao cadastrar usuário!');
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  // Mostre uma mensagem na tela, caso a resposta da API seja positiva

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul style={{ listStyle: 'none', margin: '0px', padding: '0px' }}>
          {/* Retorna uma array com as keys do objeto form
          e faz um map pela array de keys */}
          {Object.keys(form).map((key) => (
            <li key={key}>
              <label htmlFor={key}>
                {/* Escreve a key, seta a primeira letra como maiúscula, 
                somado ao resto da key */}
                {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
                <input
                  type={inputTypes[key]}
                  id={key}
                  value={form[key]}
                  onChange={handleChange}
                />
              </label>
            </li>
          ))}
        </ul>
        <p>{msg}</p>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
