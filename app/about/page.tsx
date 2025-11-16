import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
import AboutVisionMission from "@/components/about-vision-mission"
import AboutLeadership from "@/components/about-leadership"

export const metadata = {
  title: "About Us - KMM College",
  description: "Learn about KMM College of Arts and Science - AICTE Approved, NAAC Accredited Institution",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutLeadership />
      <Footer />
    </div>
  )
}
