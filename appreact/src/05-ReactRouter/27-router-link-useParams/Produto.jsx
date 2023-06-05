import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  return (
    <>
      <h1>Produto: {params.id}</h1>
    </>
  );
};

export default Produto;
