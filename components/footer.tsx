import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">About Us</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="/about#history" className="hover:text-primary-foreground transition-colors">
                  College History
                </a>
              </li>
              <li>
                <a href="/about#vision" className="hover:text-primary-foreground transition-colors">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="/about#leadership" className="hover:text-primary-foreground transition-colors">
                  Leadership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">Academics</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="/academics#programs" className="hover:text-primary-foreground transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/academics#departments" className="hover:text-primary-foreground transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="/placements" className="hover:text-primary-foreground transition-colors">
                  Placements
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">Student Life</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-primary-foreground/80 leading-relaxed">
              <li>
                <a href="/clubs" className="hover:text-primary-foreground transition-colors">
                  Clubs
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-primary-foreground transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:text-primary-foreground transition-colors">
                  Facilities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-primary-foreground/80 leading-relaxed">
              <li>
                <a href="tel:8590601343" className="hover:text-primary-foreground transition-colors">
                  Phone: 8590601343, 9895545924
                </a>
              </li>
              <li>
                <a href="mailto:info@kmmcollege.edu.in" className="hover:text-primary-foreground transition-colors">
                  Email: info@kmmcollege.edu.in
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=KMM+College+Thrikkakara+Vazhakkala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Location: KMM College Thrikkakara Vazhakkala, Civil Lane road, Friendship Enclave B Block, Padamugal,
                  Vazhakkala, Ernakulam 682021
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8">
          <p className="text-center text-xs md:text-sm text-primary-foreground/70">
            © 2025 KMM College of Arts & Science. All rights reserved.
          </p>

          <p className="text-center text-[11px] md:text-xs text-primary-foreground/60 mt-2">
            powered by <span className="font-semibold text-primary-foreground">Zaasio Technology</span>
          </p>

          <div className="text-center mt-4 md:mt-6">
            <Link
              href="/admin/login"
              className="inline-block bg-primary px-6 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-primary/90 transition-colors"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
