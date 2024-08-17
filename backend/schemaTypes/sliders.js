export default {
    name: 'sliders',
    title: 'Sliders',
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
      {
        title: 'Description',
        name: 'description',
        type: 'text',
      },
    ],
  }