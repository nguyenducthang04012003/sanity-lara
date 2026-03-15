import ProductsClient from '../ProductsClient'
import {client} from '@/sanity/lib/client'
import {getCategories, getProductsByCategory} from '@/sanity/lib/api'

type Category = {
  _id: string
  title: string
  slug: string
}

export default async function CategoryPage({params}: {params: Promise<{category: string}>}) {
  const {category} = await params

  const categories = await getCategories()
  const products = await getProductsByCategory(category)
  console.log('categories', categories, products)

  const currentCategory = categories.find((c: Category) => c.slug === category)

  const filteredCategories = categories.filter((c: Category) => c.slug === category)

  return (
    <ProductsClient
      categoriesData={filteredCategories}
      productsData={products}
      categoryTitle={currentCategory?.title}
    />
  )
}
