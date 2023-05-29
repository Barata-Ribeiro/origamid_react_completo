import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  const handleChange = ({ target }) => {
    if (target.checked) setValue([...value, target.value]);
    else setValue(value.filter((v) => v !== target.value));
  };

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type='checkbox'
            name={option}
            value={option}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
