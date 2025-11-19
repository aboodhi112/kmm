"use client"

import { getCMSByTitle, getCMSContent } from "@/lib/cms-storage"
import { ArrowRight, Calendar, BookOpen, Target, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ScrollFade({ children, direction = "up", delay = 0 }: { children: React.ReactNode; direction?: "up" | "down" | "left" | "right"; delay?: number }) {
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

export default function Welcome() {
  const welcomeContent = getCMSByTitle("homepage", "welcome")
  const descriptionContent = getCMSByTitle("homepage", "description")
  const newsItems = getCMSContent("news").slice(0, 3)

  const welcomeTitle = "Welcome to KMM College, Thrikkakara, Vazhakkala"

  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="absolute -left-4 top-0 w-1 h-32 bg-yellow-accent" />

        {/* TITLE */}
        <ScrollFade direction="up" delay={60}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground border-l-4 border-yellow-accent pl-4 md:pl-6 leading-tight mb-8">
            {welcomeTitle}
          </h2>
        </ScrollFade>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* LEFT: VIDEO */}
          <ScrollFade direction="left" delay={120}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-accent/20 rounded-xl -z-10" />
              <div className="absolute top-2 left-2 w-full h-full bg-yellow-accent/10 rounded-xl -z-10" />

              <video
                src="/promo.mp4"
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop
                onLoadedData={() => setLoaded(true)}
                className={`w-full rounded-xl shadow-2xl border-4 border-yellow-accent/30 transition-opacity duration-700 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />

              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 bg-black/50 text-white p-2 rounded-full backdrop-blur-md"
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </ScrollFade>

          {/* RIGHT CONTENT */}
          <ScrollFade direction="right" delay={180}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                KMM Collage, Thrikkakara, Vazhakkala
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {welcomeContent?.content?.toString() ||
                  `KMM College, Thrikkakara Vazhakkala, commenced its academic journey in 2021-22, welcoming its first cohort
                  of students in 2022-23. Notably, in its inaugural year, the college recorded the highest student
                  enrollment under the self-financing scheme of the university.`}
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {descriptionContent?.content?.toString() ||
                  `Since its establishment, the college has remained steadfast in its mission to cultivate intellectual
                  growth, ethical leadership, and social responsibility.`}
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-5">
                <Link href="/about">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 md:px-7 py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 group text-sm md:text-base border-b-4 border-yellow-accent shadow-lg hover:shadow-xl">
                    MORE ABOUT US
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link href="/admissions">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-5 md:px-7 py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base border-b-4 border-yellow-accent shadow-lg hover:shadow-xl">
                    APPLY NOW
                  </button>
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>

        {/* UPDATES SECTION */}
        <ScrollFade direction="up" delay={240}>
          <div className="mt-8 md:mt-12 bg-gradient-to-br from-yellow-accent-light to-white rounded-xl shadow-xl border-4 border-yellow-accent overflow-hidden w-full relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/30 rounded-bl-full" />

            <div className="bg-primary text-primary-foreground px-4 md:px-5 py-3 md:py-4 border-b-4 border-yellow-accent relative z-10">
              <h3 className="text-base md:text-lg lg:text-xl font-bold">LATEST UPDATES</h3>
            </div>

            <div className="p-5 md:p-6 space-y-4 bg-white/80 backdrop-blur-sm">
              {newsItems.length > 0 ? (
                newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b-2 border-yellow-accent/30 last:border-b-0 hover:bg-yellow-accent-light/30 p-3 rounded-lg transition-colors"
                  >
                    <p className="text-xs md:text-sm text-muted-foreground mb-1.5 font-medium">
                      {item.date || "Recent"}
                    </p>
                    <p className="font-semibold text-sm md:text-base text-foreground flex items-start gap-2">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-yellow-accent-dark flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item.title}</span>
                    </p>
                  </div>
                ))
              ) : (
                <>
                  <div className="pb-4 border-b-2 border-yellow-accent/30 hover:bg-yellow-accent-light/30 p-3 rounded-lg transition-colors">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1.5 font-medium">March 17, 2025</p>
                    <p className="font-semibold text-sm md:text-base text-foreground flex items-start gap-2">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-yellow-accent-dark flex-shrink-0 mt-0.5" />
                      <span>ADMISSIONS STARTED</span>
                    </p>
                  </div>
                  <div className="pb-4 border-b-2 border-yellow-accent/30 hover:bg-yellow-accent-light/30 p-3 rounded-lg transition-colors">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1.5 font-medium">March 17, 2025</p>
                    <p className="font-semibold text-sm md:text-base text-foreground flex items-start gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-yellow-accent-dark flex-shrink-0 mt-0.5" />
                      <span>UG & PG 2025-2026 ADMISSION STARTED</span>
                    </p>
                  </div>
                  <div className="pb-0 hover:bg-yellow-accent-light/30 p-3 rounded-lg transition-colors">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1.5 font-medium">March 17, 2025</p>
                    <p className="font-semibold text-sm md:text-base text-foreground flex items-start gap-2">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-yellow-accent-dark flex-shrink-0 mt-0.5" />
                      <span>UG & PG 2025-2026 ADMISSION STARTED</span>
                    </p>
                  </div>
                </>
              )}

              <Link
                href="/events"
                className="text-primary hover:text-primary/80 font-semibold text-sm md:text-base flex items-center gap-2 mt-4 group pt-4 border-t-2 border-yellow-accent/30"
              >
                View More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
