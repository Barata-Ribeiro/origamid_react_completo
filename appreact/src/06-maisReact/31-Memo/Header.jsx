import React from 'react';

const Header = () => {
  console.log('renderizou...');
  return (
    <header>
      <h1>Header Aqui</h1>
    </header>
  );
};

export default React.memo(Header);
