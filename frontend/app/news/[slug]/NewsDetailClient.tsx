'use client'

import {useEffect, useState} from 'react'
import {PortableText} from '@portabletext/react'
import {PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import '../../../styles/NewsDetail.css'

type Block = {
  _key: string
  _type: string
  children: {
    _key: string
    text: string
  }[]
}

type Gallery = {
  url: string
}

type News = {
  _id: string
  title: string
  publishedAt: string
  excerpt: string
  thumbnail: string
  author: string
  content: Block[]
  gallery: Gallery[]
}

type OtherNews = {
  _id: string
  title: string
  excerpt: string
  thumbnail: string
  publishedAt: string
  slug: {
    current: string
  }
}

export default function NewsDetailClient({
  news,
  otherNews = [],
}: {
  news: News
  otherNews?: OtherNews[]
}) {
  const [index, setIndex] = useState(0)

  const visible = 3

  const components: PortableTextComponents = {
    types: {
      image: ({value}) => (
        <Image
          src={value.url}
          alt="news image"
          width={900}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            margin: '30px 0',
            borderRadius: '6px',
          }}
        />
      ),
    },
  }

  const next = () => {
    if (index + visible < otherNews.length) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(otherNews.length - visible)
    }
  }

  useEffect(() => {
    if (otherNews.length <= 3) return

    const timer = setInterval(() => {
      next()
    }, 2000)

    return () => clearInterval(timer)
  }, [index])

  return (
    <div className="componentNews">
      <div className="news-detail">
        {/* TITLE */}
        <h1 className="newsTitle">{news.title}</h1>

        {/* DATE */}
        <p className="newsDate">{new Date(news.publishedAt).toLocaleDateString('vi-VN')}</p>

        {/* MAIN IMAGE */}
        <div className="newsThumbnail">
          <Image src={news.thumbnail} alt={news.title} width={1000} height={600} />
        </div>

        {/* EXCERPT */}
        <p className="newsExcerpt">{news.excerpt}</p>

        {/* CONTENT */}
        <div className="newsContent">
          <PortableText value={news.content} components={components} />
        </div>

        {/* GALLERY */}
        {news.gallery?.length > 0 && (
          <div className="newsGallery">
            {news.gallery.map((img, index) => (
              <Image
                key={index}
                src={img.url}
                alt="gallery"
                width={500}
                height={350}
                className="galleryImg"
              />
            ))}
          </div>
        )}

        {/* AUTHOR */}
        <div className="newsAuthor">
          <p>Tác giả: {news.author}</p>
        </div>
      </div>
      <div className="newsother">
        <div className="otherHeader">
          <h2>Danh sách tin khác</h2>

          {otherNews?.length > 3 && (
            <div className="arrow">
              <button onClick={prev}>‹</button>
              <button onClick={next}>›</button>
            </div>
          )}
        </div>

        <div className="otherGrid">
          {otherNews.slice(index, index + visible).map((item) => (
            <div key={item._id} className="otherCard">
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

              <p className="news-date">{new Date(item.publishedAt).toLocaleDateString('vi-VN')}</p>

              <p className="news-desc">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
