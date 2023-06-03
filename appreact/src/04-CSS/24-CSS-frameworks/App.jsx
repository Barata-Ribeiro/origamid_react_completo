import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <>
      <div className='card bg-dark text-white m-5' style={{ maxWidth: '18rem' }}>
        <div className='card-header'>Notebook (BOOTSTRAP PURO)</div>
        <div className='card-body'>
          <h5 className='card-title'>R$ 2500</h5>
          <p className='card-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure est in ex! In
            modi facere soluta...
          </p>
        </div>
      </div>
      <Card bg='dark' text='white' className='m-5' style={{ maxWidth: '18rem' }}>
        <Card.Header>Notebook (REACT-BOOTSTRAP)</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure est in ex! In
            modi facere soluta...
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default App;
