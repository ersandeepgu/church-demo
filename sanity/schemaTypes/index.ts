import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './service'
import { sermonType } from './sermon'
import { eventType } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, sermonType, eventType],
}