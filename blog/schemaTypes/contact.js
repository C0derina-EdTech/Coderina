import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().error('Email is required'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Optional phone number for follow-up contact',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Optional website link',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Country of the sender (optional)',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().error('Message cannot be empty'),
    }),
    defineField({
     name: 'createdAt',
  title: 'Created At',
  type: 'datetime',
  readOnly: true,
  initialValue: () => new Date().toISOString(),
}),

  ],
})
