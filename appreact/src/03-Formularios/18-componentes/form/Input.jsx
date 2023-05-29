import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <input
          type='text'
          id={id}
          name={id}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
