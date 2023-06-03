import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: hsl(${Math.random() * 360}, 100%, 50%);
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
  &:active {
    background: green;
  }
`;

const App = () => {
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 1000;
  template`Esse é o valor ${total}`;

  const [ativo, setAtivo] = React.useState(false);

  const handleClick = () => {
    setAtivo(!ativo);
  };

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre Aqui
      </Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Esse é um notebook muito bom!</Paragrafo>
          <Preco cor='#84e'>R$ 6534,23</Preco>
        </Produto>
      </ProdutosContainer>
      <ProdutosContainer>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Esse smartphone faz até ligações!</Paragrafo>
          <Preco cor='#53d956'>R$ 2345,34</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
