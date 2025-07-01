'use client'

import { useEffect, useRef } from 'react'

export default function TradingVideo() {
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
        
        for (let i = 0; i < 30; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1
          })
        }
        
        function animate() {
          if (!ctx || !canvas) return
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Create gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          gradient.addColorStop(0, 'rgba(26, 26, 46, 0.8)')
          gradient.addColorStop(1, 'rgba(22, 33, 62, 0.8)')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          
          // Draw particles
          particles.forEach(particle => {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(0, 245, 255, 0.4)'
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

  const handlePlayVideo = () => {
    alert('Video player would launch here. This is a demo interface.')
  }

  return (
    <section style={{
      padding: '6rem 0',
      background: 'rgba(0, 0, 0, 0.3)'
    }} id="demo">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem'
          }} className="gradient-text">
            See TradePro in Action
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            Discover how our platform transforms complex market data into actionable insights
          </p>
          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '3rem auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '450px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <canvas 
                ref={canvasRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
              <div
                onClick={handlePlayVideo}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(45deg, #00f5ff, #00d4ff)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '20px solid #0a0a0a',
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  marginLeft: '5px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
