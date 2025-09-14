import React from 'react';
import aisocLogo from '@/assets/AISOC_transparent.png';

export default function TeamLoading() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      {/* Header skeleton */}
      <div className="pt-16">
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img src={aisocLogo} alt="AISOC Logo" className="w-24 h-24 object-contain animate-pulse" />
              </div>
              <div className="h-12 w-64 bg-white/10 rounded-lg animate-pulse mb-4" />
              <div className="h-6 w-96 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 pb-24">
          {/* Section skeleton */}
          <div className="mb-6">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-4" />
            <div className="h-4 w-72 bg-white/5 rounded animate-pulse mb-4" />
            <div className="h-px w-full bg-white/10" />
          </div>

          {/* Cards grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-5 animate-pulse">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar skeleton */}
                  <div className="w-24 h-24 mb-4 rounded-full bg-white/10 animate-pulse" />
                  
                  {/* Name skeleton */}
                  <div className="h-5 w-32 bg-white/10 rounded mb-2 animate-pulse" />
                  
                  {/* Role skeleton */}
                  <div className="h-4 w-24 bg-white/5 rounded mb-3 animate-pulse" />
                  
                  {/* Bio skeleton */}
                  <div className="space-y-2 mb-4 w-full">
                    <div className="h-3 w-full bg-white/5 rounded animate-pulse" />
                    <div className="h-3 w-3/4 bg-white/5 rounded animate-pulse mx-auto" />
                  </div>
                  
                  {/* Social icons skeleton */}
                  <div className="flex gap-3">
                    <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />
                    <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />
                    <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" />
              <span className="ml-4 text-white/70 text-sm">Loading team members...</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}