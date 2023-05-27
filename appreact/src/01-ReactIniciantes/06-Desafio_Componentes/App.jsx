import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;
  let Page;
  if (pathname === '/produtos') Page = Produtos;
  else Page = Home;

  return (
    <>
      <Header />
      <Page />
    </>
  );
};

export default App;
