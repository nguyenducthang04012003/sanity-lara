import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'visualizer',
  title: 'Visualizer',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Tên sản phẩm / Scene',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'baseImage',
      title: 'Ảnh màu gốc',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Ảnh tổng thể sản phẩm, chưa có màu tùy chỉnh',
    }),

    defineField({
      name: 'colorImage',
      title: 'Ảnh minh họa màu',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Ảnh bạn tự thiết kế để minh họa màu, vân, texture',
    }),

    defineField({
      name: 'colorName',
      title: 'Tên màu',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ví dụ: Màu trắng',
    }),

    defineField({
      name: 'size',
      title: 'Kích thước',
      type: 'string',
      description: 'Ví dụ: 200x180x60cm',
    }),
  ],
})
