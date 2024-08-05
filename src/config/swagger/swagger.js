import swaggerJsDoc from 'swagger-jsdoc'
import dotenv from 'dotenv'

dotenv.config()

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API documentation for Post management',
    },
    servers: [
      {
        url: process.env.SWAGGER_URL,
      },
    ],
  },
  apis: ['./src/config/swagger/swaggerDocs.js'],
}

export const swaggerDocs = swaggerJsDoc(swaggerOptions)
