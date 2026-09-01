import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';
import jamaicaAudio from '../../../assets/hector/jamaica.mp3';

export const MusicPlayer = ({
  songTitle = "Jamaican (Bam Bam)",
  artist = "Hugel & SOLTO",
  audioUrl = jamaicaAudio
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Reproduce la música automáticamente al entrar a la tarjeta.
  // Muchos navegadores bloquean el autoplay con sonido hasta que el usuario
  // interactúa con la página; en ese caso queda pausado listo para tocar play.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("El navegador bloqueó la reproducción automática:", err));
    }
  };

  return (
    <div className={styles.playerContainer}>
      <audio ref={audioRef} src={audioUrl} loop />

      <button 
        className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`} 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <span className={styles.icon}>{isPlaying ? '⏸️' : '🎺'}</span>
        
        <div className={styles.infoWrapper}>
          <span className={styles.label}>{isPlaying ? 'Sonando...' : 'Música de fondo'}</span>
          <span className={styles.title}>{songTitle}</span>
        </div>

        {/* Animación de ondas de audio cuando está sonando */}
        {isPlaying && (
          <div className={styles.equalizer}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        )}
      </button>
    </div>
  );
};