import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Fetch do login...');
    navigate('/sobre');
  };
  return (
    <>
      <Head title='Login' description='Aqui é onde você irá logar...' />

      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
