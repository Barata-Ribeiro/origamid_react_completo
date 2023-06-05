import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Fetch do login...');
    navigate('/sobre');
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
