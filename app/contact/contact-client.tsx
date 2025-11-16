"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getCMSContent, saveContactMessage } from "@/lib/cms-storage"
import AnimateBlock from "@/components/AnimateBlock"

export default function ContactClientPage() {
  const [contactInfo, setContactInfo] = useState({
    phones: "",
    email: "",
    location: "",
    weekdays: "",
    saturday: "",
    sunday: "",
  })

  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const content = getCMSContent("contact")
    setContactInfo({
      phones: content.find((i) => i.title.toLowerCase().includes("phone"))?.content || "8590601343, 9895545924",
      email: content.find((i) => i.title.toLowerCase().includes("email"))?.content || "info@kmmcollege.edu.in",
      location:
        content.find((i) => i.title.toLowerCase().includes("location"))?.content ||
        "KMM College Thrikkakara Vazhakkala, Civil Lane road, Friendship Enclave B Block, Padamugal, Vazhakkala, Ernakulam 682021",
      weekdays:
        content.find((i) => i.title.toLowerCase().includes("weekdays"))?.content || "Monday - Friday: 10:00 AM - 5:00 PM",
      saturday:
        content.find((i) => i.title.toLowerCase().includes("saturday"))?.content || "Saturday: 10:00 AM - 2:00 PM",
      sunday: content.find((i) => i.title.toLowerCase().includes("sunday"))?.content || "Sunday: Closed",
    })
  }, [])

  const phoneNumbers = contactInfo.phones.split(",").map((p) => p.trim())

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = {
      id: Date.now().toString(),
      fullName: contactFormData.fullName,
      email: contactFormData.email,
      phone: contactFormData.phone,
      subject: contactFormData.subject,
      message: contactFormData.message,
      submittedAt: new Date().toISOString(),
      status: "unread" as const,
    }

    saveContactMessage(message)
    setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.")
    setContactFormData({ fullName: "", email: "", phone: "", subject: "", message: "" })
    setIsSubmitting(false)

    setTimeout(() => setSubmitMessage(""), 5000)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 border-4 border-yellow-accent/20 rounded-full -z-10" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-accent/10 rotate-45 -z-10" />

      <AnimateBlock>
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-l-4 border-yellow-accent pl-4 relative">
          Contact Us
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-yellow-accent" />
        </h1>
      </AnimateBlock>

      {/* CONTACT INFO */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AnimateBlock>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-yellow-accent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
            <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">Phone</h3>
            {phoneNumbers.map((phone, idx) => (
              <p key={idx} className="text-gray-700 mb-2 relative z-10">
                {phone}
              </p>
            ))}
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-yellow-accent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
            <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">Email</h3>
            <p className="text-gray-700 relative z-10">{contactInfo.email}</p>
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-yellow-accent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
            <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">Location</h3>
            <p className="text-gray-700 relative z-10">{contactInfo.location}</p>
          </div>
        </AnimateBlock>
      </div>

      {/* CONTACT FORM + OFFICE HOURS */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <AnimateBlock>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-accent pl-4">
              Send us a Message
            </h2>

            {submitMessage && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={contactFormData.fullName}
                  onChange={(e) => setContactFormData({ ...contactFormData, fullName: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={contactFormData.phone}
                  onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-accent"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  required
                  value={contactFormData.subject}
                  onChange={(e) => setContactFormData({ ...contactFormData, subject: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-accent"
                >
                  <option value="">Select Subject</option>
                  <option>Admissions</option>
                  <option>Academics</option>
                  <option>Placement</option>
                  <option>Facilities</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={contactFormData.message}
                  onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-accent"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition border-b-4 border-yellow-accent disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </AnimateBlock>

        <AnimateBlock>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-accent pl-4">
              Office Hours
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-accent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-accent/10 rounded-bl-full" />
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Monday - Friday:</span>
                  <span className="text-gray-700">
                    {contactInfo.weekdays.split(":")[1]?.trim() || "10:00 AM - 5:00 PM"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Saturday:</span>
                  <span className="text-gray-700">
                    {contactInfo.saturday.split(":")[1]?.trim() || "10:00 AM - 2:00 PM"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Sunday:</span>
                  <span className="text-gray-700">{contactInfo.sunday.split(":")[1]?.trim() || "Closed"}</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Contact Us?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-yellow-accent-dark font-bold">✓</span>
                <span className="text-gray-700">Admission queries and guidance</span>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-accent-dark font-bold">✓</span>
                <span className="text-gray-700">Academic programs information</span>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-accent-dark font-bold">✓</span>
                <span className="text-gray-700">Campus facility tours</span>
              </div>
            </div>
          </div>
        </AnimateBlock>
      </div>

      {/* MAP SECTION */}
      <AnimateBlock>
        <div className="bg-gray-200 rounded-lg p-8 text-center mb-8 border-4 border-yellow-accent/30">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Our Location</h2>
          <p className="text-gray-600 mb-4">
            Located in the heart of Thrikkakara, Kottayam, our campus provides easy accessibility and is surrounded by
            educational excellence.
          </p>

          <div className="rounded-lg overflow-hidden border-2 border-yellow-accent/20 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.0661485163598!2d76.33171347591418!3d10.015969490090813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d12ed7f8893%3A0xb4b928a9562bb92!2sKMM%20College%20of%20Arts%20%26%20Science%20Thrikkakara!5e0!3m2!1sen!2sin!4v1731048300000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimateBlock>
    </div>
  )
}
