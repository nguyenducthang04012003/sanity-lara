import {sanityFetch} from './live'
import {
  newsQuery,
  newsDetailQuery,
  categoriesQuery,
  productsQuery,
  productsByCategoryQuery,
  productDetailQuery,
  contactQuery,
  visualizerQuery,
} from './queries'

export async function getNews() {
  const {data} = await sanityFetch({query: newsQuery})
  return data
}

export async function getNewsDetail(slug: string) {
  const {data} = await sanityFetch({
    query: newsDetailQuery,
    params: {slug},
  })
  return data
}

export async function getCategories() {
  const {data} = await sanityFetch({query: categoriesQuery})
  return data
}

export async function getProducts() {
  const {data} = await sanityFetch({query: productsQuery})
  return data
}

export async function getProductsByCategory(categorySlug: string) {
  const {data} = await sanityFetch({
    query: productsByCategoryQuery,
    params: {categorySlug},
  })
  return data
}

export async function getProductDetail(slug: string) {
  const {data} = await sanityFetch({
    query: productDetailQuery,
    params: {slug},
  })
  return data
}

export async function getContactInfo() {
  const {data} = await sanityFetch({query: contactQuery})
  return data
}

export async function getVisualizerData() {
  const {data} = await sanityFetch({query: visualizerQuery})
  return data
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
