import {getNewsDetail, getNews} from '@/sanity/lib/api'
import NewsDetailClient from './NewsDetailClient'

export default async function NewsDetail({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params

  // bài viết hiện tại
  const news = await getNewsDetail(slug)
  // console.log('news', news)

  // tất cả tin
  const newsData = await getNews()

  // lọc bỏ bài đang xem
  const otherNews = newsData.filter((item: {slug: {current: string}}) => item.slug.current !== slug)

  return <NewsDetailClient news={news} otherNews={otherNews} />
}
