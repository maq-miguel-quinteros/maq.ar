// import { useState, useEffect, useMemo, useRef } from 'react';
// import './Birthday.css';

// // Importa tu imagen
// import birthdayPhoto from '../assets/birthday-photo.png';
// import deMuscaLigera from '../assets/deMusicaLigera.mp3'
// import elViejoDeArriba from '../assets/elViejoDeArriba.mp3'
// import salvame from '../assets/salvame.mp3'
// import laHijaDelFletero from '../assets/laHijaDelFletero.mp3'
// import porUnSegundo from '../assets/porUnSegundo.mp3'
// import help from '../assets/help!.mp3'
// import fotosDeBarrio from '../assets/fotosDeBarrio.mp3'
// import happyBirthday from '../assets/happyBirthday.mp3'

// // Lista de canciones (puedes usar URLs de música o archivos locales)
// const songList = [
//     {
//         id: 1,
//         title: "de música ligera - Soda Stereo",
//         src: deMuscaLigera,
//         artist: "Soda Stereo"
//     },
//     {
//         id: 2,
//         title: "el viejo de arriba - Bersuit Vergarabat",
//         src: elViejoDeArriba,
//         artist: "Bersuit Vergarabat"
//     },
//     {
//         id: 3,
//         title: "sálvame - Camilo, Alexander Abreu & Havana D'Primera",
//         src: salvame,
//         artist: "Camilo, Alexander Abreu & Havana D'Primera"
//     },
//     {
//         id: 4,
//         title: "la hija del fletero - Patricio Rey y sus Redonditos de Ricota",
//         src: laHijaDelFletero,
//         artist: "Patricio Rey y sus Redonditos de Ricota"
//     },
//     {
//         id: 5,
//         title: "por un segundo - Aventura",
//         src: porUnSegundo,
//         artist: "Aventura"
//     },
//     {
//         id: 6,
//         title: "help! - The Beatles",
//         src: help,
//         artist: "The Beatles"
//     },
//     {
//         id: 7,
//         title: "Arrancacorazones - Attaque 77",
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
//         artist: "Attaque 77"
//     },
//     {
//         id: 8,
//         title: "fotos de barrio - B19",
//         src: fotosDeBarrio,
//         artist: "B19"
//     },
//     {
//         id: 9,
//         title: "Happy Birthday - Ramones",
//         src: happyBirthday,
//         artist: "Ramones"
//     }
// ];

// // Función para obtener una canción aleatoria
// const getRandomSong = () => {
//     const randomIndex = Math.floor(Math.random() * songList.length);
//     return songList[randomIndex];
// };

// const BirthdayInvitation = () => {
//     const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [showMusicAlert, setShowMusicAlert] = useState(true);
//     const [showPlaylist, setShowPlaylist] = useState(false);
//     const [currentSong, setCurrentSong] = useState(null);
//     const [equalizerBars, setEqualizerBars] = useState(Array(12).fill(5));
//     const [playlistAnimation, setPlaylistAnimation] = useState('');
//     const [isFirstLoad, setIsFirstLoad] = useState(true);

//     const audioRef = useRef(null);
//     const playlistRef = useRef(null);

//     // Usamos useMemo para memoizar la fecha de la fiesta
//     const partyDate = useMemo(() => new Date(2025, 11, 22, 21, 0, 0).getTime(), []);

//     // Inicializar canción aleatoria al montar el componente
//     useEffect(() => {
//         const randomSong = getRandomSong();
//         setCurrentSong(randomSong);
//         console.log('🎵 Canción aleatoria seleccionada:', randomSong.title);
//     }, []);

//     // Carrusel de fotos
//     const carouselData = [
//         {
//             background: "linear-gradient(135deg, #8B0000, #2F1B1B)",
//             title: "Los Redondos",
//             description: "El sonido under que se convirtió en leyenda"
//         },
//         {
//             background: "linear-gradient(135deg, #B22222, #696969)",
//             title: "Soda Stereo",
//             description: "Cerati, el genio que cambió el rock en español"
//         },
//         {
//             background: "linear-gradient(135deg, #2F1B1B, #DC143C)",
//             title: "Divididos",
//             description: "La triple potency del rock argentino"
//         },
//         {
//             background: "linear-gradient(135deg, #8B0000, #696969)",
//             title: "Los Enanitos Verdes",
//             description: "El sonido mendocino que conquistó América"
//         },
//         {
//             background: "linear-gradient(135deg, #DC143C, #2F1B1B)",
//             title: "Heroes del Silencio",
//             description: "Aunque españoles, honores del rock en español"
//         }
//     ];

//     // Timeline/Itinerario
//     const timelineData = [
//         { time: "21:00 - 22:00", event: "Llegada y bienvenida con temas de Los Redondos" },
//         { time: "22:00 - 23:00", event: "Tributo a Soda Stereo - Noche de karaoke rockero" },
//         { time: "23:00 - 00:00", event: "Asado y fernet con sonido de Divididos" },
//         { time: "00:00 - 01:00", event: "Sorpresa rockera y pastel de cumpleaños" },
//         { time: "01:00 - Hasta que aguante", event: "Baile con los hits del rock nacional de los 90" }
//     ];

//     // Control de música
//     const toggleMusic = () => {
//         if (audioRef.current && currentSong) {
//             if (isPlaying) {
//                 audioRef.current.pause();
//             } else {
//                 audioRef.current.play().catch(error => {
//                     console.log('Error al reproducir audio:', error);
//                 });
//             }
//             setIsPlaying(!isPlaying);
//             setShowMusicAlert(false);
//             setIsFirstLoad(false);
//         }
//     };

//     // Cambiar canción
//     const changeSong = (song) => {
//         setCurrentSong(song);
//         setIsPlaying(false);

//         // Timeout para asegurar que el audio se cargue correctamente
//         setTimeout(() => {
//             if (audioRef.current) {
//                 audioRef.current.play().then(() => {
//                     setIsPlaying(true);
//                 }).catch(error => {
//                     console.log('Error al reproducir nueva canción:', error);
//                 });
//             }
//         }, 100);
//     };

//     // Siguiente canción
//     const nextSong = () => {
//         const currentIndex = songList.findIndex(song => song.id === currentSong.id);
//         const nextIndex = (currentIndex + 1) % songList.length;
//         changeSong(songList[nextIndex]);
//     };

//     // Canción anterior
//     const prevSong = () => {
//         const currentIndex = songList.findIndex(song => song.id === currentSong.id);
//         const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
//         changeSong(songList[prevIndex]);
//     };

//     // Canción aleatoria
//     const randomSong = () => {
//         const newRandomSong = getRandomSong();
//         // Evitar que sea la misma canción actual
//         if (newRandomSong.id === currentSong?.id) {
//             randomSong(); // Llamada recursiva hasta que sea diferente
//             return;
//         }
//         changeSong(newRandomSong);
//     };

//     // Abrir lista de reproducción con animación
//     const openPlaylist = () => {
//         setShowPlaylist(true);
//         setPlaylistAnimation('opening');
//         setTimeout(() => {
//             setPlaylistAnimation('open');
//         }, 300);
//     };

//     // Cerrar lista de reproducción con animación
//     const closePlaylist = () => {
//         setPlaylistAnimation('closing');
//         setTimeout(() => {
//             setShowPlaylist(false);
//             setPlaylistAnimation('');
//         }, 300);
//     };

//     // Efecto para animar el equalizador
//     useEffect(() => {
//         let animationFrame;

//         const animateEqualizer = () => {
//             if (isPlaying) {
//                 setEqualizerBars(prev =>
//                     prev.map(() => Math.floor(Math.random() * 20) + 5)
//                 );
//             }
//             animationFrame = requestAnimationFrame(animateEqualizer);
//         };

//         if (isPlaying) {
//             animationFrame = requestAnimationFrame(animateEqualizer);
//         } else {
//             setEqualizerBars(Array(12).fill(5));
//         }

//         return () => {
//             if (animationFrame) {
//                 cancelAnimationFrame(animationFrame);
//             }
//         };
//     }, [isPlaying]);

//     // Efecto para el contador
//     useEffect(() => {
//         const calculateTimeLeft = () => {
//             const now = new Date().getTime();
//             const difference = partyDate - now;

//             if (difference <= 0) {
//                 return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//             }

//             return {
//                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//                 minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//                 seconds: Math.floor((difference % (1000 * 60)) / 1000)
//             };
//         };

//         setTimeLeft(calculateTimeLeft());

//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [partyDate]);

//     // Efecto para el carrusel automático
//     useEffect(() => {
//         const carouselTimer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % carouselData.length);
//         }, 5000);

//         return () => clearInterval(carouselTimer);
//     }, [carouselData.length]);

//     // Efecto para intentar reproducir automáticamente
//     useEffect(() => {
//         if (!currentSong) return;

//         const tryAutoPlay = () => {
//             if (audioRef.current) {
//                 audioRef.current.play().then(() => {
//                     setIsPlaying(true);
//                     setShowMusicAlert(false);
//                     setIsFirstLoad(false);
//                 }).catch(error => {
//                     console.log('Reproducción automática bloqueada:', error);
//                     setShowMusicAlert(true);
//                 });
//             }
//         };

//         const autoPlayTimer = setTimeout(tryAutoPlay, 1000);

//         return () => clearTimeout(autoPlayTimer);
//     }, [currentSong]);

//     // Funciones del carrusel
//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % carouselData.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     // Mostrar indicador de canción aleatoria
//     const showRandomIndicator = isFirstLoad && currentSong;

//     return (
//         <div className="container">
//             {/* Reproductor de audio */}
//             {currentSong && (
//                 <audio
//                     ref={audioRef}
//                     loop
//                     preload="auto"
//                     src={currentSong.src}
//                     onEnded={nextSong}
//                 />
//             )}

//             {/* Alerta de música */}
//             {showMusicAlert && currentSong && (
//                 <div className="music-alert">
//                     <div className="alert-content">
//                         <i className="fas fa-music"></i>
//                         <h3>¡Música Rockera!</h3>
//                         <p>Haz clic en el botón de play para activar la banda sonora de los 90s</p>
//                         {showRandomIndicator && (
//                             <div className="random-indicator">
//                                 <i className="fas fa-random"></i>
//                                 <span>Canción aleatoria: {currentSong.title}</span>
//                             </div>
//                         )}
//                         <button className="alert-btn" onClick={toggleMusic}>
//                             <i className="fas fa-play"></i> Reproducir Música
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <div className="invitation-card">
//                 {/* Header */}
//                 <div className="header">
//                     {/* Controles de música mejorados */}
//                     <div className="music-controls">
//                         <div className="music-player">
//                             <button className="music-btn prev-btn" onClick={prevSong} title="Canción anterior">
//                                 <i className="fas fa-step-backward"></i>
//                             </button>

//                             <button className="music-btn play-btn" onClick={toggleMusic} disabled={!currentSong}>
//                                 <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
//                             </button>

//                             <button className="music-btn next-btn" onClick={nextSong} title="Siguiente canción">
//                                 <i className="fas fa-step-forward"></i>
//                             </button>

//                             <button
//                                 className="music-btn random-btn"
//                                 onClick={randomSong}
//                                 title="Canción aleatoria"
//                             >
//                                 <i className="fas fa-random"></i>
//                             </button>

//                             <button
//                                 className="music-btn playlist-btn"
//                                 onClick={openPlaylist}
//                                 title="Lista de canciones"
//                             >
//                                 <i className="fas fa-list"></i>
//                             </button>
//                         </div>

//                         {/* Equalizador animado */}
//                         {isPlaying && currentSong && (
//                             <div className="equalizer-container">
//                                 <div className="equalizer">
//                                     {equalizerBars.map((height, index) => (
//                                         <div
//                                             key={index}
//                                             className="equalizer-bar"
//                                             style={{ height: `${height}px` }}
//                                         ></div>
//                                     ))}
//                                 </div>
//                                 <div className="now-playing">
//                                     <i className="fas fa-headphones"></i>
//                                     <span>{currentSong.title}</span>
//                                     {showRandomIndicator && (
//                                         <i className="fas fa-random random-icon" title="Canción aleatoria"></i>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Lista de reproducción con animación */}
//                     {showPlaylist && (
//                         <div className={`playlist-modal ${playlistAnimation}`} ref={playlistRef}>
//                             <div className="playlist-content">
//                                 <div className="playlist-header">
//                                     <h3>🎵 Playlist Rock 90s</h3>
//                                     <div className="playlist-actions">
//                                         <button
//                                             className="action-btn random-action"
//                                             onClick={randomSong}
//                                             title="Reproducir canción aleatoria"
//                                         >
//                                             <i className="fas fa-random"></i>
//                                         </button>
//                                         <button
//                                             className="close-playlist"
//                                             onClick={closePlaylist}
//                                         >
//                                             <i className="fas fa-times"></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="songs-list">
//                                     {songList.map((song) => (
//                                         <div
//                                             key={song.id}
//                                             className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
//                                             onClick={() => {
//                                                 changeSong(song);
//                                                 closePlaylist();
//                                             }}
//                                         >
//                                             <div className="song-info">
//                                                 <div className="song-title">{song.title}</div>
//                                                 <div className="song-artist">{song.artist}</div>
//                                             </div>
//                                             {currentSong?.id === song.id && (
//                                                 <div className="playing-indicator">
//                                                     <i className="fas fa-play"></i>
//                                                     {showRandomIndicator && (
//                                                         <i className="fas fa-random random-small" title="Canción aleatoria"></i>
//                                                     )}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <div className="photo-container">
//                         <img
//                             src={birthdayPhoto}
//                             alt="Cumpleaños Rockero"
//                             className="birthday-photo"
//                         />
//                         <div className="photo-overlay">
//                             <i className="fas fa-crown crown-icon"></i>
//                         </div>
//                     </div>
//                     <div className="rock-band">LOS ENANOS VERDES • Soda Stereo • Divididos</div>
//                     <h1>¡FIESTA DE CUMPLEAÑOS 90s!</h1>
//                     <p>Una noche de rock, amigos y buenos recuerdos</p>
//                     <div className="audio-wave">
//                         {[...Array(8)].map((_, i) => (
//                             <div key={i} className="wave-bar"></div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Contenido */}
//                 <div className="content">
//                     {/* Contador regresivo */}
//                     <div className="section">
//                         <h2 className="section-title">
//                             <i className="far fa-clock"></i> CUENTA REGRESIVA
//                         </h2>
//                         <p>El recital comienza en:</p>
//                         <div className="countdown">
//                             <div className="countdown-item">
//                                 <span className="countdown-number">
//                                     {timeLeft.days.toString().padStart(2, '0')}
//                                 </span>
//                                 <span className="countdown-label">Días</span>
//                             </div>
//                             <div className="countdown-item">
//                                 <span className="countdown-number">
//                                     {timeLeft.hours.toString().padStart(2, '0')}
//                                 </span>
//                                 <span className="countdown-label">Horas</span>
//                             </div>
//                             <div className="countdown-item">
//                                 <span className="countdown-number">
//                                     {timeLeft.minutes.toString().padStart(2, '0')}
//                                 </span>
//                                 <span className="countdown-label">Minutos</span>
//                             </div>
//                             <div className="countdown-item">
//                                 <span className="countdown-number">
//                                     {timeLeft.seconds.toString().padStart(2, '0')}
//                                 </span>
//                                 <span className="countdown-label">Segundos</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mapa */}
//                     <div className="section">
//                         <h2 className="section-title">
//                             <i className="fas fa-map-marker-alt"></i> UBICACIÓN
//                         </h2>
//                         <p>El recital será en: <strong>Estadio Obras Sanitarias, Av. del Libertador 7395</strong></p>
//                         <div className="map-container">
//                             <div className="map-placeholder">
//                                 <i className="fas fa-map"></i>
//                                 <p>Mapa del rock argentino</p>
//                                 <p><small>Obras, el templo del rock nacional</small></p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Galería de fotos - Carrusel */}
//                     <div className="section">
//                         <h2 className="section-title">
//                             <i className="far fa-images"></i> HISTORIA DEL ROCK NACIONAL
//                         </h2>
//                         <div className="photo-carousel">
//                             <div
//                                 className="carousel-container"
//                                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                             >
//                                 {carouselData.map((slide, index) => (
//                                     <div
//                                         key={index}
//                                         className="carousel-slide"
//                                         style={{ background: slide.background }}
//                                     >
//                                         <div className="slide-content">
//                                             <h3>{slide.title}</h3>
//                                             <p>{slide.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <button className="carousel-btn prev-btn" onClick={prevSlide}>
//                                 <i className="fas fa-chevron-left"></i>
//                             </button>
//                             <button className="carousel-btn next-btn" onClick={nextSlide}>
//                                 <i className="fas fa-chevron-right"></i>
//                             </button>
//                             <div className="carousel-dots">
//                                 {carouselData.map((_, index) => (
//                                     <div
//                                         key={index}
//                                         className={`dot ${index === currentSlide ? 'active' : ''}`}
//                                         onClick={() => goToSlide(index)}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* QR para donaciones */}
//                     <div className="section">
//                         <h2 className="section-title">
//                             <i className="fas fa-beer"></i> BONDI DEL ROCK
//                         </h2>
//                         <div className="qr-section">
//                             <div className="qr-code">
//                                 <i className="fas fa-qrcode"></i>
//                             </div>
//                             <p className="donation-text">
//                                 ¿Quieres ayudar con el bondi? Escanea este código con tu celu y colaborá con la birra y el fernet. ¡Todo suma para la joda!
//                             </p>
//                         </div>
//                     </div>

//                     {/* Itinerario */}
//                     <div className="section">
//                         <h2 className="section-title">
//                             <i className="far fa-calendar-alt"></i> SETLIST DE LA NOCHE
//                         </h2>
//                         <div className="timeline">
//                             {timelineData.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
//                                 >
//                                     <div className="timeline-content">
//                                         <div className="time">{item.time}</div>
//                                         <div className="event">{item.event}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="footer">
//                     <p>¡No faltes a este recital! Confirmá tu lugar antes del 10 de Diciembre</p>
//                     <p>Contacto: rockanacional@90s.com | Tel: 15-1234-5678</p>
//                     <div className="rock-quote">"El que no arriesga, no gana" - Gustavo Cerati</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BirthdayInvitation;

import { useState, useEffect, useMemo, useRef } from 'react';
import './Birthday.css';

// Importa tu imagen
import birthdayPhoto from '../assets/birthday-photo.png';

// Importa las imágenes para el carrusel (reemplaza con tus propias imágenes)
import foto1 from '../assets/carrusel/foto1.jpg';
import foto2 from '../assets/carrusel/foto2.jpg';
import foto3 from '../assets/carrusel/foto3.jpg';
import foto4 from '../assets/carrusel/foto4.jpg';
import foto5 from '../assets/carrusel/foto5.jpg';
import foto6 from '../assets/carrusel/foto5.jpg';

// Importa la lista de temas
import deMuscaLigera from '../assets/deMusicaLigera.mp3'
import elViejoDeArriba from '../assets/elViejoDeArriba.mp3'
import salvame from '../assets/salvame.mp3'
import laHijaDelFletero from '../assets/laHijaDelFletero.mp3'
import porUnSegundo from '../assets/porUnSegundo.mp3'
import help from '../assets/help!.mp3'
import blueJeans from '../assets/blueJeans.mp3'
import fotosDeBarrio from '../assets/fotosDeBarrio.mp3'
import happyBirthday from '../assets/happyBirthday.mp3'

// Lista de canciones
const songList = [
    {
        id: 1,
        title: "de música ligera - Soda Stereo",
        src: deMuscaLigera,
        artist: "Soda Stereo"
    },
    {
        id: 2,
        title: "el viejo de arriba - Bersuit Vergarabat",
        src: elViejoDeArriba,
        artist: "Bersuit Vergarabat"
    },
    {
        id: 3,
        title: "sálvame - Camilo, Alexander Abreu & Havana D'Primera",
        src: salvame,
        artist: "Camilo, Alexander Abreu & Havana D'Primera"
    },
    {
        id: 4,
        title: "la hija del fletero - Patricio Rey y sus Redonditos de Ricota",
        src: laHijaDelFletero,
        artist: "Patricio Rey y sus Redonditos de Ricota"
    },
    {
        id: 5,
        title: "por un segundo - Aventura",
        src: porUnSegundo,
        artist: "Aventura"
    },
    {
        id: 6,
        title: "help! - The Beatles",
        src: help,
        artist: "The Beatles"
    },
    {
        id: 7,
        title: "blue jeans - Lana del Rey",
        src: blueJeans,
        artist: "Lana del Rey"
    },
    {
        id: 8,
        title: "fotos de barrio - B19",
        src: fotosDeBarrio,
        artist: "B19"
    },
    {
        id: 9,
        title: "Happy Birthday - Ramones",
        src: happyBirthday,
        artist: "Ramones"
    }
];

// Función para obtener una canción aleatoria
const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songList.length);
    return songList[randomIndex];
};

// Carrusel de fotos con imágenes reales
const carouselData = [
    {
        image: foto1,
        title: "Los Redondos",
        description: "El sonido under que se convirtió en leyenda"
    },
    {
        image: foto2,
        title: "Soda Stereo",
        description: "Cerati, el genio que cambió el rock en español"
    },
    {
        image: foto3,
        title: "Divididos",
        description: "La triple potency del rock argentino"
    },
    {
        image: foto4,
        title: "Los Enanitos Verdes",
        description: "El sonido mendocino que conquistó América"
    },
    {
        image: foto5,
        title: "Heroes del Silencio",
        description: "Aunque españoles, honores del rock en español"
    }
];

const Birthday = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMusicAlert, setShowMusicAlert] = useState(true);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [equalizerBars, setEqualizerBars] = useState(Array(12).fill(5));
    const [playlistAnimation, setPlaylistAnimation] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [playMode, setPlayMode] = useState('sequential');

    const audioRef = useRef(null);
    const playlistRef = useRef(null);

    // Fecha de la fiesta
    const partyDate = useMemo(() => new Date(2025, 11, 22, 21, 0, 0).getTime(), []);

    // Inicializar canción aleatoria
    useEffect(() => {
        const randomSong = getRandomSong();
        setCurrentSong(randomSong);
    }, []);

    // Timeline/Itinerario
    const timelineData = [
        { time: "21:00 - 22:00", event: "Llegada y bienvenida con temas de Los Redondos" },
        { time: "22:00 - 23:00", event: "Tributo a Soda Stereo - Noche de karaoke rockero" },
        { time: "23:00 - 00:00", event: "Asado y fernet con sonido de Divididos" },
        { time: "00:00 - 01:00", event: "Sorpresa rockera y pastel de cumpleaños" },
        { time: "01:00 - Hasta que aguante", event: "Baile con los hits del rock nacional de los 90" }
    ];

    // Control de música
    const toggleMusic = () => {
        if (audioRef.current && currentSong) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.log('Error al reproducir audio:', error);
                });
            }
            setIsPlaying(!isPlaying);
            setShowMusicAlert(false);
            setIsFirstLoad(false);
        }
    };

    // Cambiar canción
    const changeSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(false);

        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log('Error al reproducir nueva canción:', error);
                });
            }
        }, 100);
    };

    // Siguiente canción
    const nextSong = () => {
        if (!currentSong) return;

        const currentIndex = songList.findIndex(song => song.id === currentSong.id);
        let nextIndex;

        if (playMode === 'random') {
            do {
                nextIndex = Math.floor(Math.random() * songList.length);
            } while (nextIndex === currentIndex && songList.length > 1);
        } else {
            nextIndex = (currentIndex + 1) % songList.length;
        }

        changeSong(songList[nextIndex]);
    };

    // Canción anterior
    const prevSong = () => {
        if (!currentSong) return;

        const currentIndex = songList.findIndex(song => song.id === currentSong.id);
        const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
        changeSong(songList[prevIndex]);
    };

    // Canción aleatoria
    const randomSong = () => {
        const newRandomSong = getRandomSong();
        if (newRandomSong.id === currentSong?.id && songList.length > 1) {
            randomSong();
            return;
        }
        changeSong(newRandomSong);
    };

    // Cambiar modo de reproducción
    const togglePlayMode = () => {
        const newMode = playMode === 'sequential' ? 'random' : 'sequential';
        setPlayMode(newMode);
    };

    // Manejar fin de canción
    const handleSongEnd = () => {
        nextSong();
    };

    // Abrir lista de reproducción
    const openPlaylist = () => {
        setShowPlaylist(true);
        setPlaylistAnimation('opening');
        setTimeout(() => {
            setPlaylistAnimation('open');
        }, 300);
    };

    // Cerrar lista de reproducción
    const closePlaylist = () => {
        setPlaylistAnimation('closing');
        setTimeout(() => {
            setShowPlaylist(false);
            setPlaylistAnimation('');
        }, 300);
    };

    // Efecto para animar el equalizador
    useEffect(() => {
        let animationFrame;

        const animateEqualizer = () => {
            if (isPlaying) {
                setEqualizerBars(prev =>
                    prev.map(() => Math.floor(Math.random() * 20) + 5)
                );
            }
            animationFrame = requestAnimationFrame(animateEqualizer);
        };

        if (isPlaying) {
            animationFrame = requestAnimationFrame(animateEqualizer);
        } else {
            setEqualizerBars(Array(12).fill(5));
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isPlaying]);

    // Efecto para el contador
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = partyDate - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [partyDate]);

    // Efecto para el carrusel automático
    useEffect(() => {
        const carouselTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 5000);

        return () => clearInterval(carouselTimer);
    }, [carouselData.length]);

    // Efecto para reproducción automática
    useEffect(() => {
        if (!currentSong) return;

        const tryAutoPlay = () => {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    setShowMusicAlert(false);
                    setIsFirstLoad(false);
                }).catch(error => {
                    setShowMusicAlert(true);
                });
            }
        };

        const autoPlayTimer = setTimeout(tryAutoPlay, 1000);

        return () => clearTimeout(autoPlayTimer);
    }, [currentSong]);

    // Funciones del carrusel
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const showRandomIndicator = isFirstLoad && currentSong;

    return (
        <div className="container">
            {/* Reproductor de audio */}
            {currentSong && (
                <audio
                    ref={audioRef}
                    loop={false}
                    preload="auto"
                    src={currentSong.src}
                    onEnded={handleSongEnd}
                />
            )}

            {/* Alerta de música */}
            {showMusicAlert && currentSong && (
                <div className="music-alert">
                    <div className="alert-content">
                        <i className="fas fa-music"></i>
                        <h3>¡Música Rockera!</h3>
                        <p>Haz clic en el botón de play para activar la banda sonora de los 90s</p>
                        {showRandomIndicator && (
                            <div className="random-indicator">
                                <i className="fas fa-random"></i>
                                <span>Canción aleatoria: {currentSong.title}</span>
                            </div>
                        )}
                        <div className="play-mode-info">
                            <i className="fas fa-infinity"></i>
                            <span>La lista se reproducirá en ciclo continuo</span>
                        </div>
                        <button className="alert-btn" onClick={toggleMusic}>
                            <i className="fas fa-play"></i> Reproducir Música
                        </button>
                    </div>
                </div>
            )}

            <div className="invitation-card">
                {/* Header */}
                <div className="header">
                    {/* Controles de música */}
                    <div className="music-controls">
                        <div className="music-player">
                            <button className="music-btn prev-btn" onClick={prevSong} title="Canción anterior">
                                <i className="fas fa-step-backward"></i>
                            </button>

                            <button className="music-btn play-btn" onClick={toggleMusic} disabled={!currentSong}>
                                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                            </button>

                            <button className="music-btn next-btn" onClick={nextSong} title="Siguiente canción">
                                <i className="fas fa-step-forward"></i>
                            </button>

                            <button
                                className={`music-btn mode-btn ${playMode === 'random' ? 'active' : ''}`}
                                onClick={togglePlayMode}
                                title={playMode === 'sequential' ? 'Modo secuencial - Cambiar a aleatorio' : 'Modo aleatorio - Cambiar a secuencial'}
                            >
                                <i className={`fas ${playMode === 'sequential' ? 'fa-list' : 'fa-random'}`}></i>
                            </button>

                            <button
                                className="music-btn playlist-btn"
                                onClick={openPlaylist}
                                title="Lista de canciones"
                            >
                                <i className="fas fa-list-music"></i>
                            </button>
                        </div>

                        {/* Equalizador animado */}
                        {isPlaying && currentSong && (
                            <div className="equalizer-container">
                                <div className="equalizer">
                                    {equalizerBars.map((height, index) => (
                                        <div
                                            key={index}
                                            className="equalizer-bar"
                                            style={{ height: `${height}px` }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="now-playing">
                                    <i className="fas fa-headphones"></i>
                                    <span>{currentSong.title}</span>
                                    <div className="play-mode-indicator">
                                        <i
                                            className={`fas ${playMode === 'sequential' ? 'fa-infinity' : 'fa-random'}`}
                                            title={playMode === 'sequential' ? 'Modo secuencial' : 'Modo aleatorio'}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Lista de reproducción */}
                    {showPlaylist && (
                        <div className={`playlist-modal ${playlistAnimation}`} ref={playlistRef}>
                            <div className="playlist-content">
                                <div className="playlist-header">
                                    <div className="playlist-title">
                                        <h3>🎵 Playlist Rock 90s</h3>
                                        <div className="playlist-stats">
                                            <span>{songList.length} canciones • Ciclo {playMode === 'sequential' ? 'secuencial' : 'aleatorio'}</span>
                                        </div>
                                    </div>
                                    <div className="playlist-actions">
                                        <button
                                            className={`action-btn mode-action ${playMode === 'random' ? 'active' : ''}`}
                                            onClick={togglePlayMode}
                                            title={playMode === 'sequential' ? 'Cambiar a modo aleatorio' : 'Cambiar a modo secuencial'}
                                        >
                                            <i className={`fas ${playMode === 'sequential' ? 'fa-random' : 'fa-list'}`}></i>
                                        </button>
                                        <button
                                            className="close-playlist"
                                            onClick={closePlaylist}
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="songs-list">
                                    {songList.map((song, index) => (
                                        <div
                                            key={song.id}
                                            className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
                                            onClick={() => {
                                                changeSong(song);
                                                closePlaylist();
                                            }}
                                        >
                                            <div className="song-number">{index + 1}</div>
                                            <div className="song-info">
                                                <div className="song-title">{song.title}</div>
                                                <div className="song-artist">{song.artist}</div>
                                            </div>
                                            {currentSong?.id === song.id && (
                                                <div className="playing-indicator">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="playlist-footer">
                                    <i className="fas fa-infinity"></i>
                                    <span>La lista se reproducirá en ciclo continuo</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="photo-container">
                        <img
                            src={birthdayPhoto}
                            alt="Cumpleaños Rockero"
                            className="birthday-photo"
                        />
                        <div className="photo-overlay">
                            <i className="fas fa-crown crown-icon"></i>
                        </div>
                    </div>
                    <div className="rock-band">LOS ENANOS VERDES • Soda Stereo • Divididos</div>
                    <h1>¡FIESTA DE CUMPLEAÑOS 90s!</h1>
                    <p>Una noche de rock, amigos y buenos recuerdos</p>
                    <div className="audio-wave">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="wave-bar"></div>
                        ))}
                    </div>
                </div>

                {/* Contenido */}
                <div className="content">
                    {/* Contador regresivo */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="far fa-clock"></i> CUENTA REGRESIVA
                        </h2>
                        <p>El recital comienza en:</p>
                        <div className="countdown">
                            <div className="countdown-item">
                                <span className="countdown-number">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </span>
                                <span className="countdown-label">Días</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-number">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </span>
                                <span className="countdown-label">Horas</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-number">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </span>
                                <span className="countdown-label">Minutos</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-number">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </span>
                                <span className="countdown-label">Segundos</span>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="fas fa-map-marker-alt"></i> UBICACIÓN
                        </h2>
                        <p>El recital será en: <strong>Estadio Obras Sanitarias, Av. del Libertador 7395</strong></p>
                        <div className="map-container">
                            <div className="map-placeholder">
                                <i className="fas fa-map"></i>
                                <p>Mapa del rock argentino</p>
                                <p><small>Obras, el templo del rock nacional</small></p>
                            </div>
                        </div>
                    </div>

                    {/* Galería de fotos - Carrusel */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="far fa-images"></i> MOMENTOS ROCKEROS
                        </h2>
                        <div className="photo-carousel">
                            <div
                                className="carousel-container"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselData.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="carousel-slide"
                                    >
                                        <div
                                            className="carousel-image"
                                            style={{
                                                backgroundImage: `url(${slide.image})`
                                            }}
                                        ></div>
                                        <div className="carousel-overlay">
                                            <div className="slide-content">
                                                <h3>{slide.title}</h3>
                                                <p>{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-btn prev-btn" onClick={prevSlide}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="carousel-btn next-btn" onClick={nextSlide}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <div className="carousel-dots">
                                {carouselData.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* QR para donaciones */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="fas fa-beer"></i> BONDI DEL ROCK
                        </h2>
                        <div className="qr-section">
                            <div className="qr-code">
                                <i className="fas fa-qrcode"></i>
                            </div>
                            <p className="donation-text">
                                ¿Quieres ayudar con el bondi? Escanea este código con tu celu y colaborá con la birra y el fernet. ¡Todo suma para la joda!
                            </p>
                        </div>
                    </div>

                    {/* Itinerario */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="far fa-calendar-alt"></i> SETLIST DE LA NOCHE
                        </h2>
                        <div className="timeline">
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                >
                                    <div className="timeline-content">
                                        <div className="time">{item.time}</div>
                                        <div className="event">{item.event}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <p>¡No faltes a este recital! Confirmá tu lugar antes del 10 de Diciembre</p>
                    <p>Contacto: rockanacional@90s.com | Tel: 15-1234-5678</p>
                    <div className="rock-quote">"El que no arriesga, no gana" - Gustavo Cerati</div>
                </div>
            </div>
        </div>
    );
};

export default Birthday