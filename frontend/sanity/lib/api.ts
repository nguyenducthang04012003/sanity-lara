import {client} from './client'
import {
  newsQuery,
  newsDetailQuery,
  categoriesQuery,
  productsQuery,
  productsByCategoryQuery,
  productDetailQuery,
  contactQuery,
} from './queries'

export async function getNews() {
  return await client.fetch(newsQuery)
}

export async function getNewsDetail(slug: string) {
  return await client.fetch(newsDetailQuery, {slug})
}

export async function getCategories() {
  return await client.fetch(categoriesQuery)
}

export async function getProducts() {
  return await client.fetch(productsQuery)
}

export async function getProductsByCategory(categorySlug: string) {
  return client.fetch(productsByCategoryQuery, {
    categorySlug: categorySlug,
  })
}

export async function getProductDetail(slug: string) {
  return client.fetch(productDetailQuery, {slug})
}

export async function getContactInfo() {
  return client.fetch(contactQuery)
}

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

/**
 * see https://www.sanity.io/docs/api-versioning for how versioning works
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-25'

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'
