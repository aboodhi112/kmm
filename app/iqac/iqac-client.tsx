"use client"

import { Star, CheckCircle, BookOpen, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// ---------------------------
// COUNTER HOOK
// ---------------------------
function useCounter(target: number, duration = 1500) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  const step = target / (duration / 16)

  function start() {
    if (started) return
    setStarted(true)
    let curr = 0

    const interval = setInterval(() => {
      curr += step
      if (curr >= target) {
        curr = target
        clearInterval(interval)
      }
      setValue(Math.floor(curr))
    }, 16)
  }

  return { value, start }
}

// ---------------------------
// COUNTER COMPONENT
// ---------------------------
function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const { value, start } = useCounter(target)

  useEffect(() => {
    if (inView) start()
  }, [inView])

  return <span ref={ref}>{value}</span>
}

// ---------------------------
// BAR COMPONENT
// ---------------------------
function AnimatedBar({ percent, color }: { percent: string; color: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const [width, setWidth] = useState("0%")

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(percent), 100)
    } else {
      setWidth("0%") // fade out + reset
    }
  }, [inView])

  return (
    <div ref={ref} className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`${color} h-2 rounded-full transition-all duration-[1200ms]`}
        style={{ width }}
      ></div>
    </div>
  )
}

export default function IQACClient() {
  const objectives = [
    {
      title: "Quality Enhancement",
      description: "Continuous improvement and enhancement of academic and administrative quality.",
      icon: Star,
    },
    {
      title: "Accreditation Support",
      description: "Preparation and support for NAAC and other accreditation processes.",
      icon: CheckCircle,
    },
    {
      title: "Curriculum Development",
      description: "Regular review and refinement of curriculum based on industry standards.",
      icon: BookOpen,
    },
    {
      title: "Feedback Analysis",
      description: "Systematic collection and analysis of feedback from stakeholders.",
      icon: MessageSquare,
    },
  ]

  const activities = [
    "Annual self-appraisal by faculty members",
    "Stakeholder feedback surveys (students, parents, employers)",
    "Peer review of academic programs",
    "Quality audits of academic and administrative processes",
    "Best practices documentation and dissemination",
    "Mentoring and professional development programs",
    "Benchmark comparison with peer institutions",
    "Quality enhancement seminars and workshops",
  ]

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">

      {/* Background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* Title */}
      <motion.h1
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4"
      >
        Internal Quality Assurance Cell (IQAC)
      </motion.h1>

      <motion.p
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-700 mb-12"
      >
        The IQAC at KMM College is committed to maintaining and enhancing the quality of education and institutional processes.
      </motion.p>

      {/* ---------------- Objectives ---------------- */}
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">Our Objectives</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((o, idx) => {
            const Icon = o.icon
            return (
              <motion.div
                key={idx}
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-blue-900 mb-2">{o.title}</h3>
                <p className="text-gray-600 text-sm">{o.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* ---------------- Activities ---------------- */}
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-12 border-t-4 border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-8">Key Activities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              variants={fadeVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4"
            >
              <span className="text-2xl">✓</span>
              <p className="text-lg">{activity}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    

      {/* ---------------- Metrics ---------------- */}
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4">
          Quality Metrics & Performance
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Student Satisfaction */}
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">Student Satisfaction</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Teaching Quality</p>
                <AnimatedBar percent="92%" color="bg-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Campus Facilities</p>
                <AnimatedBar percent="88%" color="bg-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Support Services</p>
                <AnimatedBar percent="85%" color="bg-blue-600" />
              </div>
            </div>
          </motion.div>

          {/* Faculty Quality */}
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">Faculty Quality</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Research Publications</p>
                <AnimatedBar percent="78%" color="bg-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Qualifications & Training</p>
                <AnimatedBar percent="90%" color="bg-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Student Mentoring</p>
                <AnimatedBar percent="87%" color="bg-red-600" />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ---------------- Contact ---------------- */}
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-700 to-red-600 text-white p-8 rounded-lg border-t-4 border-yellow-400"
      >
        <h2 className="text-2xl font-bold mb-4">Contact IQAC</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold mb-2">Coordinator</p>
            <p className="text-sm">Ms. S Arya</p>
            <p className="text-sm">📧 kmmv.iqac@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Phone</p>
            <p className="text-sm">85906013437</p>
            <p className="text-sm">7034735190</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Location</p>
            <p className="text-sm">IQAC Office, KMM College</p>
            <p className="text-sm">Campus, Thrikkakara, Vazhakkala</p>
          </div>
        </div>
      </motion.div>

    </main>
  )
}
