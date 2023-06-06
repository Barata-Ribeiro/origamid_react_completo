import React from 'react';
import { Outlet } from 'react-router-dom';
import globalStyles from './css/Global.module.css';
import styles from './css/Contato.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <>
      <main className={globalStyles.container}>
        <Head title='Contato' description='Entre em contato conosco!' />
        <div className={styles.contato}>
          <img
            src='https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80'
            alt='Máquina de Escrever'
            title='Contato'
          />
          <div>
            <h1>Entre em Contato.</h1>
            <ul className={styles.lista}>
              <li>andre@origamid</li>
              <li>(24) 99999-9999</li>
              <li>Rua Ali Perto, 999</li>
            </ul>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Contato;
