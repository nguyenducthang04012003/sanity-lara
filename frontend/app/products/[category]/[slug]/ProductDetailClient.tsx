'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {FiDownload} from 'react-icons/fi'
import {PortableText} from '@portabletext/react'
import {PortableTextComponents} from '@portabletext/react'
import '../../../../styles/NewsDetail.css'
import '../../../../styles/Productsdetail.css'

type Block = {
  _key: string
  _type: string
  children: {
    _key: string
    text: string
  }[]
}

type Product = {
  _id: string
  name: string
  description: string
  image: string
  size: string
  color: string
  madein: string
  madeinflag: string
  slug: string
  content: Block[]
  category: {
    title: string
    slug: string
  }
}

export default function ProductDetailClient({
  product,
  otherProducts = [],
}: {
  product: Product
  otherProducts: Product[]
}) {
  const [index, setIndex] = useState(0)
  const visible = 4

  const next = () => {
    if (index + visible < otherProducts.length) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(otherProducts.length - visible)
    }
  }

  const components: PortableTextComponents = {
    types: {
      image: ({value}) => (
        <Image
          src={value.url}
          alt="product image"
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

  return (
    <div className="product-detail">
      {/* MAIN */}
      <div className="product-main">
        <p style={{fontSize: 22, fontWeight: 'bold', color: 'rgb(0 0 0 / 29%)'}}>
          {product.category.title}
        </p>
        <h2 style={{fontSize: 35, color: '#e3a54b', marginBottom: 15}}>{product.name}</h2>
        <div className="product-image">
          <Image
            src={product.image || '/images/no-image.jpeg'}
            alt={product.name}
            width={500}
            height={400}
            className="img-product-detail"
          />
          <a
            href={`/api/download?url=${encodeURIComponent(product.image)}`}
            className="download-btn"
          >
            Download texture
            <FiDownload />
          </a>
        </div>

        <div className="product-in4">
          <div className="productFlag">
            <Image
              src={product.madeinflag || '/images/no-image.jpeg'}
              alt={product.madein}
              width={500}
              height={400}
            />
          </div>
          <div className="product-info">
            <p style={{fontSize: 20, fontWeight: 'bold', color: 'rgb(0 0 0 / 29%)'}}>
              {product.category.title}
            </p>
            <h1 style={{fontSize: 20, fontWeight: 'bold'}}>{product.name}</h1>

            {product.size && (
              <p>
                <b>Kích thước:</b> {product.size}
              </p>
            )}
            {product.color && (
              <p>
                <b>Màu sắc:</b> {product.color}
              </p>
            )}
            {product.madein && (
              <p>
                <b>Xuất xứ:</b> {product.madein}
              </p>
            )}
          </div>
        </div>
        {product.content?.length > 0 && (
          <div className="product-content">
            <PortableText value={product.content} components={components} />
          </div>
        )}
      </div>

      {/* RELATED */}
      <div className="newsother">
        <div className="otherHeader">
          <h2>Sản phẩm liên quan</h2>

          {otherProducts?.length > visible && (
            <div className="arrow">
              <button onClick={prev}>‹</button>
              <button onClick={next}>›</button>
            </div>
          )}
        </div>

        <div className="otherGrid">
          {otherProducts.slice(index, index + visible).map((item) => (
            <div key={item._id} className="otherCard">
              <div className="news-image">
                <Image
                  src={item.image || '/images/no-image.jpeg'}
                  alt={item.name}
                  width={400}
                  height={250}
                />
              </div>

              <Link href={`/products/${item.category.slug}/${item.slug}`}>
                <h3 className="news-title">{item.name}</h3>
              </Link>

              {/* nếu muốn thêm mô tả */}
              <p className="news-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
