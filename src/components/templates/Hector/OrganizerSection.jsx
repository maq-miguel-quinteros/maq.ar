import React from 'react';
import styles from './OrganizerSection.module.css';
import fanfanLogo from '../../../assets/hector/fanfan-eventos-logo.png';

export const OrganizerSection = ({
  orgName = 'Fanfán Eventos',
  slogan = 'Celebraciones que dejan huella...',
  phoneNumber = '5493816459634',
  logo = fanfanLogo
}) => {
  const displayPhone = `${phoneNumber.slice(-10, -6)} ${phoneNumber.slice(-6, -4)}-${phoneNumber.slice(-4)}`;

  return (
    <section className={styles.container}>
      <div className={styles.card}>
{/*         <div className={styles.iconHeader}>🏷️</div> */}
        {/* <h2 className={styles.title}>Organizadora del Evento</h2> */}
        <div className={styles.divider}></div>

        <div className={styles.logoWrapper}>
          <img src={logo} alt={orgName} className={styles.logo} />
        </div>

{/*         <p className={styles.slogan}>"{slogan}"</p> */}

        <a
          className={styles.contactLink}
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 {displayPhone}
        </a>
      </div>
    </section>
  );
};