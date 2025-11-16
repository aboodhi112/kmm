"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function PlacementPartners() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  const companies = [
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
    },
  ]

  // Auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationFrame: number
    const scrollSpeed = 0.35 // slower for smooth scroll

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += scrollSpeed
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [paused])

  return (
    <section className="translate-z-0 relative overflow-hidden bg-background py-10 md:py-12 border-t border-muted/30 -mt-30 md:-mt-30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 items-center gap-8">
        {/* LEFT: Title */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Placement Partners
          </h2>
          <div className="w-20 h-[3px] bg-yellow-accent mt-2 rounded-full" />
        </div>

        {/* RIGHT: Scrolling Logos */}
        <div className="md:col-span-3 relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-10 md:gap-14 overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {[...companies, ...companies].map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center min-w-[130px] sm:min-w-[150px] md:min-w-[170px] bg-white border border-muted/30 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-20 h-10 md:w-28 md:h-14">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
