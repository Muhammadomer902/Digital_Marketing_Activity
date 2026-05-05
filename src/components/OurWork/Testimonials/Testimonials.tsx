"use client"

import { useState, useEffect, useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "DuoFast completely transformed our digital presence. Their attention to detail and creative approach helped us double our user engagement in just three months.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Working with the DuoFast team was an absolute pleasure. They delivered a stunning platform that exceeded all our expectations, on time and within budget.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Founder, StyleSpace",
    content: "The level of professionalism and technical expertise is unmatched. They took our vision and turned it into a beautiful, highly functional reality.",
  }
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
    <section ref={sectionRef} className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#033231] mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#cbff54] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-md ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#cbff54] opacity-50" />
              <div className="mb-6">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
              <div>
                <h4 className="font-bold text-[#033231]">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
