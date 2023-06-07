import React from 'react';
import globalStyles from '../css/Global.module.css';
import styles from '../css/Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={globalStyles.container}>
      <div className={styles.footer}>
        <p>
          Ranek © {year} Alguns direitos reservados - Desafio por:{' '}
          <a href='https://www.linkedin.com/in/jo%C3%A3o-mendes-jorge-barata-ribeiro-645073118/'>
            Barata Ribeiro
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
