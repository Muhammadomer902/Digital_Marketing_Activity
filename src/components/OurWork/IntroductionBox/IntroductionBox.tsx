"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function IntroductionBox() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[550px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
      style={{
        clipPath: "ellipse(120% 99% at 50% 0%)",
        backgroundImage: 'url("/IntroductionBox/NasaGlobePic.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#033231]/70"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 md:px-10 text-center pt-20">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
            Our Work,
            <br />
            Our Pride
          </h1>
          
          {/* Description */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 mb-10 md:text-xl">
            A showcase of our recent projects, creative solutions, and the digital experiences we've built for our clients.
          </p>
        </div>
      </div>
    </section>
  )
}
