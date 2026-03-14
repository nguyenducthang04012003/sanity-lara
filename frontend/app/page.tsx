'use client'

import Image from 'next/image'
import '../styles/HomePage.css'

const HomePage = () => {
  type Product = {
    id: number
    category: string
    name: string
    image: string
  }

  type News = {
    id: number
    title: string
    date: string
    description: string
    image: string
  }

  const productData: Product[] = [
    {
      id: 1,
      category: 'Acrylic',
      name: 'LV 24 – STRIPED',
      image: '/images/img_product_homepage1.jpg',
    },
    {
      id: 2,
      category: 'Acrylic',
      name: 'LV 155 – RED VEINS',
      image: '/images/img_product_homepage2.jpg',
    },
    {
      id: 3,
      category: 'Acrylic',
      name: 'LVH 75 – GREY',
      image: '/images/img_product_homepage3.jpg',
    },
    {
      id: 4,
      category: 'Acrylic',
      name: 'LVH 83 – BLUE',
      image: '/images/img_product_homepage4.jpg',
    },
  ]

  const newsData: News[] = [
    {
      id: 1,
      title: 'KHÔNG GIAN PHÒNG NGỦ HIỆN ĐẠI VỚI CÁNH ACRYLIC',
      date: '27/09/2025',
      description:
        'Vì sao nên chọn cánh Acrylic cho phòng ngủ hiện đại? Phòng ngủ không chỉ là nơi nghỉ ngơi mà còn là không gian thể hiện phong cách sống của gia chủ.',
      image: '/images/catalog1.jpg',
    },
    {
      id: 2,
      title: 'CÁNH ACRYLIC LIVAS VINA – ĐỒNG HÀNH TRONG TỪNG KHÔNG GIAN',
      date: '24/09/2025',
      description:
        'Vì sao cánh Acrylic là lựa chọn tối ưu cho nội thất hiện đại? Trong xu hướng thiết kế nội thất ngày nay, sự kết hợp giữa thẩm mỹ và độ bền luôn được ưu tiên.',
      image: '/images/catalog2.jpg',
    },
    {
      id: 3,
      title: 'VÌ SAO CÁNH ACRYLIC ĐƯỢC ƯA CHUỘNG TRONG CÁC CĂN HỘ CAO CẤP?',
      date: '16/09/2025',
      description:
        'Trong thiết kế nội thất hiện đại, đặc biệt là các căn hộ cao cấp, cánh Acrylic ngày càng trở thành lựa chọn ưu tiên.',
      image: '/images/catalog2.jpg',
    },
  ]

  return (
    <div className="home-page">
      <div className="hero">
        <Image src="/images/livas1.jpg" alt="Livas" width={300} height={200} />
        <div className="content">
          <h1>LARA ACRYLIC</h1>
          <p style={{fontSize: 21}}>
            Định hình không gian, tô điểm phong cách cùng vật liệu Acrylic
          </p>
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Giới thiệu về Lara</h1>
        <p style={{fontSize: 18, marginBottom: 0}}>
          Công ty TNHH LIVAS VINA là doanh nghiệp hoạt động trong lĩnh vực gia công cánh Acrylic no
          line với mục tiêu mang đến cho khách hàng những công trình như ý, những không gian sống lý
          tưởng. Trong hơn 7 năm hoạt động, Livas Vina đã được tin tưởng và thực hiền nhiều dự án
          với các đối tác lớn nhỏ như XHome, V6 Design, Halam Furniture,…
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
        <h1 className="title">Sản phẩm tiêu biểu</h1>

        <div className="lightproduct">
          {productData.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="product-img"
              />

              <p
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#0000005a',
                  marginBottom: 0,
                }}
              >
                {item.category}
              </p>

              <p className="nameproduct">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Danh mục loại sản phẩm</h1>

        <div className="catalog-card">
          <Image
            src="/images/catalog1.jpg"
            alt="danh muc 1"
            width={300}
            height={200}
            className="catalog-img"
          />

          <div className="catalog">
            <h3 className="catalog-title">Acrylic</h3>

            <p className="catalog-desc">
              Vật liệu nhiệt dẻo cao cấp, nổi bật với độ bóng gương, trọng lượng nhẹ, độ bền cao và
              khả năng chống tia UV, được tinh chế từ dầu mỏ
            </p>
          </div>
        </div>

        <div className="catalog-card">
          <Image
            src="/images/catalog2.jpg"
            alt="danh muc 2"
            width={300}
            height={200}
            className="catalog-img"
          />

          <div className="catalog">
            <h3 className="catalog-title">Acrylic - Chống trầy xước</h3>

            <p className="catalog-desc">
              loại vật liệu nhựa tổng hợp cao cấp, được phủ lớp bề mặt cứng chuyên dụng trên cốt gỗ,
              có khả năng chịu xước, va đập cao hơn hẳn
            </p>
          </div>
        </div>
      </div>

      <div className="listNews">
        <h2 className="title" style={{marginTop: 0}}>
          Danh sách tin tức
        </h2>

        <div className="news-grid">
          {newsData.map((item) => (
            <div className="news-card" key={item.id}>
              <div className="news-image">
                <Image src={item.image} alt={item.title} width={400} height={250} />
              </div>

              <h3 className="news-title">{item.title}</h3>

              <p className="news-date">{item.date}</p>

              <p className="news-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
