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

export default function ClubsClient() {
  const clubs = [
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
  {
    name: "Social Media Club",
    description: "Manages the institution’s digital presence, creates content, and promotes college events and news online.",
    icon: AtSign,
  },
  {
    name: "Literary & E-Magazine Club",
    description: "Fosters creative writing, reading, poetry, and is responsible for publishing the college's literary e-magazine.",
    icon: BookOpen,
  },
  {
    name: "ED Club (Entrepreneurship Development Club)",
    description: "Nurtures innovative thinking, business acumen, and provides a platform for aspiring student entrepreneurs.",
    icon: Lightbulb,
  },
  {
    name: "Nature & Tourism Club",
    description: "Promotes environmental awareness, sustainability, and organizes educational trips and local tourism activities.",
    icon: Leaf,
  },
  {
    name: "Quiz Club",
    description: "Organizes quizzes, trivia competitions, and knowledge-based events to enhance general and academic awareness.",
    icon: HelpCircle,
  },
  {
    name: "Animation Film Club",
    description: "Explores the art of animation, film-making, storytelling, and hosts screenings and production workshops.",
    icon: Film,
  },
  {
    name: "Internal Assessment Cell",
    description: "Responsible for coordinating and managing the process of continuous internal evaluation and grading of students.",
    icon: CheckSquare,
  },
  {
    name: "Anti-Ragging & Discipline Cell",
    description: "Ensures a safe campus environment, enforces disciplinary rules, and monitors compliance with anti-ragging regulations.",
    icon: ShieldOff,
  },
  {
    name: "Arts Club",
    description: "A hub for various fine arts activities including painting, sketching, crafting, and organizing cultural showcases.",
    icon: Palette,
  },
  {
    name: "Yoga Club",
    description: "Promotes physical and mental health through regular yoga, meditation, and wellness sessions.",
    icon: Zap, // or Lotus
  },
  {
    name: "Examination Cell",
    description: "Manages all aspects of internal and external examinations, including scheduling, conduct, and result processing.",
    icon: FileText,
  },
  {
    name: "Staff Recreation & Development Cell",
    description: "Organizes recreational activities for staff and coordinates professional development programs and training.",
    icon: Users, 
  },
];

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
