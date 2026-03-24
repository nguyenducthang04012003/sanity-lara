'use client'

import {Layout} from 'antd'
import Topbar from './Topbar'
import ContactSection from './ContactSection'
import {usePathname} from 'next/navigation'
import ContactRight from './ContactRight'

const {Content} = Layout

type Category = {
  _id: string
  title: string
  slug: string
}

type Contact = {
  _id: string
  phone?: string
  facebook?: string | null
  zalo?: string | null
  address?: string
  email?: string
  mapEmbed?: string
}

export default function MainLayout({
  children,
  categories,
  contactInfo,
}: {
  children: React.ReactNode
  categories: Category[]
  contactInfo: Contact[]
}) {
  const pathname = usePathname()

  const isStudio = pathname === '/studio' || pathname.startsWith('/studio/')

  const isHideContact =
    pathname === '/studio' ||
    pathname.startsWith('/studio/') ||
    pathname === '/visualizer' ||
    pathname.startsWith('/visualizer/')

  return (
    <Layout style={{minHeight: '100vh'}}>
      {!isStudio && <Topbar categories={categories} />}

      <Content style={{minHeight: '100vh'}}>
        {children}
        {!isHideContact && <ContactSection contact={contactInfo?.[0]} />}
        {!isHideContact && <ContactRight contact={contactInfo?.[0]} />}
      </Content>
    </Layout>
  )
}
