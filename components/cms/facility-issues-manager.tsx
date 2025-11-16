"use client"

import { useState, useEffect } from "react"
import { getFacilityIssues, updateFacilityIssueStatus, deleteFacilityIssue } from "@/lib/cms-storage"
import { Button } from "@/components/ui/button"
import { Trash2, CheckCircle, Clock } from "lucide-react"

export default function FacilityIssuesManager() {
  const [issues, setIssues] = useState<any[]>([])

  useEffect(() => {
    loadIssues()
  }, [])

  const loadIssues = () => {
    const data = getFacilityIssues()
    setIssues(data.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()))
  }

  const handleStatusChange = (id: string, status: "pending" | "resolved") => {
    updateFacilityIssueStatus(id, status)
    loadIssues()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this facility issue?")) {
      deleteFacilityIssue(id)
      loadIssues()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Facility Issues ({issues.length})</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Pending: {issues.filter((i) => i.status === "pending").length}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Resolved: {issues.filter((i) => i.status === "resolved").length}
          </span>
        </div>
      </div>

      {issues.length === 0 ? (
        <div className="text-center py-12 bg-muted rounded-lg">
          <p className="text-muted-foreground">No facility issues reported yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{issue.subject}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        issue.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {issue.status === "pending" ? (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Pending
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Resolved
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>From:</strong> {issue.name}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Submitted:</strong> {new Date(issue.submittedAt).toLocaleString()}
                  </p>
                  <p className="text-gray-700 whitespace-pre-wrap">{issue.message}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                {issue.status === "pending" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(issue.id, "resolved")}
                    className="text-green-600 hover:text-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Mark as Resolved
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(issue.id, "pending")}
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Mark as Pending
                  </Button>
                )}
                <Button size="sm" variant="destructive" onClick={() => handleDelete(issue.id)} className="ml-auto">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
