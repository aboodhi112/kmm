"use client"

import {
  BookOpen,
  Palette,
  Leaf,
  Trophy,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Handshake,
  AtSign,
  Lightbulb,
  HelpCircle,
  Film,
  CheckSquare,
  ShieldOff,
  Zap,
  FileText,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

export default function CellsClient() {
  const cells = [
    {
    name: "Placement Cell",
    description: "Facilitates job training, career counseling, and campus recruitment drives for graduating students.",
    icon: Briefcase,
  },
  {
    name: "Skill Development Cell",
    description: "Organizes workshops and courses to enhance student soft skills, technical proficiency, and professional competencies.",
    icon: TrendingUp,
  },
  {
    name: "Scholarship Supporting Cell",
    description: "Provides information and assistance to students regarding eligibility, application, and acquisition of various scholarships.",
    icon: GraduationCap,
  },
  {
    name: "Women’s Club",
    description: "Promotes gender sensitivity, empowerment, and organizes activities addressing issues specific to women.",
    icon: Users
  },
  {
    name: "Sports Club",
    description: "Organizes and manages various indoor and outdoor athletic events, tournaments, and recreational sports activities.",
    icon: Trophy,
  },
  {
    name: "Mentoring & Counselling Cell",
    description: "Offers guidance and support for academic, emotional, and psychological well-being through faculty mentoring and professional counseling.",
    icon: Handshake,
  },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* BG Blur Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4">
        Student Cells
      </h1>
      <p className="text-lg text-gray-700 mb-12">
        Our specialized cells are dedicated to supporting student well-being, addressing grievances,
        and fostering a safe, inclusive campus community.
      </p>

      {/* Cells Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        {cells.map((cell, idx) => {
          const Icon = cell.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400 hover:shadow-xl hover:border-yellow-500 transition-all"
            >
              <div className="mb-4">
                <Icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{cell.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{cell.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Initiatives Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-12 border-t-4 border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-6">Our Key Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Support & Counseling</h3>
            <p>Professional counseling and mentoring services available to all students.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Awareness Programs</h3>
            <p>Regular workshops and seminars on important topics like health, safety, and equality.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">24/7 Helpline</h3>
            <p>Always available support for students facing any issues.</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg border-2 border-yellow-400"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Reach Out to Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any concerns or need support, please don't hesitate to contact the relevant cell.
        </p>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cell</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Select a cell</option>
              {cells.map((cell) => (
                <option key={cell.name}>{cell.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </main>
  )
}