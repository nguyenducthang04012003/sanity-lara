'use client'

import {AiOutlinePhone} from 'react-icons/ai'
import {FaCommentDots} from 'react-icons/fa'
import {CiFacebook} from 'react-icons/ci'
import '../../styles/ContactRight.css'

type Contact = {
  phone?: string
  facebook?: string | null
  zalo?: string | null
}

export default function ContactRight({contact}: {contact: Contact}) {
  return (
    <div className="contact-right">
      {/* PHONE */}
      <div className="iconcontact">
        <AiOutlinePhone />
        <span className="tooltip">SĐT: {contact?.phone}</span>
      </div>

      {/* ZALO */}
      {contact?.zalo && (
        <a href={contact.zalo} target="_blank">
          <div className="iconcontact">
            <FaCommentDots />
            <span className="tooltip">Zalo</span>
          </div>
        </a>
      )}

      {/* FACEBOOK */}
      {contact?.facebook && (
        <a href={contact.facebook} target="_blank">
          <div className="iconcontact">
            <CiFacebook />
            <span className="tooltip">Facebook</span>
          </div>
        </a>
      )}
    </div>
  )
}
