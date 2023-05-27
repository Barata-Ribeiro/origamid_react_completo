import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/notebook'
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleClick}>Notebook</button>
          <button onClick={handleClick}>Smartphone</button>
        </div>
        <p>Produto Preferido: {produto}</p>
        <h1>{data.nome}</h1>
      </>
    );
  else return null;
};

export default App;
