import React from 'react';
import globalStyles from '../css/Global.module.css';
import styles from '../css/404.module.css';

const NotFound = () => {
  return (
    <main className={globalStyles.container}>
      <div className={styles.error404}>
        <span>X﹏X</span>
        <div>
          <h1>404 | Not Found</h1>
          <p>Desculpe, esta página non ecziste!</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
