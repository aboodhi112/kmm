"use client"

import {
  Bot,
  Globe2,
  Users,
  Dna,
  BookOpen,
  FlaskConical,
} from "lucide-react"

import { motion } from "framer-motion"

export default function ResearchClient() {
  const researchAreas = [
    {
      title: "Computer Science & AI",
      description: "Advanced research in artificial intelligence, machine learning, and data science applications.",
      icon: Bot,
    },
    {
      title: "Environmental Studies",
      description: "Research focused on sustainability, conservation, and environmental protection.",
      icon: Globe2,
    },
    {
      title: "Social Sciences",
      description: "Interdisciplinary research examining society, culture, economics, and human behavior.",
      icon: Users,
    },
    {
      title: "Life Sciences",
      description: "Biomedical research, microbiology, and biotechnology advancements.",
      icon: Dna,
    },
    {
      title: "Arts & Humanities",
      description: "Literary criticism, historical research, and cultural studies.",
      icon: BookOpen,
    },
    {
      title: "Applied Sciences",
      description: "Practical research with real-world applications and industry partnerships.",
      icon: FlaskConical,
    },
  ]

  const researchInitiatives = [
    { title: "Research Grants Program", description: "Internal funding for faculty and student research projects." },
    { title: "Student Research Partnerships", description: "Mentored research opportunities for UG & PG students." },
    { title: "Faculty Research Workshops", description: "Training on research methodologies & publication ethics." },
    { title: "Research Seminars & Colloquia", description: "Talks by renowned scholars and researchers." },
    { title: "International Collaborations", description: "Joint research with global academic partners." },
    { title: "Publication Support", description: "Help with publishing research output." },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* Background blur blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <h1 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4">
        Research & Innovation
      </h1>

      <p className="text-lg text-gray-700 mb-12">
        KMM College is committed to fostering a culture of research and innovation. We support faculty and students
        in pursuing meaningful research that contributes to knowledge advancement and societal benefit.
      </p>

      {/* Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400 hover:shadow-xl hover:border-yellow-500 transition-all"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-blue-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Research Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">
          Research Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {researchInitiatives.map((initiative, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-yellow-400"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-700 text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Research Impact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-12 border-t-4 border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-8">Research Impact</h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">50+</p>
            <p>Active Research Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">30+</p>
            <p>Publications Annually</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p>International Collaborations</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">₹50L+</p>
            <p>Annual Research Funding</p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
