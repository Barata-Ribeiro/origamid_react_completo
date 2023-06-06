import React from 'react';
import globalStyles from './css/Global.module.css';
import styles from './css/Error.module.css';

const Error = ({ message }) => {
  return (
    <main className={globalStyles.container}>
      <div className={styles.error}>
        <span>X﹏X</span>
        <div>
          <h1>ERROR</h1>
          <p>{message}</p>
        </div>
      </div>
    </main>
  );
};

export default Error;
