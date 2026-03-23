import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',

  fields: [
    defineField({
      name: 'phone',
      title: 'Số điện thoại',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'facebook',
      title: 'Link Facebook',
      type: 'url',
    }),

    defineField({
      name: 'zalo',
      title: 'Link Zalo',
      type: 'url',
      description: 'Ví dụ: https://zalo.me/...',
    }),

    defineField({
      name: 'address',
      title: 'Địa chỉ',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),

    // 👇 Google Map embed
    defineField({
      name: 'mapEmbed',
      title: 'Google Map Embed (iframe)',
      type: 'text',
      rows: 4,
      description: 'Dán link iframe từ Google Maps vào đây',
    }),
  ],
})
