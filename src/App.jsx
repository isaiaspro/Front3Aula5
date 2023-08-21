import React from 'react';
import styles from './App.module.css'; // Certifique-se de importar seus estilos corretamente
import Produto from './components/Produto'; // Importe o componente de Produto

const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function App() {
  return (
    <>
      <main className={styles.main}>
        <section id="card" className={styles.cardSection}>
          <h2 className={styles.cardSectionTitle}>Produtos</h2>
          <div className={styles.cardContainer}>
            {produtos && (
              produtos.map((produto, index) => {
                return (
                  <>
                  <Produto key={index} produto={produto} />
                  </>
                );
              })
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
