"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { getCMSContent, saveCMSContent } from "@/lib/cms-storage"
import { Plus, Trash2, Upload, X } from "lucide-react"

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
  faculty?: { name: string; designation: string; photo?: string }[]
  achievements?: string[]
  image?: string // Added for image storage
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
    image: "", // Added for image storage
  })

  const [newProgram, setNewProgram] = useState({ name: "", description: "" })
  const [newFaculty, setNewFaculty] = useState({ name: "", designation: "", photo: "" })
  const [newFacility, setNewFacility] = useState("")
  const [newAchievement, setNewAchievement] = useState("")
  /* Added image upload state */
  const [uploadingImage, setUploadingImage] = useState(false)

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
      image: "", // Reset image when tab changes
    })
  }, [activeTab])

  /* Added image upload handler */
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

    if (editingId) {
      updatedItems = items.map((item) =>
        item.id === editingId ? { ...item, ...formData, updatedAt: new Date().toISOString() } : item,
      )
    } else {
      const newItem: ContentItem = {
        id: Date.now().toString(),
        ...formData,
        section: activeTab,
        updatedAt: new Date().toISOString(),
      }
      updatedItems = [...items, newItem]
    }

    setItems(updatedItems)
    saveCMSContent(activeTab, updatedItems)
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
      image: "", // Clear image after save
    })
    setEditingId(null)
  }

  const deleteContent = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    saveCMSContent(activeTab, updatedItems)
  }

  /* Updated handleEdit to include all fields */
  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id)
    setFormData({
      title: item.title,
      content: item.content,
      date: item.date || "",
      category: item.category || "",
      description: item.description || "",
      overview: item.overview || "",
      vision: item.vision || "",
      mission: item.mission || "",
      scope: item.scope || "",
      established: item.established || "",
      programs: item.programs || [],
      facilities: item.facilities || [],
      faculty: item.faculty || [],
      achievements: item.achievements || [],
      image: item.image || "", // Load existing image
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
      setNewFaculty({ name: "", designation: "", photo: "" })
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

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-l-4 border-yellow-accent">
        <h2 className="text-xl font-bold mb-4">{editingId ? "Edit" : "Add New"} Content</h2>
        <div className="space-y-4">
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

              {/* Programs Section */}
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

              {/* Facilities Section */}
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

              {/* Achievements Section */}
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
            <Button onClick={saveContent} className="bg-green-600 hover:bg-green-700 border-b-4 border-yellow-accent">
              {editingId ? "Update" : "Add"} Content
            </Button>
            {editingId && (
              <Button
                variant="outline"
                onClick={() => {
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
                    image: "", // Clear image on cancel
                  })
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </Card>

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
