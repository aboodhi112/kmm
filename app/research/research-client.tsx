"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowLeft, Sparkles, Microscope } from "lucide-react"
import Link from "next/link"

export default function ResearchClient() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4 bg-gradient-to-b from-white to-blue-50">
      
      {/* 1. ANIMATED BACKGROUND BLOBS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" 
      />

      {/* 2. CENTRAL ANIMATED ICON (Floating Rocket/Lab Theme) */}
      <div className="relative mb-8">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 bg-white p-6 rounded-full shadow-xl border-4 border-yellow-400"
        >
          <Rocket className="w-16 h-16 text-blue-600" />
        </motion.div>
        
        {/* Little sparkles popping around */}
        <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-2 -right-4"
        >
            <Sparkles className="w-8 h-8 text-yellow-500" />
        </motion.div>
        <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute -bottom-2 -left-4"
        >
            <Microscope className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>

      {/* 3. TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-2xl relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
          Something <span className="text-blue-600">Innovative</span> <br />
          is Brewing!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are currently curating an exciting showcase of our Academic Projects, 
          Internships, and Innovation Hub. The lab is busy, and we will be live soon.
        </p>

        {/* 4. 'BACK HOME' BUTTON */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </motion.div>

    </main>
  )
}