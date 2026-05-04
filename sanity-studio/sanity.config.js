import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'The Sensorium',

  projectId: 'jvlq6kos',
  dataset: 'the_sensorium_school',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
