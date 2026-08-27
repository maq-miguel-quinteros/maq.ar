import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './CarruselReels.css';

const CarruselReels = ({ reels = [] }) => {
  useEffect(() => {
    const procesarEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          if (window.instgrm) window.instgrm.Embeds.process();
        };
        document.body.appendChild(script);
      }
    };

    const timer = setTimeout(procesarEmbeds, 250);
    return () => clearTimeout(timer);
  }, [reels]);

  if (!reels.length) return null;

  return (
    <div className="carrusel-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={true} /* Centra el Reel activo en móviles */
        loop={true} /* Desplazamiento infinito */
        autoplay={{
          delay: 3500, /* Cambia cada 3.5 segundos */
          disableOnInteraction: false, /* Sigue reproduciendo tras tocar el carrusel */
          pauseOnMouseEnter: true, /* Pausa al pasar el ratón */
        }}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // Móviles pequeños / medianos
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
            centeredSlides: true,
          },
          // Tablets (640px en adelante)
          640: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: false,
          },
          // Pantallas de escritorio (1024px en adelante)
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 24,
            centeredSlides: false,
          },
        }}
      >
        {reels.map((url, index) => (
          <SwiperSlide key={index} className="swiper-slide-reel">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ width: '100%', margin: 0 }}
            ></blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselReels;