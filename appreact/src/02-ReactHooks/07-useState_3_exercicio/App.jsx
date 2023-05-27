import React from 'react';
import Produtos from './Produtos';

const App = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const estiloBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  async function handleClick(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados do produto');
      }
      const json = await response.json();
      setDados(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Produtos</h1>
      <div style={estiloBtn}>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>SmartPhone</button>
        <button onClick={handleClick}>Tablet</button>
      </div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
