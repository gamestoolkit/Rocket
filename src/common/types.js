import { string, shape, arrayOf } from 'prop-types'

export const assetType = shape({
  id: string.isRequired,
  urlSlug: string.isRequired,

  featuredImageUrl: string.isRequired,
  thumbnailImageUrl: string.isRequired,
  imagesUrl: arrayOf(string).isRequired,

  author: string.isRequired,  
  title: string.isRequired,
  description: string,
  detailsMarkDown: string,

  categories: arrayOf(string).isRequired,
  gameEngines: arrayOf(string),
  platforms: arrayOf(string),

  source: string.isRequired,
  sourceUrl: string.isRequired,
  tags: arrayOf(string).isRequired,
  license: string.isRequired
})