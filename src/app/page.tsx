'use client';

import { useEffect, useState } from 'react';
import styles from './styles/NightScene.module.css';

export default function Home() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Create initial stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1
        });
      }
      setStars(newStars);
    };

    // Create shooting stars periodically
    const createShootingStar = () => {
      const newShootingStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 30
      };
      setShootingStars(prev => [...prev, newShootingStar]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, 2000);
    };

    generateStars();
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every 5 seconds
        createShootingStar();
      }
    }, 5000);

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.stars}>
        {stars.map(star => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        {shootingStars.map(star => (
          <div
            key={star.id}
            className={styles.shootingStar}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`
            }}
          />
        ))}
      </div>
      <div className={styles.ocean}>
        <div className={styles.fog} />
        <div className={styles.waves} />
      </div>
      <div className={styles.ship}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            d="M10,80 L90,80 L50,30 Z"
            fill="#4a4a4a"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
          <path
            d="M50,30 L50,10 L70,40 L50,30"
            fill="#6a6a6a"
            stroke="#2a2a2a"
            strokeWidth="2"
          />
        </svg>
      </div>
    </main>
  );
}
