import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Sempre que mudar a página, realiza uma ação com o useEffect
  React.useEffect(() => {
    console.log('Rota mudou!');
  }, [location]);

  return (
    <header>
      <nav>
        <NavLink to='/' end>
          Home
        </NavLink>{' '}
        | <NavLink to='sobre'>Sobre</NavLink> | <NavLink to='login'>Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
