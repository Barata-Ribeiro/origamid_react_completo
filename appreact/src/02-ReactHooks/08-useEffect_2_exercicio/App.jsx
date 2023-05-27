import React from 'react';
import Produtos from './Produtos.jsx';

const App = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  // INDICADO QUE O FETCH SEJA FEITO NO COMPONENTE
  // CASO SEJA UMA APLICAÇÃO REAL

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const estiloBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  React.useEffect(() => {
    // Pega os dados do localStorage. 'produto' é o nome do produto clicado
    const produtoLocalStorage = window.localStorage.getItem('produto');
    // Se o produto existir...
    if (produtoLocalStorage) {
      // Faz o fetch do produto usando a função fetchProduto
      // com o item do localStorage como argumento.
      fetchProduto(produtoLocalStorage);
    }
  }, [produto]);

  // O argumento usado na função, é o value salvo em localStorage
  // Que seria o id do produto.
  async function fetchProduto(produtoId) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoId}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados do produto.');
      }
      const json = await response.json();
      // Os dados que irão preencher o componente Produto.jsx
      setDados(json);
      // Define o estado do produto para ser o produtoId passado para a função
      setProduto(produtoId);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleClick(event) {
    event.preventDefault();
    const produtoId = event.target.innerText;
    window.localStorage.setItem('produto', produtoId);
    // Ativa a função fetchProduto usando o innerText do botão clicado
    // que é o mesmo id do arquivo json
    fetchProduto(produtoId);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <div style={estiloBtn}>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>SmartPhone</button>
        <button onClick={handleClick}>Tablet</button>
      </div>
      {/* Se estiver carregando, mostra o loading */}
      {loading && <p>Carregando...</p>}
      {/* Se ocorrer algum error, mostra o error */}
      {error && <p>{error}</p>}
      {/* Se não estiver carregando e não tiver error, mostra
      então o produto. */}
      {!loading && !error && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
