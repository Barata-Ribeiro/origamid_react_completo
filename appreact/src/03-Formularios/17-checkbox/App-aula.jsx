import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  const handleChange = ({ target }) => {
    // Se o target estiver checado, adiciona a cor à lista de cores
    if (target.checked) setCores([...cores, target.value]);
    // Se o target não estiver checado, remove a cor da lista de cores
    // usando filter para remover a mesma da lista de cores
    else setCores(cores.filter((cor) => cor !== target.value));
  };

  const checkColor = (cor) => {
    // Checa se a cor está na lista de cores para
    // o 'checked' do input
    return cores.includes(cor);
  };

  return (
    <form>
      <label>
        <input
          type='checkbox'
          value='termos'
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label>
      {termos && <p>Aceitou os termos!</p>}
      <hr />
      <label>
        <input
          type='checkbox'
          value='vermelho'
          checked={checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type='checkbox'
          value='verde'
          checked={checkColor('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type='checkbox'
          value='azul'
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
    </form>
  );
};

export default App;
