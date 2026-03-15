import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`)

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)

export const newsQuery = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  publishedAt,
  slug,
  "thumbnail": thumbnail.asset->url
}
`

export const newsDetailQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  author,
  publishedAt,
  seoTitle,
  seoDescription,

  "thumbnail": thumbnail.asset->url,

  content[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url
    }
  },

  "gallery": gallery[]{
    "url": asset->url
  }
}
`

export const categoriesQuery = `
*[_type == "category"] | order(title asc){
  _id,
  title,
  "slug": slug.current
}
`

export const productsQuery = `
*[_type == "product"]{
  _id,
  name,
  description,
  size,
  color,
  madein,
  "image": image.asset->url,
  "madeinflag": madeinflag.asset->url,
  category->{
    _id,
    title,
    "slug": slug.current
  }
}
`

export const productsByCategoryQuery = `
*[_type == "product" && category->slug.current == $categorySlug]{
  _id,
  name,
  description,
  size,
  color,
  "image": image.asset->url,
  "category": category->{
    title,
    "slug": slug.current
  }
}
`