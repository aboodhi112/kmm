"use client"

import {
  Mic,
  BookOpen,
  Code,
  Camera,
  Music,
  Microscope,
  Palette,
  Drama,
  Leaf,
  Trophy,
  Globe,
  Briefcase,
} from "lucide-react"

import { motion } from "framer-motion"

export default function ClubsClient() {
  const clubs = [
    {
      name: "Debate Club",
      description: "Forum for developing public speaking and critical thinking skills through debates and discussions.",
      icon: Mic,
    },
    {
      name: "Literary Club",
      description: "Platform for creative writing, poetry, storytelling, and literature enthusiasts.",
      icon: BookOpen,
    },
    {
      name: "Coding Club",
      description: "Community for programming enthusiasts to learn, collaborate, and build projects together.",
      icon: Code,
    },
    {
      name: "Photography Club",
      description: "Explore the art of photography with fellow enthusiasts and professional photographers.",
      icon: Camera,
    },
    {
      name: "Music Club",
      description: "Platform for musicians to perform, learn new instruments, and appreciate diverse music genres.",
      icon: Music,
    },
    {
      name: "Science Club",
      description: "Engage in scientific activities, experiments, and exploration of scientific concepts.",
      icon: Microscope,
    },
    {
      name: "Art & Craft Club",
      description: "Express creativity through various art forms including painting, sculpting, and handicrafts.",
      icon: Palette,
    },
    {
      name: "Drama Club",
      description: "Participate in theatrical productions, skits, and dramatic performances.",
      icon: Drama,
    },
    {
      name: "Environmental Club",
      description: "Work towards environmental conservation and sustainability initiatives on campus.",
      icon: Leaf,
    },
    {
      name: "Sports Club",
      description: "Organize and participate in various indoor and outdoor sporting activities.",
      icon: Trophy,
    },
    {
      name: "Cultural Club",
      description: "Celebrate diverse cultures through events, festivals, and cultural exchange programs.",
      icon: Globe,
    },
    {
      name: "Entrepreneurship Club",
      description: "Nurture business acumen and startup mentality among student entrepreneurs.",
      icon: Briefcase,
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* decorative bg blur */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* heading */}
      <h1 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4">Student Clubs</h1>
      <p className="text-lg text-gray-700 mb-12">
        Our diverse range of clubs provide opportunities for students to pursue their interests, develop new skills,
        and build meaningful friendships. Join a club and be part of a vibrant community.
      </p>

      {/* clubs grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {clubs.map((club, idx) => {
          const Icon = club.icon
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">{club.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{club.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* CTA section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg border-2 border-yellow-400"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Want to Start a New Club?</h2>
        <p className="text-gray-700 mb-6">
          Have a unique interest that's not covered by existing clubs? We encourage students to propose new clubs!
          Contact the Student Affairs Office for guidelines and support.
        </p>

        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </main>
  )
}
