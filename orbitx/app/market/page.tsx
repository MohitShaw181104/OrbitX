'use client'

import { useState, useEffect } from 'react'

interface MarketData {
  symbol: string
  price: number
  change: number
  changePercent: number
  volume: string
}

export default function MarketPage() {
  const [marketData, setMarketData] = useState<MarketData[]>([])

  useEffect(() => {
    // Simulate market data
    const data: MarketData[] = [
      { symbol: 'AAPL', price: 175.43, change: 2.34, changePercent: 1.35, volume: '45.2M' },
      { symbol: 'GOOGL', price: 2847.63, change: -15.22, changePercent: -0.53, volume: '23.1M' },
      { symbol: 'MSFT', price: 338.52, change: 4.71, changePercent: 1.41, volume: '32.4M' },
      { symbol: 'TSLA', price: 248.91, change: -8.43, changePercent: -3.28, volume: '87.6M' },
      { symbol: 'AMZN', price: 143.75, change: 1.82, changePercent: 1.28, volume: '29.8M' },
    ]
    setMarketData(data)
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
            Live Market Data
          </h1>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {marketData.map((stock) => (
                <div key={stock.symbol} style={{
                  background: 'rgba(0, 245, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                      {stock.symbol}
                    </h3>
                    <span style={{
                      color: stock.change >= 0 ? '#00ff88' : '#ff4757',
                      fontWeight: '600'
                    }}>
                      {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </span>
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                    ${stock.price.toFixed(2)}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    <span>
                      {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}
                    </span>
                    <span>Vol: {stock.volume}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
