export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'aboutus',
      type: 'text',
      title: 'About Us',
    },
    {
      name: 'mission',
      title: 'Company Mission',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'missionimage',
      title: 'Mission Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'vision',
      title: 'Company Vision',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'visionimage',
      title: 'Vision Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
