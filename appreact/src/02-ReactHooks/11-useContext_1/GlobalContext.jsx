import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function addUm() {
    setContar((contar) => contar + 1);
  }

  function subUm() {
    setContar((contar) => contar - 1);
  }

  return (
    <GlobalContext.Provider value={{ nome: 'João', contar, setContar, addUm, subUm }}>
      {children}
    </GlobalContext.Provider>
  );
};
