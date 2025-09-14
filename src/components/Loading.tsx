import React from 'react';
import aisocLogo from '@/assets/AISOC_transparent.png';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Logo with pulse animation */}
        <div className="relative mb-8">
          <img 
            src={aisocLogo} 
            alt="AISOC" 
            className="w-20 h-20 animate-pulse opacity-90"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-300/20 animate-ping" />
        </div>
        
        {/* Dots animation */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" />
        </div>
        
        {/* Loading text */}
        <p className="mt-6 text-white/70 text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
}