import {getProductDetail, getProductsByCategory} from '@/sanity/lib/api'
import ProductDetailClient from './ProductDetailClient'
import {notFound} from 'next/navigation'

export default async function ProductDetail({
  params,
}: {
  params: Promise<{category: string; slug: string}>
}) {
  const {slug, category} = await params

  const [product, relatedProducts] = await Promise.all([
    getProductDetail(slug),
    getProductsByCategory(category),
  ])

  if (!product) {
    notFound()
  }

  const otherProducts = relatedProducts.filter((p: {slug: string}) => p.slug !== slug)

  console.log('Product Detail:', product, 'Related Products:', relatedProducts)

  return <ProductDetailClient product={product} otherProducts={otherProducts} />
}
