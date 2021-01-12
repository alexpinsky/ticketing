import express from 'express'
import 'express-async-errors'
import  { json } from 'body-parser'
import cookiesSession from 'cookie-session'

import { errorHandler, NotFoundError } from '@alex-tickets/common'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
  cookiesSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }