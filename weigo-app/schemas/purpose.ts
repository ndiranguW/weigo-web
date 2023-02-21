import {schemaTypes} from '.'

export default {
  name: 'purpose',
  title: 'Built for?',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'For who.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Purpose',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Icon',
      type: 'image',
    },
  ],

  // schema
}
