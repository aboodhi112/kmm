"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="relative bg-blue-900 text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-10">

        {/* TEXT BODY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About KMM College
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            KMM College, Thrikkakara, Vazhakkala stands as a beacon of academic excellence
            and innovation, dedicated to empowering students with knowledge, skills,
            and values to thrive in their careers and contribute to society.
          </p>
        </motion.div>

        {/* MOBILE LOGO under text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ amount: 0.3, once: false }}
          className="mt-10 flex justify-center md:hidden"
        >
          <div className="relative w-27 h-44 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/kmm-logo.png"
              alt="KMM College Logo"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* DESKTOP LOGO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden md:block absolute top-1/2 right-[5%] -translate-y-1/2"
      >
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/kmm-logo.png"
            alt="KMM College Logo"
            fill
            className="object-contain bg-white rounded-2xl"
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
