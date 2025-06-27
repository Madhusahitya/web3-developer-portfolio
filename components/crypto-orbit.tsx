"use client";

import { motion } from "framer-motion";

export default function CryptoOrbit() {
  return (
    <div
      className="absolute w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ pointerEvents: 'none' }}
    >
      <style>{`
        @keyframes crypto-orbit-rotate {
          0% { transform: rotate(0deg) translateY(-175px) rotate(0deg); }
          100% { transform: rotate(360deg) translateY(-175px) rotate(-360deg); }
        }
      `}</style>
      <div
        className="absolute left-1/2 top-0 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-bold text-2xl"
        style={{
          background: '#ff6a00',
          transform: 'translateX(-50%)',
          animation: 'crypto-orbit-rotate 10s linear infinite',
          zIndex: 3,
        }}
      >
        ₿
      </div>
      <div
        className="absolute right-0 top-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-bold text-2xl"
        style={{
          background: '#627eea',
          transform: 'translateY(-50%)',
          animation: 'crypto-orbit-rotate 10s linear infinite',
          animationDelay: '-3.3s',
          zIndex: 3,
        }}
      >
        Ξ
      </div>
      <div
        className="absolute left-1/2 bottom-0 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-bold text-2xl"
        style={{
          background: '#8b5cf6',
          transform: 'translateX(-50%)',
          animation: 'crypto-orbit-rotate 10s linear infinite',
          animationDelay: '-6.6s',
          zIndex: 3,
        }}
      >
        ◎
      </div>
    </div>
  );
}