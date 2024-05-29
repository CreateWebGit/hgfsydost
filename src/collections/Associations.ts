//import Description from '@/app/components/Description'
//import Title from '@/app/components/Title'
import { CollectionConfig } from 'payload/types'
//import { QuestionRowLabel } from '@/app/(payload)/components/QuestionRowLabel'

export const Associations: CollectionConfig = {
  slug: 'associations',
  labels: {
    singular: 'Lokal förening',
    plural: 'Lokala föreningar',
  },

  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Föreningens namn',
      type: 'text',
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'tabOne',
          label: 'Almän info',
          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'isActive',
              label: 'Är föreningen aktiv?',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'stadsdel',
                  label: 'Stadsdel',
                  type: 'select',
                  admin: {
                    width: '33%',
                  },
                  hasMany: false,
                  options: [
                    {
                      label: 'Johanneshov',
                      value: 'Johanneshov',
                    },
                    {
                      label: 'Enskede',
                      value: 'Enskede',
                    },
                    {
                      label: 'Bagarmossen',
                      value: 'Bagarmossen',
                    },
                    {
                      label: 'Farsta',
                      value: 'Farsta',
                    },
                    {
                      label: 'Bandhagen',
                      value: 'Bandhagen',
                    },
                    {
                      label: 'Skarpnäck',
                      value: 'Skarpnäck',
                    },
                    {
                      label: 'Sköndal',
                      value: 'Sköndal',
                    },
                    {
                      label: 'Årsta',
                      value: 'Årsta',
                    },
                  ],
                },
                {
                  name: 'bostadsforetag',
                  label: 'Bostadsföretag',
                  type: 'select',
                  admin: {
                    width: '33%',
                  },
                  hasMany: false,
                  options: [
                    {
                      label: 'Svenska Bostäder',
                      value: 'Svenska Bostäder',
                    },
                    {
                      label: 'Familje Bostäder',
                      value: 'Familje Bostäder',
                    },
                    {
                      label: 'Stockholms Hem',
                      value: 'Stockholms Hem',
                    },
                  ],
                },
                {
                  name: 'LH_nummer',
                  label: 'LH Nummer',
                  type: 'number',
                  admin: {
                    width: '33%',
                  },
                },
              ],
            },
          ],
        },

        {
          name: 'tabTwo',
          label: 'Adress & Kontakt',
          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'kontaktperson',
              label: 'Kontaktperson',
              type: 'text',

              /*
              admin: {
                components: {
                  beforeInput: [Description],
                },
              },
              */
            },
            {
              name: 'epost',
              label: 'E Post',
              type: 'text',
            },
            {
              name: 'telefon',
              label: 'Telefonnummer',
              type: 'text',

              /*
              admin: {
                components: {
                  afterInput: [Title],
                },
              },
              */
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'facebook',
                  label: 'Facebook',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'instagarm',
                  label: 'Instagram',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'streetadress',
              label: 'Gatuadress',
              type: 'text',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'postnr',
                  label: 'Postnummer',
                  type: 'text',
                  admin: {
                    width: '30%',
                  },
                },
                {
                  name: 'postort',
                  label: 'Postort',
                  type: 'text',
                  admin: {
                    width: '70%',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'tabTree',
          label: 'Bild & Beskrivning',
          description: 'En liten beskrivning',
          fields: [
            {
              name: 'foreningsbild',
              label: 'Bild',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'associationDescription',
              label: 'Beskrivning',
              type: 'textarea',
            },
          ],
        },
      ],
    },
  ],
}
