"use client"

import { useState, useEffect, useRef } from "react"
import AdmissionForm from "./admission-form"

export default function ApplyNowButton() {
  const [showForm, setShowForm] = useState(false)
  const [closing, setClosing] = useState(false)
  const [mx, setMx] = useState(50)
  const [my, setMy] = useState(50)
  const [hover, setHover] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)
  const startY = useRef<number | null>(null)

  const closeWithAnim = () => {
    setClosing(true)
    setTimeout(() => {
      setShowForm(false)
      setClosing(false)
    }, 250)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeWithAnim() }
    if (showForm) window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [showForm])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) closeWithAnim()
  }

  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null) return
    if (e.touches[0].clientY - startY.current > 60) closeWithAnim()
  }

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMx(x * 100)
    setMy(y * 100)
  }

  const gradient = hover
    ? `radial-gradient(circle at ${mx}% ${my}%, rgba(255,80,80,0.55), rgba(120,0,0,0.50))`
    : `radial-gradient(circle at 50% 50%, rgba(180,0,0,0.55), rgba(78,0,0,0.55))`

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        onMouseMove={handleMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ background: gradient }}
        className="
          fixed bottom-6 right-6 md:bottom-10 md:right-12
          text-white font-semibold
          px-6 py-3 md:px-8 md:py-4
          rounded-full shadow-xl
          transition-all duration-150
          z-[9999]
          text-base md:text-lg tracking-wide
          hover:scale-[1.13]
          cursor-pointer
          backdrop-blur-xl
          border border-red-500/35
          will-change-transform will-change-background
          animate-[breath_3.4s_ease-in-out_infinite]
        "
      >
        APPLY NOW
      </button>

      {showForm && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex md:items-center md:justify-center p-0 md:p-4 z-[10000] animate-[fadeIn_0.2s_ease]"
        >
          <div
            ref={modalRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className={`
              w-full max-h-[90vh] overflow-y-auto bg-white md:bg-transparent
              rounded-t-2xl md:rounded-none fixed bottom-0 left-0 right-0 md:static
              transition-transform duration-200
              ${closing ? "translate-y-full" : "translate-y-0"}
            `}
          >
            <AdmissionForm onClose={closeWithAnim} />
          </div>
        </div>
      )}
    </>
  )
}
