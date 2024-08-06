import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'b59mxou6',
  dataset: 'production',
  apiVersion: '2024-05-26',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
