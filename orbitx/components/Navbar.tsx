'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backdropFilter: 'blur(20px)',
      background: 'rgba(10, 10, 10, 0.8)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1000,
      padding: '1rem 0',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            textDecoration: 'none'
          }} className="gradient-text">
            OrbitX
          </Link>
          
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center'
          }}>
            <li>
              <Link href="/" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/market" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}>
                Market
              </Link>
            </li>
            <li>
              <Link href="/insights" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/login" className="btn-primary" style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem'
              }}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
