import app from './src/app'
import pckge from './package.json'

(async () => {
  const PORT = 4000

  app.listen(PORT, () => {
    console.info('')
    console.info('====================================================')
    console.info('')
    console.info(`${pckge.name} listening on port ${PORT}`)
    console.info('')
    console.info('====================================================')
    console.info('')
  })
})()
