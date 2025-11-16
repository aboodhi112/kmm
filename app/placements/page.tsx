import Header from "@/components/header"
import Footer from "@/components/footer"
import PlacementsClient from "./placements-client"

export const metadata = {
  title: "Placements & Alumni - KMM College",
  description: "KMM College placements and alumni network",
}

export default function PlacementsPage() {
  const recruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Google",
    "Amazon",
    "Microsoft",
    "Cognizant",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Placements & Alumni
        </h1>

        <PlacementsClient recruiters={recruiters} />
      </main>
      <Footer />
    </div>
  )
}
