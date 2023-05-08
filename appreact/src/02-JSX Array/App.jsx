import React from 'react';

const App = () => {
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const precoLimpo = produtos.filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500);

  return (
    <>
      <section>
        <ul style={{ listStyle: 'none' }}>
          {precoLimpo.map(({ id, nome, preco, cores }) => (
            <li key={id}>
              <h1>{nome}</h1>
              <span>Preço: {preco}</span>
              <ul>
                {cores.map((cor) => (
                  <li style={{ backgroundColor: cor, color: 'white', maxWidth: '200px' }} key={cor}>
                    {cor}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
