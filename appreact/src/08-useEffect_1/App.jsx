import React from 'react';
import Produto from '.Produto';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  // console.log('Executou fora.');
  React.useEffect(() => {
    console.log('Executou!');
  }, []);

  const titulo = 'Total:';
  React.useEffect(() => {
    document.title = `${titulo} ${count}`;
    // Precisa sempre passar as dependências para o useEffect
    // a não ser que seja um estado reativo.
  }, [count]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((resposta) => resposta.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * count}</p>
          </div>
        )}
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <div>
        {ativo && <Produto />}
        <button style={{ margin: '5px' }} onClick={() => setAtivo(!ativo)}>
          Ativar
        </button>
      </div>
    </>
  );
};

export default App;
