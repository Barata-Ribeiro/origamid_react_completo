import React from 'react';
import { NavLink } from 'react-router-dom';
import globalStyles from '../css/Global.module.css';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <nav className={globalStyles.container}>
      <ul className={styles.nav}>
        <li className={styles.links}>
          <NavLink to='/' end>
            Produtos
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to='contato'>Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
