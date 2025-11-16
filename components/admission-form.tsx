"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { saveApplication } from "@/lib/cms-storage"

export default function AdmissionForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    qualifications: "",
    program: "B.Com Honours",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const programs = [
    "B.Com Honours - Finance and Taxation",
    "B.Com Honours - Logistics Management",
    "B.Com Honours - Accounting",
    "BBA Honours",
    "BCA Honours",
    "BA Animation & Graphic Design",
    "M.Sc Artificial Intelligence",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      saveApplication({
        id: Date.now().toString(),
        ...formData,
        appliedAt: new Date().toISOString(),
      })
      setSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        qualifications: "",
        program: "B.Com Honours",
      })
      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Admission Application Form</h2>

      {success ? (
        <div className="bg-green-50 border border-green-200 rounded p-4 text-green-800">
          <p className="font-semibold">Application submitted successfully!</p>
          <p>We will contact you soon with further details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Program *</label>
            <select
              required
              value={formData.program}
              onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
              className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {programs.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Qualifications *</label>
            <textarea
              required
              value={formData.qualifications}
              onChange={(e) => setFormData((prev) => ({ ...prev, qualifications: e.target.value }))}
              placeholder="Enter your educational qualifications"
              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-24"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700">
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Card>
  )
}
