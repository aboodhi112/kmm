"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Welcome from "@/components/welcome"
import CampusOverview from "@/components/campus-overview"
import ProgramsSection from "@/components/programs-section"
import PlacementPartners from "@/components/placement-partners"
import Footer from "@/components/footer"
import ApplyNowButton from "@/components/apply-now-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-24 pb-32"
      >
        <Hero />
        <Welcome />
        <CampusOverview />
        <ProgramsSection />
        <PlacementPartners />
      </motion.main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-50">
        <ApplyNowButton />
      </div>
    </div>
  )
}
