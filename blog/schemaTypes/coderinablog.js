import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'coderinablog',
  title: 'Coderina Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({name: 'twitter', title: 'Twitter', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
        defineField({name: 'youtube', title: 'YouTube', type: 'url'}),
        defineField({name: 'facebook', title: 'Facebook', type: 'url'}),
        defineField({name: 'linkedin', title: 'Linkedin', type: 'url'}),
      ],
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'email', title: 'Email', type: 'string'}),
            defineField({name: 'website', title: 'Website (optional)', type: 'url'}),
            defineField({name: 'comment', title: 'Comment', type: 'text'}),
            defineField({name: 'createdAt', title: 'Comment Date', type: 'datetime'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Championship', value: 'championship'},
              {title: 'Case Study', value: 'case-study'},
              {title: 'General', value: 'general'},
              {title: 'Tech', value: 'tech'},
            ],
          },
        },
      ],
    }),
  ],
})
