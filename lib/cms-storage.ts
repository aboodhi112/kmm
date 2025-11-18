// Centralized CMS and application storage utilities

interface CMSContent {
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
  // UPDATED: Added email and phone to the faculty interface
  faculty?: { name: string; designation: string; photo?: string; email?: string; phone?: string }[] 
  achievements?: string[]
}

interface AdmissionApplication {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  qualifications: string
  program: string
  appliedAt: string
}

interface FacilityIssue {
  id: string
  name: string
  subject: string
  message: string
  submittedAt: string
  status: "pending" | "resolved"
}

interface ContactMessage {
  id: string
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  submittedAt: string
  status: "unread" | "read"
}

function initializeDefaultContent() {
  if (typeof window === "undefined") return

  const homepageContent = localStorage.getItem("cms-homepage")
  if (!homepageContent) {
    const defaultContent: CMSContent[] = [
      {
        id: "1",
        title: "welcome",
        content:
          "KMM College, Thrikkakara Vazhakkala, commenced its academic journey in 2021-22, welcoming its first cohort of students in 2022-23. Notably, in its inaugural year, the college recorded the highest student enrollment under the self-financing scheme of the university, demonstrating its growing appeal and commitment to excellence.",
        section: "homepage",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "description",
        content:
          "Since its establishment, the college has remained steadfast in its mission to cultivate intellectual growth, ethical leadership, and social responsibility. With a team of highly qualified faculty, advanced infrastructure, and a holistic learning approach, KMM College continues to empower students with the knowledge, skills, and values essential for success in an ever-evolving professional domain.",
        section: "homepage",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-homepage", JSON.stringify(defaultContent))
  }

  const announcementContent = localStorage.getItem("cms-announcements")
  if (!announcementContent) {
    const defaultAnnouncement: CMSContent[] = [
      {
        id: "1",
        title: "main-announcement",
        content: "KMM College of Arts and Science has been NAAC Accredited with B Grade.",
        section: "announcements",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-announcements", JSON.stringify(defaultAnnouncement))
  }

  const aboutContent = localStorage.getItem("cms-about")
  if (!aboutContent) {
    const defaultAbout: CMSContent[] = [
      {
        id: "1",
        title: "Our Journey - Paragraph 1",
        content:
          "KMM College of Arts & Science, Thrikkakara Vazhakkala, operates under the esteemed KMM Group of Institutions, affiliated with Mahatma Gandhi University, Kottayam. Established in 2008, the group has been dedicated to providing quality education to students from all backgrounds, ensuring inclusivity and academic excellence.",
        section: "about",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Our Journey - Paragraph 2",
        content:
          "KMM College commenced its academic journey in 2021-22, welcoming its first cohort of students in 2022-23. Notably, in its inaugural year, the college recorded the highest student enrollment under the self-financing scheme of the university, demonstrating its growing appeal and commitment to excellence.",
        section: "about",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Our Journey - Paragraph 3",
        content:
          "Since its establishment, the college has remained steadfast in its mission to cultivate intellectual growth, ethical leadership, and social responsibility.",
        section: "about",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "4",
        title: "Vision",
        content:
          "To be a center of excellence in education, empowering students with knowledge, skills, and values to thrive in their careers and contribute meaningfully to society. We aspire to create an environment where intellectual curiosity flourishes and innovation is celebrated.",
        section: "about",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "5",
        title: "Mission",
        content:
          "To provide inclusive, high-quality education that fosters intellectual growth, ethical values, and social responsibility. We are committed to equipping students with industry-relevant skills and a global outlook, preparing them for professional success and lifelong learning in a rapidly changing world.",
        section: "about",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-about", JSON.stringify(defaultAbout))
  }

  const departmentsContent = localStorage.getItem("cms-departments")
  if (!departmentsContent) {
    const defaultDepartments: CMSContent[] = [
      {
        id: "1",
        title: "Department of Commerce",
        content:
          "Offering comprehensive commerce education with focus on business management, accounting, and economics. Programs: B.Com, M.Com",
        section: "departments",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Department of Animation & Graphic Design",
        content:
          "Creative department offering programs in animation, graphic design, and digital media production. Programs: B.Tech in Animation & Graphic Design, Diploma programs",
        section: "departments",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Department of Business Administration",
        content:
          "Specialized department focusing on business management, entrepreneurship, and corporate skills. Programs: BBA, MBA",
        section: "departments",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "4",
        title: "Department of Computer Application",
        content:
          "Modern CS department with focus on software development, web technologies, and IT infrastructure. Programs: B.Sc Computer Application, M.Sc Computer Application",
        section: "departments",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "5",
        title: "Department of Languages",
        content:
          "Comprehensive language studies including English, Malayalam, and other regional languages. Programs: BA in Languages, MA in Languages",
        section: "departments",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-departments", JSON.stringify(defaultDepartments))
  }

  const contactContent = localStorage.getItem("cms-contact")
  if (!contactContent) {
    const defaultContact: CMSContent[] = [
      {
        id: "1",
        title: "Phone Numbers",
        content: "8590601343, 9895545924",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Email",
        content: "info@kmmcollege.edu.in",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Location",
        content:
          "KMM College Thrikkakara Vazhakkala, Civil Lane road, Friendship Enclave B Block, Padamugal, Vazhakkala, Ernakulam 682021",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "4",
        title: "Office Hours - Weekdays",
        content: "Monday - Friday: 10:00 AM - 5:00 PM",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "5",
        title: "Office Hours - Saturday",
        content: "Saturday: 10:00 AM - 2:00 PM",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
      {
        id: "6",
        title: "Office Hours - Sunday",
        content: "Sunday: Closed",
        section: "contact",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-contact", JSON.stringify(defaultContact))
  }

  const newsContent = localStorage.getItem("cms-news")
  if (!newsContent) {
    const defaultNews: CMSContent[] = [
      {
        id: "1",
        title: "ADMISSIONS STARTED",
        content: "Admissions for the academic year 2025-2026 have officially started.",
        date: "March 17, 2025",
        category: "Admission",
        description: "Apply now for UG and PG programs at KMM College.",
        section: "news",
        updatedAt: new Date().toISOString(),
      },
    ]
    localStorage.setItem("cms-news", JSON.stringify(defaultNews))
  }
}

// CMS Content Management
export function getCMSContent(section: string): CMSContent[] {
  if (typeof window === "undefined") return []
  initializeDefaultContent()
  const saved = localStorage.getItem(`cms-${section}`)
  return saved ? JSON.parse(saved) : []
}

export function saveCMSContent(section: string, content: CMSContent[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(`cms-${section}`, JSON.stringify(content))
}

export function getCMSByTitle(section: string, title: string): CMSContent | null {
  const content = getCMSContent(section)
  return content.find((item) => item.title.toLowerCase() === title.toLowerCase()) || null
}

// Applications Management
export function getApplications(): AdmissionApplication[] {
  if (typeof window === "undefined") return []
  const saved = localStorage.getItem("cms-applications")
  return saved ? JSON.parse(saved) : []
}

export function saveApplication(app: AdmissionApplication) {
  if (typeof window === "undefined") return
  const apps = getApplications()
  apps.push(app)
  localStorage.setItem("cms-applications", JSON.stringify(apps))
}

export function deleteApplication(id: string) {
  if (typeof window === "undefined") return
  const apps = getApplications().filter((app) => app.id !== id)
  localStorage.setItem("cms-applications", JSON.stringify(apps))
}

export function downloadApplicationsCSV(): string {
  const apps = getApplications()
  const headers = ["ID", "First Name", "Last Name", "Email", "Phone", "Qualifications", "Program", "Applied At"]
  const rows = apps.map((app) => [
    app.id,
    app.firstName,
    app.lastName,
    app.email,
    app.phone,
    app.qualifications,
    app.program,
    app.appliedAt,
  ])

  const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")
  return csv
}

// Facility Issues Management
export function getFacilityIssues(): FacilityIssue[] {
  if (typeof window === "undefined") return []
  const saved = localStorage.getItem("cms-facility-issues")
  return saved ? JSON.parse(saved) : []
}

export function saveFacilityIssue(issue: FacilityIssue) {
  if (typeof window === "undefined") return
  const issues = getFacilityIssues()
  issues.push(issue)
  localStorage.setItem("cms-facility-issues", JSON.stringify(issues))
}

export function updateFacilityIssueStatus(id: string, status: "pending" | "resolved") {
  if (typeof window === "undefined") return
  const issues = getFacilityIssues()
  const updated = issues.map((issue) => (issue.id === id ? { ...issue, status } : issue))
  localStorage.setItem("cms-facility-issues", JSON.stringify(updated))
}

export function deleteFacilityIssue(id: string) {
  if (typeof window === "undefined") return
  const issues = getFacilityIssues().filter((issue) => issue.id !== id)
  localStorage.setItem("cms-facility-issues", JSON.stringify(issues))
}

// Contact Messages Management
export function getContactMessages(): ContactMessage[] {
  if (typeof window === "undefined") return []
  const saved = localStorage.getItem("cms-contact-messages")
  return saved ? JSON.parse(saved) : []
}

export function saveContactMessage(message: ContactMessage) {
  if (typeof window === "undefined") return
  const messages = getContactMessages()
  messages.push(message)
  localStorage.setItem("cms-contact-messages", JSON.stringify(messages))
}

export function updateContactMessageStatus(id: string, status: "unread" | "read") {
  if (typeof window === "undefined") return
  const messages = getContactMessages()
  const updated = messages.map((msg) => (msg.id === id ? { ...msg, status } : msg))
  localStorage.setItem("cms-contact-messages", JSON.stringify(updated))
}

export function deleteContactMessage(id: string) {
  if (typeof window === "undefined") return
  const messages = getContactMessages().filter((msg) => msg.id !== id)
  localStorage.setItem("cms-contact-messages", JSON.stringify(messages))
}