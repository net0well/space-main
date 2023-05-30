import React from 'react';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import styles from './Rodape.module.scss';

export default function Rodape() {
  return (
    <div className={styles.rodape}>
      <div className={styles.rodape__imagem}>
        <a href="/"><img src={facebook} alt="Ícone do facebook" /></a>
        <a href="/"><img src={twitter} alt="Ícone do twitter" /></a>
        <a href="/"><img src={instagram} alt="Ícone do instagram" /></a>
      </div>
      <div className={styles.rodape__descricao}>
        <p>Desenvolvido por Alura.</p>
      </div>
    </div>
  )
}
