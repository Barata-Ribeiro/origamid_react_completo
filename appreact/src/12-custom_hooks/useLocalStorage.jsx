import React from 'react';

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    // Já inicia o useState buscando a chave no localStorage
    const local = window.localStorage.getItem(key);
    // Verifica se a chave existe e retorna o valor
    // se não existir retorna o valor inicial
    return local ? local : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
