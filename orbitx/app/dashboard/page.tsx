'use client'

import { useState, useEffect, useRef } from 'react'

interface ChartData {
  time: string
  value: number
}

export default function DashboardPage() {
  const [portfolioData, setPortfolioData] = useState<ChartData[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Generate sample portfolio data
    const data: ChartData[] = []
    const now = Date.now()
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000)
      data.push({
        time: date.toLocaleDateString(),
        value: 24000 + Math.random() * 2000 + i * 20
      })
    }
    setPortfolioData(data)
  }, [])

  useEffect(() => {
    if (canvasRef.current && portfolioData.length > 0) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, 'rgba(0, 245, 255, 0.2)')
        gradient.addColorStop(1, 'rgba(0, 245, 255, 0.02)')
        
        // Draw the area under the curve
        ctx.beginPath()
        portfolioData.forEach((point, index) => {
          const x = (index / (portfolioData.length - 1)) * canvas.width
          const y = canvas.height - ((point.value - 24000) / 2000) * canvas.height
          
          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Draw the line
        ctx.beginPath()
        ctx.strokeStyle = '#00f5ff'
        ctx.lineWidth = 3
        portfolioData.forEach((point, index) => {
          const x = (index / (portfolioData.length - 1)) * canvas.width
          const y = canvas.height - ((point.value - 24000) / 2000) * canvas.height
          
          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })
        ctx.stroke()
      }
    }
  }, [portfolioData])

  const topGainers = [
    { symbol: 'AAPL', change: 2.34, percent: 1.35 },
    { symbol: 'MSFT', change: 4.71, percent: 1.41 },
    { symbol: 'GOOGL', change: 12.45, percent: 0.89 }
  ]

  const recentTrades = [
    { symbol: 'TSLA', type: 'BUY', shares: 50, price: 248.91, time: '2 min ago' },
    { symbol: 'NVDA', type: 'SELL', shares: 25, price: 456.78, time: '1 hour ago' },
    { symbol: 'AMD', type: 'BUY', shares: 100, price: 123.45, time: '3 hours ago' }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Overview Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              Portfolio Value
            </h3>
            <span style={{ fontSize: '1.5rem' }}>💼</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
            $24,567.89
          </div>
          <div style={{ color: '#00ff88', fontSize: '0.9rem' }}>
            +$1,234.56 (+5.29%) today
          </div>
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              Buying Power
            </h3>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
            $12,450.00
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
            Available for trading
          </div>
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              Total Positions
            </h3>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
            15
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
            Across 8 sectors
          </div>
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              Day's P&L
            </h3>
            <span style={{ fontSize: '1.5rem' }}>📈</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#00ff88', marginBottom: '0.5rem' }}>
            +$892.34
          </div>
          <div style={{ color: '#00ff88', fontSize: '0.9rem' }}>
            +3.77% unrealized
          </div>
        </div>
      </div>

      {/* Portfolio Chart */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '16px',
        padding: '1.5rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          color: '#00f5ff',
          marginBottom: '1.5rem',
          fontSize: '1.2rem',
          fontWeight: '700'
        }}>
          Portfolio Performance (30 Days)
        </h3>
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '300px',
            borderRadius: '8px'
          }}
        />
      </div>

      {/* Bottom Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>
        {/* Top Gainers */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            color: '#00f5ff',
            marginBottom: '1.5rem',
            fontSize: '1.2rem',
            fontWeight: '700'
          }}>
            Top Gainers Today
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topGainers.map((stock, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(0, 245, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 245, 255, 0.2)'
              }}>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>
                  {stock.symbol}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#00ff88', fontWeight: '600' }}>
                    +${stock.change.toFixed(2)}
                  </div>
                  <div style={{ color: '#00ff88', fontSize: '0.8rem' }}>
                    +{stock.percent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Trades */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            color: '#00f5ff',
            marginBottom: '1.5rem',
            fontSize: '1.2rem',
            fontWeight: '700'
          }}>
            Recent Trades
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentTrades.map((trade, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: '#ffffff' }}>
                    {trade.symbol}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {trade.time}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    color: trade.type === 'BUY' ? '#00ff88' : '#ff4757',
                    fontWeight: '600'
                  }}>
                    {trade.type} {trade.shares}
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.8rem' }}>
                    @${trade.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}