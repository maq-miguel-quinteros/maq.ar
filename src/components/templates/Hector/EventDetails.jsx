import React from 'react';
import styles from './EventDetails.module.css';

export const EventDetails = ({
  date = "Sábado, 14 de Noviembre",
  time = "13:00 hs (Almuerzo y Pileta)",
  locationName = "Quinta Las Palmeras",
  address = "Av. del Sol 1234, Zona de Quintas",
  mapUrl = "https://maps.google.com/?q=Quinta+Las+Palmeras",
  dressCode = "Veraniego / Traje de baño"
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>¿Dónde & Cuándo?</h2>
        <div className={styles.divider}></div>

        <div className={styles.grid}>
          {/* Fecha y Hora */}
          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>📅</div>
            <div className={styles.infoText}>
              <h3>Fecha</h3>
              <p>{date}</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>⏰</div>
            <div className={styles.infoText}>
              <h3>Hora</h3>
              <p>{time}</p>
            </div>
          </div>

          {/* Ubicación */}
          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>📍</div>
            <div className={styles.infoText}>
              <h3>Lugar</h3>
              <p className={styles.boldText}>{locationName}</p>
              <p className={styles.subAddress}>{address}</p>
            </div>
          </div>

          {/* Código de vestimenta */}
          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>🩳</div>
            <div className={styles.infoText}>
              <h3>Dress Code</h3>
              <p>{dressCode}</p>
            </div>
          </div>
        </div>

        {/* Botón para abrir el mapa */}
        <div className={styles.actionWrapper}>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.mapButton}
          >
            🗺️ Abrir ubicación en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};