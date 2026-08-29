import React from 'react';
import { HeaderInvitation } from '../components/templates/Hector/HeaderInvitation';
import { Countdown } from '../components/templates/Hector/Countdown';
import { PhotoCarousel } from '../components/templates/Hector/PhotoCarousel';
import { EventDetails } from '../components/templates/Hector/EventDetails';
import { GiftSection } from '../components/templates/Hector/GiftSection';
import { RsvpSection } from '../components/templates/Hector/RsvpSection';
import { MusicPlayer } from '../components/templates/Hector/MusicPlayer';
import styles from './Hector60.module.css';

function Hector60() {
  return (
    <div className={styles.mainBackground}>
      <div className={styles.overlay}></div>

      <div className={styles.contentDirect}>
        <HeaderInvitation 
          name="Héctor"
          age={60}
          eventTitle="Los Falsos 60 Años de La Leyenda"
          message={`Solo trae muchas bebidas y ganas de divertirte! 🍻\n\nTe espero con la mejor música de DJ. Edu Santillan + Cachengue 🎶`}
        />
        <Countdown targetDate="2026-09-26T15:00:00" />
        <PhotoCarousel />
        <EventDetails 
          date="Sábado, 26 de Septiembre"
          time="15 a 21 hs y lo que aguantes!"
          locationName="Los Azares y Los Ceibos"
          address="El Cadillal / Barrio Villa del Parque"
          mapUrl="https://maps.google.com/?q=LA+LEYENDA,+El+Cadillal,+Tucuman"
          dressCode="INFORMAL"
          mapHint="Pista: buscá 'LA LEYENDA' en Google Maps y vas a encontrar la casa de Héctor 😉"
        />
        <GiftSection 
          alias="NUCLEO.PUPILA.COREA" 
          cbu="0110314230031416382483"
          bankName="Banco Nación"
          accountHolder="Héctor Eusebio Aguirre"
          cuil="20137618010"
          accountNumber="CA $ 21413141638248"
        />
        <RsvpSection phoneNumber="5493815225159" />
      </div>

      <MusicPlayer 
        songTitle="Salsa para Héctor" 
        audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      />
    </div>
  );
}

export default Hector60;