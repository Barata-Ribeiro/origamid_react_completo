import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './05-ReactRouter/27-router-link/Header';
import Home from './05-ReactRouter/27-router-link/Home';
import Sobre from './05-ReactRouter/27-router-link/Sobre';
import Login from './05-ReactRouter/27-router-link/Login';
import Footer from './05-ReactRouter/27-router-link/Footer';
import NotFound from './05-ReactRouter/27-router-link/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
