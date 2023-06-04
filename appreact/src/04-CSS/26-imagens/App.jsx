import React from 'react';
import './04-CSS/26-imagens/App.css';
import foto from './04-CSS/26-imagens/img/foto.jpg';
import { ReactComponent as Dog } from './04-CSS/26-imagens/img/dog.svg';
import DogSvg from './04-CSS/26-imagens/img/DogSvg';

const App = () => {
  const [olho, setOlhos] = React.useState(0);

  const handleCLick = () => {
    for (let i = 0; i < 6; i += 1) {
      setTimeout(() => {
        setOlhos(i);
      }, 30 * i);
    }
  };

  return (
    <div>
      <p className='fundo' onClick={handleCLick}></p>
      <Dog />
      <DogSvg color='#84e' olho={olho} />
      <img src={foto} alt='Cachorro' />
    </div>
  );
};

export default App;
