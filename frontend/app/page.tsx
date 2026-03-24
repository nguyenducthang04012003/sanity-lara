import HomeClient from './HomeClient'
import {getNews, getProducts} from '@/sanity/lib/api'

export default async function HomePage() {
  const products = await getProducts()
  const news = await getNews()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productData = products.slice(0, 4).map((item: any) => ({
    id: item._id,
    category: item.category?.title || '',
    name: item.name,
    image: item.image,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newsData = news.slice(0, 3).map((item: any) => ({
    id: item._id,
    title: item.title,
    date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('vi-VN') : '',
    description: item.excerpt,
    image: item.thumbnail,
  }))

  return <HomeClient productData={productData} newsData={newsData} />
}
