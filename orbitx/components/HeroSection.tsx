'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        
        const particles: Array<{
          x: number
          y: number
          vx: number
          vy: number
          size: number
        }> = []
        
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
          })
        }
        
        function animate() {
          if (!ctx || !canvas) return
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Create gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          gradient.addColorStop(0, 'rgba(26, 26, 46, 0.1)')
          gradient.addColorStop(1, 'rgba(22, 33, 62, 0.3)')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          
          // Draw particles
          particles.forEach(particle => {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(0, 245, 255, 0.6)'
            ctx.fill()
            
            particle.x += particle.vx
            particle.y += particle.vy
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
          })
          
          requestAnimationFrame(animate)
        }
        
        animate()
      }
    }
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }} className="gradient-text">
              Trade Smarter, Not Harder
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6'
            }}>
              Experience the future of trading with AI-powered insights, real-time market data, 
              and institutional-grade tools designed for the modern trader.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <Link href="/login" className="btn-primary">
                Start Trading Now
              </Link>
              <Link href="#demo" className="btn-secondary">
                Watch Demo
              </Link>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '500px'
          }}>
            <canvas 
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}