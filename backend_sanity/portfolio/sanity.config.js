import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'm5yzazod',
  dataset: 'portfolio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
