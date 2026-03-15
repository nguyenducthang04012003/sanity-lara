'use client'

import Image from 'next/image'
import '../../styles/HomePage.css'
import Link from 'next/link'
import {useState} from 'react'

type Category = {
  _id: string
  title: string
  slug: string
}

type Product = {
  _id: string
  name: string
  image: string
  description: string
  category: {
    _id: string
    title: string
    slug: string
  }
}

export default function ProductsClient({
  categoriesData,
  productsData,
  categoryTitle,
}: {
  categoriesData: Category[]
  productsData: Product[]
  categoryTitle?: string
}) {
  const [pages, setPages] = useState<{[key: string]: number}>({})

  const itemsPerPage = 8

  const changePage = (slug: string, page: number) => {
    setPages((prev) => ({
      ...prev,
      [slug]: page,
    }))
  }

  return (
    <div className="home-page">
      {/* HERO */}
      <div className="hero">
        <Image src="/images/backgroundProduct.jpg" alt="background" width={1600} height={600} />

        <div className="content">
          <h1>Sản phẩm {categoryTitle}</h1>
          <p style={{fontSize: 18}}>Sáng không gian, sang đẳng cấp</p>
        </div>
      </div>

      {/* CATEGORY LIST */}
      {categoriesData.map((category) => {
        const page = pages[category.slug] || 1

        const categoryProducts = productsData.filter((p) => p.category?.slug === category.slug)

        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        const currentProducts = categoryProducts.slice(startIndex, endIndex)

        const totalPages = Math.ceil(categoryProducts.length / itemsPerPage)

        return (
          <div className="listNews" key={category._id}>
            <h2 className="title">{category.title}</h2>

            <div className="products-grid">
              {currentProducts.map((product) => (
                <div className="news-card" key={product._id}>
                  <div className="news-image">
                    <Image
                      src={product.image || '/images/kitchen.png'}
                      alt={product.name}
                      width={400}
                      height={250}
                    />
                  </div>

                  <h3 className="news-title">{product.name}</h3>

                  <p className="news-desc">{product.description}</p>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({length: totalPages}).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => changePage(category.slug, i + 1)}
                    className={page === i + 1 ? 'active' : ''}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
