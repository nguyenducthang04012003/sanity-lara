import MainLayout from './components/MainLayout'
import './globals.css'
import {getCategories, getContactInfo} from '@/sanity/lib/api'

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const categories = await getCategories()
  const contactInfo = await getContactInfo()

  return (
    <html lang="vi">
      <body>
        <MainLayout categories={categories} contactInfo={contactInfo}>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
