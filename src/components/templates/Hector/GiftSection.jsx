import React, { useState } from 'react';
import styles from './GiftSection.module.css';

export const GiftSection = ({
  alias = "NUCLEO.PUPILA.COREA",
  cbu = "0110314230031416382483",
  bankName = "Banco Nación",
  accountHolder = "Héctor Eusebio Aguirre",
  cuil = "20137618010",
  accountNumber = "CA $ 21413141638248"
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAlias = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconHeader}>🎁</div>
        <h2 className={styles.title}>Muestra de Afecto</h2>
        <div className={styles.divider}></div>
        
        <p className={styles.description}>
          El mejor regalo es tu presencia y tus ganas de bailar. Si querés realizar un obsequio:
        </p>

        {/* Bloque con los datos bancarios */}
        <div className={styles.bankCard}>
          <div className={styles.bankDetail}>
            <span className={styles.label}>Titular:</span>
            <span className={styles.value}>{accountHolder}</span>
          </div>

          <div className={styles.bankDetail}>
            <span className={styles.label}>Banco:</span>
            <span className={styles.value}>{bankName}</span>
          </div>

          <div className={styles.bankDetail}>
            <span className={styles.label}>N.º de cuenta:</span>
            <span className={styles.cbuValue}>{accountNumber}</span>
          </div>

          <div className={styles.bankDetail}>
            <span className={styles.label}>CUIL:</span>
            <span className={styles.value}>{cuil}</span>
          </div>

          <div className={styles.bankDetail}>
            <span className={styles.label}>Alias:</span>
            <span className={styles.aliasValue}>{alias}</span>
          </div>

          <div className={styles.bankDetail}>
            <span className={styles.label}>CBU:</span>
            <span className={styles.cbuValue}>{cbu}</span>
          </div>

          <button className={styles.copyButton} onClick={handleCopyAlias}>
            {copied ? '✅ ¡Alias Copiado!' : '📋 Copiar Alias'}
          </button>
        </div>

{/*         <div className={styles.envelopeNote}>
          ✉️ Habrá una urna para sobres en el salón.
        </div> */}
      </div>
    </section>
  );
};