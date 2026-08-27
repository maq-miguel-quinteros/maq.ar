import React from 'react';
import { HeaderInvitation } from '../components/templates/Hector/HeaderInvitation';
import { PhotoCarousel } from '../components/templates/Hector/PhotoCarousel';
import styles from './Hector60.module.css';

function Hector60() {
  return (
    <div className={styles.mainBackground}>
      {/* Capa de ajuste de contraste para el fondo */}
      <div className={styles.overlay}></div>

      {/* Flujo directo de componentes */}
      <div className={styles.contentDirect}>
        <HeaderInvitation />
        <PhotoCarousel />
      </div>
    </div>
  );
}

export default Hector60;