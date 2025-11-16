"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"

function ScrollFade({
  children,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  }[direction]

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, ...dirMap }}
        animate={visible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...dirMap }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: delay / 1000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function CampusOverview() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-yellow-accent-light/20 via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border-4 border-yellow-accent/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-accent/10 rotate-45" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Section Title */}
        <ScrollFade direction="up" delay={60}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground border-l-4 border-yellow-accent pl-4 md:pl-6 mb-8 md:mb-12 relative">
            Campus Overview
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-yellow-accent" />
          </h2>
        </ScrollFade>

        {/* First row: Campus Image + Description */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
          <ScrollFade direction="left" delay={120}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-yellow-accent/30 rounded-xl -z-10" />
              <img
                src="/college-campus-building-architecture.jpg"
                alt="Campus Overview"
                className="w-full rounded-xl shadow-2xl relative"
              />
            </div>
          </ScrollFade>

          <ScrollFade direction="right" delay={180}>
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-yellow-accent shadow-lg">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                The college has a well-designed infrastructure and numerous facilities for students, including seminar
                halls, a college radio station, smart halls, smart classrooms, and a waiting room. The institution
                features well-equipped and furnished labs as per the norms of the university. The CCTV-enabled campus
                ensures the safety of its well-endowed environment.
              </p>
            </div>
          </ScrollFade>
        </div>

        {/* Second row: Lab Description + Image */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <ScrollFade direction="left" delay={200}>
            <div className="space-y-4 order-2 lg:order-1 bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-yellow-accent shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                <span className="w-2 h-8 bg-yellow-accent" />
                OUR LAB
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                The college has three computer labs. All the computers in the labs are provided with the latest updated
                software. Internet, printing, and scanning facilities are also available through the network. The
                computer labs are used to run add-on programmes and certificate programmes.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade direction="right" delay={240}>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-yellow-accent/30 rounded-xl -z-10" />
              <img
                src="/computer-lab-technology-equipment.jpg"
                alt="Computer Lab"
                className="w-full rounded-xl shadow-2xl relative"
              />
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}
