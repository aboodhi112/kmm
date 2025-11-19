"use client"

import AnimateBlock from "@/components/AnimateBlock"
import { motion } from "framer-motion"

export default function PlacementsClient({ recruiters }: { recruiters: string[] }) {
  return (
    <>

      <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background abstract shapes for the whole section */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-accent/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-blue-200 rounded-full animate-pulse" />


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The main content card with hover effect and design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} // Stronger shadow on hover
          className="bg-blue-50 p-8 md:p-10 rounded-xl shadow-xl border-l-4 border-yellow-accent relative overflow-hidden"
        >
          {/* Subtle design elements inside the card */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200/20 rounded-tr-full" />

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 pl-4 relative z-10" 
          >
            Placement & Training Cell
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed mb-4 relative z-10"
          >
            Our Placement and Training Cell is formed to mentor students to secure employment opportunities after graduation. The primary function of the placement cell is to provide career guidance and support to students, and to assist them in finding suitable employment or internships.
          </motion.p>
          
          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10"
          >
            The placement cell works closely with companies, industries, and alumni to identify job opportunities and create partnerships that can benefit both the students and the employers. By establishing relationships with various organizations, the placement cell can bring in a diverse range of employment options for students to choose from. We organize placement drives and training sessions for students at regular intervals.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center text-md text-blue-800 font-semibold relative z-10"
          >
            <svg className="w-5 h-5 mr-2 text-yellow-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="text-gray-700">Contact Us:</span> 
            <a href="mailto:placementcell@kmmcollege.edu.in" className="ml-2 text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out font-normal">placementcell@kmmcollege.edu.in</a>
          </motion.div>

        </motion.div>

      </div>
    </section>

      {/* TOP RECRUITERS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Our Top Recruiters
        </h2>

        <AnimateBlock>
          <div className="bg-white p-8 rounded-lg shadow-md border-4 border-yellow-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {recruiters.map((recruiter, idx) => (
                <AnimateBlock key={idx}>
                  <div className="p-4 bg-blue-50 rounded-lg text-center border-2 border-yellow-accent/50 hover:border-yellow-accent transition-colors">
                    <p className="font-bold text-blue-900">{recruiter}</p>
                  </div>
                </AnimateBlock>
              ))}
            </div>
          </div>
        </AnimateBlock>
      </div>

      {/* PLACEMENT PROCESS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Placement Process
        </h2>

        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Pre-Placement Talk (PPT)",
              description:
                "Companies present their profile, job opportunities, and selection process to the students.",
            },
            {
              step: "2",
              title: "Written Test",
              description:
                "Students appear for aptitude and technical tests conducted by the recruiting company.",
            },
            {
              step: "3",
              title: "Group Discussion & Interview",
              description:
                "Selected candidates participate in group discussions and technical/HR interviews.",
            },
            {
              step: "4",
              title: "Final Selection & Offer",
              description:
                "Successful candidates receive final offer letters with package details.",
            },
          ].map((item, idx) => (
            <AnimateBlock key={idx}>
              <div className="flex gap-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-accent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg border-2 border-yellow-accent relative z-10">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </AnimateBlock>
          ))}
        </div>
      </div>

      

    </>
  )
}
