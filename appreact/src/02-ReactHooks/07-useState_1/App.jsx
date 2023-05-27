import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  // const [modal, setModal] = React.useState(() => {
  //   const ativo = window.localStorage.getItem('ativo');
  //   return ativo;
  // });
  const [modal, setModal] = React.useState(false);

  // let ativo = true;
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Jason', idade: 25 });
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];
  // console.log(ativoValor);

  const [items, setItems] = React.useState('teste');

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  }

  function handleAnotherClick() {
    setItems('Outro');
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }} />
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }} />
      <button onClick={handleAnotherClick}>Clicar</button>
      <p>{items}</p>
    </>
  );
};

export default App;
