"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import ContentManager from "@/components/cms/content-manager"
import ApplicationManager from "@/components/cms/application-manager"
import FacilityIssuesManager from "@/components/cms/facility-issues-manager"
import ContactMessagesManager from "@/components/cms/contact-messages-manager"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("homepage")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!isAdminAuthenticated(token || "")) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const tabs = [
    { id: "homepage", label: "Homepage" },
    { id: "about", label: "About Us" },
    { id: "departments", label: "Departments" },
    { id: "events", label: "Events" },
    { id: "news", label: "Latest News" },
    { id: "announcements", label: "Announcements" },
    { id: "contact", label: "Contact" },
    { id: "admission", label: "Admission" },
    { id: "facility-issues", label: "Facility Issues" },
    { id: "contact-messages", label: "Contact Messages" },
  ]

  return (
    <div className="min-h-screen bg-primary/5">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">KMM College CMS</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 border-b border-border flex-wrap bg-card p-2 rounded-t-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium transition-colors rounded-md ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "admission" ? (
          <ApplicationManager />
        ) : activeTab === "facility-issues" ? (
          <FacilityIssuesManager />
        ) : activeTab === "contact-messages" ? (
          <ContactMessagesManager />
        ) : (
          <ContentManager activeTab={activeTab} />
        )}
      </main>
    </div>
  )
}
