'use client'

import Image from 'next/image'
import '../../styles/HomePage.css'
import '../../styles/introduce.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <Image src="/images/bgr-introduce.jpg" alt="bgr" width={300} height={200} />
        <div className="content">
          <h1>Sứ mệnh Acrylic</h1>
          <p style={{fontSize: 21}}>
            Mang đến vật liệu bền đẹp, hiện đại, nâng tầm không gian và giá trị sử dụng
          </p>
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Giới thiệu về Lara</h1>
        <p style={{fontSize: 18, marginBottom: 0}}>
          Công ty là doanh nghiệp hoạt động trong lĩnh vực gia công cánh Acrylic no line với mục
          tiêu mang đến cho khách hàng những công trình như ý, những không gian sống lý tưởng. Trong
          hơn 7 năm hoạt động, công ty đã được tin tưởng và thực hiền nhiều dự án với các đối tác
          lớn nhỏ như XHome, V6 Design, Halam Furniture,…
        </p>

        <Image
          src="/images/kitchen.png"
          alt="Kitchen"
          width={300}
          height={200}
          style={{width: '100%'}}
        />
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
              Liên tục nỗ lực không ngừng nghỉ, Công ty hướng tới tầm nhìn trở thành doanh nghiệp
              sản xuất và gia công cánh Acrylic hàng đầu Việt Nam và khu vực.
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
              Chúng tôi mang trên mình sứ mệnh định hướng và phát triển dòng sản phẩm Acrylic, đưa
              những sản phẩm cao cấp, bền đẹp, giá thành hợp lý tới người tiêu dùng..
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
              Công ty hoạt động với hệ thống giá trị cốt lõi xuyên suốt gồm: sự hài lòng, đoàn kết,
              sáng tạo, chuyên nghiệp, luôn giữ chữ tín và không ngừng học hỏi.
            </p>
          </div>
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Cam kết với khách hàng</h1>

        <p className="commit-desc">
          Chúng tôi luôn không ngừng cải tiến kĩ thuật và nâng cao dịch vụ để có thể đem tới khách
          hàng chất lượng phục vụ tốt nhất. Bởi vậy, chúng tôi luôn cam kết với khách hàng:
        </p>

        <div className="commitment">
          <div className="commititem">
            <p className="commit-number">01</p>
            <div className="commit-content">
              <p className="commit-title">Chất lượng sản phẩm đảm bảo</p>
              <p className="commit-text">
                Áp dụng những công nghệ tiên tiến, sản phẩm của Lara luôn đảm bảo chất lượng
                hàng đầu, được đánh giá cao bởi các chuyên gia.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">02</p>
            <div className="commit-content">
              <p className="commit-title">Dịch vụ tư vấn chuyên nghiệp</p>
              <p className="commit-text">
                Lara thấu hiểu vấn đề của khách hàng. Chúng tôi có những chuyên gia tư vấn có
                kinh nghiệm lâu năm trong lĩnh vực.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">03</p>
            <div className="commit-content">
              <p className="commit-title">Cam kết giao hàng đúng tiến độ</p>
              <p className="commit-text">
                Lara cam kết giao hàng đúng tiến độ với các thiết bị hỗ trợ tiên tiến và đội
                ngũ hỗ trợ chuyên nghiệp.
              </p>
            </div>
          </div>

          <div className="commititem">
            <p className="commit-number">04</p>
            <div className="commit-content">
              <p className="commit-title">Cam kết về chính sách kinh doanh</p>
              <p className="commit-text">
                Cam kết toàn thể cán bộ nhân viên Lara luôn tâm niệm và đặt lợi ích thiết thực
                của khách hàng lên đầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
