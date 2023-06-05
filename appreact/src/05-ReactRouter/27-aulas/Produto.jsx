import React from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  return (
    <>
      <Head title='Produtos' description='Aqui estão nossos produtos...' />

      <h1>Produto: {params.id}</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '8px' }}>
          <li>
            <NavLink to=''>Descrição</NavLink>
          </li>
          <li>
            <NavLink to='avaliacao'>Avaliação</NavLink>
          </li>
          <li>
            <NavLink to='customizado'>Customizado</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Produto;
