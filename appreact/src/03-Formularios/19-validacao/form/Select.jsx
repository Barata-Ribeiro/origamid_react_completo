import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <>
      <label>
        Selecione:
        <select
          style={{ marginLeft: '5px' }}
          value={value}
          onChange={({ target }) => setValue(target.value)}>
          <option value='' disabled>
            Selecione
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Select;
