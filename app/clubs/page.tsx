import Header from "@/components/header"
import Footer from "@/components/footer"
import ClubsClient from "./clubs-client"

export const metadata = {
  title: "Clubs - KMM College",
  description: "Student clubs and organizations at KMM College",
}

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ClubsClient />
      <Footer />
    </div>
  )
}
