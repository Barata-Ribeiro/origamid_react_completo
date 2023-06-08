import React from 'react';
// import Contato from './06-maisReact/30-lazy-e-suspense/Contato';

const Contato = React.lazy(() => import('./06-maisReact/30-lazy-e-suspense/Contato'));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
