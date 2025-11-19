"use client"

import AdmissionForm from "@/components/admission-form"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AdmissionsClientPage() {
  // refs for each section (one per big block)
  const sec1 = useRef(null)
  const sec2 = useRef(null)
  const sec3 = useRef(null)
  const sec4 = useRef(null)
  const sec5 = useRef(null)
  const sec6 = useRef(null)

  const v1 = useInView(sec1)
  const v2 = useInView(sec2)
  const v3 = useInView(sec3)
  const v4 = useInView(sec4)
  const v5 = useInView(sec5)
  const v6 = useInView(sec6)

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Admissions 2025-2026
        </h1>

        {/* Admission Announcement */}
        <motion.div
          ref={sec1}
          initial={{ opacity: 0, y: 40 }}
          animate={v1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="bg-red-50 border-4 border-yellow-accent p-8 rounded-lg mb-12 relative overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/20 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-accent/20 rounded-tr-full" />
          <h2 className="text-2xl font-bold text-red-600 mb-4 relative z-10">Admissions Now Open!</h2>
          <p className="text-lg text-gray-700 relative z-10">
            KMM Collage, Thrikkakara, Vazhakkala is now accepting applications for UG and PG programs for the 2025-2026
            academic year. Join us and be part of a thriving academic community.
          </p>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          ref={sec2}
          initial={{ opacity: 0, y: 40 }}
          animate={v2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply Online", desc: "Submit your application through our portal" },
              { step: "2", title: "Submit Documents", desc: "Upload required certificates and documents" },
              { step: "3", title: "Merit Selection", desc: "Merit-based selection process" },
              { step: "4", title: "Confirm Admission", desc: "Complete your admission process" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={v2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center border-4 border-yellow-accent/30 border-t-yellow-accent relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-accent/10 rounded-bl-full" />
                <div className="text-4xl font-bold text-blue-600 mb-4 relative z-10">{item.step}</div>
                <h3 className="font-bold text-blue-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eligibility */}
        <motion.div
          ref={sec3}
          initial={{ opacity: 0, y: 40 }}
          animate={v3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-accent pl-6">
            Eligibility Criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-4 border-yellow-accent/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/20 rounded-bl-full" />
              <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">UG Programs</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span><span>12th Pass from any recognized board</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span><span>Minimum 45% aggregate score</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span><span>Merit-based admission</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span><span>Age limit: No restrictions</span></li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-4 border-yellow-accent/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/20 rounded-bl-full" />
              <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">PG Programs</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex gap-3"><span className="text-red-600 font-bold">✓</span><span>Bachelor's Degree in relevant field</span></li>
                <li className="flex gap-3"><span className="text-red-600 font-bold">✓</span><span>Minimum 50% aggregate score</span></li>
                <li className="flex gap-3"><span className="text-red-600 font-bold">✓</span><span>Merit-based admission</span></li>
                <li className="flex gap-3"><span className="text-red-600 font-bold">✓</span><span>Valid entrance test score</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Required Documents */}
        <motion.div
          ref={sec4}
          initial={{ opacity: 0, y: 40 }}
          animate={v4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-accent pl-6">
            Required Documents
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md border-4 border-yellow-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* untouched */}
              {/* -------------------------- */}
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Copy of 10th & 12th mark sheets</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Provisional Certificate</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Community Certificate (if applicable)</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Transfer Certificate</span></li>
              </ul>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Aadhaar Card copy</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Passport size photograph</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>PAN Card (if applicable)</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span><span>Residence proof</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact for Admissions */}
        <motion.div
          ref={sec5}
          initial={{ opacity: 0, y: 40 }}
          animate={v5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg border-4 border-yellow-accent shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">For Admission Queries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* untouched */}
            <div>
              <p className="font-bold mb-2">Phone</p>
              <p className="text-blue-100">8590601343</p>
              <p className="text-blue-100">9895545924</p>
            </div>
            <div>
              <p className="font-bold mb-2">Email</p>
              <p className="text-blue-100">info@kmmcollege.edu.in</p>
            </div>
            <div>
              <p className="font-bold mb-2">Visit Us</p>
              <p className="text-blue-100">KMM College Thrikkakara Vazhakkala</p>
              <p className="text-blue-100">Civil Lane road, Friendship Enclave B Block</p>
              <p className="text-blue-100">Padamugal, Vazhakkala, Ernakulam 682021</p>
              <p className="text-blue-100 mt-2">Mon - Fri: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Admission Form */}
        <motion.div
          ref={sec6}
          initial={{ opacity: 0, y: 40 }}
          animate={v6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="my-12 bg-blue-50 p-8 rounded-lg border-4 border-yellow-accent shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-accent/20 rounded-bl-full" />
          <h2 className="text-2xl font-bold text-blue-900 mb-6 relative z-10">Apply Now</h2>
          <div className="relative z-10">
            <AdmissionForm onClose={() => {}} />
          </div>
        </motion.div>
      </main>
    </div>
  )
}
