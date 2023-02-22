import exercise2 from './exercise-2.route'

export default function registreRoutes(app) {
  app.use('/exercise-2', exercise2)

  app.get('/healthCheck', (req, res) => {
    res.send({ status: 'ok' })
  })
}
