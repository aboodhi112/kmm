"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getCMSContent } from "@/lib/cms-storage"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

interface EventItem {
  id: string
  title: string
  content: string
  date?: string
  category?: string
  description?: string
  section: string
  updatedAt: string
  image?: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([])

  useEffect(() => {
    const cmsEvents = getCMSContent("events")
    setEvents(cmsEvents)
  }, [])

  const upcomingEvents = events.filter((event) => event.category || event.date)
  const news = events.filter((event) => !event.category && !event.date)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border-4 border-yellow-accent/20 rounded-full -z-10" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-accent/10 rotate-45 -z-10" />

        {/* MAIN TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-8 border-l-4 border-yellow-accent pl-4 relative"
        >
          Events & News
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-yellow-accent" />
        </motion.h1>

        {/* Upcoming Events */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 border-l-4 border-yellow-accent pl-4"
          >
            Upcoming Events
          </motion.h2>

          {upcomingEvents.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center text-gray-500 border-4 border-yellow-accent/30"
            >
              No upcoming events at the moment. Check back soon!
            </motion.div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-yellow-accent hover:shadow-lg transition relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />

                  {event.image && (
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-accent/20"
                    />
                  )}

                  <div className="flex justify-between items-start gap-4 mb-2 md:mb-3 relative z-10">
                    <div>
                      {event.date && (
                        <p className="text-sm text-gray-500 font-medium">{event.date}</p>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1">
                        {event.title}
                      </h3>
                    </div>

                    {event.category && (
                      <span className="bg-yellow-accent/20 text-yellow-accent-dark text-xs font-semibold px-3 py-1 rounded-full border border-yellow-accent">
                        {event.category}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base relative z-10">
                    {event.description || event.content}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Latest News */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 border-l-4 border-yellow-accent pl-4"
          >
            Latest News
          </motion.h2>

          {news.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center text-gray-500 border-4 border-yellow-accent/30"
            >
              No news updates at the moment. Check back soon!
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {news.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-yellow-accent relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />

                  {item.image && (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg mb-3 border-2 border-yellow-accent/20"
                    />
                  )}

                  <p className="text-sm text-gray-500 font-medium mb-2 relative z-10">
                    {new Date(item.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <h3 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
