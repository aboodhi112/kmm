"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { getCMSByTitle } from "@/lib/cms-storage"

const ANN_H = 28
const CONTACT_H = 41
const NAV_DESKTOP = 69

const NAV_MOBILE_EXPANDED = 58
const NAV_MOBILE_SHRUNK = 38

// UPDATED: Changed md: styling to lg: to prevent desktop menu overlap on tablets/landscape mobile
const linkClass =
  "relative text-sm font-semibold transition-all duration-300 hover:text-primary lg:after:content-[''] lg:after:absolute lg:after:-bottom-0.5 lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:h-[2px] lg:after:w-0 lg:after:bg-primary lg:after:rounded-full lg:after:transition-all lg:after:duration-300 lg:hover:after:w-3/5"

const mobileLink = "text-base font-semibold active:scale-95 transition-transform"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [announcement, setAnnouncement] = useState(
    "KMM College of Arts and Science has been NAAC Accredited with B Grade."
  )
  const [shrink, setShrink] = useState(false)
  
  const [navH, setNavH] = useState(NAV_DESKTOP)
  const [effectiveContactH, setEffectiveContactH] = useState(CONTACT_H)

  /* ---------------------- Responsive Height Logic ---------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return
    const update = () => {
      // UPDATED: Check for < 1024 (lg) instead of 768 (md)
      setNavH(window.innerWidth < 1024 ? NAV_MOBILE_EXPANDED : NAV_DESKTOP)
      setEffectiveContactH(window.innerWidth < 1024 ? 0 : CONTACT_H)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  /* ---------------------- Fetch Announcement ---------------------- */
  useEffect(() => {
    const ann = getCMSByTitle("announcements", "main-announcement")
    if (ann) setAnnouncement(ann.content)
  }, [])

  /* ---------------------- Scroll Shrink Effect ---------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return
    let ticking = false
    const handle = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShrink(window.scrollY > 30)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  /* ---------------------- Layout Maths ---------------------- */
  const isMobile = effectiveContactH === 0

  const currentNavHeight = isMobile 
    ? (shrink ? NAV_MOBILE_SHRUNK : NAV_MOBILE_EXPANDED)
    : (navH + (shrink ? 0 : effectiveContactH))

  const navTop = shrink ? 0 : effectiveContactH
  const spacerTop = isMobile ? NAV_MOBILE_EXPANDED : (effectiveContactH + navH)
  
  const mobileMenuTop = currentNavHeight
  const mobileMenuHeight = `calc(100vh - ${mobileMenuTop}px)`
  const computedLogoTop = shrink ? 8 : effectiveContactH - 48

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[90] pointer-events-auto">

        {/* ---------------------- Announcement Bar ---------------------- */}
        <div
          style={{ height: ANN_H }}
          className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground overflow-hidden transition-all duration-300 ${
            shrink ? "translate-y-full opacity-0 delay-300" : "translate-y-0 opacity-100"
          } flex items-center z-[60]`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="whitespace-nowrap animate-[scrollMarquee_20s_linear_infinite]">
              <span className="text-xs md:text-sm font-medium inline-block">
                {announcement}
              </span>
            </div>
          </div>
        </div>

        {/* ---------------------- Contact Bar (Desktop) ---------------------- */}
        <div
          style={{ height: CONTACT_H, top: 0 }}
          // UPDATED: hidden md:flex -> hidden lg:flex
          className={`hidden lg:flex absolute left-0 right-6 text-secondary transition-all duration-300 ${
            shrink ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          } items-center z-[170]`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex justify-end items-center text-xs md:text-sm font-semibold tracking-wide gap-4 pt-3">
            <Link href="/admissions" className="hover:text-primary">ADMISSION</Link>
            <Link href="/clubs" className="hover:text-primary">CLUBS</Link>
            <Link href="/cells" className="hover:text-primary">CELLS</Link>
            <Link href="/committees" className="hover:text-primary">COMMITTEES</Link>
            <Link href="/research" className="hover:text-primary">RESEARCH</Link>
            <Link href="/student-support" className="hover:text-primary">STUDENT SUPPORT</Link>
            <Link href="/iqac" className="hover:text-primary">IQAC</Link>
            <Link href="/facilities" className="hover:text-primary">FACILITIES</Link>
            <Link href="/events" className="hover:text-primary">EVENTS</Link>
          </div>
        </div>

        {/* ---------------------- Main Navbar ---------------------- */}
        <div
          style={{
            height: `${currentNavHeight}px`,
            top: 0
          }}
          className="absolute left-0 right-0 z-[80] bg-white/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between relative">

            {/* ---------------------- Floating Logo (Desktop) ---------------------- */}
            <div
              // UPDATED: hidden md:block -> hidden lg:block
              className={`hidden lg:block absolute z-[150] ${
                shrink 
                  ? "scale-[2.2] -translate-x-10 -translate-y-5"
                  : "scale-[3.2] -translate-x-16 translate-y-4"
              } transition-all duration-300`}
              style={{
                left: 24,
                top: `${computedLogoTop}px`,
                width: 192,
                height: 96,
                pointerEvents: "auto"
              }}
            >
              <Link href="/" className="block relative w-full h-full rounded-lg overflow-hidden drop-shadow-xl">
                <Image src="/kmm-college-logo.png" alt="KMM College Logo" fill className="object-contain" priority />
              </Link>
            </div>

            {/* ---------------------- Desktop Links ---------------------- */}
            <nav
              // UPDATED: hidden md:flex -> hidden lg:flex
              className={`hidden lg:flex gap-6 xl:gap-8 items-center justify-end w-full pr-30 ${
                shrink ? "pt-0" : "pt-6"
              } scale-120 transition-all duration-300`}
            >
              <Link href="/" className={linkClass}>HOME</Link>
              <Link href="/about" className={linkClass}>ABOUT US</Link>
              <Link href="/academics" className={linkClass}>ACADEMICS</Link>

              <div className="relative group">
                <button className={`${linkClass} flex items-center gap-1.5`}>
                  DEPARTMENTS <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[90] scale-95 group-hover:scale-100 transition-all">
                  <Link href="/departments/commerce" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Commerce</Link>
                  <Link href="/departments/animation" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Animation & Graphic Design</Link>
                  <Link href="/departments/business-admin" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Business Administration</Link>
                  <Link href="/departments/computer-app" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Computer Application</Link>
                  <Link href="/departments/languages" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Languages</Link>
                  <Link href="/departments/mathematics" className="block px-5 py-3 font-medium hover:bg-white/60">Department of Mathematics</Link>
                </div>
              </div>

              <Link href="/placements" className={linkClass}>PLACEMENTS</Link>

              <div className="relative group">
                <button className={`${linkClass} flex items-center gap-1.5`}>
                  CO-CURRICULAR <span className="text-xs">▼</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[90] scale-95 group-hover:scale-100 transition-all">
                  <Link href="/clubs" className="block px-5 py-3 font-medium hover:bg-white/60">Clubs</Link>
                  <Link href="/events" className="block px-5 py-3 font-medium hover:bg-white/60">Events</Link>
                  <Link href="/nss" className="block px-5 py-3 font-medium hover:bg-white/60">NSS</Link>
                </div>
              </div>

              <Link href="/contact" className={linkClass}>CONTACT US</Link>
            </nav>

            {/* ---------------------- Mobile Nav ---------------------- */}
            <div
              // UPDATED: md:hidden -> lg:hidden
              className="lg:hidden flex items-center justify-between w-full px-2 relative z-[90] h-full"
            >
              <div 
                className={`relative w-24 h-16 transition-all duration-300 origin-left ${
                  shrink 
                    ? "scale-[2.0] -translate-x-10" 
                    : "scale-[2.75] translate-y-1 -translate-x-20"
                }`}
              >
                <Image src="/kmm-college-logo.png" alt="KMM College Logo" fill className="object-contain" priority />
              </div>

              <button
                onClick={() => {
                  if (isOpen) {
                    setClosing(true)
                    setTimeout(() => {
                      setIsOpen(false)
                      setClosing(false)
                    }, 450)
                  } else setIsOpen(true)
                }}
                aria-label="Toggle menu"
                className="relative z-[100] h-10 w-10 flex items-center justify-center active:scale-90 transition-transform"
              >
                <div className="relative flex flex-col justify-center items-center w-6 h-6 transition-all duration-300">
                  <span className={`absolute h-[2px] w-5 bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
                  <span className={`absolute h-[2px] w-5 bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                  <span className={`absolute h-[2px] w-5 bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------- Mobile Menu ---------------------- */}
        {(isOpen || closing) && (
          <div
            // UPDATED: md:hidden -> lg:hidden
            className={`fixed left-0 right-0 bg-card border-b shadow-xl lg:hidden overflow-auto ${
              closing ? "menuExit" : "animate-[fadeSlide_.45s_cubic-bezier(0.4,0.0,0.2,1)]"
            }`}
            style={{ top: mobileMenuTop, height: mobileMenuHeight, zIndex: 70 }}
          >
            <nav className="p-4 flex flex-col gap-2">
              <Link href="/" className={mobileLink}>HOME</Link>
              <Link href="/about" className={mobileLink}>ABOUT US</Link>
              <Link href="/academics" className={mobileLink}>ACADEMICS</Link>
              <Link href="/placements" className={mobileLink}>PLACEMENTS</Link>
              <Link href="/contact" className={mobileLink}>CONTACT US</Link>

              <div className="pt-2 border-t mt-2" />

              <span className="text-xs text-muted-foreground font-medium pt-2">DEPARTMENTS</span>
              <Link href="/departments/commerce" className={mobileLink}>COMMERCE</Link>
              <Link href="/departments/animation" className={mobileLink}>ANIMATION & GRAPHIC DESIGN</Link>
              <Link href="/departments/business-admin" className={mobileLink}>BUSINESS ADMIN</Link>
              <Link href="/departments/computer-app" className={mobileLink}>COMPUTER APPLICATION</Link>
              <Link href="/departments/languages" className={mobileLink}>LANGUAGES</Link>
              <Link href="/departments/mathematics" className={mobileLink}>MATHEMATICS</Link>

              <span className="text-xs text-muted-foreground font-medium pt-4">CO-CURRICULAR</span>
              <Link href="/clubs" className={mobileLink}>CLUBS</Link>
              <Link href="/events" className={mobileLink}>EVENTS</Link>
              <Link href="/nss" className={mobileLink}>NSS</Link>

              <span className="text-xs text-muted-foreground font-medium pt-4">EXTRAS</span>
              <Link href="/admissions" className={mobileLink}>ADMISSION</Link>
              <Link href="/cells" className={mobileLink}>CELLS</Link>
              <Link href="/committees" className={mobileLink}>COMMITTEES</Link>
              <Link href="/research" className={mobileLink}>RESEARCH</Link>
              <Link href="/student-support" className={mobileLink}>STUDENT SUPPORT</Link>
              <Link href="/iqac" className={mobileLink}>IQAC</Link>
              <Link href="/facilities" className={mobileLink}>FACILITIES</Link>
              <Link href="/events" className={mobileLink}>EVENTS</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ---------------------- Spacer ---------------------- */}
      <div style={{ paddingTop: spacerTop }} />
    </>
  )
}