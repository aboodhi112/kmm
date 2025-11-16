"use client"

import { useEffect, useState, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Download } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { getCMSContent } from "@/lib/cms-storage"

/* ============================================================
   COUNTER CARD — FIXED VERSION (NO ERRORS)
   ============================================================ */
function CounterCard({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let rafId: number
    const duration = 1500
    const start = performance.now()

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) * (1 - t)
      setCount(Math.floor(value * eased))

      if (t < 1) rafId = requestAnimationFrame(step)
      else setCount(value)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
    >
      <p className="text-4xl font-bold mb-2">{count}{suffix}</p>
      <p className="text-sm">{label}</p>
    </motion.div>
  )
}

/* ============================================================
   MAIN PAGE
   ============================================================ */

interface Department {
  name: string
  description: string
  programs: string[]
}

export default function AcademicsPage() {
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    const deptContent = getCMSContent("departments")
    const formattedDepts = deptContent.map((dept) => {
      const contentParts = dept.content.split("Programs:")
      const description = contentParts[0].trim()
      const programs = contentParts[1] ? contentParts[1].split(",").map((p) => p.trim()) : []

      return { name: dept.title, description, programs }
    })
    setDepartments(formattedDepts)
  }, [])

  const ugPrograms = [
    { name: "B.A. English", duration: "3 Years" },
    { name: "B.A. History", duration: "3 Years" },
    { name: "B.A. Economics", duration: "3 Years" },
    { name: "B.Sc. Mathematics", duration: "3 Years" },
    { name: "B.Sc. Physics", duration: "3 Years" },
    { name: "B.Sc. Chemistry", duration: "3 Years" },
  ]

  const pgPrograms = [
    { name: "M.A. English", duration: "2 Years" },
    { name: "M.A. History", duration: "2 Years" },
    { name: "M.Sc. Mathematics", duration: "2 Years" },
  ]

  return (
    <motion.div className="min-h-screen bg-background" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header />

      {/* BG Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <main className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-400 pl-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Academics
        </motion.h1>

        {/* Academic Calendar Block */}
        <motion.div
          className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-yellow-400 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-blue-900">Academic Calendar</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay updated with academic dates, exam schedules, holidays, and events.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="border-l-4 border-blue-600 pl-4"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-bold text-blue-900 mb-2">Current Academic Year</h3>
                <p className="text-gray-600">2024-2025</p>
              </motion.div>

              <motion.div
                className="border-l-4 border-red-600 pl-4"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-bold text-blue-900 mb-2">Semester</h3>
                <p className="text-gray-600">Odd Semester (July - December)</p>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-blue-900 mb-4">Important Dates</h3>

              <div className="space-y-3 text-gray-700">
                {[
                  { label: "Semester Start", value: "July 15, 2024" },
                  { label: "Mid-term Exams", value: "Sept 20–30, 2024" },
                  { label: "End Semester Exams", value: "Dec 1–15, 2024" },
                  { label: "Semester Break", value: "Dec 16 – Jan 5" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between py-2 border-b bg-white/60 rounded-lg p-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <span className="font-medium text-blue-900">{item.label}</span>
                    <span className="font-semibold text-gray-700 sm:mt-0 mt-1">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              className="mt-6 flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:scale-[1.03] hover:bg-blue-800 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Full Calendar (PDF)
            </motion.button>
          </div>
        </motion.div>

        {/* Undergraduate Programs */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">Undergraduate Programs</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {ugPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400"
                variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{program.name}</h3>
                <p className="text-gray-600">Duration: {program.duration}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Postgraduate Programs */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">Postgraduate Programs</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {pgPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-2 border-yellow-400"
                variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{program.name}</h3>
                <p className="text-gray-600">Duration: {program.duration}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Departments */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} id="departments" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">Our Departments</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {departments.length > 0 ? (
              departments.map((dept, idx) => (
                <motion.div
                  key={idx}
                  className={`p-8 rounded-lg border-2 border-yellow-400 ${
                    idx % 2 === 0 ? "bg-blue-50" : "bg-red-50"
                  }`}
                  variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{dept.name}</h3>
                  <p className="text-gray-700 mb-4">{dept.description}</p>

                  {dept.programs.length > 0 && (
                    <>
                      <h4 className="font-bold text-blue-900 mb-3">Programs:</h4>
                      <ul className="space-y-2 text-gray-700">
                        {dept.programs.map((program, pidx) => (
                          <li key={pidx}>• {program}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              ))
            ) : (
              <p>Loading departments...</p>
            )}
          </motion.div>
        </motion.div>

        {/* COUNTERS */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg border-t-4 border-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Academic Excellence</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <CounterCard value={95} suffix="%" label="Pass Rate" />
            <CounterCard value={50} suffix="+" label="Qualified Faculty" />
            <CounterCard value={15} suffix="+" label="Add-on Courses" />
          </div>
        </motion.div>

      </main>

      <Footer />
    </motion.div>
  )
}
