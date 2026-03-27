'use client'

import {useState} from 'react'
import Image from 'next/image'
import '../../styles/HomePage.css'
import '../../styles/introduce.css'

type Contact = {
  _id: string
  phone: string
  facebook?: string
  zalo?: string
  address?: string
  email?: string
  mapEmbed?: string
}

export default function ContactClient({contactsData}: {contactsData: Contact[]}) {
  const [loading, setLoading] = useState(false)

  const getMapSrc = (iframe: string) => {
    const match = iframe.match(/src="([^"]+)"/)
    return match ? match[1] : ''
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const message = formData.get('message') as string

    // ✅ Regex
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    const phoneRegex = /^[0-9]{10}$/

    // ✅ Validate
    if (!name || !phone) {
      alert('Vui lòng nhập đầy đủ thông tin bắt buộc!')
      return
    }

    if (email && !gmailRegex.test(email)) {
      alert('Email phải là Gmail hợp lệ (ví dụ: abc@gmail.com)')
      return
    }

    if (!phoneRegex.test(phone)) {
      alert('Số điện thoại phải đủ 10 chữ số!')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, phone, address, message}),
      })

      if (!res.ok) throw new Error('API error')

      const result = await res.json()

      if (result.success) {
        alert('Gửi thành công!')
        form.reset()
      } else {
        alert('Gửi thất bại!')
      }
    } catch (err) {
      console.error(err)
      alert('Lỗi kết nối!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home-page">
      {/* HERO */}
      <div className="hero">
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
          <Image src="/images/contactKH.jpg" alt="bgr" fill style={{objectFit: 'cover'}} />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
            }}
          />
        </div>

        <div className="content">
          <h1>Liên hệ với chúng tôi</h1>
          <p style={{fontSize: 21}}>Kết nối ngay - Nhận giải pháp hay</p>
        </div>
      </div>

      {/* CONTACT LIST */}
      {contactsData.map((contact, index) => (
        <div className="introduce" key={contact._id}>
          <h1 className="title">
            {contactsData.length > 1 ? `Cơ sở ${index + 1}` : 'Địa chỉ của chúng tôi'}
          </h1>

          {/* MAP */}
          {contact.mapEmbed && (
            <iframe
              src={getMapSrc(contact.mapEmbed)}
              width="100%"
              height="450"
              style={{border: 0, marginBottom: 20}}
              loading="lazy"
            />
          )}

          {/* INFO */}
          <p style={{fontSize: 16}}>
            <b>Địa chỉ:</b> {contact.address}
          </p>

          <p style={{fontSize: 16}}>
            <b>Số điện thoại:</b> {contact.phone}
          </p>
        </div>
      ))}

      <div className="introduce">
        <h1 className="title">Kết nối với chúng tôi</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input name="name" type="text" placeholder="Họ và tên (*)" />
            <input name="email" type="email" placeholder="Email" />
          </div>

          <div className="form-row">
            <input name="phone" type="text" placeholder="Số điện thoại (*)" />
            <input name="address" type="text" placeholder="Địa chỉ" />
          </div>

          <div className="form-row full">
            <textarea name="message" placeholder="Nội dung" rows={5}></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Đang gửi...' : 'Gửi liên hệ'}
          </button>
        </form>
      </div>
    </div>
  )
}
