import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import logger from './src/logs/logger.js'
import routes from './src/routes/postRoute.js'
import { swaggerDocs } from './src/config/swagger/swagger.js'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(process.env.PORT, () => logger.info(
    `Connected to MongoDB and listening on port ${process.env.PORT}`,
  )))
  .catch(error => logger.error(error.message))

app.use('/posts', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
