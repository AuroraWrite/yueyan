import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: '悦颜美容院',
  description: '悦颜美容院',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            width: '100%',
            background: '#fff8f3',
            borderBottom: '1px solid #eee',
            marginBottom: 32,
            boxShadow: '0 2px 8px 0 rgba(180,138,120,0.04)',
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              height: 64,
              gap: 32,
              fontFamily: 'var(--font-geist-sans, Arial, sans-serif)',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            <Link
              href="/"
              style={{
                color: '#b48a78',
                textDecoration: 'none',
                padding: '0 8px',
              }}
            >
              首页
            </Link>
            <Link
              href="/about"
              style={{
                color: '#b48a78',
                textDecoration: 'none',
                padding: '0 8px',
              }}
            >
              关于我们
            </Link>
            <Link
              href="/services"
              style={{
                color: '#b48a78',
                textDecoration: 'none',
                padding: '0 8px',
              }}
            >
              服务项目
            </Link>
            <Link
              href="/courses"
              style={{
                color: '#b48a78',
                textDecoration: 'none',
                padding: '0 8px',
              }}
            >
              专属定制课程
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
