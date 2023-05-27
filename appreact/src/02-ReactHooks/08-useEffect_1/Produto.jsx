import React from 'react';

const Produto = () => {
  React.useEffect(() => {
    const handleScroll = (event) => console.log(event);
    window.addEventListener('scroll', handleScroll);
    // Remove a função handleScroll quando o componente for destruído.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // O método abaixo executa o evento várias vezes.
  // Não é o correto!
  // const handleScroll = (event) => console.log(event);
  // window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div style={{ height: '200vh' }}>
        <p>Meu Produto</p>
      </div>
    </>
  );
};

export default Produto;
