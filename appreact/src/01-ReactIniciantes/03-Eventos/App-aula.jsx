import React from 'react';

const App = () => {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200vh',
  };

  function handleClick(e) {
    console.log(e.target);
  }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div style={container}>
        <button style={{ marginBottom: '10px' }} onClick={handleClick}>
          Botão handleClick
        </button>
        <button onClick={(event) => alert(event.target.innerText)}>Compre violão!</button>
      </div>
    </>
  );
};

export default App;
