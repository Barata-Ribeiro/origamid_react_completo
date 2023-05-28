import React from 'react';

const App = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const [cores, setCores] = React.useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) setCores([...cores, target.value]);
    else setCores(cores.filter((cor) => cor !== target.value));
  };

  const checkColor = (cor) => {
    return cores.includes(cor);
  };

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  return (
    <form>
      {coresArray.map((cor) => (
        /* pode ser utilizado style={{textTransform: 'capitalize'}}
      segundo o professor */
        <label key={cor}>
          <input
            type='checkbox'
            value={cor}
            checked={checkColor(cor)}
            onChange={handleChange}
          />
          {/* Seta a primeira letra como maiúscula */}
          {cor.charAt(0).toUpperCase() + cor.slice(1)}
        </label>
      ))}
    </form>
  );
};

export default App;
