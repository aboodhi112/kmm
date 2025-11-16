"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getApplications, deleteApplication, downloadApplicationsCSV } from "@/lib/cms-storage"

interface Application {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  qualifications: string
  program: string
  appliedAt: string
}

export default function ApplicationManager() {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    const apps = getApplications()
    setApplications(apps)
  }, [])

  const handleDelete = (id: string) => {
    deleteApplication(id)
    setApplications((prev) => prev.filter((app) => app.id !== id))
  }

  const handleDownload = () => {
    const csv = downloadApplicationsCSV()
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `applications_${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Admission Applications ({applications.length})</h2>
        {applications.length > 0 && (
          <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
            Download as CSV
          </Button>
        )}
      </div>

      {applications.length === 0 ? (
        <Card className="p-6 text-center text-muted-foreground">No applications received yet.</Card>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="p-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">
                      {app.firstName} {app.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{app.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{app.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p className="font-semibold">{app.program}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">Qualifications</p>
                    <p className="font-semibold">{app.qualifications}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Applied On</p>
                    <p className="font-semibold">{new Date(app.appliedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleDelete(app.id)} className="text-red-600">
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
