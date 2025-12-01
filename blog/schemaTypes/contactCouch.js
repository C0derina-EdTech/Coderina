import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactCouch',
  title: 'Contact Couch',
  type: 'document',
  fields: [
    defineField({
      name: 'universityName',
      title: 'University Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('University Name is required'),
    }),
    defineField({
      name: 'teamName',
      title: 'Team Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Team Name is required'),
    }),
    defineField({
      name: 'universityEmail',
      title: 'University Email',
      type: 'string',
      validation: (Rule) => Rule.required().error('Email is required'),
    }),
    defineField({
      name: 'universityPhone',
      title: 'Phone Number',
      type: 'string',
      description: 'Optional phone number for follow-up contact',
    }),
   
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Country of the sender (optional)',
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
