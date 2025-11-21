"use client"

import {
  BookOpen,
  Brain,
  Briefcase,
  Accessibility,
  DollarSign,
  Trophy,
  Home,
  Stethoscope,
  Library,
  Laptop,
  Globe,
  Handshake,
} from "lucide-react"

import { motion } from "framer-motion"

export default function StudentSupportClient() {
  const services = [
    {
      title: "Academic Counseling",
      description: "Personalized academic guidance and mentoring to help students succeed in their studies.",
      icon: BookOpen,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Mental Health Counseling",
      description: "Professional mental health support and counseling services for student well-being.",
      icon: Brain,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Career Guidance",
      description: "Career counseling, job placement assistance, and professional development programs.",
      icon: Briefcase,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Disability Support",
      description: "Specialized services and accommodations for students with disabilities.",
      icon: Accessibility,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Financial Aid",
      description: "Scholarships, bursaries, and financial assistance programs for deserving students.",
      icon: DollarSign,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Sports & Recreation",
      description: "Athletic programs, fitness facilities, and recreational activities for holistic development.",
      icon: Trophy,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Hostel Services",
      description: "Comfortable on-campus accommodation with safety and support services.",
      icon: Home,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Health Services",
      description: "Medical facilities, health checkups, and wellness programs for students.",
      icon: Stethoscope,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Library Services",
      description: "Access to extensive digital and physical resources for research and learning.",
      icon: Library,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "IT Support",
      description: "Technical assistance with campus IT infrastructure and digital platforms.",
      icon: Laptop,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "International Student Support",
      description: "Specialized services for international students including visa assistance.",
      icon: Globe,
      contact: "info.kmmcollege@gmail.com",
    },
    {
      title: "Alumni Network",
      description: "Connection with college alumni for mentoring and networking opportunities.",
      icon: Handshake,
      contact: "info.kmmcollege@gmail.com",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* background glow */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <h1 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-yellow-400 pl-4">
        Student Support Services
      </h1>

      <p className="text-lg text-gray-700 mb-12">
        We provide comprehensive support services to ensure every student has access to the resources they need to
        succeed academically, personally, and professionally.
      </p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {services.map((service, idx) => {
          const Icon = service.icon
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <p className="text-sm text-red-600 font-semibold">📧 {service.contact}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg mb-12 border-t-4 border-yellow-400"
      >
        <h2 className="text-3xl font-bold mb-8">Quick Access to Help</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl mb-3">📞</p>
            <p className="text-lg font-bold mb-2">Helpline</p>
            <p className="text-sm">8590601343</p>
            <p className="text-xs text-blue-200">24/7 Support</p>
          </div>

          <div className="text-center">
            <p className="text-5xl mb-3">📧</p>
            <p className="text-lg font-bold mb-2">Email</p>
            <p className="text-sm">info.kmmcollege@gmail.com</p>
            <p className="text-xs text-blue-200">Responds within 24 hours</p>
          </div>

          <div className="text-center">
            <p className="text-5xl mb-3">📍</p>
            <p className="text-lg font-bold mb-2">Visit Us</p>
            <p className="text-sm">Student Affairs Office</p>
            <p className="text-xs text-blue-200">Campus - Main Building</p>
          </div>
        </div>
      </motion.div>

      {/* Support Request Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-8 rounded-lg border-2 border-yellow-400"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Request Support</h2>

        <p className="text-gray-700 mb-6">
          Need assistance? Fill out this form and we'll connect you with the right support service.
        </p>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type of Support Needed</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600">
              <option>Select support type</option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      </motion.div>
    </main>
  )
}
