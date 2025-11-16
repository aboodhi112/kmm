"use client"

import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Palette,
  Briefcase,
  Laptop,
  Calculator,
  Languages,
} from "lucide-react"
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// --- ScrollFade helper ---
function ScrollFade({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode
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

  const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, ...dirMap }}
        animate={visible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...dirMap }}
        transition={{
          duration: 0.8,
          ease: cubicEase,
          delay: delay / 1000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// --- Main component ---
export default function ProgramsSection() {
  const departments = [
    {
      slug: "commerce",
      name: "Commerce",
      description: "Business and accounting education",
      Icon: TrendingUp,
    },
    {
      slug: "animation",
      name: "Animation & Graphic Design",
      description: "Creative design and animation",
      Icon: Palette,
    },
    {
      slug: "business-admin",
      name: "Business Administration",
      description: "Management and business studies",
      Icon: Briefcase,
    },
    {
      slug: "computer-app",
      name: "Computer Application",
      description: "IT and computer sciences",
      Icon: Laptop,
    },
    {
      slug: "mathematics",
      name: "Mathematics",
      description: "Mathematical sciences",
      Icon: Calculator,
    },
    {
      slug: "languages",
      name: "Languages",
      description: "Language and cultural studies",
      Icon: Languages,
    },
  ]

  // --- Motion variants ---
  const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicEase,
      } as Transition,
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4 } as Transition,
    },
  }

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-accent to-transparent" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Title */}
        <ScrollFade direction="up" delay={60}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground border-l-4 border-yellow-accent pl-4 md:pl-6 mb-8 md:mb-12 relative">
            Our Departments
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-yellow-accent" />
          </h2>
        </ScrollFade>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {departments.map((dept) => (
            <motion.div key={dept.slug} variants={cardVariants}>
              <Link href={`/departments/${dept.slug}`}>
                <div className="bg-card border-2 border-transparent hover:border-yellow-accent rounded-xl p-5 md:p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col group touch-manipulation relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full transition-all group-hover:w-24 group-hover:h-24" />

                  <div className="mb-4 relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-accent/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-accent/30 transition-colors">
                      <dept.Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground flex-grow mb-4 leading-relaxed text-sm md:text-base relative z-10">
                    {dept.description}
                  </p>
                  <button className="bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold transition-all duration-200 w-full flex items-center justify-center gap-2 group-hover:gap-3 text-sm md:text-base border-b-4 border-yellow-accent relative z-10">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
