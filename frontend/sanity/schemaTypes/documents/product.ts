import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),

    defineField({
      name: 'madein',
      title: 'Made In',
      type: 'text',
    }),

    defineField({
      name: 'madeinflag',
      title: 'Made In (Flag)',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Ví dụ: 1220 x 2440 mm',
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Ví dụ: Trắng, Đen, Vân gỗ',
    }),
  ],
})
