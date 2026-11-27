'use client';

import { motion } from 'framer-motion';

type Variant = 'dusk' | 'day';

const PALETTE = {
  dusk: {
    skyTop: '#1f3a4d',
    skyBottom: '#f1b57a',
    sun: '#ffd9a0',
    far: '#5f7f8c',
    mid: '#3f6252',
    near: '#26443a',
    glass: '#ffd27a',
  },
  day: {
    skyTop: '#9fd3e0',
    skyBottom: '#f6efdc',
    sun: '#fff3c4',
    far: '#8fb3b8',
    mid: '#5f8f78',
    near: '#3f6e55',
    glass: '#d9ecef',
  },
} as const;

const TREES = [
  { x: 60, y: 500, h: 150 },
  { x: 125, y: 505, h: 120 },
  { x: 195, y: 490, h: 100 },
  { x: 640, y: 500, h: 130 },
  { x: 705, y: 505, h: 160 },
  { x: 765, y: 495, h: 110 },
];

function Pine({ x, y, h, color }: { x: number; y: number; h: number; color: string }) {
  return (
    <polygon
      points={`${x},${y - h} ${x - h * 0.28},${y} ${x + h * 0.28},${y}`}
      fill={color}
    />
  );
}

function Cloud({ y, scale, duration }: { y: number; scale: number; duration: number }) {
  return (
    <motion.g
      initial={{ x: -60 }}
      animate={{ x: 60 }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <g transform={`translate(0 ${y}) scale(${scale})`} fill="#fff" opacity="0.2">
        <ellipse cx="0" cy="0" rx="70" ry="18" />
        <ellipse cx="-30" cy="-12" rx="36" ry="20" />
        <ellipse cx="25" cy="-10" rx="30" ry="18" />
      </g>
    </motion.g>
  );
}

// Decorative scene: a mountain cabin with large windows. Hidden from screen readers.
export default function CabinIllustration({ variant = 'dusk' }: { variant?: Variant }) {
  const c = PALETTE[variant];
  const gradientId = `sky-${variant}`;

  return (
    <svg className="cabin-svg" viewBox="0 0 800 560" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.skyTop} />
          <stop offset="1" stopColor={c.skyBottom} />
        </linearGradient>
      </defs>

      <rect width="800" height="560" fill={`url(#${gradientId})`} />

      <motion.circle
        cx="600"
        cy="170"
        r="48"
        fill={c.sun}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Cloud y={110} scale={1} duration={36} />
      <Cloud y={210} scale={0.7} duration={50} />

      <path d="M0 330 L110 240 L190 296 L320 186 L430 300 L520 236 L640 318 L740 246 L800 292 L800 560 L0 560 Z" fill={c.far} />
      <path d="M0 380 L150 300 L260 360 L400 280 L560 370 L680 300 L800 370 L800 560 L0 560 Z" fill={c.mid} />
      <path d="M0 440 Q200 390 400 430 T800 420 L800 560 L0 560 Z" fill={c.near} />

      {TREES.map((tree) => (
        <Pine key={`${tree.x}-${tree.y}`} x={tree.x} y={tree.y} h={tree.h} color="#1c3329" />
      ))}

      {/* Smoke from the chimney */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="476"
          cy="312"
          r="10"
          fill="#fff"
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{ opacity: [0, 0.5, 0], y: -90, scale: 2 }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: 'easeOut' }}
        />
      ))}

      {/* Cabin */}
      <rect x="465" y="318" width="22" height="50" fill="#3a2619" />
      <polygon points="315,395 420,305 525,395" fill="#3a2619" />
      <rect x="330" y="385" width="180" height="115" fill="#7a5232" />
      {[410, 435, 460, 485].map((y) => (
        <line key={y} x1="330" x2="510" y1={y} y2={y} stroke="#3a2619" strokeOpacity="0.25" strokeWidth="2" />
      ))}

      <motion.rect
        x="345"
        y="405"
        width="55"
        height="55"
        fill={c.glass}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.rect
        x="440"
        y="405"
        width="55"
        height="55"
        fill={c.glass}
        animate={{ opacity: [1, 0.85, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <rect x="372" y="405" width="3" height="55" fill="#3a2619" />
      <rect x="467" y="405" width="3" height="55" fill="#3a2619" />
      <rect x="345" y="431" width="55" height="3" fill="#3a2619" />
      <rect x="440" y="431" width="55" height="3" fill="#3a2619" />

      <rect x="405" y="435" width="30" height="65" fill="#2a1a10" />
      <rect x="320" y="498" width="200" height="12" fill="#8a6240" />

      <rect x="0" y="505" width="800" height="55" fill={c.near} />
    </svg>
  );
}
