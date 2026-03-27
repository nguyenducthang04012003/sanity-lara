'use client'
import Image from 'next/image'
import '../../styles/ContactSection.css'

type Contact = {
  phone?: string
  facebook?: string | null
  zalo?: string | null
  address?: string
  email?: string
}

export default function ContactSection({contact}: {contact: Contact[]}) {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Liên hệ với chúng tôi</h1>

        <p className="contact-desc">
          Hãy liên hệ với LARA để được tư vấn về các dòng vật liệu nội thất cao cấp phù hợp với
          không gian của bạn.
        </p>

        <div className="contact-info">
          {contact?.map((item, index) => (
            <div key={index} className="contact-block">
              <h3>{contact.length > 1 ? `Cơ sở ${index + 1}` : 'Địa chỉ'}</h3>

              {item?.address && <p>{item.address}</p>}

              <h3>Phương thức liên hệ</h3>
              {item?.phone && <p>{item.phone}</p>}
              {item?.email && <p>{item.email}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Logo watermark */}
      <Image
        src="/images/backkgroundbottom.png"
        alt="LARA logo"
        width={1200}
        height={100}
        className="contact-logo"
      />
    </div>
  )
}
