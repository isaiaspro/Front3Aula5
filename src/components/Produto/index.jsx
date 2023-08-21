import styles from './Produto.module.css'

export default function Produto({ produto }) {
  return (
    <li>
    <img className={styles.cardUserImage} src={produto.image} />
   <h3 className={styles.preco}>{produto.preco}</h3>
    <h2 className={styles.title}>{produto.nome}</h2>
  </li>
  )
}