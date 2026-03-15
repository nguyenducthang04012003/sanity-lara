'use client'

import {Layout, Menu, Drawer, Button} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const {Header} = Layout

type Category = {
  _id: string
  title: string
  slug: string
}

export default function Topbar({categories}: {categories: Category[]}) {  
  const pathname = usePathname()

  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const lastScroll = useRef(0)

  const items = [
    {key: '/', label: <Link href="/">Trang chủ</Link>},
    {key: '/introduce', label: <Link href="/introduce">Giới thiệu</Link>},

    {
      key: '/products',
      label: <Link href="/products">Sản phẩm</Link>,
      popupClassName: 'mega-menu',
      children: categories.map((c) => ({
        key: c.slug,
        label: <Link href={`/products/${c.slug}`}>{c.title}</Link>,
      })),
    },

    {key: '/news', label: <Link href="/news">Tin tức</Link>},
    {key: '/contact', label: <Link href="/contact">Liên hệ</Link>},
    {key: '/visualizer', label: <Link href="/visualizer">3D Visualizer</Link>},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      setScrolled(current > 20)

      if (current > lastScroll.current && current > 80) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScroll.current = current
    }

    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        zIndex: 1000,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/images/logo-removebg-preview.png"
          alt="logo"
          width={170}
          height={60}
          style={{objectFit: 'contain', cursor: 'pointer'}}
        />
      </Link>

      {/* DESKTOP MENU */}
      <Menu
        className="desktop-menu"
        mode="horizontal"
        triggerSubMenuAction="hover"
        selectedKeys={[pathname.startsWith('/products') ? '/products' : pathname]}
        items={items}
        style={{
          flex: 1,
          marginLeft: 40,
          fontSize: 18,
          borderBottom: 'none',
          background: 'transparent',
        }}
      />

      {/* MOBILE BUTTON */}
      <Button
        className="mobile-menu-btn"
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
        style={{
          fontSize: 26,
          marginLeft: 'auto',
        }}
      />

      {/* MOBILE DRAWER */}
      <Drawer placement="right" onClose={() => setOpen(false)} open={open} title="Menu">
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={items}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </Header>
  )
}
