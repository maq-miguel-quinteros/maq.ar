import { useState, useEffect, useMemo, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import MyIcon from '../assets/maq.svg'
import './Birthday.css';

// Importa tu imagen
import birthdayPhoto from '../assets/birthday-photo.png';

// Importa las imágenes para el carrusel (reemplaza con tus propias imágenes)
import foto1 from '../assets/carrusel/foto1.jpg';
import foto2 from '../assets/carrusel/foto2.jpg';
import foto3 from '../assets/carrusel/foto3.jpg';
import foto4 from '../assets/carrusel/foto4.jpg';
import foto5 from '../assets/carrusel/foto5.jpg';
import foto6 from '../assets/carrusel/foto6.jpg';

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
        title: "El porte de un prócer",
        description: "y la humildad de un trabajador"
    },
    {
        image: foto2,
        title: "En estado salvaje",
        description: "hinchado las pelotas"
    },
    {
        image: foto3,
        title: "Sospechando de las intenciones",
        description: "las tuyas, las mías, las de Jesús que está ahí"
    },
    {
        image: foto4,
        title: "bebé",
        description: "bebé menos la próxima"
    },
    {
        image: foto5,
        title: "terminando la fiesta",
        description: "listo para la que sigue"
    },
    {
        image: foto6,
        title: "¿por qué tan formal?",
        description: "hoy alcanzó para el fernet"
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
        { time: "21:00 - 22:00", event: "Llegada y bienvenida rockandrolera" },
        { time: "22:00 - 23:00", event: "Masticación time: empanaditas y parrillada (el que llega tarde no come)" },
        { time: "23:00 - 23:40", event: "Arranca el folclore (se baila o se baila) con ", name:'Los Orejanos', contact:'https://www.instagram.com/losorejanos15/' },
        { time: "23:40 - 00:00", event: "Entrada oficial del cumpleañero y momento sorpresa" },
        { time: "00:00 - 01:00", event: "Música fiestera y salsera con ", name:'Tumbao de Caña', contact: 'https://www.instagram.com/tumbao_de_cana_oficial/' },
        { time: "01:00 - 04:30", event: "Rock, cumbia, cuarteto, cachengue y cachengue... ¿alguien pidió cachengue?" },
        { time: '05:00 - 07:00', event: "Desayuno de café, mate o fernet. Con medialunitas y tortillitas. Previando el asado en la casita del cadi (a unas cuadras del salón)"},
        { time: '07:00 - 12:00', event: 'Pileteada con la mejor música (guitarreros y cantores es su momento)'},
        { time: '12:00 - 14:00', event: 'Asado, ASADO. ¡ASADO!'},
        { time: '14:00 - último en pie', event: 'seguimos hasta que se vaya el último (o corra a todos a la mierda, lo que pase primero)'}
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
                    <div className="rock-band">Mis 15+25</div>
                    <h1>¡Cumpleaños + bandas + sorpresas!</h1>
                    <p>Te espero para una noche de rock, amigos y buenos recuerdos</p>
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
                        <p>El festejo comienza en:</p>
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
                        <p>Te espero en: <strong><a className='social' href="https://www.instagram.com/laisla_cadillal/">La Isla Parrillada</a> - El Cadillal</strong></p>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.73381075251!2d-65.2026769!3d-26.6249778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422654b49d21d91%3A0xd87e4d9995391917!2sResto%20Bar%20LA%20ISLA%20(Cadillal)!5e0!3m2!1ses-419!2sar!4v1759530896493!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '5px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación del Estadio Obras Sanitarias"
                            ></iframe>
                        </div>
                        <div className="location-info">
                            <div className="location-details">
                                <i className="fas fa-map-pin"></i>
                                <div>
                                    <strong>La Isla Parrillada</strong>
                                    <p>El Cadilla - Frente al Dique</p>
                                </div>
                            </div>
                            <div className="transport-info">
                                <div className="transport-item">
                                    <i className="fas fa-bus"></i>
                                    <span>Terminal de Ómnibus - Boletería 03 - Plataforma 13 - 12 - Sale a las 19:00 hs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Galería de fotos - Carrusel */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="far fa-images"></i>El cumpleañero
                        </h2>
                        <p><strong>Tiene tantos estilos</strong> (es como Pedro Pascal)</p>
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

                    {/* Sección CVU Ualá */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="fas fa-wallet"></i> ¿Cómo colaborar?
                        </h2>
                        <p><strong>Podés hacer una transferencia</strong> del monto que quieras</p>
                        <div className="cvu-section">
                            <div className="cvu-info-card">
                                <div className="cvu-header">
                                    <div className="uala-logo">
                                        <i className="fas fa-mobile-alt"></i>
                                        <span>Ualá</span>
                                    </div>
                                    <div className="cvu-type">transferencia</div>
                                </div>

                                <div className="cvu-number-container">
                                    <div className="cvu-label">alias</div>
                                    <div className="cvu-number" id="cvuNumber">
                                        elregalo.prometido
                                    </div>
                                    <button
                                        className="copy-btn"
                                        onClick={() => {
                                            navigator.clipboard.writeText('elregalo.prometido');
                                            // Efecto visual de copiado
                                            const btn = document.querySelector('.copy-btn');
                                            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                                            setTimeout(() => {
                                                btn.innerHTML = '<i class="fas fa-copy"></i> Copiar alias';
                                            }, 2000);
                                        }}
                                    >
                                        <i className="fas fa-copy"></i> Copiar alias
                                    </button>
                                </div>

                                <div className="account-info">
                                    <div className="info-item">
                                        <i className="fas fa-user"></i>
                                        <div>
                                            <span className="info-label">Titular</span>
                                            <span className="info-value">Miguel Ángel Quinteros</span>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <i className="fas fa-tag"></i>
                                        <div>
                                            <span className="info-label">Concepto</span>
                                            <span className="info-value">Mis 15+25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="qr-container">
                                <div className="qr-code-cvu">
                                    <QRCodeSVG
                                        value="3840200500000030758762"
                                        size={200}
                                        bgColor="#F5F5F5"
                                        fgColor="#8B0000"
                                        level="H"
                                        includeMargin={true}
                                    />
                                    <div className="qr-overlay">
                                        {/* <i className="fab fa-ualá"></i> */}
                                        <img src={MyIcon} alt="Your SVG" />
                                    </div>
                                </div>
                                <div className="qr-instructions">
                                    <h3>¿Cómo transferir?</h3>
                                    <div className="steps">
                                        <div className="step">
                                            <span className="step-number">1</span>
                                            <span className="step-text">Escaneá el QR o copiá el alias</span>
                                        </div>
                                        <div className="step">
                                            <span className="step-number">2</span>
                                            <span className="step-text">En transferencia pegá en el destinatario</span>
                                        </div>
                                        <div className="step">
                                            <span className="step-number">3</span>
                                            <span className="step-text">Ingresá el monto y enviá</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p><strong>Podés llevar cositas</strong> para compartir</p>   
                        <div className="transfer-info">
                            <div className="info-box">
                                <i className="fas fa-beer"></i>
                                <div>
                                    <h4>Confetis y serpentinas, tartas, tortas y bebidas espirituosas</h4>
                                    <p>Llevá lo que quieras compartir: gorras, máscaras, pelucas. Ese bizcochuelo de chocolate que te sale tan bien, esa petaquita que te acompaña siempre. <strong>¡Y ropa para la pile!</strong> no te olvides de la ropa para la pile.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Itinerario */}
                    <div className="section">
                        <h2 className="section-title">
                            <i className="far fa-calendar-alt"></i>¿Qué vamos a hacer esa noche?
                        </h2>
                        <p><strong>¿... y después?</strong></p>
                        <div className="timeline">
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                >
                                    <div className="timeline-content">
                                        <div className="time">{item.time}</div>
                                        <div className="event">{item.event}{item.name && <a className='social' href={item.contact}>{item.name}</a>}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <p>¡No faltes a la fiesta! Confirmá tu lugar antes del 10 de Diciembre</p>
                    <p>Contacto: 381 15 5355225</p>
                    <div className="rock-quote">Hoy celebramos, mañana, quién sabe</div>
                </div>
            </div>
        </div>
    );
};

export default Birthday