"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimateBlockProps {
  children: ReactNode
}

export default function AnimateBlock({ children }: AnimateBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}
