import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export const Countdown = ({ targetDate = "2026-11-14T13:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.title}>⏳ Falta muy poco</p>
        
        <div className={styles.timerGrid}>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.days}</span>
            <span className={styles.label}>Días</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.hours}</span>
            <span className={styles.label}>Hs</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.minutes}</span>
            <span className={styles.label}>Min</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.seconds}</span>
            <span className={styles.label}>Seg</span>
          </div>
        </div>
      </div>
    </section>
  );
};