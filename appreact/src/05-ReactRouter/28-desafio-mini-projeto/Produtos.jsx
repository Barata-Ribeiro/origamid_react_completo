import React from 'react';
import globalStyles from './css/Global.module.css';
import styles from './css/Produtos.module.css';

const Produtos = (props) => {
  return (
    <div className={globalStyles.container}>
      <ul className={styles.produtos}>
        {props.produtos.map((produto) => (
          <li className={styles.produto} key={produto.id}>
            {produto.fotos[0] && <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} title={produto.fotos[0].titulo} />}
            <h2>{produto.nome}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Produtos;
