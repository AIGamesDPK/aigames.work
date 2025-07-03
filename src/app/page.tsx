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
      for (let i = 0; i < 150; i++) {
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
              animationDelay: `${Math.random() * 3}s`
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
        {/* Pirate Flag */}
        <div className={styles.flag}>
          <svg viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="20" fill="black"/>
            <path d="M15 5 L17 8 L19 5 L17 7 L15 5" fill="white"/> {/* Skull */}
            <circle cx="14" cy="6" r="0.8" fill="white"/> {/* Left eye */}
            <circle cx="16" cy="6" r="0.8" fill="white"/> {/* Right eye */}
            <path d="M13 9 L17 9 L15 10 L13 9" fill="white"/> {/* Jaw */}
            <path d="M12 12 L18 12 M13 13 L17 13" stroke="white" strokeWidth="0.5"/> {/* Crossbones */}
          </svg>
        </div>
        {/* Ship Body */}
        <svg
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Hull */}
          <path
            d="M10,60 L90,60 C85,40 75,30 50,30 C25,30 15,40 10,60 Z"
            fill="#8B4513"
            stroke="#3E2723"
            strokeWidth="2"
          />
          {/* Main Mast */}
          <path
            d="M50,30 L50,5"
            stroke="#5D4037"
            strokeWidth="3"
          />
          {/* Sail */}
          <path
            d="M50,10 C60,15 65,25 50,30 C35,25 40,15 50,10"
            fill="#D7CCC8"
            stroke="#5D4037"
          />
          {/* Details */}
          <path
            d="M20,50 L80,50 M30,40 L70,40"
            stroke="#3E2723"
            strokeWidth="1"
          />
        </svg>
      </div>
    </main>
  );
}
