import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Essa é a home.</p>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '8px' }}>
        <li>
          <Link to='produto/notebook'>Notebook</Link>
        </li>
        <li>
          <Link to='produto/smartphone'>Smartphone</Link>
        </li>
        <li>
          <Link to='produto/tablet'>Tablet</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
