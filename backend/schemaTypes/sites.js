export default {
  name: 'sites',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
}
