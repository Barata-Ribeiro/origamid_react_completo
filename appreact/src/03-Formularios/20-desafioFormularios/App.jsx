import React from 'react';
import Radio from './03-Formularios/20-desafioFormularios/forms/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  // Utiliza o reduce pois se quiser adicionar mais perguntas, ids serão gerados automaticamente no estado 'answer'
  const [answers, setAnswers] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      acc[pergunta.id] = '';
      return { ...acc };
    }, {})
  );
  const [question, setQuestion] = React.useState(0);
  const [result, setResult] = React.useState(null);

  const handleChange = ({ target }) => {
    setAnswers({
      ...answers,
      [target.id]: target.value,
    });
  };

  const resultadoFinal = () => {
    const corretas = perguntas.filter(({ id, resposta }) => answers[id] === resposta);
    setResult(`Você acertou ${corretas.length} de ${perguntas.length} perguntas.`);
  };

  const handleClick = () => {
    if (question < perguntas.length - 1) setQuestion(question + 1);
    else {
      // Adiciona um a pergunta para sumir com as perguntas anteriores da tela
      // mostrando apenas o resultado final.
      setQuestion(question + 1);
      resultadoFinal();
    }
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            active={question === index}
            key={pergunta.id}
            value={answers[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {result ? <p>{result}</p> : <button onClick={handleClick}>Próxima</button>}
      </form>
    </>
  );
};

export default App;
