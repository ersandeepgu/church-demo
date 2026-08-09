import { defineType, defineField } from 'sanity'

export const sermonType = defineType({
  name: 'sermon',
  title: 'Sermons & Preachings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker / Pastor Name',
      type: 'string',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video Link',
      type: 'url',
      description: 'Paste YouTube video URL here',
    }),
    defineField({
      name: 'date',
      title: 'Sermon Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Key Message / Summary',
      type: 'text',
    }),
  ],
})