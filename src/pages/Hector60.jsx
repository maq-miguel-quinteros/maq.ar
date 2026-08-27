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
        <HeaderInvitation />
        <Countdown targetDate="2026-11-14T13:00:00" />
        <PhotoCarousel />
        <EventDetails />
        <GiftSection 
          alias="HECTOR.60.SALSA" 
          cbu="0000003100087654321098"
          bankName="Banco Nación"
          accountHolder="Héctor González"
        />
        <RsvpSection phoneNumber="5493881234567" />
      </div>

      <MusicPlayer 
        songTitle="Salsa para Héctor" 
        audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      />
    </div>
  );
}

export default Hector60;