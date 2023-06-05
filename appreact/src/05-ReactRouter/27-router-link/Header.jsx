import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
