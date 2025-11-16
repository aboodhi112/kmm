import AdmissionsClientPage from "./admissions-client-page"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Admissions - KMM College",
  description: "Apply to KMM College of Arts and Science",
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AdmissionsClientPage />
      <Footer />
    </div>
  )
}
