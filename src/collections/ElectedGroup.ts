import { CollectionConfig } from 'payload/types'
//import { Dinner } from "../blocks/Dinner";
import { Styrelsemedlem } from '../blocks/Styrelsemedlem'
export const ElectedGroup: CollectionConfig = {
  slug: 'electedgroup',
  access: {
    read: ({ req: { user } }) => true,
  },
  labels: {
    singular: 'Styrelsegrupp',
    plural: 'Styrelsegrupper',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Gruppens namn',
      type: 'text',
    },
    {
      name: 'styrelsemedlemar',
      label: 'Gruppens styrelsemedlemar',
      labels: {
        singular: 'Styrelsemedlem',
        plural: 'Styrelsemedlemar',
      },
      type: 'blocks',
      blocks: [Styrelsemedlem],
    },
  ],
}
