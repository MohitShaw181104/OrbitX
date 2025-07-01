import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(0, 0, 0, 0.8)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              marginBottom: '1rem'
            }} className="gradient-text">
              TradePro
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Empowering traders worldwide with cutting-edge technology, 
              real-time insights, and institutional-grade tools.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(0, 245, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}>
                <span style={{ color: '#00f5ff', fontSize: '1.2rem' }}>𝕏</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(0, 245, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}>
                <span style={{ color: '#00f5ff', fontSize: '1.2rem' }}>in</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(0, 245, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}>
                <span style={{ color: '#00f5ff', fontSize: '1.2rem' }}>📧</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Platform
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <li>
                <Link href="/market" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Live Markets
                </Link>
              </li>
              <li>
                <Link href="/insights" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Trading Tools
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Portfolio Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Resources
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Trading Academy
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Market Research
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Economic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Support
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  System Status
                </Link>
              </li>
              <li>
                <Link href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem'
          }}>
            © 2025 TradePro. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <Link href="#" style={{
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>
              Privacy Policy
            </Link>
            <Link href="#" style={{
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>
              Terms of Service
            </Link>
            <Link href="#" style={{
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>
              Risk Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}