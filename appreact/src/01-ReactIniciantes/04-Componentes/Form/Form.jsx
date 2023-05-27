import React from 'react';
import Input from './input';
import Button from './button';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor='nome'>Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor='email'>Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
