import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export const Countdown = ({ targetDate = "2026-11-14T13:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isOver: false
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Faltan para la gran fiesta</h2>
        <div className={styles.divider}></div>

        {!timeLeft.isOver ? (
          <div className={styles.timerGrid}>
            <div className={styles.timeBox}>
              <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
              <span className={styles.label}>Días</span>
            </div>
            <span className={styles.colon}>:</span>

            <div className={styles.timeBox}>
              <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className={styles.label}>Horas</span>
            </div>
            <span className={styles.colon}>:</span>

            <div className={styles.timeBox}>
              <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className={styles.label}>Min</span>
            </div>
            <span className={styles.colon}>:</span>

            <div className={styles.timeBox}>
              <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className={styles.label}>Seg</span>
            </div>
          </div>
        ) : (
          <div className={styles.finishedMessage}>
            🎉 ¡Llegó el día! ¡A bailar y disfrutar! 💃
          </div>
        )}
      </div>
    </section>
  );
};