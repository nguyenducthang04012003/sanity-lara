'use client'

import {Layout} from 'antd'
import Topbar from './Topbar'
import ContactSection from './ContactSection'
import {usePathname} from 'next/navigation'

const {Content} = Layout

type Category = {
  _id: string
  title: string
  slug: string
}

export default function MainLayout({
  children,
  categories,
}: {
  children: React.ReactNode
  categories: Category[]
}) {
  const pathname = usePathname()

  const isStudio = pathname === '/studio' || pathname.startsWith('/studio/')

  return (
    <Layout style={{minHeight: '100vh'}}>
      {!isStudio && <Topbar categories={categories} />}

      <Content style={{minHeight: '100vh'}}>
        {children}
        {!isStudio && <ContactSection />}
      </Content>
    </Layout>
  )
}
