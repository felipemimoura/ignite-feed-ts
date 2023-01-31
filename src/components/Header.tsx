import styles from "./Header.module.css";

import igniteSymbol from '../assets/ignite-simbol.svg'
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteSymbol} alt="Dois tringulos sobrepostos virados para cima a esquerda" />
      <h1>Ignite Feed</h1>
    </header>
  );
};
