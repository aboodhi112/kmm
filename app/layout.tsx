import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import MouseBG from "./mouse-bg"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KMM College of Arts & Science",
  description: "Welcome to KMM College - AICTE Approved, NAAC Accredited B Grade Institution",
  generator: "Next,js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <MouseBG />
        {children}
      </body>
    </html>
  )
}
