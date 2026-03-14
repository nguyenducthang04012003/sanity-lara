// import "./globals.css";
import MainLayout from './components/MainLayout'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
