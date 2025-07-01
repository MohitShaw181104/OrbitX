'use client'

import { usePathname } from 'next/navigation'
import DashboardSidebar from '@/components/DashboardSidebar'
import ProfileAvatar from '@/components/ProfileAvatar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      <DashboardSidebar currentPath={pathname} />
      
      <div style={{
        flex: 1,
        marginLeft: '280px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Header */}
        <header style={{
          height: '80px',
          background: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffff',
              textTransform: 'capitalize'
            }}>
              {pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
            </h1>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0
            }}>
              Welcome back to your trading dashboard
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Quick Stats */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginRight: '1rem'
            }}>
              <div style={{
                background: 'rgba(0, 245, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 245, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  P&L Today
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#00ff88'
                }}>
                  +$1,234
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  Market Status
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#00ff88'
                }}>
                  OPEN
                </div>
              </div>
            </div>
            
            <ProfileAvatar />
          </div>
        </header>

        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: '2rem',
          overflow: 'auto'
        }}>
          {children}
        </main>
      </div>
    </div>
  )
}