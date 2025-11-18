"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
// Imported Dialog/Modal components
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog" 
import { getCMSContent, saveCMSContent } from "@/lib/cms-storage"
import { Plus, Trash2, Upload, X, Eye, Phone, Mail } from "lucide-react"

// Updated ContentItem to reflect the change in cms-storage.ts
interface ContentItem {
  id: string
  title: string
  content: string
  section: string
  updatedAt: string
  date?: string
  category?: string
  description?: string
  overview?: string
  vision?: string
  mission?: string
  scope?: string
  established?: string
  programs?: { name: string; description: string }[]
  facilities?: string[]
  // Updated faculty type
  faculty?: { name: string; designation: string; photo?: string; email?: string; phone?: string }[] 
  achievements?: string[]
  image?: string
}

export default function ContentManager({ activeTab }: { activeTab: string }) {
  const [items, setItems] = useState<ContentItem[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>({
    title: "",
    content: "",
    date: "",
    category: "",
    description: "",
    overview: "",
    vision: "",
    mission: "",
    scope: "",
    established: "",
    programs: [],
    facilities: [],
    faculty: [],
    achievements: [],
    image: "",
  })

  const [newProgram, setNewProgram] = useState({ name: "", description: "" })
  // UPDATED: Added email and phone fields to newFaculty state
  const [newFaculty, setNewFaculty] = useState({ name: "", designation: "", photo: "", email: "", phone: "" })
  const [newFacility, setNewFacility] = useState("")
  const [newAchievement, setNewAchievement] = useState("")
  const [uploadingImage, setUploadingImage] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false) // State for Preview Modal

  const isEventsTab = activeTab === "events"
  const isNewsTab = activeTab === "news"
  const isAnnouncementsTab = activeTab === "announcements"
  const isAboutTab = activeTab === "about"
  const isDepartmentsTab = activeTab === "departments"
  const isContactTab = activeTab === "contact"

  useEffect(() => {
    const savedContent = getCMSContent(activeTab)
    setItems(savedContent)
    setEditingId(null)
    setFormData({
      title: "",
      content: "",
      date: "",
      category: "",
      description: "",
      overview: "",
      vision: "",
      mission: "",
      scope: "",
      established: "",
      programs: [],
      facilities: [],
      faculty: [],
      achievements: [],
      image: "",
    })
    // Also reset the new faculty state when the tab changes
    setNewFaculty({ name: "", designation: "", photo: "", email: "", phone: "" })
  }, [activeTab])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    try {
      // Convert image to base64 for storage
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        if (field === "main") {
          setFormData((prev: any) => ({ ...prev, image: base64String }))
        } else if (field === "faculty") {
          setNewFaculty((prev) => ({ ...prev, photo: base64String }))
        }
        setUploadingImage(false)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error uploading image:", error)
      setUploadingImage(false)
    }
  }

  const saveContent = () => {
    let updatedItems: ContentItem[]

    // Ensure array fields are not undefined when saving
    const dataToSave = {
      ...formData,
      programs: formData.programs || [],
      facilities: formData.facilities || [],
      faculty: formData.faculty || [],
      achievements: formData.achievements || [],
    }

    if (editingId) {
      updatedItems = items.map((item) =>
        item.id === editingId ? { ...item, ...dataToSave, updatedAt: new Date().toISOString() } : item,
      )
    } else {
      const newItem: ContentItem = {
        id: Date.now().toString(),
        ...dataToSave,
        section: activeTab,
        updatedAt: new Date().toISOString(),
      }
      updatedItems = [...items, newItem]
    }

    setItems(updatedItems)
    saveCMSContent(activeTab, updatedItems)
    // Clear form after save
    resetForm()
  }
  
  // Helper function to reset the form state
  const resetForm = () => {
      setFormData({
        title: "",
        content: "",
        date: "",
        category: "",
        description: "",
        overview: "",
        vision: "",
        mission: "",
        scope: "",
        established: "",
        programs: [],
        facilities: [],
        faculty: [],
        achievements: [],
        image: "",
      })
      setEditingId(null)
      setNewFaculty({ name: "", designation: "", photo: "", email: "", phone: "" })
  }


  const deleteContent = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    saveCMSContent(activeTab, updatedItems)
  }

  /*
   * FIX APPLIED HERE:
   * Ensure all optional fields are handled correctly when loading for edit,
   * especially complex arrays like programs, facilities, and faculty.
   */
  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id)
    setFormData({
      title: item.title || "",
      content: item.content || "",
      date: item.date || "",
      category: item.category || "",
      description: item.description || "",
      overview: item.overview || "",
      vision: item.vision || "",
      mission: item.mission || "",
      scope: item.scope || "",
      established: item.established || "",
      programs: item.programs || [], // Ensure this defaults to an empty array
      facilities: item.facilities || [], // Ensure this defaults to an empty array
      faculty: item.faculty || [], // Ensure this defaults to an empty array
      achievements: item.achievements || [], // Ensure this defaults to an empty array
      image: item.image || "",
    })
  }

  const addProgram = () => {
    if (newProgram.name && newProgram.description) {
      setFormData((prev: any) => ({
        ...prev,
        programs: [...prev.programs, newProgram],
      }))
      setNewProgram({ name: "", description: "" })
    }
  }

  const removeProgram = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      programs: prev.programs.filter((_: any, i: number) => i !== index),
    }))
  }

  const addFaculty = () => {
    if (newFaculty.name && newFaculty.designation) {
      setFormData((prev: any) => ({
        ...prev,
        faculty: [...prev.faculty, newFaculty],
      }))
      // Reset newFaculty, including the new fields
      setNewFaculty({ name: "", designation: "", photo: "", email: "", phone: "" })
    }
  }

  const removeFaculty = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      faculty: prev.faculty.filter((_: any, i: number) => i !== index),
    }))
  }

  const addFacility = () => {
    if (newFacility) {
      setFormData((prev: any) => ({
        ...prev,
        facilities: [...prev.facilities, newFacility],
      }))
      setNewFacility("")
    }
  }

  const removeFacility = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      facilities: prev.facilities.filter((_: any, i: number) => i !== index),
    }))
  }

  const addAchievement = () => {
    if (newAchievement) {
      setFormData((prev: any) => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement],
      }))
      setNewAchievement("")
    }
  }

  const removeAchievement = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      achievements: prev.achievements.filter((_: any, i: number) => i !== index),
    }))
  }

  // --- Preview Modal Component ---

  const PreviewModal = () => {
    const data = {
      ...formData,
      // Use the currently edited content if editing, otherwise use formData (new item)
      // This part is simplified for previewing the currently edited item.
      // For a true preview, you would render the item as it would look on the public page.
    }
    
    // Determine the content to display in the preview
    const previewItem = editingId ? items.find(item => item.id === editingId) : data;

    if (!previewItem) return null;

    // A simple function to render the structured department fields
    const renderDepartmentDetails = (item: ContentItem) => (
      <div className="p-4 bg-gray-50 rounded-lg space-y-3">
        {item.overview && (
          <div>
            <h4 className="font-bold text-base border-b pb-1 mb-1">Overview</h4>
            <p className="text-sm whitespace-pre-wrap">{item.overview}</p>
          </div>
        )}
        {(item.vision || item.mission) && (
          <div className="grid grid-cols-2 gap-4">
            {item.vision && <div><h4 className="font-bold text-base">Vision</h4><p className="text-sm whitespace-pre-wrap">{item.vision}</p></div>}
            {item.mission && <div><h4 className="font-bold text-base">Mission</h4><p className="text-sm whitespace-pre-wrap">{item.mission}</p></div>}
          </div>
        )}
        {item.programs && item.programs.length > 0 && (
          <div>
            <h4 className="font-bold text-base border-b pb-1 mb-2">Programs</h4>
            <ul className="list-disc pl-5 space-y-1">
              {item.programs.map((p, i) => (
                <li key={i} className="text-sm font-medium">
                  {p.name}
                  <p className="text-xs text-muted-foreground ml-2">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {item.faculty && item.faculty.length > 0 && (
          <div>
            <h4 className="font-bold text-base border-b pb-1 mb-2">Faculty ({item.faculty.length})</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.faculty.map((f, i) => (
                <div key={i} className="flex items-center gap-3 border p-2 rounded-lg">
                  {f.photo && <img src={f.photo} alt={f.name} className="w-10 h-10 rounded-full object-cover" />}
                  <div>
                    <p className="font-semibold text-sm">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{f.designation}</p>
                    {f.email && <p className="text-xs flex items-center gap-1 text-blue-600"><Mail className="w-3 h-3"/>{f.email}</p>}
                    {f.phone && <p className="text-xs flex items-center gap-1 text-green-600"><Phone className="w-3 h-3"/>{f.phone}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );


    return (
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Preview: {previewItem.title || "Untitled Content"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            {/* Conditional Image Display */}
            {previewItem.image && (
              <img
                src={previewItem.image}
                alt="Content Preview"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            )}

            {/* Title and Metadata */}
            <h3 className="text-3xl font-extrabold text-primary">{previewItem.title}</h3>
            {(isEventsTab || isNewsTab) && (
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold">{previewItem.date}</span>
                {previewItem.category && ` | Category: ${previewItem.category}`}
              </p>
            )}

            {/* Description / Main Content */}
            {previewItem.description && (
              <p className="text-xl font-medium text-gray-700">{previewItem.description}</p>
            )}
            <p className="text-base whitespace-pre-wrap">{previewItem.content}</p>

            {/* Department-Specific Content */}
            {isDepartmentsTab && renderDepartmentDetails(previewItem)}

            <p className="text-xs text-right text-gray-400 mt-6">
              Preview of content created/updated on: {new Date().toLocaleString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-l-4 border-yellow-accent">
        <h2 className="text-xl font-bold mb-4">{editingId ? "Edit" : "Add New"} Content</h2>
        <div className="space-y-4">
          {/* ... [Title Input, Announcement ID Input remains the same] ... */}
          {!isAnnouncementsTab && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {isAboutTab || isDepartmentsTab || isContactTab ? "Section/Title" : "Title"}
              </label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData((prev: any) => ({ ...prev, title: e.target.value }))}
                placeholder={
                  isAboutTab
                    ? "e.g., Vision, Mission, Our Journey"
                    : isDepartmentsTab
                      ? "e.g., Department of Commerce"
                      : isContactTab
                        ? "e.g., Phone Numbers, Email, Location"
                        : "Enter title"
                }
              />
            </div>
          )}

          {isAnnouncementsTab && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Announcement ID</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData((prev: any) => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., main-announcement"
              />
            </div>
          )}
          {/* ... [Image Upload Field remains the same] ... */}
          {(isEventsTab || isNewsTab || isAboutTab || isDepartmentsTab) && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Image</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">{uploadingImage ? "Uploading..." : "Upload Image"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "main")}
                    className="hidden"
                    disabled={uploadingImage}
                  />
                </label>
                {formData.image && (
                  <div className="flex items-center gap-2">
                    <img
                      src={formData.image || "/placeholder.svg"}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded border-2 border-yellow-accent"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setFormData((prev: any) => ({ ...prev, image: "" }))}
                      className="text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ... [Event/News Fields (Date, Category, Description) remains the same] ... */}
          {(isEventsTab || isNewsTab) && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                <Input
                  value={formData.date}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, date: e.target.value }))}
                  placeholder="e.g., March 28, 2025"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, category: e.target.value }))}
                  placeholder={isNewsTab ? "e.g., Achievement, Update, Notice" : "e.g., Festival, Career, Sports"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, description: e.target.value }))}
                  placeholder={isNewsTab ? "Enter news description" : "Enter event description"}
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-24 bg-background text-foreground"
                />
              </div>
            </>
          )}


          {/* Department Fields */}
          {isDepartmentsTab && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Established Year</label>
                <Input
                  value={formData.established}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, established: e.target.value }))}
                  placeholder="e.g., 2022"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Overview</label>
                <textarea
                  value={formData.overview}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, overview: e.target.value }))}
                  placeholder="Enter department overview"
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-32 bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Vision</label>
                <textarea
                  value={formData.vision}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, vision: e.target.value }))}
                  placeholder="Enter department vision"
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-24 bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mission</label>
                <textarea
                  value={formData.mission}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, mission: e.target.value }))}
                  placeholder="Enter department mission"
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-24 bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Scope & Career Opportunities</label>
                <textarea
                  value={formData.scope}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, scope: e.target.value }))}
                  placeholder="Enter scope and career opportunities"
                  className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-24 bg-background text-foreground"
                />
              </div>

              {/* Programs Section (Remains the same) */}
              <div className="border border-yellow-accent/30 rounded-lg p-4">
                <label className="block text-sm font-medium text-foreground mb-3">Programs Offered</label>
                <div className="space-y-3 mb-3">
                  {formData.programs.map((program: any, index: number) => (
                    <div
                      key={index}
                      className="bg-muted p-3 rounded flex justify-between items-start gap-2 border-l-2 border-yellow-accent"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{program.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{program.description}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeProgram(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Input
                    value={newProgram.name}
                    onChange={(e) => setNewProgram((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Program name (e.g., B.Com Honours - Finance)"
                    className="text-sm"
                  />
                  <textarea
                    value={newProgram.description}
                    onChange={(e) => setNewProgram((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Program description"
                    className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-20 bg-background text-foreground text-sm"
                  />
                  <Button size="sm" onClick={addProgram} className="w-full">
                    <Plus className="w-4 h-4 mr-2" /> Add Program
                  </Button>
                </div>
              </div>

              {/* Facilities Section (Remains the same) */}
              <div className="border border-yellow-accent/30 rounded-lg p-4">
                <label className="block text-sm font-medium text-foreground mb-3">Facilities</label>
                <div className="space-y-2 mb-3">
                  {formData.facilities.map((facility: string, index: number) => (
                    <div
                      key={index}
                      className="bg-muted p-2 rounded flex justify-between items-center border-l-2 border-yellow-accent"
                    >
                      <span className="text-sm">{facility}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFacility(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newFacility}
                    onChange={(e) => setNewFacility(e.target.value)}
                    placeholder="e.g., Computer Lab"
                    className="text-sm"
                  />
                  <Button size="sm" onClick={addFacility}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Faculty Section (UPDATED: Added Email/Phone fields) */}
              <div className="border border-yellow-accent/30 rounded-lg p-4">
                <label className="block text-sm font-medium text-foreground mb-3">Faculty Members</label>
                <div className="space-y-3 mb-3">
                  {formData.faculty.map((member: any, index: number) => (
                    <div
                      key={index}
                      className="bg-muted p-3 rounded flex justify-between items-start gap-2 border-l-2 border-yellow-accent"
                    >
                      <div className="flex gap-3 flex-1">
                        {member.photo && (
                          <img
                            src={member.photo || "/placeholder.svg"}
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-accent"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.designation}</p>
                          {member.email && <p className="text-xs flex items-center gap-1 text-blue-600"><Mail className="w-3 h-3"/>{member.email}</p>}
                          {member.phone && <p className="text-xs flex items-center gap-1 text-green-600"><Phone className="w-3 h-3"/>{member.phone}</p>}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFaculty(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Input
                    value={newFaculty.name}
                    onChange={(e) => setNewFaculty((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Faculty name"
                    className="text-sm"
                  />
                  <Input
                    value={newFaculty.designation}
                    onChange={(e) => setNewFaculty((prev) => ({ ...prev, designation: e.target.value }))}
                    placeholder="Designation (e.g., Head of Department)"
                    className="text-sm"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={newFaculty.email}
                      onChange={(e) => setNewFaculty((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Email (optional)"
                      className="text-sm"
                    />
                    <Input
                      value={newFaculty.phone}
                      onChange={(e) => setNewFaculty((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="Phone (optional)"
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition text-sm">
                      <Upload className="w-4 h-4" />
                      <span>{uploadingImage ? "Uploading..." : "Upload Photo"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "faculty")}
                        className="hidden"
                        disabled={uploadingImage}
                      />
                    </label>
                    {newFaculty.photo && (
                      <div className="flex items-center gap-2">
                        <img
                          src={newFaculty.photo || "/placeholder.svg"}
                          alt="Preview"
                          className="w-10 h-10 rounded-full object-cover border-2 border-yellow-accent"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setNewFaculty((prev) => ({ ...prev, photo: "" }))}
                          className="text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <Button size="sm" onClick={addFaculty} className="w-full">
                    <Plus className="w-4 h-4 mr-2" /> Add Faculty
                  </Button>
                </div>
              </div>

              {/* Achievements Section (Remains the same) */}
              <div className="border border-yellow-accent/30 rounded-lg p-4">
                <label className="block text-sm font-medium text-foreground mb-3">Achievements</label>
                <div className="space-y-2 mb-3">
                  {formData.achievements.map((achievement: string, index: number) => (
                    <div
                      key={index}
                      className="bg-muted p-2 rounded flex justify-between items-start gap-2 border-l-2 border-yellow-accent"
                    >
                      <span className="text-sm flex-1">{achievement}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeAchievement(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <textarea
                    value={newAchievement}
                    onChange={(e) => setNewAchievement(e.target.value)}
                    placeholder="Enter achievement"
                    className="flex-1 p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-20 bg-background text-foreground text-sm"
                  />
                  <Button size="sm" onClick={addAchievement}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* Main Content Area (Remains the same) */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {isAnnouncementsTab
                ? "Announcement Text"
                : isAboutTab || isContactTab
                  ? "Content/Details"
                  : isDepartmentsTab
                    ? "Short Description"
                    : "Content"}
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData((prev: any) => ({ ...prev, content: e.target.value }))}
              placeholder={
                isAnnouncementsTab
                  ? "Enter announcement message"
                  : isAboutTab
                    ? "Enter vision/mission/journey content"
                    : isDepartmentsTab
                      ? "Enter short department description"
                      : isContactTab
                        ? "Enter contact information"
                        : "Enter content"
              }
              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-accent min-h-32 bg-background text-foreground"
            />
          </div>
          <div className="flex gap-2">
            <Button 
                onClick={saveContent} 
                className="bg-green-600 hover:bg-green-700 border-b-4 border-yellow-accent"
            >
              {editingId ? "Update" : "Add"} Content
            </Button>
            
            {/* NEW FEATURE: Preview Button */}
            <Button
              variant="secondary"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye className="w-4 h-4 mr-2" /> Preview
            </Button>
            
            {editingId && (
              <Button
                variant="outline"
                onClick={resetForm}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </Card>
      
      {/* Render the Preview Modal */}
      <PreviewModal />

      <div className="space-y-4">
        <h2 className="text-xl font-bold border-l-4 border-yellow-accent pl-3">Manage Content</h2>
        {items.length === 0 ? (
          <Card className="p-6 text-center text-muted-foreground bg-card border-2 border-yellow-accent/20">
            No content yet. Add your first item above.
          </Card>
        ) : (
          items.map((item) => (
            <Card key={item.id} className="p-4 bg-card border-l-4 border-yellow-accent">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {item.image && (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded mb-3 border-2 border-yellow-accent/30"
                    />
                  )}
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  {(isEventsTab || isNewsTab) && item.date && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.date} {item.category && `• ${item.category}`}
                    </p>
                  )}
                  {item.description && <p className="text-muted-foreground mt-2 line-clamp-2">{item.description}</p>}
                  {isDepartmentsTab && (
                    <div className="mt-2 text-sm text-muted-foreground space-y-1">
                      {item.established && <p>Established: {item.established}</p>}
                      {item.faculty && <p>Faculty: {item.faculty.length} members</p>}
                      {item.programs && <p>Programs: {item.programs.length}</p>}
                    </div>
                  )}
                  <p className="text-muted-foreground mt-2 line-clamp-2">{item.content}</p>
                  <p className="text-xs text-gray-400 mt-2">Updated: {new Date(item.updatedAt).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 border-yellow-accent/30"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteContent(item.id)}
                    className="text-red-600 border-yellow-accent/30"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}