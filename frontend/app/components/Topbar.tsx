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
        justifyContent: 'space-between', // logo trái, menu/button phải
        padding: '0 20px',
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
        onClick={() => setOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          fontSize: 26,
          height: '100%',
        }}
        icon={<MenuOutlined style={{fontSize: 26, display: 'block'}} />}
      />

      {/* MOBILE DRAWER */}
      <Drawer placement="right" onClose={() => setOpen(false)} open={open} title="Menu">
        <Menu
          mode="inline" // inline để sub menu rớt xuống dọc
          selectedKeys={[pathname]}
          items={items.map((item) => ({
            ...item,
            children: item.children || undefined, // giữ sub menu nếu có
          }))}
          onClick={() => setOpen(false)}
        />
      </Drawer>

      <style jsx global>{`
        /* desktop menu hover + active */
        .ant-menu-horizontal .ant-menu-item,
        .ant-menu-horizontal .ant-menu-submenu-title {
          color: #222;
          transition: all 0.25s ease;
        }
        .ant-menu-horizontal .ant-menu-item:hover,
        .ant-menu-horizontal .ant-menu-submenu-title:hover {
          color: #fbd596 !important;
          font-weight: bold;
          transform: scale(1.05);
        }
        .ant-menu-horizontal .ant-menu-item-selected,
        .ant-menu-horizontal .ant-menu-submenu-selected > .ant-menu-submenu-title {
          color: #fbd596 !important;
        }

        .desktop-menu .ant-menu-item a,
        .desktop-menu .ant-menu-submenu-title a {
          color: inherit !important;
        }

        /* desktop mặc định */
        .desktop-menu {
          display: flex;
          justify-content: flex-end;
        }

        /* mobile */
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          .mobile-menu-btn:hover {
            color: #fbd596 !important;
            font-weight: bold;
            transform: scale(1.15);
          }

          /* dấu mũi tên cho submenu mobile */
          .ant-menu-inline .ant-menu-submenu-title::after {
            right: 10px;
            transform: rotate(0deg);
            transition: transform 0.3s;
          }
          .ant-menu-inline .ant-menu-submenu-open .ant-menu-submenu-title::after {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </Header>
  )
}
