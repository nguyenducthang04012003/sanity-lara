import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'News',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'excerpt',
      title: 'Short description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
    }),
  ],
})
  