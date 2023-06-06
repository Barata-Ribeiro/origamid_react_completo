import React from 'react';
import { Link } from 'react-router-dom';
import globalStyles from './css/Global.module.css';
import styles from './css/Produtos.module.css';
import useFetch from './Hooks/useFetch';
import Error from './Error';

const Produtos = () => {
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
    }
    fetchData();
  }, [request]);

  React.useEffect(() => {
    document.title = 'Ranek';
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'Esses são os produtos do Ranek. Escolha um produto para ver mais detalhes.'
      );
  }, []);

  if (error) return <Error message={error} />;
  if (loading)
    return (
      <div className={globalStyles.spinner}>
        <div className={globalStyles.spinnerInner}></div>
      </div>
    );
  if (!data) return null;

  return (
    <div className={globalStyles.container}>
      <ul className={styles.produtos}>
        {data.map((produto) => (
          <li className={styles.produto} key={produto.id}>
            <Link to={`produto/${produto.id}`}>
              {produto.fotos[0] && (
                <img
                  src={produto.fotos[0].src}
                  alt={produto.fotos[0].titulo}
                  title={produto.fotos[0].titulo}
                />
              )}
              <h2>{produto.nome}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
