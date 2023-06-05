import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      {/* <Head title='Home' description='Essa é a descrição da home.' /> */}
      <Helmet>
        <title>Pindaíba | Home</title>
        <meta name='description' content='Essa é a descrição da home.' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
          integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'
          crossOrigin='anonymous'></link>
      </Helmet>
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
