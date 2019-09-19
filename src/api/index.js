import { version } from '../../package.json'
import { Router } from 'express'
import computationRoutes from './computations/routes'
import workerRoutes from './workers/routes'
import taskDetailRoutes from './taskDetails/routes'

export default () => {
  let api = Router()

  // mount the facets resource
  api.use('/computations', computationRoutes)
  api.use('/workers', workerRoutes)
  api.use('/taskDetails/', taskDetailRoutes)

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
