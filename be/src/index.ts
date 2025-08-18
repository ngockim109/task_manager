import express, { type Express, type Request, type Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './app/routes/index.ts'
import { errorHandler } from './app/middleware/error.middleware.ts'

dotenv.config()
const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(errorHandler)
