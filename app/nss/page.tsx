import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "NSS - KMM College",
  description: "National Service Scheme at KMM College Thrikkakara",
}

export default function NSSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">National Service Scheme (NSS)</h1>
          <p className="text-lg text-gray-600">NSS Unit No. 271 - KMM College Thrikkakara Vazhakkala</p>
        </div>

{/* Introduction */}
<div className="bg-blue-50 p-8 rounded-lg mb-12">
  <h2 className="text-2xl font-bold text-blue-900 mb-4">About NSS</h2>

  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Service Scheme is a Central Government Educational Programme started in the year 1969. It is
        functioning under the Ministry of Youth Affairs and Sports at the national level and under the Ministry of
        Higher Education at the State level. Mahatma Gandhi University NSS was started in 1984.
      </p>
      <p className="text-gray-700 leading-relaxed">
        NSS embodies students to undertake community service while they study in an educational institution as
        envisaged by Mahatma Gandhi, the 'Acharya' of the National Service Scheme.
      </p>
    </div>

    <div className="w-full flex justify-center">
      <img
        src="/nss.png"
        alt="NSS"
        className="max-w-full"
      />
    </div>
  </div>
</div>


        {/* Aims and Objectives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Aim and Objectives</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Objectives of NSS</h3>
            <p className="text-gray-700 mb-4">The broad objectives of NSS are to:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Understand the community in which they work</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Understand themselves in relation to their community</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Identify the needs and problems of the community and involve them in the problem-solving process
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Develop among themselves a sense of social and civic responsibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Utilize their knowledge in finding practical solutions to individual and community problems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Develop competence required for group living and sharing of responsibilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Gain skills in mobilizing community participation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Acquire leadership qualities and a democratic attitude</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Develop capacity to meet emergencies and natural disasters</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Practice national integration and social harmony</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NSS Motto */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">NSS Motto</h2>
          <p className="text-4xl font-bold mb-6">"NOT ME BUT YOU"</p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            This motto reflects the essence of democratic living and upholds the need for selfless service and
            appreciation of the other person's point of view. It underlines that the welfare of an individual is
            ultimately dependent on the welfare of society as a whole.
          </p>
        </div>

        {/* NSS Logo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">NSS Logo</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              The symbol of the National Service Scheme is based on the 'Rath' wheel of the Konark Sun Temple situated
              in Orissa. These giant wheels of the Sun Temple portray the cycle of creation, preservation and release,
              and signify the movement in life across time and space. The design of the symbol, a simplified form of the
              Sun-chariot wheel, primarily depicts movement. The wheel signifies the progressive cycle of life. It
              stands for continuity as well as change and implies the continuous striving of NSS for social
              transformation and upliftment.
            </p>
          </div>
        </div>

        {/* Classification of NSS Programme */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Classification of NSS Programmes</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed mb-4">
              NSS activities have been divided into two major groups:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-blue-900 mb-2">1. Regular NSS Activities</h3>
                <p className="text-gray-700">
                  Students undertake various programmes in the adopted villages, college campuses, and urban slums
                  during weekends or after college hours.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-blue-900 mb-2">2. Special Camping Programme</h3>
                <p className="text-gray-700">
                  Camps of 7 days duration are organized in adopted villages or urban slums during vacations with
                  specific projects involving local communities. 50% of NSS volunteers are expected to participate in
                  these camps.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              NSS volunteers who have completed 240 hours of regular activities in the period of 2 years and attended
              one annual special camp of 7 days will be issued an NSS certificate by the college.
            </p>
          </div>
        </div>

        {/* Programme Officer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">NSS Unit No. 271 Programme Officer</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 flex items-center justify-center">
  <img
    src="\photos\hari.png"
    alt=""
    className="w-full h-full object-contain"
  />
</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Harikrishnan</h3>
                <p className="text-gray-700">Assistant Professor</p>
                <p className="text-gray-700">Department of Business Administration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-6">Join NSS and make a difference in your community. Become a volunteer today!</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Join NSS Volunteer
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
