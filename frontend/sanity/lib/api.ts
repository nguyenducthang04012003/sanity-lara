import {client} from './client'
import {newsQuery, newsDetailQuery} from './queries'

export async function getNews() {
  return await client.fetch(newsQuery)
}

export async function getNewsDetail(slug: string) {
  return await client.fetch(newsDetailQuery, {slug})
}