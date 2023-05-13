import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setCount(count + 1);
    setItems([...items, `Item ${count + 1}`]);
  }

  return (
    <>
      <h1>Hello World</h1>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{count}</button>
    </>
  );
};

export default App;
