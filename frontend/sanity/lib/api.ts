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
