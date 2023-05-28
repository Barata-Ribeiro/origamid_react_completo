import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  const handleChange = ({ target }) => {
    setProduto(target.value);
  };

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type='radio'
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          value='vermelho'
        />
        Vermelho
      </label>
      <label>
        <input
          type='radio'
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'verde'}
          value='verde'
        />
        Verde
      </label>
      <label>
        <input
          type='radio'
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
          value='azul'
        />
        Azul
      </label>
      <p>Cor selecionada: {cor}</p>
      <h2>Produtos</h2>
      <label>
        <input
          type='radio'
          onChange={handleChange}
          checked={produto === 'notebook'}
          value='notebook'
        />
        Notebook
      </label>
      <label>
        <input
          type='radio'
          onChange={handleChange}
          checked={produto === 'smartphone'}
          value='smartphone'
        />
        Smartphone
      </label>
      <label>
        <input
          type='radio'
          onChange={handleChange}
          checked={produto === 'tablet'}
          value='tablet'
        />
        Tablet
      </label>
      <p>Produto selecionado: {produto}</p>
    </form>
  );
};

export default App;
