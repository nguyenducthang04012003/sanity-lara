'use client'

import Image from 'next/image'
import Link from 'next/link'
import {FaLongArrowAltRight} from 'react-icons/fa'
import '../styles/HomePage.css'

type Product = {
  id: string
  category: string
  name: string
  image: string
}

type News = {
  id: string
  title: string
  date: string
  description: string
  image: string
}

export default function HomeClient({
  productData,
  newsData,
}: {
  productData: Product[]
  newsData: News[]
}) {
  return (
    <div className="home-page">
      <div className="hero">
        <Image
          src="/images/pageHome.jpg"
          alt="Livas"
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{objectFit: 'cover'}}
        />
        <div className="content">
          <h1>LARA ACRYLIC</h1>
          <p style={{fontSize: 21}}>
            Định hình không gian, tô điểm phong cách cùng vật liệu Acrylic
          </p>
        </div>
      </div>

      <div className="introduce">
        <h1 className="title">Giới thiệu về Lara</h1>
        <p style={{fontSize: 18, marginBottom: 10}}>
          Công ty TNHH SX và KD TM Hòa Thịnh (Thương hiệu LARA) là một trong những đơn vị sản xuất,
          phân phối và thi công vật liệu Acrylic chất lượng cao tại thị trường Việt Nam.
        </p>
        <p style={{fontSize: 18, marginBottom: 10}}>
          Sở hữu đội ngũ chuyên gia, kỹ sư giàu kinh nghiệm cùng dây chuyền sản xuất hiện đại đạt
          tiêu chuẩn Châu Âu, LARA cam kết mang đến những sản phẩm hoàn thiện tốt nhất cho không
          gian nội thất.
        </p>
        <Link href="/introduce" className="btn-more">
          Xem thêm{' '}
          <span className="arrow">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>

      <div className="introduce">
        <div className="title-new-home">
          <h1 className="title">Sản phẩm tiêu biểu</h1>
          <Link href="/products" className="btn-more">
            Xem thêm{' '}
            <span className="arrow">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>

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

      <div className="introduce">
        <div className="title-new-home">
          <h2 className="title" style={{marginTop: 0}}>
            Danh sách tin tức
          </h2>
          <Link href="/news" className="btn-more">
            Xem thêm{' '}
            <span className="arrow">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>

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
