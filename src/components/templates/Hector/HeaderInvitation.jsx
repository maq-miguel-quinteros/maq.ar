import React from 'react';
import styles from './HeaderInvitation.module.css';
import profile from '../../../assets/hector/profile.png'

export const HeaderInvitation = ({ 
  name = "Héctor", 
  age = 60,
  eventTitle = "Los Falsos 60 Años de La Leyenda",
  message = `Solo trae muchas bebidas y ganas de divertirte! 🍻\n\nTe espero con la mejor música de DJ. Edu Santillan + Cachengue 🎶` 
}) => {
  return (
    <header className={styles.container}>
      {/* Insignia de estilo caribeño */}
      <div className={styles.badge}>
        <span>🎉 {eventTitle} 🎉</span>
      </div>

      {/* Marco de foto con acentos solares/cálidos */}
      <div className={styles.imageContainer}>
        <div className={styles.imageRing}>
          <img src={profile} alt={`Foto de ${name} celebrando sus ${age} años`} className={styles.profileImage} />
        </div>
        <span className={styles.musicNoteLeft}>🎶</span>
        <span className={styles.musicNoteRight}>🎺</span>
      </div>

      {/* Nombre principal */}
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.slogan}>Salsa, Sol & Celebración</p>

      {/* Tarjeta con contenido formal y claro */}
      <div className={styles.cardInfo}>
        <p className={styles.invitationText}>{message}</p>
        <div className={styles.iconBar}>
          <span title="Música">🍹</span>
          <span title="Salsa">💃</span>
          <span title="Pileta">🏊‍♂️</span>
          <span title="Fiesta">🎉</span>
        </div>
      </div>
    </header>
  );
};