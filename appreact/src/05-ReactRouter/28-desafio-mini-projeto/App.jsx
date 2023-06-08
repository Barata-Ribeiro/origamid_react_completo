import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './05-ReactRouter/28-desafio-mini-projeto/components/Header';
import Produtos from './05-ReactRouter/28-desafio-mini-projeto/components/Produtos';
import Contato from './05-ReactRouter/28-desafio-mini-projeto/components/Contato';
import Produto from './05-ReactRouter/28-desafio-mini-projeto/components/Produto';
import NotFound from './05-ReactRouter/28-desafio-mini-projeto/components/NotFound';
import Footer from './05-ReactRouter/28-desafio-mini-projeto/components/Footer';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='contato' element={<Contato />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
