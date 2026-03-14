"use client";
import Image from "next/image";
import "../../styles/ContactSection.css";

export default function ContactInfo() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Liên hệ với chúng tôi</h1>

        <p className="contact-desc">
          Hãy liên hệ với LARA để được tư vấn về các dòng vật liệu nội thất cao
          cấp phù hợp với không gian của bạn.
        </p>

        <div className="contact-info">
          <div className="contact-block">
            <h3>Địa chỉ</h3>
            <p>
              P501, CT3-2 KĐT Mễ Trì Hạ, P. Mễ Trì,
              <br />
              Q. Nam Từ Liêm, Tp. Hà Nội
            </p>
          </div>

          <div className="contact-block">
            <h3>Phương thức liên hệ</h3>
            <p>0123 456 789</p>
            <p>contact@lara.vn</p>
          </div>
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
  );
}
