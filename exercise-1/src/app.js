import express from 'express'
import compression from 'compression'
import registreRoutes from './routes'

const app = express()

app.use(express.json())
app.use(compression())

registreRoutes(app)

export default app
