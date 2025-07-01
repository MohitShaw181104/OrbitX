'use client'

import { useEffect, useRef } from 'react'

export default function InsightsPage() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      // Chart.js would be imported here
      // For now, we'll create a simple canvas visualization
      const canvas = chartRef.current
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        
        // Simple line chart simulation
        ctx.strokeStyle = '#00f5ff'
        ctx.lineWidth = 3
        ctx.beginPath()
        
        const data = [20, 45, 28, 80, 99, 43, 67, 85, 92, 76, 88, 95]
        const width = canvas.width
        const height = canvas.height
        
        data.forEach((value, index) => {
          const x = (index / (data.length - 1)) * width
          const y = height - (value / 100) * height
          
          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })
        
        ctx.stroke()
      }
    }
  }, [])

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ padding: '4rem 0' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            marginBottom: '2rem',
            textAlign: 'center'
          }} className="gradient-text">
            Market Insights
          </h1>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ color: '#00f5ff', marginBottom: '1rem' }}>Daily Analysis</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                Markets showing strong bullish momentum with tech stocks leading the rally. 
                Expected volatility remains low with continued institutional support.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ color: '#00f5ff', marginBottom: '1rem' }}>Risk Assessment</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                Current market risk level: MODERATE. Diversification recommended 
                across sectors with focus on defensive positions.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ color: '#00f5ff', marginBottom: '1rem' }}>AI Predictions</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                Machine learning models predict 12% probability of market correction 
                within next 30 days. Long-term outlook remains positive.
              </p>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ 
              color: '#00f5ff', 
              marginBottom: '2rem',
              fontSize: '1.5rem'
            }}>
              Performance Trends
            </h3>
            <canvas 
              ref={chartRef}
              style={{ 
                width: '100%', 
                height: '300px',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}