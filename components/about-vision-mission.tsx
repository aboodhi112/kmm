"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { getCMSContent } from "@/lib/cms-storage"

export default function AboutVisionMission() {
  const [content, setContent] = useState({
    vision: "",
    mission: "",
  })

  useEffect(() => {
    const aboutContent = getCMSContent("about")
    setContent({
      vision:
        aboutContent.find((item) => item.title.toLowerCase() === "vision")?.content ||
        "To be a center of excellence in education, empowering students with knowledge, skills, and values...",
      mission:
        aboutContent.find((item) => item.title.toLowerCase() === "mission")?.content ||
        "To provide inclusive, high-quality education that fosters intellectual growth...",
    })
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: false }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
      id="vision"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative inline-block">
            Vision & Mission
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-yellow-accent" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Our commitment to educational excellence and student empowerment
          </p>
        </motion.div>

        {/* CARD GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: false }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-2 gap-8"
        >

          {/* VISION CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-accent relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.4, once: false }}
              className="flex items-start gap-4 mb-6 relative z-10"
            >
              <div className="w-16 h-16 relative flex-shrink-0 border-2 border-yellow-accent/30 rounded-lg overflow-hidden">
                <Image
                  src="/vision-target-goal-achievement.jpg"
                  alt="Vision"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Vision</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.4, once: false }}
              className="text-gray-700 leading-relaxed relative z-10"
            >
              {content.vision}
            </motion.p>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-accent relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.4, once: false }}
              className="flex items-start gap-4 mb-6 relative z-10"
            >
              <div className="w-16 h-16 relative flex-shrink-0 border-2 border-yellow-accent/30 rounded-lg overflow-hidden">
                <Image
                  src="/mission-star-excellence-quality.jpg"
                  alt="Mission"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Mission</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.4, once: false }}
              className="text-gray-700 leading-relaxed relative z-10"
            >
              {content.mission}
            </motion.p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}
