export default {
  name: 'sites',
  title: 'Places',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'validity',
      title: 'Validity',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'string',
    },
    {
      name: 'inclusion',
      title: 'Inclusion',
      type: 'text',
    },
    {
      name: 'exclusion',
      title: 'Exclusion',
      type: 'text',
    },
    // {
    //   name: 'trip',
    //   title: 'Trip',
    //   type: 'text',
    // }
  ],
}
