import React from 'react';

// Fica para a referencia...
function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };
  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  // set1 irá ser criada várias vezes
  console.log('set1:', set1);
  // set2 irá ser criada apenas uma vez
  console.log('set2:', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = React.useState(0);

  // useMemo
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    console.log('Aconteceu o memo...');
    return localItem;
  }, []);

  // Uso real para useMemo, com um calculo bem lento
  const t1 = performance.now();
  const valorOperacao = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  // const handleClick = React.useCallback(() => {
  //   setCount((count) => count + 1);
  // }, []);

  return (
    <>
      <div>
        <Produto />
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </>
  );
};

export default App;
