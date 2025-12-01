import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'coderinaevents',
  title: 'Coderina Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

   

    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),

    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
      description: 'Example: 9:00 AM - 12:00 PM',
    }),

    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
      description: "Physical location or 'Online'.",
    }),

    defineField({
      name: 'isOnline',
      title: 'Is this an Online Event?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
  name: 'status',
  title: 'Event Status',
  type: 'string',
  initialValue: 'upcoming',
  options: {
    list: [
      { title: 'Upcoming', value: 'upcoming' },
      { title: 'Ongoing', value: 'ongoing' },
      { title: 'Postponed', value: 'postponed' },
      { title: 'On Hold', value: 'on-hold' },
      { title: 'Completed', value: 'completed' },
      { title: 'Cancelled', value: 'cancelled' },
    ],
    layout: 'radio',
  },
}),


    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Brief details about the event.',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Training', value: 'training'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Competition', value: 'competition'},
          {title: 'STEM Program', value: 'stem-program'},
          {title: 'Webinar', value: 'webinar'},
        ],
      },
    }),

    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      description: 'Optional: link to register for the event.',
    }),

  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
     
    },
    prepare({title, date, media, isOnline}) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        : 'No Date'

      return {
        title,
        subtitle: `${formattedDate} • ${isOnline ? 'Online' : 'Onsite'}`,
        media,
      }
    },
  },
})
