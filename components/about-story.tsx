"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getCMSContent } from "@/lib/cms-storage"

export default function AboutStory() {
  const [content, setContent] = useState({
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
  })

  useEffect(() => {
    const aboutContent = getCMSContent("about")
    setContent({
      paragraph1:
        aboutContent.find((item) => item.title.includes("Paragraph 1"))?.content ||
        "KMM Collage, Thrikkakara, Vazhakkala, Thrikkakara Vazhakkala, operates under the esteemed KMM Group of Institutions, affiliated with Mahatma Gandhi University, Kottayam...",
      paragraph2:
        aboutContent.find((item) => item.title.includes("Paragraph 2"))?.content ||
        "KMM College commenced its academic journey in 2021-22...",
      paragraph3:
        aboutContent.find((item) => item.title.includes("Paragraph 3"))?.content ||
        "Since its establishment, the college has remained steadfast in its mission...",
    })
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
      className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden pl-6"
    >
      <div className="absolute top-10 right-10 w-40 h-40 border-4 border-yellow-accent/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-accent/10 rotate-45" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 border-l-4 border-yellow-accent pl-4">
              Our Journey
            </h2>

            {/* Paragraph stagger */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base"
            >
              {[content.paragraph1, content.paragraph2, content.paragraph3].map((p, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT BOX */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-6 md:p-8 rounded-lg border-l-4 border-yellow-accent shadow-lg relative"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />

            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6 relative z-10">
              What Makes Us Different
            </h3>

            {/* Staggered list animation */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-3 md:space-y-4 relative z-10"
            >
              {[
                "AICTE-approved, self-financing institution",
                "Affiliated with M.G. University, Kottayam",
                "Highest enrollment in inaugural year",
                "Highly qualified and dedicated faculty",
                "Advanced infrastructure and facilities",
                "Holistic learning approach",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex gap-3 text-gray-700 text-sm md:text-base"
                >
                  <span className="text-yellow-accent-dark font-bold min-w-fit">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
