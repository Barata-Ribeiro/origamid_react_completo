import React from 'react';

// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const comprasTotal = () => {
    const total = dados.compras.reduce((acc, atual) => {
      const precoAtual = Number(atual.preco.replace('R$', '').trim());
      return acc + precoAtual;
    }, 0);

    if (total >= 10000) dados.ativa = false;
    else dados.ativa = true;

    return total;
  };

  const estiloAtivo = {
    color: 'green',
    fontWeight: 'bold',
  };

  const estiloInativo = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: <span style={dados.ativa ? estiloAtivo : estiloInativo}>{dados.ativa ? 'Ativo' : 'Inativo'}</span>
      </p>
      <p>Total gasto: R$ {comprasTotal()}</p>
      {!dados.ativa && <p style={{ fontWeight: 'bold' }}>Você está gastando muito!</p>}
    </>
  );
};

export default App;
