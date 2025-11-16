"use client"

import AnimateBlock from "@/components/AnimateBlock"

export default function PlacementsClient({ recruiters }: { recruiters: string[] }) {
  return (
    <>

      {/* STATS GRID */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <AnimateBlock>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center border-4 border-yellow-accent shadow-xl">
            <p className="text-4xl font-bold mb-2">92%</p>
            <p>Placement Rate</p>
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg text-center border-4 border-yellow-accent shadow-xl">
            <p className="text-4xl font-bold mb-2">5 LPA</p>
            <p>Average Package</p>
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-lg text-center border-4 border-yellow-accent shadow-xl">
            <p className="text-4xl font-bold mb-2">1000+</p>
            <p>Students Placed</p>
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-lg text-center border-4 border-yellow-accent shadow-xl">
            <p className="text-4xl font-bold mb-2">50+</p>
            <p>Top Recruiters</p>
          </div>
        </AnimateBlock>

      </div>

      {/* TOP RECRUITERS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Our Top Recruiters
        </h2>

        <AnimateBlock>
          <div className="bg-white p-8 rounded-lg shadow-md border-4 border-yellow-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/10 rounded-bl-full" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {recruiters.map((recruiter, idx) => (
                <AnimateBlock key={idx}>
                  <div className="p-4 bg-blue-50 rounded-lg text-center border-2 border-yellow-accent/50 hover:border-yellow-accent transition-colors">
                    <p className="font-bold text-blue-900">{recruiter}</p>
                  </div>
                </AnimateBlock>
              ))}
            </div>
          </div>
        </AnimateBlock>
      </div>

      {/* PLACEMENT PROCESS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-6">
          Placement Process
        </h2>

        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Pre-Placement Talk (PPT)",
              description:
                "Companies present their profile, job opportunities, and selection process to the students.",
            },
            {
              step: "2",
              title: "Written Test",
              description:
                "Students appear for aptitude and technical tests conducted by the recruiting company.",
            },
            {
              step: "3",
              title: "Group Discussion & Interview",
              description:
                "Selected candidates participate in group discussions and technical/HR interviews.",
            },
            {
              step: "4",
              title: "Final Selection & Offer",
              description:
                "Successful candidates receive final offer letters with package details.",
            },
          ].map((item, idx) => (
            <AnimateBlock key={idx}>
              <div className="flex gap-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-accent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg border-2 border-yellow-accent relative z-10">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </AnimateBlock>
          ))}
        </div>
      </div>

      {/* ALUMNI NETWORK */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-accent pl-6">
          Alumni Network
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <AnimateBlock>
            <div className="bg-blue-50 p-8 rounded-lg border-4 border-yellow-accent/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/20 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">Connect with Alumni</h3>
              <p className="text-gray-700 mb-4 relative z-10">
                Our strong alumni network spans across the globe, working in leading organizations and making significant contributions to their fields.
              </p>
              <p className="text-gray-700 mb-4 relative z-10">
                Alumni actively participate in mentoring current students, conducting workshops, and facilitating internship opportunities.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 border-b-4 border-yellow-accent shadow-lg relative z-10">
                Join Alumni Network
              </button>
            </div>
          </AnimateBlock>

          <AnimateBlock>
            <div className="bg-red-50 p-8 rounded-lg border-4 border-yellow-accent/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-accent/20 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative z-10">Success Stories</h3>

              <div className="space-y-4 relative z-10">
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-accent/50">
                  <p className="font-bold text-blue-900">Rahul Kumar</p>
                  <p className="text-sm text-gray-600">Senior Software Engineer at Google</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-yellow-accent/50">
                  <p className="font-bold text-blue-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Product Manager at Microsoft</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-yellow-accent/50">
                  <p className="font-bold text-blue-900">Arun Verma</p>
                  <p className="text-sm text-gray-600">Founder, Tech Startup</p>
                </div>
              </div>
            </div>
          </AnimateBlock>

        </div>
      </div>

    </>
  )
}
