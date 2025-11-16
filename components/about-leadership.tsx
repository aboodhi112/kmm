"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutLeadership() {
  const messages = [
    {
      name: "A M Aboobacker",
      title: "Chairman, KMM Group of Institutions",
      image: "/chairman.jpg",
      quote: "Education is the most powerful weapon which you can use to change the world.",
      quoteAuthor: "Nelson Mandela",
      message:
        "At KMM College Thrikkakara, Vazhakkala, we believe that education is the foundation for transforming individuals and society. Our institution is committed to nurturing curious minds, creative thinkers, and compassionate individuals who contribute meaningfully to the world. With a dedicated faculty, modern facilities, and a curriculum that blends tradition with innovation, we strive to create an environment where students are encouraged to question, explore, and grow. Beyond academics, we emphasize ethical leadership, empathy, and resilience—qualities that prepare students not just for careers but for life. Our vision is rooted in the belief that education holds the power to uplift communities. We are dedicated to instilling values of integrity, compassion, and service, ensuring our students emerge as responsible global citizens. As you embark on this journey with us, I encourage you to embrace every opportunity for growth and discovery. Together, let us build a future where knowledge drives positive change and learning shapes a better world. Welcome to KMM College, Thrikkakara Vazhakkala—where ambitions are nurtured and the journey towards excellence knows no limits.",
      signature: "–A M Aboobacker, Chairman KMM Group of Institutions",
    },
    {
      name: "Dr. Noushad PM",
      title: "Principal",
      image: "/principal.jpg",
      quote: "Education is not the learning of facts, but the training of the mind to think.",
      quoteAuthor: "Albert Einstein",
      message:
        "Greetings from KMM College, Thrikkakara Vazhakkala. At KMM College, we believe that education is the foundation for personal growth and societal transformation. Our institution is dedicated to nurturing inquisitive minds, fostering creativity, and building ethical leaders. Beyond academics, we place great emphasis on character building, discipline, and social responsibility. Our goal is to shape individuals who are not only academically proficient but also compassionate, resilient, and committed to making a positive impact.",
      signature: "–Dr. Noushad PM, Principal",
    },
  ]

  return (
    <motion.section
      id="leadership"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3, once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Messages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Insights from our institution's visionary leaders</p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: false }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  
                  {/* Profile Image */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.4, once: false }}
                  >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20">
                      <Image
                        src={msg.image || "/placeholder.svg"}
                        alt={msg.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Content Block */}
                  <motion.div
                    className="flex-1 space-y-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.3, once: false }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.15 } },
                    }}
                  >
                    {/* Header */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {index === 0 ? "MESSAGE FROM CHAIRMAN" : "MESSAGE FROM PRINCIPAL"}
                      </h3>
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote
                      className="text-lg md:text-xl font-medium leading-relaxed"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                    >
                      "{msg.quote}" — {msg.quoteAuthor}
                    </motion.blockquote>

                    {/* Message */}
                    <motion.p
                      className="text-white/90 leading-relaxed text-base md:text-lg"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                    >
                      {msg.message}
                    </motion.p>

                    {/* Signature */}
                    <motion.p
                      className="text-white/80 font-medium text-base md:text-lg mt-8"
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                    >
                      {msg.signature}
                    </motion.p>

                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
