import type { CollectionConfig } from 'payload/types'
import { buildConfig } from 'payload/config'

export const Media: CollectionConfig = {
  slug: 'media',

  upload: {
    staticDir: 'media',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
