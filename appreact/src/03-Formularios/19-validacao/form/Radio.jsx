import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type='radio'
            name={option}
            id={option}
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </>
  );
};

export default Radio;
