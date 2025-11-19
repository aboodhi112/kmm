"use client"

import Link from "next/link"

const departments: Record<
  string,
  {
    title: string
    description: string
    overview: string
    vision: string
    mission: string
    scope?: string
    programs: { name: string; description: string }[]
    facilities?: string[]
    faculty?: { name: string; designation: string; photo?: string }[]
    established?: string
    achievements?: string[]
  }
> = {
  commerce: {
    title: "Department of Commerce",
    description: "Excellence in Commerce Education",
    established: "2022",
    overview:
      "Established in 2022, the Department of Commerce is in the self-financing stream with three different programmes in Commerce. In 2024, the department adopted the Four-Year Undergraduate (Honours) Program under the new academic framework. We proudly offer three specialized undergraduate programs: Finance and Taxation, Logistics, and Accounting. The course enhances students with skills and knowledge in verbal and interpersonal communication, critical thinking, time management, and problem-solving skills.",
    vision: "To produce well-rounded, skilled, and ethically conscious commerce graduates.",
    mission:
      "To provide progressive, liberal and prolific education to students from all section of the community. To promote assorted skills, build character and societal consciousness.",
    scope:
      "A career in commerce offers immense growth as demand for professionals is always high. Job opportunities exist right after the programme. Jobs for B.Com graduates exist in India as well as abroad. After completion of B.Com, a graduate can apply for Government Sector jobs as well as private sector job. In addition, commerce graduates are competent to apply for accounting related jobs in India and abroad.",
    programs: [
      {
        name: "B.Com Honours - Finance and Taxation",
        description:
          "Focuses on enhancing the student's practical knowledge of the global financial environment and delivering qualified and skilled finance professionals. The programme covers all types of taxes including GST, Income Tax, Sales Tax, VAT Service Tax, Property Tax, and taxation laws and regulations. Additionally, the course aids in the development of expertise in areas like financial management, including budgeting and financial planning.",
      },
      {
        name: "B.Com Honours - Logistics Management",
        description:
          "Equips students with the skills and knowledge to navigate the complex world of supply chain management and transportation management, preparing them for successful careers in logistics, transportation, and related industries.",
      },
      {
        name: "B.Com Honours - Accounting",
        description:
          "Provides comprehensive education in accounting principles, practices, and technologies. Students gain deep understanding of financial accounting, management accounting, taxation, and auditing with expertise in the latest accounting technologies.",
      },
    ],
    facilities: ["Computer Lab", "Library", "Commerce Resource Center", "Accounting Lab"],
    faculty: [
      { name: "Ms Sindhu K Chandran", designation: "Head of the Department", photo: "/photos/sindhu.png" },
      { name: "Ms Rejitha K R", designation: "Assistant Professor", photo: "/photos/rejitha.png" },
      { name: "Ms Hazeenamol V A", designation: "Assistant Professor", photo: "/photos/hazeena.png" },
      { name: "Ms Praseetha R Nair", designation: "Assistant Professor", photo: "/photos/praseetha.png" },
      { name: "Ms Hima Hariharan", designation: "Assistant Professor", photo: "/photos/hima.png" },
      { name: "Ms Shahina P S", designation: "Assistant Professor", photo: "/photos/shahina.png" },
      { name: "Ms Hasheena K H", designation: "Assistant Professor", photo: "/photos/hasheena.png" },
      { name: "Ms Ashida K A", designation: "Assistant Professor", photo: "/photos/ashida.png" },
    ],
  },

  animation: {
    title: "Department of Animation & Graphic Design",
    description: "Creative Excellence in Design",
    established: "2023",
    overview:
      "Established in 2023, the Department of Animation and Graphic Design at KMM College is a vibrant and creative community dedicated to nurturing the next generation of animation and design professionals. Even at the initial stages we conducted Animation Fest which showcased the students talents and skill which gained news value in News Daily.",
    vision:
      "To democratize access to quality animation and graphic design education, bridging the gap for underprivileged students.",
    mission:
      "To foster industry-ready professionals through experiential learning, practical training, and real-world applications.",
    programs: [
      {
        name: "B.A (Hons) Animation and Graphic Design",
        description:
          "A four-year program designed to develop creative professionals with expertise in animation, graphic design, and digital media. Students learn industry-standard tools and techniques while working on real-world projects and developing comprehensive skills in animation, visual effects, motion graphics, and professional design practices.",
      },
    ],
    facilities: [
      "Cutting-Edge Laboratory with industry-standard software and latest hardware",
      "Animation Studio with rendering and production capabilities",
      "Digital Media Center for multimedia projects",
      "Editing Suite with professional video editing tools",
      "Design Lab with graphic workstations",
    ],
    faculty: [
      { name: "Sarah Rex Varghese", designation: "Head of the Department", photo: "/photos/sarah.png" },
      { name: "Christy Babu Lukose", designation: "Assistant Professor", photo: "/photos/christy.png" },
      { name: "Anna Thankachan", designation: "Assistant Professor", photo: "/photos/anna.png" },
      { name: "Feba Anna Babu", designation: "Adjunct Faculty", photo: "/photos/feba.png" },
    ],
    achievements: [
      "Animation Fest Success - Conducted Animation Fest which showcased student talents and skills, gaining news coverage in News Daily",
      "Industry-Standard Facilities - Equipped with cutting-edge laboratory facilities providing hands-on experience in latest software and technologies",
      "Expert Faculty - Experienced professionals with passion for teaching and mentoring, bringing wealth of industry expertise",
    ],
  },

  "business-admin": {
    title: "Department of Business Administration",
    description: "Management and business studies",
    overview:
      "The revised BBA program at Mahatma Gandhi University (MGU-BBA), aligned with AICTE norms, offers flexible pathways, including a four-year BBA (Honours), and BBA (Honours with Research). This curriculum equips students with expertise across key management domains, fostering analytical, managerial, and entrepreneurial skills. Graduates can pursue careers in Marketing, Finance, Sales, and Government sectors or advance to higher studies like an MBA. The program's comprehensive approach prepares future leaders to excel in dynamic business environments and take on strategic roles in large organizations.",
    vision:
      "To be a leading centre for management education, fostering ethical leadership, innovation, and social responsibility.",
    mission:
      "Develop managerial and decision-making skills through industry-focused education. Promote research, entrepreneurship, and interdisciplinary learning. Instill ethical values and social responsibility in future business leaders.",
    scope:
      "The BBA programme prepares graduates for careers in marketing, finance, sales, government sectors, and higher education. Roles include Marketing Manager, Financial Analyst, Business Consultant, HR Manager, and Entrepreneur.",
    programs: [
      {
        name: "BBA Honours",
        description:
          "A comprehensive four-year program designed to develop management professionals with expertise in business administration and strategic leadership.",
      },
      {
        name: "BBA Honours with Research",
        description:
          "Advanced program combining management education with research methodology and analytical skills development.",
      },
    ],
    facilities: ["Business Lab", "Computer Lab", "Library", "Conference Room", "Case Study Center"],
    faculty: [
      { name: "Mr. Rejeesh K K", designation: "Head of the Department", photo: "/photos/rejeesh.png" },
      { name: "Mr. Harikrishnan V S", designation: "Assistant Professor", photo: "/photos/harikrishnan.png" },
      { name: "Ms. Shoma R", designation: "Assistant Professor", photo: "/photos/shoma.png" },
      { name: "Ms. Abhirami A G", designation: "Assistant Professor", photo: "/photos/abhirami.png" },
    ],
  },

  "computer-app": {
    title: "Department of Computer Application",
    description: "IT and computer sciences",
    overview:
      "The Department of Computer Application started in June 2022 in the self-financing stream with the introduction of Bachelor of Computer Application (BCA) course. The backbone of our department is a team of qualified, experienced and dedicated faculty members who contributes to the development of technical and academic skills of the students for making them socially committed professionals. The Bachelor of Computer Applications (BCA) Honours is a comprehensive 4-year program, with a flexible exit option after 6 semesters, awarding a BCA degree.",
    vision:
      "To be an esteemed institution in technical education which in turn contribute to individual and also to the upcoming knowledge-based society in the field of technology.",
    mission:
      "To develop well qualified professionals in the field of information technology including new innovations in this field also to develop commitment to the society through career-based courses and well-established technical environments.",
    scope:
      "The BCA (Honours) program under MGU offers excellent career prospects in the IT industry, with opportunities in software development, database management, cloud computing, and networking. Career paths include Software Developer, Network Administrator, System Analyst, Data Analyst, and roles in emerging technologies like Cloud Computing, Data Science, and Machine Learning.",
    programs: [
      {
        name: "BCA Honours",
        description:
          "A comprehensive 4-year program providing strong foundation in computer systems, software development, analytics, and various facets of information technology, making it an ideal choice for individuals aiming to thrive in the dynamic field of computer science.",
      },
    ],
    facilities: ["Computer Lab", "Programming Lab", "Database Lab", "Networking Lab", "Research Center", "Linux Lab"],
    faculty: [
      { name: "Fahmida Aseez", designation: "Head of the Department", photo: "/photos/fahmida.png" },
      { name: "Abisha A A", designation: "Assistant Professor", photo: "/photos/abisha.png" },
      { name: "Saneesha", designation: "Assistant Professor", photo: "/photos/saneesha.png" },
      { name: "Fathima Kondeth", designation: "Assistant Professor", photo: "/photos/fathimak.png" },
    ],
  },

  mathematics: {
    title: "Department of Mathematics",
    description: "Mathematical Excellence",
    overview:
      "The Department of Mathematics at KMM College plays a vital role in supporting academic programs such as BBA and BCA by enhancing students' quantitative and analytical skills. Through a well-structured approach, the department aims to strengthen mathematical proficiency and foster logical reasoning, equipping students with the skills necessary for academic and professional success. As a single faculty department, it provides specialized individual attention to each student.",
    vision:
      "To cultivate analytical and critical thinkers by promoting mathematical proficiency and fostering logical reasoning for success in a dynamic world.",
    mission:
      "We are committed to delivering quality mathematics education that strengthens problem-solving abilities and promotes logical thinking. Our mission is to empower students with quantitative skills and adaptability, preparing them for diverse academic and professional challenges.",
    programs: [
      {
        name: "Mathematics Common Course",
        description:
          "Offered to BBA and BCA students as a common course to strengthen mathematical foundations and quantitative reasoning skills essential for their respective programmes.",
      },
    ],
    facilities: ["Mathematics Lab", "Research Center", "Computer Lab", "Statistics Lab"],
    faculty: [
      {
        name: "Fathima Raihanath",
        designation: "Assistant Professor, Department of Mathematics",
        photo: "/photos/fathima.png",
      },
    ],
  },

  languages: {
    title: "Department of Languages",
    description: "Language & Cultural Studies",
    overview:
      "The Department of Languages at KMM College offers Common and Multidisciplinary Courses in English, Hindi, and Malayalam, designed to enhance linguistic proficiency and foster effective communication skills. These courses are an integral part of the curriculum for B.Com, BBA, and BCA students, equipping them with the language competencies essential for academic and professional success. Through interactive learning, contextual applications, and skill-based activities, the department aims to empower students with strong communication and analytical abilities, preparing them for the diverse demands of the modern world.",
    vision:
      "To cultivate proficient and articulate individuals by enhancing their language skills, fostering cultural awareness, and promoting critical thinking for success in a global society.",
    mission:
      "We are committed to delivering high-quality language education that strengthens communication skills and broadens perspectives. Our mission is to empower students with multilingual competence and adaptability, preparing them for diverse academic and professional challenges.",
    programs: [
      {
        name: "English",
        description:
          "Comprehensive English language and literature programs focusing on communication, critical analysis, and professional writing skills for B.Com, BBA, and BCA students.",
      },
      {
        name: "Hindi",
        description:
          "Hindi language and cultural studies promoting linguistic diversity and cultural understanding for multidisciplinary students.",
      },
      {
        name: "Malayalam",
        description:
          "Malayalam language and literature emphasizing regional cultural heritage, linguistic excellence, and contemporary communication skills.",
      },
    ],
    facilities: ["Language Lab", "Library", "Discussion Rooms", "Digital Learning Center"],
    faculty: [
      { name: "Arya S", designation: "Assistant Professor, Department of English", photo: "/photos/arya.png" },
      { name: "Raslana M S", designation: "Assistant Professor, Department of English", photo: "/photos/raslana.png" },
      { name: "Ragi M M", designation: "Assistant Professor, Department of Malayalam", photo: "/photos/ragi.png" },
      {
        name: "Sangeetha T G",
        designation: "Assistant Professor, Department of Hindi",
        photo: "/photos/sangeetha.png",
      },
    ],
  },
}

export default function DepartmentDetail({ slug }: { slug: string }) {
  const dept = departments[slug]

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Department not found</h1>
          <p className="text-gray-600 mb-6">
            Looking for: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="py-12 md:py-20 relative">
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4">
            {dept.title}
          </h1>
          <p className="text-xl text-gray-600 mt-3">{dept.description}</p>
          {dept.established && <p className="text-sm text-gray-500 mt-2">Established: {dept.established}</p>}
        </div>

        <section className="mb-12 bg-blue-50 rounded-lg p-8 border-2 border-yellow-400">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{dept.overview}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Vision</h3>
            <p className="text-gray-700">{dept.vision}</p>
          </div>

          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Mission</h3>
            <p className="text-gray-700">{dept.mission}</p>
          </div>
        </div>

        {dept.scope && (
          <section className="mb-12 bg-blue-50 rounded-lg p-8 border-2 border-yellow-400">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Scope & Career Opportunities</h2>
            <p className="text-gray-700 leading-relaxed">{dept.scope}</p>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Programs Offered</h2>
          <div className="space-y-4">
            {dept.programs.map((program, idx) => (
              <div key={idx} className="bg-white border-2 border-yellow-400 p-6 rounded shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{program.name}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {dept.facilities && dept.facilities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Facilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dept.facilities.map((facility, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-blue-50 p-4 rounded">
                  <span className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {dept.achievements && dept.achievements.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Achievements</h2>
            <div className="space-y-4">
              {dept.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {dept.faculty && dept.faculty.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Expert Faculty</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dept.faculty.map((member, idx) => (
                <div key={idx} className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <img
  src={member.photo || "/photos/placeholder.png"}
  onError={(e) => {
    e.currentTarget.src = "/photos/placeholder.png"
  }}
  alt=""
  className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 flex-shrink-0"
/>

                    <div className="flex-1">
                      <p className="text-lg font-bold text-blue-900">{member.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{member.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-blue-600 text-white rounded-lg p-8 text-center border-t-4 border-yellow-400">
          <h3 className="text-2xl font-bold mb-4">Interested in this program?</h3>
          <p className="mb-6">Contact us for more information about admissions and career opportunities</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-blue-50 transition">
            Apply Now
          </button>
        </section>
      </div>
    </main>
  )
}
