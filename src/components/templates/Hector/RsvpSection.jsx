import React, { useState } from 'react';
import styles from './RsvpSection.module.css';

export const RsvpSection = ({ 
  phoneNumber = "5493816459634" // Número de WhatsApp (con código de país sin + ni espacios)
}) => {
  // Formatea en pantalla como: 3815 22-5159
  const displayPhone = `${phoneNumber.slice(-10, -6)} ${phoneNumber.slice(-6, -4)}-${phoneNumber.slice(-4)}`;
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const [dietary, setDietary] = useState('');

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    let message = '';
    if (attendance === 'yes') {
      message = `¡Hola! 👋 Confirmo mi asistencia a los Falsos 60 Años de Héctor (La Leyenda) 🎉.\n\n👤 *Nombre:* ${guestName.trim()}`;
      if (dietary.trim()) {
        message += `\n🥗 *Preferencia/Restricción alimentaria:* ${dietary.trim()}`;
      }
      message += `\n\n¡Listo para la fiesta! 🕺💃`;
    } else {
      message = `¡Hola! 👋 Soy ${guestName.trim()}. Lamentablemente no podré ir a los Falsos 60 Años de Héctor (La Leyenda), pero le envío un abrazo enorme. 🎉`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconHeader}>📩</div>
        <h2 className={styles.title}>Confirmar Asistencia</h2>
        <div className={styles.divider}></div>

        <p className={styles.description}>
          {`Confirmá si cuento con vos. Completá el formulario y tu confirmación se envía por WhatsApp, o escribime directamente al `}
          <a className={styles.phoneLink} href={`tel:+${phoneNumber}`}>{displayPhone}</a>.
        </p>

        <form onSubmit={handleSendWhatsApp} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="guestName" className={styles.label}>
              Nombre y Apellido:
            </label>
            <input
              id="guestName"
              type="text"
              placeholder="Ej: María y Carlos Gómez"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>¿Vas a asistir?</label>
            <div className={styles.radioGroup}>
              <label className={`${styles.radioOption} ${attendance === 'yes' ? styles.active : ''}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={attendance === 'yes'}
                  onChange={() => setAttendance('yes')}
                />
                🎉 ¡Sí, ahí estaré!
              </label>

              <label className={`${styles.radioOption} ${attendance === 'no' ? styles.active : ''}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={attendance === 'no'}
                  onChange={() => setAttendance('no')}
                />
                😔 No podré ir
              </label>
            </div>
          </div>

          {/* {attendance === 'yes' && (
            <div className={styles.inputGroup}>
              <label htmlFor="dietary" className={styles.label}>
                Restricción alimentaria / Menú especial (opcional):
              </label>
              <input
                id="dietary"
                type="text"
                placeholder="Ej: Celíaco, Vegetariano, Vegano"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className={styles.input}
              />
            </div>
          )} */}

          <button type="submit" className={styles.whatsappButton}>
            💬 Confirmar por WhatsApp
          </button>
          <p className={styles.description2}>
            {`Evento solo para adultos`}
        </p>
        </form>
      </div>
    </section>
  );
};