import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './05-ReactRouter/27-aulas/Header';
import Home from './05-ReactRouter/27-aulas/Home';
import Sobre from './05-ReactRouter/27-aulas/Sobre';
import Login from './05-ReactRouter/27-aulas/Login';
import Produto from './05-ReactRouter/27-aulas/Produto';
import ProdutoDescricao from './05-ReactRouter/27-aulas/Produto/ProdutoDescricao';
import ProdutoAvaliacao from './05-ReactRouter/27-aulas/Produto/ProdutoAvaliacao';
import ProdutoCustomizado from './05-ReactRouter/27-aulas/Produto/ProdutoCustomizado';
import Footer from './05-ReactRouter/27-aulas/Footer';
import NotFound from './05-ReactRouter/27-aulas/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id' element={<Produto />}>
          <Route path='' element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<ProdutoAvaliacao />} />
          <Route path='customizado' element={<ProdutoCustomizado />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
