export default {
    name: 'pics',
    title: 'Gallary',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
    ],
  }