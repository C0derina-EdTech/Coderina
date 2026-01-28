import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siwesApplication',
  title: 'SIWES Application',
  type: 'document',
  fields: [
    // Personal Information
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Residential Address',
      type: 'text',
    }),
    defineField({
      name: 'state',
      title: 'State of Residence',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),

    // Academic Information
    defineField({
      name: 'institution',
      title: 'Institution Name',
      type: 'string',
    }),
    defineField({
      name: 'course',
      title: 'Course of Study',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Current Level',
      type: 'string',
    }),
    defineField({
      name: 'matricNumber',
      title: 'Matriculation Number',
      type: 'string',
    }),

    // Internship Details
    defineField({
      name: 'siwesDuration',
      title: 'SIWES Duration',
      type: 'string',
      
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'department',
      title: 'Preferred Department',
      type: 'string',
    }),

    // Skills & Motivation
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'string',
    }),
    defineField({
      name: 'experience',
      title: 'Previous Experience',
      type: 'text',
    }),
    defineField({
      name: 'whyCoderina',
      title: 'Why Coderina?',
      type: 'text',
    }),

   // Documents (Cloudinary)
defineField({
  name: 'cv',
  title: 'Curriculum Vitae (CV)',
  type: 'object',
  fields: [
    { name: 'url', title: 'File URL', type: 'url' },
    { name: 'public_id', title: 'Cloudinary Public ID', type: 'string' },
  ],
}),

defineField({
  name: 'siwesLetter',
  title: 'SIWES Letter',
  type: 'object',
  fields: [
    { name: 'url', title: 'File URL', type: 'url' },
    { name: 'public_id', title: 'Cloudinary Public ID', type: 'string' },
  ],
}),

defineField({
  name: 'studentId',
  title: 'Student ID Card',
  type: 'object',
  fields: [
    { name: 'url', title: 'Image URL', type: 'url' },
    { name: 'public_id', title: 'Cloudinary Public ID', type: 'string' },
  ],
}),

defineField({
  name: 'headshot',
  title: 'Professional Headshot',
  type: 'object',
  fields: [
    { name: 'url', title: 'Image URL', type: 'url' },
    { name: 'public_id', title: 'Cloudinary Public ID', type: 'string' },
  ],
}),


    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
  ],
})
