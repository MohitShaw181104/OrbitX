'use client'

import { useState } from 'react'

interface ProfileAvatarProps {
  name?: string
  email?: string
  balance?: number
  size?: 'sm' | 'md' | 'lg'
  showDropdown?: boolean
}

export default function ProfileAvatar({ 
  name = "John Trader", 
  email = "john@tradepro.com",
  balance = 24567.89,
  size = 'md',
  showDropdown = true 
}: ProfileAvatarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const sizeConfig = {
    sm: { avatar: 32, text: '0.8rem' },
    md: { avatar: 40, text: '0.9rem' },
    lg: { avatar: 48, text: '1rem' }
  }

  const config = sizeConfig[size]
  const initials = name.split(' ').map(n => n[0]).join('')

  const dropdownItems = [
    { label: 'Profile Settings', icon: '👤', action: () => console.log('Profile') },
    { label: 'Account Balance', icon: '💰', action: () => console.log('Balance') },
    { label: 'Trading History', icon: '📊', action: () => console.log('History') },
    { label: 'Security', icon: '🔒', action: () => console.log('Security') },
    { label: 'Help & Support', icon: '❓', action: () => console.log('Help') },
    { label: 'Sign Out', icon: '🚪', action: () => console.log('Logout') },
  ]

  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => showDropdown && setIsDropdownOpen(!isDropdownOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem',
          borderRadius: '12px',
          background: 'rgba(0, 245, 255, 0.1)',
          border: '1px solid rgba(0, 245, 255, 0.2)',
          cursor: showDropdown ? 'pointer' : 'default',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{
          width: `${config.avatar}px`,
          height: `${config.avatar}px`,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #00f5ff, #00d4ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: config.text,
          fontWeight: 'bold',
          color: '#0a0a0a'
        }}>
          {initials}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: '600',
            fontSize: config.text,
            color: '#ffffff'
          }}>
            {name}
          </div>
          <div style={{
            fontSize: `calc(${config.text} - 0.1rem)`,
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            ${balance.toLocaleString()}
          </div>
        </div>
        {showDropdown && (
          <div style={{
            color: '#00f5ff',
            fontSize: '0.8rem',
            transition: 'transform 0.3s ease',
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            ▼
          </div>
        )}
      </div>

      {showDropdown && isDropdownOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '0.5rem',
          minWidth: '220px',
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '0.5rem',
          zIndex: 1000,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}>
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                background: 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 245, 255, 0.1)'
                e.currentTarget.style.color = '#00f5ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isDropdownOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  )
}