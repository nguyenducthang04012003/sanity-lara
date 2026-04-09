'use client'

import Image from 'next/image'
import '../../styles/HomePage.css'
import '../../styles/introduce.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <Image
          src="/images/introduce2.jpeg"
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
              ông ty TNHH SX và KD TM Kim Anh (Thương hiệu LARA) là một trong những đơn vị sản xuất,
              phân phối và thi công vật liệu Acrylic chất lượng cao tại thị trường Việt Nam.
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

      <div className="introduce">
        <h1 className="title">Giá trị cốt lõi</h1>
        <div className="core-values">
          <div className="core-item">
            <Image
              src="/images/cotloi.png"
              alt="Core Values"
              width={300}
              height={200}
              style={{width: 160, marginBottom: 140}}
            />
            <p className="firstP">0.1 Tầm nhìn</p>
            <p className="lastP">
              Trở thành đơn vị tiên phong trong sản xuất, phân phối và thi công vật liệu Acrylic cao
              cấp tại Việt Nam, dẫn dắt xu hướng vật liệu hiện đại và là lựa chọn hàng đầu của khách
              hàng, đối tác.
            </p>
          </div>

          <div className="core-item">
            <Image
              src="/images/cotloi2.png"
              alt="Core Values"
              width={300}
              height={200}
              style={{width: 160, marginBottom: 140}}
            />
            <p className="firstP">0.2 Sứ mệnh</p>
            <p className="lastP">
              Cung cấp giải pháp Acrylic toàn diện từ sản xuất đến thi công, giúp tối ưu chi phí,
              nâng cao giá trị công trình và tạo nên không gian bền vững, thẩm mỹ cao.
            </p>
          </div>

          <div className="core-item">
            <Image
              src="/images/cotloi3.png"
              alt="Core Values"
              width={300}
              height={200}
              style={{width: 160, marginBottom: 140}}
            />
            <p className="firstP">0.3 Giá trị cốt lõi</p>
            <p className="lastP">
              - Chất lượng: Chuẩn cao, bền vững <br />
              - Đổi mới: Công nghệ hiện đại <br />
              - Uy tín: Minh bạch, đúng cam kết <br />
              - Khách hàng: Khách hàng làm trung tâm <br />- Chuyên nghiệp: Chính xác
            </p>
          </div>
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Cam kết với khách hàng</h1>

        <p className="commit-desc">
          Chúng tôi không chỉ cung cấp sản phẩm/dịch vụ – chúng tôi mang đến giải pháp tối ưu và
          trải nghiệm đẳng cấp. Với tinh thần đổi mới không ngừng, mọi cam kết đều được thực hiện
          bằng hành động cụ thể:
        </p>

        <div className="commitment">
          <div className="commititem">
            <p className="commit-number">01</p>
            <div className="commit-content">
              <p className="commit-title">Chất lượng dẫn đầu – Khẳng định uy tín</p>
              <p className="commit-text">
                Mỗi sản phẩm là kết tinh của công nghệ tiên tiến và quy trình kiểm định nghiêm ngặt,
                giúp bạn hoàn toàn yên tâm về hiệu quả và độ bền vượt trội.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">02</p>
            <div className="commit-content">
              <p className="commit-title">Tư vấn chuẩn xác – Giải pháp tối ưu</p>
              <p className="commit-text">
                Không chỉ lắng nghe, chúng tôi phân tích chuyên sâu để đưa ra những giải pháp “đúng
                – trúng – hiệu quả”, giúp bạn tiết kiệm thời gian và chi phí tối đa.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">03</p>
            <div className="commit-content">
              <p className="commit-title">Tiến độ thần tốc – Đúng hẹn tuyệt đối</p>
              <p className="commit-text">
                Cam kết triển khai nhanh chóng, giao hàng đúng kế hoạch, đảm bảo không làm gián đoạn
                hoạt động và cơ hội kinh doanh của bạn.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">04</p>
            <div className="commit-content">
              <p className="commit-title">Minh bạch rõ ràng – Đồng hành dài lâu</p>
              <p className="commit-text">
                Mọi chính sách đều rõ ràng, công khai. Chúng tôi đặt lợi ích khách hàng làm trung
                tâm và xây dựng mối quan hệ bền vững, lâu dài.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
