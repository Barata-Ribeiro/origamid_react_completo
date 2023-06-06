import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import globalStyles from './css/Global.module.css';
import styles from './css/Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function getProduto() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      const json = await response.json();
      setProduto(json);
    }
    getProduto();
  }, [params.id]);

  if (!produto) null;

  return (
    <>
      <main className={globalStyles.container}>
        <div className={styles.produto}>
          <img
            src={produto['fotos'][0].src}
            alt={produto['fotos'][0].titulo}
            title={produto['fotos'][0].titulo}
          />
          <div>
            <h1>{produto.nome}</h1>
            <p>{produto.descricao}</p>
            <p>Preço: {produto.preco}</p>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Produto;
