'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fade in on mount
    setIsVisible(true)
    
    // Fade out and in every 4 seconds
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div 
        className={`
          text-center bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl 
          max-w-md mx-4 transform transition-all duration-1000 ease-in-out
          ${isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
          }
        `}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-pulse">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-bounce">
          We're working hard to bring you something amazing!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full animate-pulse"></div>
        </div>
        <p className="text-xl font-semibold text-blue-600 animate-pulse">
          Coming Soon...
        </p>
      </div>
    </main>
  )
} 