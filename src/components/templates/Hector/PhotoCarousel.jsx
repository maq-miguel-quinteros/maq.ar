import React, { useState, useEffect } from 'react';
import styles from './PhotoCarousel.module.css';

// Imágenes importadas como módulos para que el bundler las procese correctamente
import carousel01 from '../../../assets/hector/carousel01.jpg';
import carousel02 from '../../../assets/hector/carousel02.jpeg';
import carousel03 from '../../../assets/hector/carousel03.jpg';

export const PhotoCarousel = ({
  images = [
    { url: carousel01, caption: '¡Ritmo y Sabor!' },
    { url: carousel02, caption: 'Momentos especiales' },
    { url: carousel03, caption: 'Celebrando juntos' }
  ], 
  autoPlayInterval = 3500 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.sliderWrapper}>
        <div 
          className={styles.slidesTrack} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.slide}>
              <img src={img.url} alt={img.caption || `Foto ${index + 1}`} className={styles.image} />
              {img.caption && (
                <div className={styles.captionOverlay}>
                  <span>{img.caption}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        <button className={`${styles.navButton} ${styles.prev}`} onClick={goToPrev} aria-label="Foto anterior">
          &#10094;
        </button>
        <button className={`${styles.navButton} ${styles.next}`} onClick={goToNext} aria-label="Foto siguiente">
          &#10095;
        </button>
      </div>

      {/* Indicadores (Dots) */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};