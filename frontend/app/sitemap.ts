export const revalidate = 0

import {MetadataRoute} from 'next'
import {sanityFetch} from '@/sanity/lib/live'
import {sitemapData} from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = 'https://www.laraacrylic.com'

  const allPostsAndPages = await sanityFetch({
    query: sitemapData,
  })

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  if (allPostsAndPages?.data?.length) {
    for (const p of allPostsAndPages.data) {
      if (p._type === 'post') {
        sitemap.push({
          url: `${domain}/posts/${p.slug}`,
          lastModified: p._updatedAt || new Date(),
          changeFrequency: 'yearly',
          priority: 0.5,
        })
      }

      if (p._type === 'page') {
        sitemap.push({
          url: `${domain}/${p.slug}`,
          lastModified: p._updatedAt || new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        })
      }
    }
  }

  return sitemap
}
