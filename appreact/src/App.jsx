import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './05-ReactRouter/27-router-link-useParams/Header';
import Home from './05-ReactRouter/27-router-link-useParams/Home';
import Sobre from './05-ReactRouter/27-router-link-useParams/Sobre';
import Login from './05-ReactRouter/27-router-link-useParams/Login';
import Produto from './05-ReactRouter/27-router-link-useParams/Produto';
import Footer from './05-ReactRouter/27-router-link-useParams/Footer';
import NotFound from './05-ReactRouter/27-router-link-useParams/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id' element={<Produto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
