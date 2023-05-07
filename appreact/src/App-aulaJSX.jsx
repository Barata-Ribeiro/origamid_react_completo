import React from 'react';

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const nome = 'Barata';
  const random = Math.random();
  const ativo = true;

  function mostrarNome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  }

  const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2019,
    valor: 1000000,
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <>
      {titulo}
      <a className='ativo' href='http://barataribeiro.com/' title='Domínio Pessoal'>
        <p>{mostrarNome(nome, 'Ribeiro')}</p>
      </a>
      <label htmlFor='nome'>Nome</label>
      <input type='text' id='nome' />
      <p className={ativo ? 'ativo' : 'inativo'}>Random: {(random * 1000) / 100}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>

      <h3>
        {carro.marca} {carro.modelo}
      </h3>
      <p>Ano: {carro.ano}</p>
      <p>Valor: {carro.valor}</p>
    </>
  );
};

export default App;
