import NewsClient from './NewsClient'
import {getNews} from '@/sanity/lib/api'

export default async function News() {
  const newsData = await getNews()
  // console.log('newsData', newsData)
  return <NewsClient newsData={newsData} />
}
