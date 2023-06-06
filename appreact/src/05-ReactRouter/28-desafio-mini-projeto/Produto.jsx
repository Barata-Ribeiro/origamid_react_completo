import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
import Error from './Error';
import Head from './Head';
import globalStyles from './css/Global.module.css';
import styles from './css/Produto.module.css';

const Produto = () => {
  const { data, request, loading, error } = useFetch();
  const params = useParams();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
    }
    fetchData();
  }, [request, params.id]);

  if (error) return <Error message={error} />;
  if (loading)
    return (
      <div className={globalStyles.spinner}>
        <div className={globalStyles.spinnerInner}></div>
      </div>
    );
  if (!data) return null;

  return (
    <>
      <main className={globalStyles.container}>
        <Head title={data.nome} description={data.descricao} />
        <div className={styles.produto}>
          <img
            src={data['fotos'][0].src}
            alt={data['fotos'][0].titulo}
            title={data['fotos'][0].titulo}
          />
          <div>
            <h2>{data.nome}</h2>
            <p className={styles.preco}>R$ {data.preco}</p>
            <p className={styles.descricao}>{data.descricao}</p>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Produto;
