import React, { useState } from 'react';
import styles from './GiftSection.module.css';

export const GiftSection = ({
  alias = "HECTOR.60.SALSA",
  cbu = "0000003100087654321098",
  bankName = "Banco Nación",
  accountHolder = "Héctor González"
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
          El mejor regalo es tu presencia y tus ganas de bailar. Si querés realizar un obsequio, podés colaborar con mi viaje o dejar tu sobre el día del evento.
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

        <div className={styles.envelopeNote}>
          ✉️ Habrá una urna para sobres en el salón.
        </div>
      </div>
    </section>
  );
};