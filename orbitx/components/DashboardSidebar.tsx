'use client'

import Link from 'next/link'
import { useState } from 'react'

interface SidebarProps {
  currentPath?: string
}

export default function DashboardSidebar({ currentPath = '/' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: '📊',
      description: 'Overview & Analytics'
    },
    { 
      name: 'Portfolio', 
      path: '/dashboard/portfolio', 
      icon: '💼',
      description: 'Your Holdings'
    },
    { 
      name: 'Trading', 
      path: '/dashboard/trading', 
      icon: '📈',
      description: 'Buy & Sell'
    },
    { 
      name: 'Watchlist', 
      path: '/dashboard/watchlist', 
      icon: '👁️',
      description: 'Track Symbols'
    },
    { 
      name: 'History', 
      path: '/dashboard/history', 
      icon: '📋',
      description: 'Trade History'
    },
    { 
      name: 'Analysis', 
      path: '/dashboard/analysis', 
      icon: '🔍',
      description: 'Market Analysis'
    },
    { 
      name: 'News', 
      path: '/dashboard/news', 
      icon: '📰',
      description: 'Market News'
    },
    { 
      name: 'Settings', 
      path: '/dashboard/settings', 
      icon: '⚙️',
      description: 'Preferences'
    }
  ]

  return (
    <div style={{
      width: isCollapsed ? '80px' : '280px',
      height: '100vh',
      background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%)',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'fixed',
      left: 0,
      top: 0,
      transition: 'width 0.3s ease',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(20px)'
    }}>
      {/* Header */}
      <div style={{
        padding: '1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {!isCollapsed && (
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            textDecoration: 'none'
          }} className="gradient-text">
            TradePro
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'rgba(0, 245, 255, 0.1)',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            borderRadius: '8px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#00f5ff'
          }}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation */}
      <nav style={{
        flex: 1,
        padding: '1rem 0',
        overflowY: 'auto'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {menuItems.map((item) => {
            const isActive = currentPath === item.path
            
            return (
              <li key={item.path} style={{ margin: '0.5rem 0' }}>
                <Link href={item.path} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: isCollapsed ? '1rem' : '1rem 1.5rem',
                  textDecoration: 'none',
                  color: isActive ? '#00f5ff' : 'rgba(255, 255, 255, 0.8)',
                  background: isActive ? 'rgba(0, 245, 255, 0.1)' : 'transparent',
                  borderRight: isActive ? '3px solid #00f5ff' : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    minWidth: '24px',
                    textAlign: 'center'
                  }}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <div style={{ marginLeft: '1rem' }}>
                      <div style={{
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        {item.name}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        marginTop: '2px'
                      }}>
                        {item.description}
                      </div>
                    </div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem',
          background: 'rgba(0, 245, 255, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(0, 245, 255, 0.2)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00f5ff, #00d4ff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#0a0a0a'
          }}>
            U
          </div>
          {!isCollapsed && (
            <div style={{ marginLeft: '1rem', flex: 1 }}>
              <div style={{
                fontWeight: '600',
                fontSize: '0.9rem',
                color: '#ffffff'
              }}>
                John Trader
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Pro Account
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Balance Card */}
      {!isCollapsed && (
        <div style={{
          margin: '1rem',
          padding: '1rem',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '0.5rem'
          }}>
            Account Balance
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            color: '#00ff88',
            marginBottom: '0.5rem'
          }}>
            $24,567.89
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: '#00ff88'
          }}>
            +2.34% today
          </div>
        </div>
      )}
    </div>
  )
}