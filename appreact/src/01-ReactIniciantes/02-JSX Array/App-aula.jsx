import React from 'react';

const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <>
      <ul>
        <h2>Filmes</h2>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <ul>
        <h2>Livros</h2>
        <ul>
          {livros
            .filter(({ ano }) => ano <= 2000)
            .map(({ nome, ano }) => (
              <li key={nome}>
                {nome}, {ano}
              </li>
            ))}
        </ul>
      </ul>
    </>
  );
};

export default App;
