import express from 'express'
import 'express-async-errors'
import  { json } from 'body-parser'
import cookiesSession from 'cookie-session'

import { errorHandler, NotFoundError, currentUser } from '@alex-tickets/common'
import { createChargeRouter } from './routes/new'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
  cookiesSession({
    signed: false,
    secure: false
  })
)
app.use(currentUser)

app.use(createChargeRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }