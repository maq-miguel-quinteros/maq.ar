import React from 'react';
import styles from './EventDetails.module.css';

export const EventDetails = ({
  date = "Sábado, 26 de Septiembre",
  time = "15 a 21 hs y lo que aguantes!",
  locationName = "Los Azhares y Los Ceibos",
  address = "El Cadillal / Barrio Villa del Parque",
  mapUrl = "https://maps.google.com/?q=LA+LEYENDA,+El+Cadillal,+Tucuman",
  dressCode = "INFORMAL",
  mapHint = "Pista: buscá 'LA LEYENDA' en Google Maps y vas a encontrar la casa de Héctor"
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

        {mapHint && (
          <p className={styles.mapHint}>{mapHint}</p>
        )}
      </div>
    </section>
  );
};