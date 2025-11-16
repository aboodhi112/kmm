import Header from "@/components/header"
import Footer from "@/components/footer"
import ResearchClient from "./research-client"

export const metadata = {
  title: "Research - KMM College",
  description: "Research initiatives and programs at KMM College",
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ResearchClient />
      <Footer />
    </div>
  )
}
