import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';

export const MusicPlayer = ({
  songTitle = "Salsa & Sabor",
  artist = "Música de Fondo",
  // Puedes reemplazar esta URL por cualquier archivo .mp3 directo de salsa
  audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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
          <span className={styles.label}>{isPlaying ? 'Sonando salsa...' : 'Música de fondo'}</span>
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