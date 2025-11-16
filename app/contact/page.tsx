import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactClientPage from "./contact-client"

export const metadata = {
  title: "Contact Us - KMM College",
  description: "Get in touch with KMM College",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <ContactClientPage />
      </main>
      <Footer />
    </div>
  )
}
