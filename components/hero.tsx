"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visible, setVisible] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    { image: "/kmm-college-building.png", caption: "Welcome to <br>KMM College Vazhakkala" },
    { image: "/college-students-celebration-happy.jpg", caption: "Learn. Lead. Excel" },
    { image: "/campus-building-academic-excellence.jpg", caption: "Excellence in Education" },
  ]

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => nextSlide(), 5000)
  }

  useEffect(() => {
    setVisible(true)
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((p) => (p + 1) % slides.length)
    resetTimer()
  }

  const prevSlide = () => {
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
    resetTimer()
  }

  return (
    <div
      className={`relative h-screen -mt-[60px] md:-mt-[128px] overflow-hidden bg-muted transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={nextSlide}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return
        const dx = e.changedTouches[0].clientX - touchStartX
        if (dx > 40) prevSlide()
        if (dx < -40) nextSlide()
        setTouchStartX(null)
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].caption}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

          <motion.h2
            key={slides[currentSlide].caption}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-white text-center font-bold drop-shadow-2xl whitespace-normal px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].caption }}
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => { e.stopPropagation(); prevSlide() }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide() }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  )
}
