'use client'

import { useEffect, useRef, useState } from 'react'

interface CountryData {
  name: string
  inflation: number
  x: number
  y: number
}

export default function InflationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const countries: CountryData[] = [
    { name: 'United States', inflation: 3.2, x: 200, y: 180 },
    { name: 'Germany', inflation: 2.8, x: 520, y: 150 },
    { name: 'Japan', inflation: 1.4, x: 680, y: 180 },
    { name: 'United Kingdom', inflation: 4.1, x: 480, y: 130 },
    { name: 'France', inflation: 3.5, x: 500, y: 160 },
    { name: 'Brazil', inflation: 5.8, x: 280, y: 280 },
    { name: 'India', inflation: 6.2, x: 600, y: 220 },
    { name: 'China', inflation: 2.1, x: 640, y: 200 },
    { name: 'Australia', inflation: 4.3, x: 720, y: 320 },
    { name: 'Canada', inflation: 3.8, x: 180, y: 120 }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const handleMouseMove = (e: MouseEvent) => {
          const rect = canvas.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          setMousePos({ x: e.clientX, y: e.clientY })

          // Check if mouse is over any country
          let foundCountry = null
          countries.forEach(country => {
            const distance = Math.sqrt(
              Math.pow(x - (country.x * canvas.width / 800), 2) + 
              Math.pow(y - (country.y * canvas.height / 400), 2)
            )
            if (distance < 20) {
              foundCountry = country
            }
          })
          setHoveredCountry(foundCountry)
        }

        canvas.addEventListener('mousemove', handleMouseMove)
        
        function animate() {
          if (!ctx || !canvas) return
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Create world map background with grid
          ctx.strokeStyle = 'rgba(0, 245, 255, 0.2)'
          ctx.lineWidth = 1
          
          // Draw grid lines
          for (let i = 0; i < canvas.width; i += 40) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, canvas.height)
            ctx.stroke()
          }
          
          for (let i = 0; i < canvas.height; i += 40) {
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(canvas.width, i)
            ctx.stroke()
          }

          // Draw continents outline (simplified)
          ctx.strokeStyle = 'rgba(0, 245, 255, 0.4)'
          ctx.lineWidth = 2
          ctx.fillStyle = 'rgba(0, 245, 255, 0.05)'
          
          // North America
          ctx.beginPath()
          ctx.ellipse(canvas.width * 0.25, canvas.height * 0.35, canvas.width * 0.15, canvas.height * 0.2, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          
          // Europe
          ctx.beginPath()
          ctx.ellipse(canvas.width * 0.62, canvas.height * 0.35, canvas.width * 0.08, canvas.height * 0.12, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          
          // Asia
          ctx.beginPath()
          ctx.ellipse(canvas.width * 0.75, canvas.height * 0.4, canvas.width * 0.12, canvas.height * 0.15, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          
          // South America
          ctx.beginPath()
          ctx.ellipse(canvas.width * 0.35, canvas.height * 0.7, canvas.width * 0.08, canvas.height * 0.18, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          
          // Australia
          ctx.beginPath()
          ctx.ellipse(canvas.width * 0.85, canvas.height * 0.8, canvas.width * 0.06, canvas.height * 0.08, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()

          // Draw country data points
          countries.forEach(country => {
            const x = (country.x / 800) * canvas.width
            const y = (country.y / 400) * canvas.height
            
            // Color based on inflation rate
            let color = '#00ff88' // Green for low inflation
            if (country.inflation > 4) color = '#ff4757' // Red for high inflation
            else if (country.inflation > 2) color = '#ffa502' // Orange for medium inflation
            
            // Draw pulsing circle
            const time = Date.now() * 0.005
            const pulse = Math.sin(time + country.inflation) * 0.3 + 1
            const radius = (8 + country.inflation * 2) * pulse
            
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = color + '40'
            ctx.fill()
            
            ctx.beginPath()
            ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2)
            ctx.fillStyle = color
            ctx.fill()
            
            // Draw country label
            ctx.fillStyle = '#ffffff'
            ctx.font = '12px Inter'
            ctx.textAlign = 'center'
            ctx.fillText(`${country.inflation}%`, x, y - radius - 10)
          })
          
          requestAnimationFrame(animate)
        }
        
        animate()

        return () => {
          canvas.removeEventListener('mousemove', handleMouseMove)
        }
      }
    }
  }, [])

  return (
    <section style={{
      padding: '6rem 0',
      background: 'rgba(0, 0, 0, 0.2)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem'
          }} className="gradient-text">
            Global Inflation Map
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            Real-time inflation data visualization across major economies
          </p>
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '20px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }}>
          <div style={{
            width: '100%',
            height: '500px',
            position: 'relative'
          }}>
            <canvas 
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                cursor: 'crosshair'
              }}
            />
            
            {hoveredCountry && (
              <div style={{
                position: 'fixed',
                left: mousePos.x + 10,
                top: mousePos.y - 60,
                background: 'rgba(0, 0, 0, 0.9)',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                fontSize: '0.9rem',
                pointerEvents: 'none',
                zIndex: 1000
              }}>
                <div style={{ fontWeight: 'bold' }}>{hoveredCountry.name}</div>
                <div>Inflation: {hoveredCountry.inflation}%</div>
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#00ff88'
              }} />
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Low (0-2%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ffa502'
              }} />
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Medium (2-4%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ff4757'
              }} />
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>High (4%+)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}