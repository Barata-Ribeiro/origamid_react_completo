import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/form';

const Teste = () => {
  const active = false;
  if (active) <p>Teste</p>;
  else null;
};

const App = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
