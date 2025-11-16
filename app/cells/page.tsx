import Header from "@/components/header"
import Footer from "@/components/footer"
import CellsClient from "./cells-client"

export const metadata = {
  title: "Cells - KMM College",
  description: "Student cells and special interest groups at KMM College",
}

export default function CellsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CellsClient />
      <Footer />
    </div>
  )
}
