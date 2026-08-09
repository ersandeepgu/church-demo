import { defineType, defineField } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Upcoming Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Date and Time',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location / Room',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Event Details',
      type: 'text',
    }),
  ],
})