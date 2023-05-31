import React from 'react';

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <input
          type='text'
          id={id}
          name={id}
          onChange={onChange}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
