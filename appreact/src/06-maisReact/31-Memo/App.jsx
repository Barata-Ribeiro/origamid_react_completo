import React from 'react';
import Header from './06-maisReact/31-Memo/Header';

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
