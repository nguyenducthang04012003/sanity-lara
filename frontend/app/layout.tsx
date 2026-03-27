import MainLayout from './components/MainLayout'
import './globals.css'
import {getCategories, getContactInfo} from '@/sanity/lib/api'

export const metadata = {
  title: 'LARA Acrylic - Vật liệu nội thất cao cấp',
  description:
    'Chuyên cung cấp tấm Acrylic cao cấp, đa dạng màu sắc, phù hợp thiết kế nội thất hiện đại.',
  keywords: ['acrylic', 'nội thất', 'tấm nhựa acrylic', 'lara acrylic'],
  openGraph: {
    title: 'LARA Acrylic',
    description: 'Vật liệu nội thất cao cấp',
    url: 'https://laraacrylic.com',
    siteName: 'LARA Acrylic',
    images: [
      {
        url: '/images/lara.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
}

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
