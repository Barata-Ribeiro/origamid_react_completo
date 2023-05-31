import React from 'react';

const Input = ({ id, label, onChange, value, type, onBlur, placeholder, error }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <input
          id={id}
          name={id}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
        />
        {error && <p>{error}</p>}
      </label>
    </>
  );
};

export default Input;
