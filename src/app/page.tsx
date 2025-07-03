'use client';

import { useEffect, useState } from 'react';
import styles from './styles/NightScene.module.css';
import Image from 'next/image';

export default function Home() {
  const [stars, setStars] = useState<{ id: number; style: { top: string; left: string; width: string; height: string; animationDelay: string } }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; style: { top: string; left: string; animationDelay: string } }[]>([]);

  useEffect(() => {
    // Create stars
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      style: {
        top: `${Math.random() * 60}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 3}s`
      }
    }));
    setStars(newStars);

    // Create shooting stars
    const newShootingStars = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      style: {
        top: `${Math.random() * 30}%`,
        left: '100%',
        animationDelay: `${Math.random() * 15}s`
      }
    }));
    setShootingStars(newShootingStars);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.stars}>
        {stars.map(star => (
          <div
            key={star.id}
            className={styles.star}
            style={star.style}
          />
        ))}
        {shootingStars.map(star => (
          <div
            key={star.id}
            className={styles.shootingStar}
            style={star.style}
          />
        ))}
      </div>
      
      <div className={styles.ocean}>
        <div className={styles.waves}>
          <div className={styles.wave} />
          <div className={styles.wave} />
          <div className={styles.wave} />
          <div className={styles.wave} />
        </div>
      </div>

      <div className={styles.fog} />
      
      <div className={styles.ship}>
        <Image
          src="/images/pirate-ship.png"
          alt="Pirate Ship"
          className={styles.shipImage}
          width={360}
          height={360}
          priority
          quality={100}
          unoptimized
          style={{
            objectFit: 'contain',
            background: 'transparent'
          }}
          loading="eager"
        />
      </div>
    </main>
  );
}
