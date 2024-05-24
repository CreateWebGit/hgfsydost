import { Block } from 'payload/types'
import type { Field } from 'payload/types'

export const Styrelsemedlem: Block = {
  slug: 'content',
  labels: {
    singular: 'Styrelsemedlem',
    plural: 'Styrelsemedlemar',
  },
  fields: [
    {
      name: 'blockName',
      label: 'Namn',
      type: 'text',
    },
    {
      name: 'uppdrag',
      label: 'Uppdrag',
      type: 'select',
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: 'Ledamot',
          value: 'Ledamot',
        },
        {
          label: 'Ordförande',
          value: 'Ordförande',
        },
        {
          label: 'Remissansvarig',
          value: 'Remissansvarig',
        },
        {
          label: 'Eventbilen',
          value: 'Eventbilen',
        },
        {
          label: 'Bildningsansvarig',
          value: 'Bildningsansvarig',
        },
        {
          label: 'Lokal utveckling',
          value: 'lokal utveckling',
        },
        {
          label: 'Bostadspolitik',
          value: 'bostadspolitik',
        },
        {
          label: 'Ekonomiansvarig',
          value: 'Ekonomiansvarig',
        },
        {
          label: 'Anställd',
          value: 'Anställd',
        },
        {
          label: 'Regionkontoret',
          value: 'Regionkontoret',
        },
        {
          label: 'Revisor',
          value: 'Revisor',
        },
        {
          label: 'Revisorsersättare',
          value: 'Revisorsersattare',
        },
      ],
    },
    {
      name: 'epost',
      type: 'email',
      label: 'Epost Address',
      required: true,
    },
    {
      name: 'phone',
      label: 'Telefon',
      type: 'text',
    },
    {
      name: 'image', // required
      label: 'Bild',
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      name: 'beskrivning',
      label: 'Beskrivning av styrelsemedlem',
      type: 'textarea',
    },
  ],
}

export default Styrelsemedlem
