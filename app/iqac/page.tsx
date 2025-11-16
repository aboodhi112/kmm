import Header from "@/components/header"
import Footer from "@/components/footer"
import IQACClient from "./iqac-client"

export const metadata = {
  title: "IQAC - KMM College",
  description: "Internal Quality Assurance Cell at KMM College",
}

export default function IQACPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <IQACClient />
      <Footer />
    </div>
  )
}
