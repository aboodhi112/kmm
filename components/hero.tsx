"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  // --- LOGIC FOR MOBILE SLIDER ---
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
      className={`relative h-screen -mt-[60px] md:-mt-[128px] overflow-hidden bg-black transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      
      {/* ========================================= */}
      {/* OPTION 1: DESKTOP VIEW (Video Background) */}
      {/* ========================================= */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Ensure you have this video file in your public folder */}
          <source src="/college-intro.mp4" type="video/mp4" />
        </video>

        {/* Desktop Overlay & Static Text */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-5xl"
          >
            <h1 className="text-white font-bold text-6xl lg:text-7xl drop-shadow-2xl mb-6">
              Welcome to <br />
              <span className="text-blue-200">KMM College Vazhakkala</span>
            </h1>
            <p className="text-white/90 text-2xl font-medium drop-shadow-md">
              Learn. Lead. Excel.
            </p>
          </motion.div>
        </div>
      </div>


      {/* ========================================= */}
      {/* OPTION 2: MOBILE VIEW (Image Slider)      */}
      {/* ========================================= */}
      <div 
        className="block md:hidden absolute inset-0 w-full h-full"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return
          const dx = e.changedTouches[0].clientX - touchStartX
          if (dx > 40) prevSlide()
          if (dx < -40) nextSlide()
          setTouchStartX(null)
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-full h-full object-cover"
            />
            
            {/* Mobile Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

            {/* Mobile Changing Text */}
            <motion.div
               key={`text-${currentSlide}`}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="absolute inset-0 flex items-center justify-center px-4"
            >
              <h2
                className="text-white text-center font-bold text-4xl drop-shadow-xl leading-tight"
                dangerouslySetInnerHTML={{ __html: slides[currentSlide].caption }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide() }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide() }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </div>
  )
}