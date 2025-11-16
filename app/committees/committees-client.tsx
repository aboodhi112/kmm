"use client"

import {
  BookOpen,
  FileCheck,
  Scale,
  CheckCircle,
  BarChart3,
  Trophy,
  Theater,
  Library,
  Laptop,
  Microscope,
} from "lucide-react"

import { motion } from "framer-motion"

export default function CommitteesClient() {
  const committees = [
    {
      name: "Academic Council",
      description: "Oversees academic policies, curriculum development, and quality assurance.",
      icon: BookOpen,
      members: "12-15",
    },
    {
      name: "Admission Committee",
      description: "Manages the admission process and student selection across all programs.",
      icon: FileCheck,
      members: "8-10",
    },
    {
      name: "Disciplinary Committee",
      description: "Maintains discipline and conducts inquiries into student conduct matters.",
      icon: Scale,
      members: "7-9",
    },
    {
      name: "Internal Quality Assurance Cell",
      description: "Ensures quality standards and monitors institutional performance.",
      icon: CheckCircle,
      members: "10-12",
    },
    {
      name: "Exam Committee",
      description: "Conducts and supervises all examinations and assessments.",
      icon: BarChart3,
      members: "6-8",
    },
    {
      name: "Sports Committee",
      description: "Organizes and promotes sports activities and athletic events.",
      icon: Trophy,
      members: "8-10",
    },
    {
      name: "Cultural Committee",
      description: "Plans and executes cultural programs and student events.",
      icon: Theater,
      members: "10-12",
    },
    {
      name: "Library Advisory Committee",
      description: "Advises on library services, resources, and digital infrastructure.",
      icon: Library,
      members: "6-8",
    },
    {
      name: "IT & Infrastructure Committee",
      description: "Manages technology infrastructure and digital initiatives.",
      icon: Laptop,
      members: "8-10",
    },
    {
      name: "Research & Development Committee",
      description: "Promotes research activities and coordinates research projects.",
      icon: Microscope,
      members: "10-12",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <h1 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4">
        College Committees
      </h1>

      <p className="text-lg text-gray-700 mb-12">
        Various committees work collaboratively to ensure smooth functioning of the college, quality education
        delivery, and comprehensive student support.
      </p>

      {/* Committees Grid - Slide In Once */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {committees.map((committee, idx) => {
          const Icon = committee.icon
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">{committee.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{committee.description}</p>
              <p className="text-sm text-blue-600 font-semibold">Members: {committee.members}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* How Committees Work Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-12 border-t-4 border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-8">How Our Committees Work</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">1. Planning</h3>
            <p className="text-sm leading-relaxed">
              Committees develop strategic plans and policies aligned with institutional goals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">2. Implementation</h3>
            <p className="text-sm leading-relaxed">
              Execute planned initiatives and programs with proper coordination and resources.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">3. Monitoring</h3>
            <p className="text-sm leading-relaxed">
              Regular assessment and monitoring of outcomes and progress towards goals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">4. Evaluation</h3>
            <p className="text-sm leading-relaxed">
              Continuous evaluation and improvement of processes and outcomes.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interdepartmental Coordination */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg border-2 border-yellow-400"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Interdepartmental Coordination</h2>

        <p className="text-gray-700 mb-6">
          All committees work in close coordination with each other to ensure a holistic approach to institutional
          development. Regular inter-committee meetings facilitate knowledge sharing and collaborative problem-solving.
        </p>

        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          View Committee Meeting Schedule
        </button>
      </motion.div>
    </main>
  )
}
