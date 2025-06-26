// schemas/instagramPost.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Instagram Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
