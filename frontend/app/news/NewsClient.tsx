'use client'

import Image from 'next/image'
import '../../styles/HomePage.css'
import {useState} from 'react'
import Link from 'next/link'

type News = {
  _id: string
  title: string
  publishedAt: string
  excerpt: string
  thumbnail: string
  slug: {
    current: string
  }
}

export default function NewsClient({newsData}: {newsData: News[]}) {
  const [page, setPage] = useState(1)

  const itemsPerPage = 6

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentNews = newsData.slice(startIndex, endIndex)

  const totalPages = Math.ceil(newsData.length / itemsPerPage)

  return (
    <div className="home-page">
      {/* HERO */}
      <div className="hero">
        <Image
          src="/images/newsbg.png"
          alt="Livas"
          fill
          quality={100}
          priority
          sizes="100vw"
          style={{objectFit: 'cover'}}
        />
        <div className="content">
          <h1>Tin tức</h1>
          <p style={{fontSize: 18}}>
            Tất tần tật về thế giới Acrylic – Từ vật liệu dẫn đầu xu hướng đến giải pháp tối ưu cho
            không gian sống hiện đại
          </p>
        </div>
      </div>

      {/* TIN NỔI BẬT */}
      <div className="introduce">
        <h2 className="title">Tin tức nổi bật</h2>

        {newsData[0] && (
          <div className="catalog-card-news">
            <Image
              src={newsData[0].thumbnail}
              alt={newsData[0].title}
              width={300}
              height={200}
              className="catalog-img"
            />

            <div className="catalog-news">
              <h3 className="catalog-title-news" style={{fontSize: 24}}>
                {newsData[0].title}
              </h3>

              <p className="catalog-date-news">
                {new Date(newsData[0].publishedAt).toLocaleDateString()}
              </p>

              <p className="catalog-desc-news">{newsData[0].excerpt}</p>
            </div>
          </div>
        )}
      </div>

      {/* LIST NEWS */}
      <div className="listNews">
        <h2 className="title" style={{marginTop: 0}}>
          Danh sách tin tức
        </h2>

        <div className="news-grid">
          {currentNews.map((item) => (
            <div className="news-card" key={item._id}>
              <div className="news-image">
                <Image
                  src={item.thumbnail || '/images/kitchen.png'}
                  alt={item.title}
                  width={400}
                  height={250}
                />
              </div>

              <Link href={`/news/${item.slug.current}`}>
                <h3 className="news-title">{item.title}</h3>
              </Link>

              <p className="news-date">{new Date(item.publishedAt).toLocaleDateString()}</p>

              <p className="news-desc">{item.excerpt}</p>
            </div>
          ))}
        </div>

        {/* PAGINATION */}

        <div className="pagination">
          {Array.from({length: totalPages}).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
