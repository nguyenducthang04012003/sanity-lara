'use client'

import Image from 'next/image'
import '../../styles/HomePage.css'
import '../../styles/introduce.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <Image
          src="/images/bgr-introduce.jpg"
          alt="Livas"
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{objectFit: 'cover'}}
        />
        <div className="content">
          <h1>Sứ mệnh LARA ACRYLIC</h1>
          <p style={{fontSize: 21}}>
            Mang đến vật liệu bền đẹp, hiện đại, nâng tầm không gian và giá trị sử dụng
          </p>
        </div>
      </div>

      <div className="about-luxury">
        <div className="about-container">
          {/* LEFT TEXT */}
          <div className="about-text">
            <h2 className="about-heading">Lời giới thiệu</h2>

            <p>
              <span className="dropcap">C</span>
              ông ty TNHH SX và KD TM Hòa Thịnh (Thương hiệu LARA) là một trong những đơn vị sản
              xuất, phân phối và thi công vật liệu Acrylic chất lượng cao tại thị trường Việt Nam.
            </p>

            <p>
              Sở hữu đội ngũ chuyên gia, kỹ sư giàu kinh nghiệm cùng dây chuyền sản xuất hiện đại
              đạt tiêu chuẩn Châu Âu, LARA cam kết mang đến những sản phẩm hoàn thiện tốt nhất cho
              không gian nội thất.
            </p>

            <div className="tech-box">
              <p className="tech-title">Công nghệ nổi bật</p>
              <ul>
                <li>Chống cong vênh</li>
                <li>Dán cạnh không đường line</li>
                <li>Xử lý vát cạnh tiêu chuẩn cao</li>
                <li>Chống trầy xước hiện đại</li>
              </ul>
            </div>

            <p>
              Với chiến lược phát triển bền vững, LARA hướng tới trở thành thương hiệu hàng đầu
              trong lĩnh vực nội thất Acrylic tại Việt Nam.
            </p>

            <p className="signature">
              Rất hân hạnh được hợp tác cùng Quý Khách Hàng và Đối Tác.
              <br />
              <strong>LARA ACRYLIC</strong>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <Image
              src="/images/introduce.webp"
              alt="Kitchen"
              fill
              sizes="50vw"
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
