import Header from "@/components/header"
import Footer from "@/components/footer"
import CommitteesClient from "./committees-client"

export const metadata = {
  title: "Committees - KMM College",
  description: "Academic and administrative committees at KMM College",
}

export default function CommitteesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CommitteesClient />
      <Footer />
    </div>
  )
}
