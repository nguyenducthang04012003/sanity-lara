import MainLayout from './components/MainLayout'
import './globals.css'
import {getCategories} from '@/sanity/lib/api'

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const categories = await getCategories()

  return (
    <html lang="vi">
      <body>
        <MainLayout categories={categories}>{children}</MainLayout>
      </body>
    </html>
  )
}
