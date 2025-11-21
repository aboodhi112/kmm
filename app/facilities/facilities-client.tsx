"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { saveFacilityIssue } from "@/lib/cms-storage"
import {
  Monitor,
  Palette,
  Film,
  Video,
  Theater,
  Presentation,
  UtensilsCrossed,
  Wifi,
  Activity,
  Users,
  Smartphone,
  Microscope,
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const facilities = [
  {
    name: "Computer Lab",
    description:
      "Three fully equipped computer labs with latest software and high-speed internet connectivity for practical training.",
    icon: Monitor,
  },
  {
    name: "Animation 2D Lab",
    description: "Professional 2D animation lab with industry-standard software and equipment for animation studies.",
    icon: Palette,
  },
  {
    name: "Animation 3D Lab",
    description: "Advanced 3D animation laboratory with cutting-edge technology and rendering capabilities.",
    icon: Film,
  },
  {
    name: "Stop Motion Lab",
    description: "Specialized lab equipped for stop motion animation techniques and production.",
    icon: Video,
  },
  {
    name: "Open Air Auditorium",
    description: "Spacious open-air venue perfect for lectures, seminars, cultural programs, and student events.",
    icon: Theater,
  },
  {
    name: "Seminar Hall",
    description:
      "Modern seminar halls and conference rooms equipped with audio-visual facilities for workshops and seminars.",
    icon: Presentation,
  },
  {
    name: "Canteen",
    description: "Well-maintained canteen providing hygienic and nutritious food options for students and staff.",
    icon: UtensilsCrossed,
  },
  {
    name: "WiFi Campus",
    description: "Complete WiFi coverage throughout the campus for seamless internet connectivity.",
    icon: Wifi,
  },
  {
    name: "Yoga Room",
    description: "Dedicated yoga room for wellness programs and stress management activities.",
    icon: Activity,
  },
  {
    name: "NSS Room",
    description: "National Service Scheme office coordinating community service and social responsibility programs.",
    icon: Users,
  },
  {
    name: "Smart Classrooms",
    description: "Technology-enabled classrooms with interactive boards and multimedia presentation facilities.",
    icon: Smartphone,
  },
  {
    name: "Science Labs",
    description: "Well-equipped physics, chemistry, and mathematics labs with modern apparatus and safety measures.",
    icon: Microscope,
  },
]

export default function FacilitiesClient() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const issue = {
      id: Date.now().toString(),
      name: formData.name,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      status: "pending" as const,
    }

    saveFacilityIssue(issue)
    setSubmitMessage("Thank you! Your facility issue has been submitted successfully.")
    setFormData({ name: "", subject: "", message: "" })
    setIsSubmitting(false)

    setTimeout(() => setSubmitMessage(""), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <main className="max-w-7xl mx-auto px-4 py-16 relative">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4"
        >
          Campus Facilities
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-12"
        >
          KMM College is equipped with world-class facilities designed to provide a conducive learning environment for
          all students.
        </motion.p>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400 hover:shadow-xl hover:border-yellow-500 transition-all"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            )
          })}
        </div>

 

        {/* REPORT ISSUE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 p-8 rounded-lg border-2 border-yellow-400"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Report a Facility Issue</h2>
          <p className="text-gray-700 mb-6">
            If you have any feedback or issue regarding our facilities, please fill out the form below. We appreciate your input.
          </p>

          {submitMessage && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {submitMessage}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
