'use client'

import {Layout} from 'antd'
import Topbar from './Topbar'
import ContactSection from './ContactSection'
import {usePathname} from 'next/navigation'

const {Content} = Layout

export default function MainLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname()

  const isStudio = pathname === '/studio' || pathname.startsWith('/studio/')

  return (
    <Layout style={{minHeight: '100vh'}}>
      {!isStudio && <Topbar />}

      <Content style={{minHeight: '100vh'}}>
        {children}
        {!isStudio && <ContactSection />}
      </Content>
    </Layout>
  )
}
