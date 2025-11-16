"use client"

import { useEffect } from "react"

export default function MouseBG() {
  useEffect(() => {
    const body = document.body
    let ticking = false
    let lx = 0
    let ly = 0

    const move = (e: MouseEvent) => {
      lx = (e.clientX / innerWidth) * 50
      ly = (e.clientY / innerHeight) * 50
      if (!ticking) {
        requestAnimationFrame(() => {
          body.style.setProperty("--mx", `${lx}%`)
          body.style.setProperty("--my", `${ly}%`)
          ticking = false
        })
        ticking = true
      }
    }

    addEventListener("mousemove", move, { passive: true })
    return () => removeEventListener("mousemove", move)
  }, [])

  return null
}
