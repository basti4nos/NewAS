'use client'

import { useEffect } from 'react'

export function AnimationFallback() {
  useEffect(() => {
    // Fallback to ensure animated elements become visible
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.animate-text-reveal-delayed, .animate-fade-in-up-delayed, .animate-fade-in-up-slow'
      )
      
      animatedElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          // Check if element is still invisible after animation should have completed
          const computedStyle = window.getComputedStyle(element)
          if (computedStyle.opacity === '0') {
            element.style.opacity = '1'
            element.style.transform = 'none'
            element.classList.add('animation-complete')
          }
        }
      })
    }, 2000) // Wait 2 seconds for animations to complete

    return () => clearTimeout(timer)
  }, [])

  return null
}
