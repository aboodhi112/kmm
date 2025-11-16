import Header from "@/components/header"
import Footer from "@/components/footer"
import StudentSupportClient from "./student-support-client"

export const metadata = {
  title: "Student Support - KMM College",
  description: "Comprehensive student support services at KMM College",
}

export default function StudentSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StudentSupportClient />
      <Footer />
    </div>
  )
}
