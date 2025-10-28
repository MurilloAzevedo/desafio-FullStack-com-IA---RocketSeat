import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider
} from 'fastify-type-provider-zod'
import {fastifySwagger} from '@fastify/swagger'
import {fastifyCors} from '@fastify/cors'
import ScalarApiReference from '@scalar/fastify-api-reference'

//min -> 31:00

const app = fastify()

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!')
})
