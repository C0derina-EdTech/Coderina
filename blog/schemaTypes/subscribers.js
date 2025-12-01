import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscribers',
  title: 'Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the subscriber (optional)',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('A valid email address is required'),
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'name',
    },
  },
})
