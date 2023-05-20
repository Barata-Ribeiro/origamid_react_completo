import React from 'react';
import { GlobalContext } from './GlobalContext';

const ButtonLimpar = () => {
  const { limparDados } = React.useContext(GlobalContext);

  return <button onClick={() => limparDados()}>Limpar</button>;
};

export default ButtonLimpar;
