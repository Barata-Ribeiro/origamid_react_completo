import React from 'react';

const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current.currentTime);
  });

  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  const handleClick = () => {
    // Espalha os comentários e, adiciona um novo comentário.
    setComentarios([...comentarios, input]);
    // Seta o valor do input para vazio.
    setInput('');
    inputElement.current.focus();
  };

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  const handleClickCarrinho = () => {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho!');

    // Dessa forma irá sempre esperar os 2 segundos
    // não importa quantas vezes eu clique no botão.
    clearTimeout(timeoutRef.current);
    // Precisa ser o >>>CURRENT<<<
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
    console.log(timeoutRef.current);
  };

  return (
    <>
      <h1>Olá, Mundo!</h1>

      {/* useRef em input */}
      <div>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
        <input
          type='text'
          ref={inputElement}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button style={{ marginTop: '5px' }} onClick={handleClick}>
          Enviar
        </button>
      </div>

      {/* useRef em setTimeout */}
      <div>
        <p>{notificacao}</p>
        <button style={{ marginTop: '10px' }} onClick={handleClickCarrinho}>
          Adicionar Carrinho {carrinho}
        </button>
      </div>

      {/* useRef em video */}
      <video ref={video} />
    </>
  );
};

export default App;
