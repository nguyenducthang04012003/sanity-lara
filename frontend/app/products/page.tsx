import ProductsClient from './ProductsClient'
import {getCategories, getProducts} from '@/sanity/lib/api'

export default async function ProductsPage() {
  const categoriesData = await getCategories()
  const productsData = await getProducts()
  console.log('categoriesData', categoriesData, productsData);

  return <ProductsClient categoriesData={categoriesData} productsData={productsData} />
}
