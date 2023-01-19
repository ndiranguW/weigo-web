export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(selection: { title: any; media: any }) {
      return {
        title: selection.title,
        media: selection.media,
      }
    },
  },
}
