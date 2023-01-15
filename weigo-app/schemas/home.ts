export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'welcome',
      type: 'text',
      title: 'Welcome Text ',
      options: {
        maxLength: 120,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descritpion',
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
